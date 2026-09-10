#!/usr/bin/env python3
"""Scan yiya Entity/Concept pages for dream gaps. No third-party deps."""

from __future__ import annotations

import argparse
import json
import re
import sys
from datetime import date, datetime, timedelta
from pathlib import Path

SKIP_NAMES = {
    "index.md",
    "log.md",
    "README.md",
    "AGENTS.md",
    "overview.md",
    "map.md",
}
BOOKMARK_HINTS = (
    "/bookmarks/",
    "/github.md",
    "/sites.md",
    "/docs.md",
    "/tools.md",
)


def repo_root() -> Path:
    return Path(__file__).resolve().parents[3]


def split_fm(raw: str) -> tuple[str, str]:
    if not raw.startswith("---"):
        return "", raw
    end = raw.find("\n---", 3)
    if end < 0:
        return "", raw
    return raw[3:end].strip(), raw[end + 4 :]


def fm_get(fm: str, key: str) -> str:
    m = re.search(rf"^{re.escape(key)}:\s*(.*)$", fm, re.M)
    if not m:
        return ""
    return m.group(1).strip().strip("\"'")


def parse_list(fm: str, key: str) -> list[str]:
    m = re.search(rf"^{re.escape(key)}:\s*$", fm, re.M)
    if not m:
        m2 = re.search(rf"^{re.escape(key)}:\s*\[(.*)\]\s*$", fm, re.M)
        if not m2:
            return []
        inner = m2.group(1).strip()
        if not inner:
            return []
        return [x.strip().strip("\"'") for x in inner.split(",") if x.strip()]
    items: list[str] = []
    for line in fm[m.end() :].splitlines():
        if re.match(r"^[A-Za-z0-9_]+:", line) and not line.startswith(" "):
            break
        mm = re.match(r"^\s*-\s+(.*)$", line)
        if mm:
            items.append(mm.group(1).strip().strip("\"'"))
    return items


def as_int(value: object, default: int) -> int:
    try:
        return int(value)  # type: ignore[arg-type]
    except (TypeError, ValueError):
        return default


def load_config(path: Path) -> dict:
    cfg = {
        "related_sparse": 1,
        "sources_thin": 1,
        "source_max_age_days": 21,
        "max_gaps": 8,
        "max_candidates": 12,
        "max_per_gap": 2,
        "agents_bonus": 0,
        "skip_stems": [],
        "skip_stem_prefixes": [],
    }
    if not path.is_file():
        return cfg
    text = path.read_text(encoding="utf-8")
    for key in (
        "related_sparse",
        "sources_thin",
        "source_max_age_days",
        "max_gaps",
        "max_candidates",
        "max_per_gap",
        "agents_bonus",
    ):
        m = re.search(rf"^{key}:\s*(\d+)\s*$", text, re.M)
        if m:
            cfg[key] = as_int(m.group(1), cfg[key])
    for list_key in ("skip_stems", "skip_stem_prefixes"):
        items: list[str] = []
        m = re.search(rf"^{list_key}:\s*$", text, re.M)
        if m:
            for line in text[m.end() :].splitlines():
                if re.match(r"^[A-Za-z0-9_]+:", line) and not line.startswith(
                    " ",
                ):
                    break
                mm = re.match(r"^\s*-\s+(\S+)", line)
                if mm:
                    items.append(mm.group(1).strip().strip("\"'"))
        cfg[list_key] = items
    return cfg


def resolve_from(from_file: Path, rel: str, root: Path) -> Path | None:
    rel = rel.strip().split("#")[0].split("?")[0].strip("<>")
    if not rel or rel.startswith(("http://", "https://")):
        return None
    parts = list(from_file.parent.parts)
    for seg in Path(rel).parts:
        if seg in (".", ""):
            continue
        if seg == "..":
            if parts:
                parts.pop()
        else:
            parts.append(seg)
    out = Path(*parts) if parts else Path(".")
    try:
        out.relative_to(root)
    except ValueError:
        return None
    return out


def source_kind(rel: str) -> str:
    sl = rel.replace("\\", "/").lower()
    if any(h in sl for h in BOOKMARK_HINTS):
        return "bookmark"
    if "/raw/articles/" in sl:
        return "article"
    if "/references/" in sl:
        return "reference"
    return "other"


