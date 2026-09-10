#!/usr/bin/env python3
"""Pull subscribed explore sources (HN). No third-party deps."""

from __future__ import annotations

import argparse
import http.client
import json
import re
import ssl
import sys
from datetime import datetime
from pathlib import Path
from urllib.parse import urlparse

HN_TOP = "https://hacker-news.firebaseio.com/v0/topstories.json"
HN_ITEM = "https://hacker-news.firebaseio.com/v0/item/{id}.json"
CTX = ssl.create_default_context()


def repo_root() -> Path:
    return Path(__file__).resolve().parents[3]


def as_int(value: object, default: int) -> int:
    try:
        return int(value)  # type: ignore[arg-type]
    except (TypeError, ValueError):
        return default


def load_config(path: Path) -> dict:
    cfg = {
        "max_candidates": 12,
        "hn_top": 50,
        "hn_min_score": 30,
    }
    if not path.is_file():
        return cfg
    text = path.read_text(encoding="utf-8")
    for key in ("max_candidates", "hn_top", "hn_min_score"):
        m = re.search(rf"^{key}:\s*(\d+)\s*$", text, re.M)
        if m:
            cfg[key] = as_int(m.group(1), cfg[key])
    return cfg


def http_json(url: str, timeout: int = 20) -> object:
    parsed = urlparse(url)
    if parsed.scheme != "https" or not parsed.hostname:
        raise ValueError(f"blocked scheme: {url}")
    path = parsed.path or "/"
    if parsed.query:
        path = f"{path}?{parsed.query}"
    conn = http.client.HTTPSConnection(
        parsed.hostname,
        parsed.port or 443,
        timeout=timeout,
        context=CTX,
    )
    try:
        conn.request("GET", path, headers={"User-Agent": "yiya-explore/1"})
        resp = conn.getresponse()
        raw = resp.read().decode("utf-8")
    finally:
        conn.close()
    try:
        return json.loads(raw)
    except json.JSONDecodeError:
        return None


def fetch_hn(top_n: int, min_score: int) -> list[dict]:
    ids = http_json(HN_TOP)
    if not isinstance(ids, list):
        return []
    out: list[dict] = []
    for sid in ids[:top_n]:
        try:
            item = http_json(HN_ITEM.format(id=as_int(sid, 0)))
        except (OSError, TimeoutError, ValueError):
            continue
        if not isinstance(item, dict):
            continue
        url = item.get("url")
        title = item.get("title")
        if not isinstance(url, str) or not url.startswith("https://"):
            continue
        if not isinstance(title, str) or not title.strip():
            continue
        score = as_int(item.get("score"), 0)
        if score < min_score:
            continue
        iid = as_int(item.get("id"), 0)
        out.append(
            {
                "id": iid,
                "title": title.strip(),
                "url": url,
                "hn": f"https://news.ycombinator.com/item?id={iid}",
                "score": score,
                "source": "hacker-news",
            }
        )
    out.sort(key=lambda r: -r["score"])
    return out


def main(argv: list[str] | None = None) -> int:
    root = repo_root()
    parser = argparse.ArgumentParser(description="Fetch explore source items")
    parser.add_argument("--root", type=Path, default=root)
    parser.add_argument("--config", type=Path, default=None)
    parser.add_argument("--md", action="store_true")
    args = parser.parse_args(argv)
    root = args.root.resolve()
    cfg_path = args.config or (root / "config" / "explore.yaml")
    cfg = load_config(cfg_path)
    try:
        items = fetch_hn(as_int(cfg["hn_top"], 50), as_int(cfg["hn_min_score"], 30))
    except (OSError, TimeoutError, ValueError) as exc:
        print(f"hn fetch failed: {exc}", file=sys.stderr)
        items = []
    data = {
        "generatedAt": datetime.now().isoformat(timespec="seconds"),
        "count": len(items),
        "items": items,
    }
    if args.md:
        lines = [
            f"# explore hn ({data['count']})  {data['generatedAt']}",
            "",
            "| score | title | url |",
            "|---:|---|---|",
        ]
        for it in items:
            title = it["title"].replace("|", "\\|")
            lines.append(f"| {it['score']} | {title} | {it['url']} |")
        sys.stdout.write("\n".join(lines) + "\n")
    else:
        json.dump(data, sys.stdout, ensure_ascii=False, indent=2)
        sys.stdout.write("\n")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
