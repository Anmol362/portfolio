"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

type ObjectKind = "dot" | "ring" | "square";
type Accent = "accent" | "accent2" | "accent3" | "muted";
type Depth = 0 | 1 | 2;

type FloatingObject = {
  id: number;
  left: string;
  top: string;
  size: number;
  kind: ObjectKind;
  accent: Accent;
  opacity: number;
  driftX: number;
  driftY: number;
  spin: number;
  duration: number;
  delay: number;
  depth: Depth;
};

const palette: Record<Accent, string> = {
  accent: "var(--accent)",
  accent2: "var(--accent-2)",
  accent3: "var(--accent-3)",
  muted: "var(--muted)"
};

const floatingObjects: FloatingObject[] = [
  { id: 1, left: "4%", top: "10%", size: 6, kind: "dot", accent: "accent", opacity: 0.34, driftX: 22, driftY: 18, spin: 16, duration: 9.8, delay: 0, depth: 0 },
  { id: 2, left: "14%", top: "18%", size: 8, kind: "ring", accent: "accent3", opacity: 0.3, driftX: 16, driftY: 22, spin: 28, duration: 10.4, delay: 0.4, depth: 1 },
  { id: 3, left: "24%", top: "8%", size: 5, kind: "dot", accent: "accent2", opacity: 0.3, driftX: 26, driftY: 14, spin: 20, duration: 11.2, delay: 0.8, depth: 2 },
  { id: 4, left: "36%", top: "13%", size: 7, kind: "square", accent: "muted", opacity: 0.26, driftX: 18, driftY: 24, spin: 36, duration: 12.2, delay: 0.3, depth: 0 },
  { id: 5, left: "48%", top: "7%", size: 6, kind: "dot", accent: "accent3", opacity: 0.32, driftX: 20, driftY: 16, spin: 18, duration: 10.8, delay: 0.7, depth: 1 },
  { id: 6, left: "62%", top: "12%", size: 9, kind: "ring", accent: "accent", opacity: 0.28, driftX: 28, driftY: 20, spin: 30, duration: 11.6, delay: 1.1, depth: 2 },
  { id: 7, left: "74%", top: "18%", size: 5, kind: "dot", accent: "muted", opacity: 0.24, driftX: 14, driftY: 18, spin: 15, duration: 9.6, delay: 0.2, depth: 0 },
  { id: 8, left: "86%", top: "11%", size: 7, kind: "square", accent: "accent2", opacity: 0.26, driftX: 22, driftY: 16, spin: 34, duration: 12, delay: 1.3, depth: 1 },
  { id: 9, left: "8%", top: "30%", size: 6, kind: "ring", accent: "accent3", opacity: 0.24, driftX: 18, driftY: 22, spin: 24, duration: 10.5, delay: 0.1, depth: 2 },
  { id: 10, left: "18%", top: "39%", size: 5, kind: "dot", accent: "accent", opacity: 0.28, driftX: 16, driftY: 16, spin: 22, duration: 9.2, delay: 0.9, depth: 0 },
  { id: 11, left: "31%", top: "34%", size: 8, kind: "ring", accent: "muted", opacity: 0.22, driftX: 24, driftY: 20, spin: 38, duration: 12.8, delay: 0.5, depth: 1 },
  { id: 12, left: "44%", top: "41%", size: 6, kind: "square", accent: "accent2", opacity: 0.26, driftX: 20, driftY: 24, spin: 32, duration: 11.4, delay: 1.5, depth: 2 },
  { id: 13, left: "58%", top: "33%", size: 5, kind: "dot", accent: "accent3", opacity: 0.3, driftX: 22, driftY: 14, spin: 18, duration: 9.8, delay: 0.6, depth: 0 },
  { id: 14, left: "70%", top: "38%", size: 8, kind: "ring", accent: "accent", opacity: 0.25, driftX: 17, driftY: 21, spin: 26, duration: 10.9, delay: 1.2, depth: 1 },
  { id: 15, left: "84%", top: "31%", size: 6, kind: "dot", accent: "accent2", opacity: 0.28, driftX: 23, driftY: 17, spin: 20, duration: 9.9, delay: 0.45, depth: 2 },
  { id: 16, left: "5%", top: "56%", size: 7, kind: "square", accent: "muted", opacity: 0.2, driftX: 14, driftY: 24, spin: 40, duration: 12.6, delay: 0.25, depth: 0 },
  { id: 17, left: "16%", top: "64%", size: 5, kind: "dot", accent: "accent", opacity: 0.32, driftX: 20, driftY: 14, spin: 18, duration: 10.3, delay: 0.75, depth: 1 },
  { id: 18, left: "28%", top: "70%", size: 9, kind: "ring", accent: "accent3", opacity: 0.24, driftX: 26, driftY: 19, spin: 32, duration: 11.7, delay: 1.05, depth: 2 },
  { id: 19, left: "40%", top: "61%", size: 6, kind: "dot", accent: "accent2", opacity: 0.3, driftX: 16, driftY: 23, spin: 24, duration: 9.7, delay: 0.2, depth: 0 },
  { id: 20, left: "54%", top: "68%", size: 7, kind: "square", accent: "accent", opacity: 0.24, driftX: 22, driftY: 18, spin: 36, duration: 12.1, delay: 1.4, depth: 1 },
  { id: 21, left: "66%", top: "73%", size: 5, kind: "dot", accent: "muted", opacity: 0.24, driftX: 19, driftY: 12, spin: 14, duration: 10.1, delay: 0.55, depth: 2 },
  { id: 22, left: "78%", top: "67%", size: 8, kind: "ring", accent: "accent2", opacity: 0.26, driftX: 23, driftY: 20, spin: 28, duration: 11.3, delay: 0.95, depth: 0 },
  { id: 23, left: "90%", top: "60%", size: 6, kind: "dot", accent: "accent3", opacity: 0.3, driftX: 18, driftY: 16, spin: 18, duration: 9.3, delay: 0.4, depth: 1 },
  { id: 24, left: "12%", top: "84%", size: 5, kind: "dot", accent: "accent", opacity: 0.32, driftX: 22, driftY: 11, spin: 20, duration: 9.6, delay: 1.6, depth: 2 },
  { id: 25, left: "28%", top: "90%", size: 7, kind: "square", accent: "accent3", opacity: 0.24, driftX: 17, driftY: 20, spin: 34, duration: 12.4, delay: 0.35, depth: 0 },
  { id: 26, left: "46%", top: "86%", size: 8, kind: "ring", accent: "muted", opacity: 0.2, driftX: 24, driftY: 16, spin: 30, duration: 10.7, delay: 0.65, depth: 1 },
  { id: 27, left: "61%", top: "92%", size: 6, kind: "dot", accent: "accent2", opacity: 0.28, driftX: 20, driftY: 18, spin: 22, duration: 11, delay: 1.25, depth: 2 },
  { id: 28, left: "78%", top: "88%", size: 5, kind: "dot", accent: "accent", opacity: 0.3, driftX: 16, driftY: 12, spin: 16, duration: 9.4, delay: 0.15, depth: 0 },
  { id: 29, left: "90%", top: "83%", size: 8, kind: "square", accent: "accent2", opacity: 0.24, driftX: 21, driftY: 20, spin: 34, duration: 12.3, delay: 0.85, depth: 1 }
];

