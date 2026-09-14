import type React from "react";
import { useEffect, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, Line, OrbitControls } from "@react-three/drei";
import type { CatalogPage } from "../types";
import { pageHref, TYPE_LABEL } from "../paths";
import {
  buildTermGraph,
  domainColor,
  layoutGraph,
  type GraphNode,
} from "../graph";

interface TermGraphProps {
  pages: CatalogPage[];
  selectedPath: string | null;
  onSelect: (page: CatalogPage | null) => void;
}

export const TermGraph: React.FC<TermGraphProps> = ({
  pages,
  selectedPath,
  onSelect,
}) => {
  const [hover, setHover] = useState<string | null>(null);
  const [night, setNight] = useState(
    () => document.documentElement.dataset.theme === "night",
  );
  const [reduced, setReduced] = useState(false);
  const [webgl, setWebgl] = useState(true);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReduced(motion.matches);
    updateMotion();
    motion.addEventListener("change", updateMotion);
    const obs = new MutationObserver(() => {
      setNight(document.documentElement.dataset.theme === "night");
    });
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl2") || canvas.getContext("webgl") || null;
      setWebgl(Boolean(gl));
    } catch {
      setWebgl(false);
    }
    return () => {
      motion.removeEventListener("change", updateMotion);
      obs.disconnect();
    };
  }, []);

  const { nodes, edges, positions } = useMemo(() => {
    const graph = buildTermGraph(pages);
    return {
      ...graph,
      positions: layoutGraph(graph.nodes, graph.edges),
    };
  }, [pages]);

  const byPath = useMemo(
    () => new Map(pages.map((p) => [p.path, p])),
    [pages],
  );
  const selected = selectedPath ? (byPath.get(selectedPath) ?? null) : null;
  const bg = night ? "#171717" : "#ececec";
  const hair = night ? "rgba(236,236,236,0.16)" : "rgba(23,23,23,0.16)";

  if (reduced || !webgl || nodes.length === 0) {
    return (
      <p className="font-mono text-[11px] text-[var(--text-muted)]">
        {nodes.length === 0
          ? "这一筛选下没有可连的词条。"
          : "已跳过 3D 图（减少动效或无 WebGL）。下面是词条列表。"}
      </p>
    );
  }

  return (
    <div className="relative overflow-hidden border border-[var(--border-default)]">
      <div className="h-[min(62vh,560px)] w-full">
        <Canvas
          camera={{ position: [0, 0, 18], fov: 50 }}
          gl={{ antialias: true, alpha: false }}
          onPointerMissed={() => onSelect(null)}
        >
          <color attach="background" args={[bg]} />
          <ambientLight intensity={night ? 0.55 : 0.8} />
          <directionalLight position={[8, 12, 6]} intensity={0.85} />
          {edges.map((edge) => {
            const a = positions.get(edge.source);
            const b = positions.get(edge.target);
            if (!a || !b) return null;
            const key = `${edge.source}::${edge.target}`;
            const active =
              selectedPath === edge.source || selectedPath === edge.target;
            return (
              <Line
                key={key}
                points={[a, b]}
                color={active ? (night ? "#ececec" : "#171717") : hair}
                transparent
                opacity={active ? 0.85 : 0.35}
                lineWidth={active ? 1.5 : 1}
              />
            );
          })}
          {nodes.map((node) => (
            <TermNode
              key={node.path}
              node={node}
              position={positions.get(node.path) ?? [0, 0, 0]}
              color={domainColor(node.domain, night)}
              selected={selectedPath === node.path}
              hovered={hover === node.path}
              onHover={setHover}
              onSelect={() => {
                const page = byPath.get(node.path);
                onSelect(page ?? null);
              }}
            />
          ))}
          <OrbitControls
            enablePan
            enableDamping
            dampingFactor={0.08}
            minDistance={6}
            maxDistance={48}
          />
        </Canvas>
      </div>
      <p className="pointer-events-none absolute bottom-3 left-3 font-mono text-[10px] tracking-wider text-[var(--text-muted)]">
        拖转 · 滚轮缩放 · 点节点看摘要
      </p>
      {selected && (
        <aside className="absolute inset-y-0 right-0 flex w-[min(100%,20rem)] flex-col border-l border-[var(--border-default)] bg-[var(--bg-canvas)] p-5 sm:w-80">
          <button
            type="button"
            onClick={() => onSelect(null)}
            className="self-end font-mono text-[11px] text-[var(--text-muted)] hover:text-[var(--text-primary)]"
          >
            关闭
          </button>
          <p className="mt-4 font-mono text-[10px] tracking-[0.16em] text-[var(--text-muted)] uppercase">
            {selected.domain} · {TYPE_LABEL[selected.type] ?? selected.type}
          </p>
          <h2 className="mt-2 text-xl font-medium tracking-tight">
            {selected.title}
          </h2>
          <p className="mt-3 flex-1 text-[14px] leading-relaxed text-[var(--text-secondary)]">
            {selected.description?.trim() || "（无简介）"}
          </p>
          <a
            href={pageHref(selected.path)}
            className="mt-6 font-mono text-[12px] underline underline-offset-4"
          >
            打开原文
          </a>
        </aside>
      )}
    </div>
  );
};

function TermNode({
  node,
  position,
  color,
  selected,
  hovered,
  onHover,
  onSelect,
}: {
  node: GraphNode;
  position: [number, number, number];
  color: string;
  selected: boolean;
  hovered: boolean;
  onHover: (path: string | null) => void;
  onSelect: () => void;
}) {
  const scale = selected ? 1.55 : hovered ? 1.25 : 1;
  return (
    <mesh
      position={position}
      scale={scale}
      onPointerOver={(e) => {
        e.stopPropagation();
        onHover(node.path);
      }}
      onPointerOut={() => onHover(null)}
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
      }}
    >
      <sphereGeometry args={[0.22, 16, 16]} />
      <meshStandardMaterial
        color={color}
        roughness={0.45}
        metalness={0.05}
        emissive={selected || hovered ? color : "#000000"}
        emissiveIntensity={selected ? 0.35 : hovered ? 0.18 : 0}
      />
      {(hovered || selected) && (
        <Html center sprite distanceFactor={14} zIndexRange={[20, 0]}>
          <div className="pointer-events-none whitespace-nowrap rounded-sm bg-[var(--text-primary)] px-2 py-0.5 font-mono text-[10px] text-[var(--bg-canvas)]">
            {node.title}
          </div>
        </Html>
      )}
    </mesh>
  );
}