def parse_iso_date(s: str) -> date | None:
    s = s.strip().strip("\"'")
    if not s:
        return None
    for fmt, n in (("%Y-%m-%d", 10), ("%Y-%m-%dT%H:%M:%S", 19)):
        try:
            return datetime.strptime(s[:n], fmt).date()
        except ValueError:
            continue
    m = re.match(r"(\d{4}-\d{2}-\d{2})", s)
    if m:
        try:
            return datetime.strptime(m.group(1), "%Y-%m-%d").date()
        except ValueError:
            return None
    return None


def raw_date(path: Path) -> date | None:
    if not path.is_file():
        return None
    fm, _ = split_fm(path.read_text(encoding="utf-8", errors="replace"))
    for key in ("ingested", "date"):
        d = parse_iso_date(fm_get(fm, key))
        if d:
            return d
    return None


def generated_at(fm: str) -> date | None:
    m = re.search(r"\bat:\s*([0-9T:\-Z.+]+)", fm)
    if m:
        return parse_iso_date(m.group(1))
    return None


def iter_wiki_pages(root: Path):
    for base in (root / "domains", root / "shared"):
        if not base.is_dir():
            continue
        for p in base.rglob("*.md"):
            if p.name in SKIP_NAMES:
                continue
            yield p


def collect_known_urls(root: Path) -> list[str]:
    urls: list[str] = []
    seen: set[str] = set()

    def add(u: str) -> None:
        u = u.strip().strip("\"'")
        if not u or u.startswith("local:"):
            return
        if u not in seen:
            seen.add(u)
            urls.append(u)

    articles = root / "raw" / "articles"
    if articles.is_dir():
        for p in articles.rglob("*.md"):
            if "_media" in p.parts:
                continue
            fm, _ = split_fm(p.read_text(encoding="utf-8", errors="replace"))
            add(fm_get(fm, "url"))
    bookmarks = root / "raw" / "bookmarks"
    if bookmarks.is_dir():
        for p in bookmarks.glob("*.md"):
            for line in p.read_text(encoding="utf-8", errors="replace").splitlines():
                if not line.startswith("|"):
                    continue
                cells = [c.strip() for c in line.strip("|").split("|")]
                if len(cells) < 2:
                    continue
                if cells[1].startswith("http"):
                    add(cells[1])
                elif cells[0].startswith("http"):
                    add(cells[0])
    return urls


def score_page(
    *,
    related_n: int,
    sources_n: int,
    bookmark_only: bool,
    sources_old: bool,
    incoming: int,
    typ: str,
    domain: str,
    related_sparse: int,
    sources_thin: int,
    agents_bonus: int,
) -> tuple[int, list[str]]:
    flags: list[str] = []
    score = 0
    if related_n <= related_sparse:
        score += 3
        flags.append("related_sparse")
    elif related_n <= related_sparse + 1:
        score += 1
        flags.append("related_thin")
    if sources_n == 0:
        score += 4
        flags.append("sources_empty")
    elif sources_n <= sources_thin:
        score += 1
        flags.append("sources_thin")
    if bookmark_only:
        score += 4
        flags.append("bookmark_only")
    if sources_old:
        score += 2
        flags.append("sources_old")
    if incoming == 0:
        score += 2
        flags.append("orphan")
    if typ == "Concept":
        score += 1
        flags.append("concept")
    if domain == "agents" and agents_bonus:
        score += agents_bonus
        flags.append("agents")
    return score, flags


def matches_domain(rec: dict, domain: str | None) -> bool:
    if not domain:
        return True
    if rec["domain"] == domain:
        return True
    if rec["path"].startswith(f"domains/{domain}/"):
        return True
    return domain == "shared" and rec["path"].startswith("shared/")