const FloatingObjects = () => {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const layerSlowY = useTransform(scrollYProgress, [0, 1], [0, -14]);
  const layerMidY = useTransform(scrollYProgress, [0, 1], [0, -22]);
  const layerFastY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  const renderObject = (obj: FloatingObject) => {
    const color = palette[obj.accent];
    const isRing = obj.kind === "ring";
    const isSquare = obj.kind === "square";

    return (
      <motion.span
        key={obj.id}
        aria-hidden
        className="floating-object"
        style={{
          left: obj.left,
          top: obj.top,
          width: obj.size,
          height: obj.size,
          opacity: obj.opacity * 0.58,
          borderRadius: isSquare ? 6 : 9999,
          backgroundColor: isRing || isSquare ? "transparent" : color,
          border: isRing || isSquare ? `1px solid ${color}` : "none",
          boxShadow: `0 0 8px var(--ring)`
        }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, obj.driftX, -obj.driftX * 0.6, 0],
                y: [0, -obj.driftY, obj.driftY * 0.6, 0],
                rotate: [0, obj.spin, -obj.spin * 0.7, 0],
                opacity: [obj.opacity * 0.35, obj.opacity * 0.58, obj.opacity * 0.45]
              }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: obj.duration,
                delay: obj.delay,
                repeat: Infinity,
                ease: "easeInOut"
              }
        }
      />
    );
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: layerSlowY }}>
        {floatingObjects.filter((obj) => obj.depth === 0).map(renderObject)}
      </motion.div>
      <motion.div className="absolute inset-0" style={{ y: layerMidY }}>
        {floatingObjects.filter((obj) => obj.depth === 1).map(renderObject)}
      </motion.div>
      <motion.div className="absolute inset-0" style={{ y: layerFastY }}>
        {floatingObjects.filter((obj) => obj.depth === 2).map(renderObject)}
      </motion.div>
    </div>
  );
};

export default FloatingObjects;
