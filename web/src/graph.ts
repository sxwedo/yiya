import type { CatalogPage } from "./types";

export type GraphNode = {
  path: string;
  title: string;
  description: string;
  type: string;
  domain: string;
};

export type GraphEdge = {
  source: string;
  target: string;
};

export function buildTermGraph(pages: CatalogPage[]): {
  nodes: GraphNode[];
  edges: GraphEdge[];
} {
  const nodes = pages.map((p) => ({
    path: p.path,
    title: p.title,
    description: p.description,
    type: p.type,
    domain: p.domain,
  }));
  const index = new Set(nodes.map((n) => n.path));
  const seen = new Set<string>();
  const edges: GraphEdge[] = [];
  for (const page of pages) {
    const targets = [...(page.related ?? []), ...(page.links ?? [])];
    for (const dest of targets) {
      if (!index.has(dest) || dest === page.path) continue;
      const [a, b] = page.path < dest ? [page.path, dest] : [dest, page.path];
      const key = `${a}::${b}`;
      if (seen.has(key)) continue;
      seen.add(key);
      edges.push({ source: a, target: b });
    }
  }
  return { nodes, edges };
}

export function layoutGraph(
  nodes: GraphNode[],
  edges: GraphEdge[],
): Map<string, [number, number, number]> {
  const n = nodes.length;
  const pos: [number, number, number][] = nodes.map((_, i) => {
    if (n === 1) return [0, 0, 0];
    const phi = Math.acos(1 - (2 * (i + 0.5)) / n);
    const theta = Math.PI * (1 + Math.sqrt(5)) * i;
    const r = Math.max(6, Math.cbrt(n) * 2.4);
    return [
      r * Math.sin(phi) * Math.cos(theta),
      r * Math.cos(phi),
      r * Math.sin(phi) * Math.sin(theta),
    ];
  });
  const idIndex = new Map(nodes.map((node, i) => [node.path, i]));
  const adj: [number, number][] = [];
  for (const edge of edges) {
    const i = idIndex.get(edge.source);
    const j = idIndex.get(edge.target);
    if (i == null || j == null) continue;
    adj.push([i, j]);
  }

  const vel = nodes.map(() => [0, 0, 0]);
  const repulsion = 18;
  const rest = 2.8;
  const spring = 0.035;
  const damp = 0.72;
  const pull = 0.012;
  const steps = n > 220 ? 50 : 80;

  for (let step = 0; step < steps; step++) {
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const dx = pos[i][0] - pos[j][0];
        const dy = pos[i][1] - pos[j][1];
        const dz = pos[i][2] - pos[j][2];
        const d2 = dx * dx + dy * dy + dz * dz + 0.08;
        const f = repulsion / d2;
        const inv = 1 / Math.sqrt(d2);
        const fx = dx * inv * f;
        const fy = dy * inv * f;
        const fz = dz * inv * f;
        vel[i][0] += fx;
        vel[i][1] += fy;
        vel[i][2] += fz;
        vel[j][0] -= fx;
        vel[j][1] -= fy;
        vel[j][2] -= fz;
      }
    }
    for (const [i, j] of adj) {
      const dx = pos[j][0] - pos[i][0];
      const dy = pos[j][1] - pos[i][1];
      const dz = pos[j][2] - pos[i][2];
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz) + 0.001;
      const t = ((dist - rest) / dist) * spring;
      vel[i][0] += dx * t;
      vel[i][1] += dy * t;
      vel[i][2] += dz * t;
      vel[j][0] -= dx * t;
      vel[j][1] -= dy * t;
      vel[j][2] -= dz * t;
    }
    for (let i = 0; i < n; i++) {
      vel[i][0] = (vel[i][0] - pos[i][0] * pull) * damp;
      vel[i][1] = (vel[i][1] - pos[i][1] * pull) * damp;
      vel[i][2] = (vel[i][2] - pos[i][2] * pull) * damp;
      pos[i][0] += vel[i][0];
      pos[i][1] += vel[i][1];
      pos[i][2] += vel[i][2];
    }
  }

  const out = new Map<string, [number, number, number]>();
  nodes.forEach((node, i) => out.set(node.path, pos[i]));
  return out;
}

export function domainColor(domain: string, night: boolean): string {
  let hash = 0;
  for (let i = 0; i < domain.length; i++) {
    hash = domain.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash) % 360;
  return night ? `hsl(${hue} 35% 62%)` : `hsl(${hue} 28% 38%)`;
}