def scan(root: Path, cfg: dict, domain: str | None, limit: int) -> dict:
    skip = set(cfg.get("skip_stems") or [])
    skip_prefixes = tuple(cfg.get("skip_stem_prefixes") or [])
    cutoff = date.today() - timedelta(
        days=as_int(cfg["source_max_age_days"], 21),
    )
    pages: list[dict] = []
    incoming: dict[str, int] = {}
    records: list[dict] = []

    for path in iter_wiki_pages(root):
        text = path.read_text(encoding="utf-8", errors="replace")
        fm, _body = split_fm(text)
        typ = fm_get(fm, "type")
        if typ not in ("Entity", "Concept"):
            continue
        rel_path = path.relative_to(root).as_posix()
        gen = generated_at(fm)
        rec = {
            "path": rel_path,
            "stem": path.stem,
            "title": fm_get(fm, "title") or path.stem,
            "description": fm_get(fm, "description"),
            "type": typ,
            "domain": fm_get(fm, "domain") or "",
            "related": parse_list(fm, "related"),
            "sources": parse_list(fm, "sources"),
            "generated": gen.isoformat() if gen else "",
        }
        records.append(rec)
        for r in rec["related"]:
            incoming[r] = incoming.get(r, 0) + 1

    for rec in records:
        if rec["stem"] in skip or not matches_domain(rec, domain):
            continue
        if any(rec["stem"].startswith(p) for p in skip_prefixes):
            continue
        kinds = {source_kind(s) for s in rec["sources"]}
        bookmark_only = bool(rec["sources"]) and kinds <= {"bookmark"}
        newest: date | None = None
        for s in rec["sources"]:
            resolved = resolve_from(root / rec["path"], s, root)
            if resolved is None:
                continue
            d = raw_date(resolved)
            if d and (newest is None or d > newest):
                newest = d
        sources_old = bool(newest and newest < cutoff)
        inc = incoming.get(rec["stem"], 0)
        score, flags = score_page(
            related_n=len(rec["related"]),
            sources_n=len(rec["sources"]),
            bookmark_only=bookmark_only,
            sources_old=sources_old,
            incoming=inc,
            typ=rec["type"],
            domain=rec["domain"],
            related_sparse=as_int(cfg["related_sparse"], 1),
            sources_thin=as_int(cfg["sources_thin"], 1),
            agents_bonus=as_int(cfg.get("agents_bonus"), 0),
        )
        if not flags:
            continue
        pages.append(
            {
                "path": rec["path"],
                "title": rec["title"],
                "description": rec["description"],
                "type": rec["type"],
                "domain": rec["domain"],
                "related_n": len(rec["related"]),
                "sources_n": len(rec["sources"]),
                "newest_source": newest.isoformat() if newest else None,
                "backlinks": inc,
                "flags": flags,
                "score": score,
                "query": rec["title"],
            }
        )

    pages.sort(
        key=lambda p: (
            -p["score"],
            0 if p["type"] == "Concept" else 1,
            p["related_n"],
            p["sources_n"],
            p["path"],
        ),
    )
    if limit > 0:
        pages = pages[:limit]
    return {
        "generatedAt": datetime.now().isoformat(timespec="seconds"),
        "root": str(root),
        "config": {k: cfg[k] for k in cfg},
        "count": len(pages),
        "pages": pages,
    }


def to_md(data: dict) -> str:
    lines = [
        f"# dream gaps ({data['count']})  {data['generatedAt']}",
        "",
        "| score | flags | type | title | path | rel | src | in |",
        "|---:|---|---|---|---|---:|---:|---:|",
    ]
    for p in data["pages"]:
        flags = ",".join(p["flags"])
        lines.append(
            f"| {p['score']} | {flags} | {p['type']} | {p['title']} | `{p['path']}` "
            f"| {p['related_n']} | {p['sources_n']} | {p['backlinks']} |"
        )
    return "\n".join(lines) + "\n"


def main(argv: list[str] | None = None) -> int:
    root = repo_root()
    parser = argparse.ArgumentParser(description="Scan yiya wiki for dream gaps")
    parser.add_argument("--root", type=Path, default=root)
    parser.add_argument("--config", type=Path, default=None)
    parser.add_argument("--domain", default=None, help="agents | engineering | shared")
    parser.add_argument("--limit", type=int, default=None)
    parser.add_argument("--md", action="store_true")
    parser.add_argument("--known-urls", action="store_true")
    args = parser.parse_args(argv)
    root = args.root.resolve()
    if args.known_urls:
        for u in collect_known_urls(root):
            print(u)
        return 0
    cfg_path = args.config or (root / "config" / "dream.yaml")
    cfg = load_config(cfg_path)
    limit = args.limit if args.limit is not None else as_int(cfg["max_gaps"], 8)
    data = scan(root, cfg, args.domain, limit)
    if args.md:
        sys.stdout.write(to_md(data))
    else:
        json.dump(data, sys.stdout, ensure_ascii=False, indent=2)
        sys.stdout.write("\n")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
