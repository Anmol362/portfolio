"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { CSSProperties } from "react";

type Star = {
  id: number;
  left: string;
  top: string;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  depth: 0 | 1 | 2;
};

type ShootingStar = {
  id: number;
  left: string;
  top: string;
  width: number;
  duration: number;
  delay: number;
};

const stars: Star[] = Array.from({ length: 64 }, (_, index) => {
  const depth = (index % 3) as 0 | 1 | 2;
  const x = (index * 37 + 19) % 100;
  const y = (index * 53 + 11) % 100;
  const size = 1 + (index % 2);
  const opacity = 0.1 + (index % 5) * 0.07;
  const duration = 4.2 + (index % 7) * 1.2;
  const delay = (index % 13) * 0.35;

  return {
    id: index + 1,
    left: `${x}%`,
    top: `${y}%`,
    size,
    opacity,
    duration,
    delay,
    depth
  };
});

const shootingStars: ShootingStar[] = [
  { id: 1, left: "12%", top: "18%", width: 170, duration: 4.6, delay: 0.8 },
  { id: 2, left: "62%", top: "66%", width: 190, duration: 4.9, delay: 2.4 }
];

const SpaceBackdrop = () => {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const deepLayerY = useTransform(scrollYProgress, [0, 1], [0, -16]);
  const midLayerY = useTransform(scrollYProgress, [0, 1], [0, -26]);
  const nearLayerY = useTransform(scrollYProgress, [0, 1], [0, -38]);

  const renderStars = (depth: 0 | 1 | 2) =>
    stars.filter((star) => star.depth === depth).map((star) => (
      <span
        key={star.id}
        aria-hidden
        className="space-star"
        style={
          {
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            "--star-duration": `${star.duration}s`,
            "--star-delay": `${star.delay}s`
          } as CSSProperties
        }
      />
    ));

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="space-nebula absolute inset-0" />
      <div className="space-vignette absolute inset-0" />

      <motion.div className="absolute inset-0" style={{ y: deepLayerY }}>
        {renderStars(0)}
      </motion.div>
      <motion.div className="absolute inset-0" style={{ y: midLayerY }}>
        {renderStars(1)}
      </motion.div>
      <motion.div className="absolute inset-0" style={{ y: nearLayerY }}>
        {renderStars(2)}
      </motion.div>

      {shootingStars.map((star) => (
        <motion.span
          key={star.id}
          aria-hidden
          className="space-shooting-star"
          style={{ left: star.left, top: star.top, width: star.width }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [0, 220, 420],
                  y: [0, 110, 210],
                  opacity: [0, 0.58, 0]
                }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  duration: star.duration,
                  delay: star.delay,
                  repeat: Infinity,
                  repeatDelay: 4.4,
                  ease: "easeInOut"
                }
          }
        />
      ))}

      <motion.div
        aria-hidden
        className="space-planet-halo left-[74%] top-[8%] h-64 w-64"
        animate={
          shouldReduceMotion
            ? undefined
            : { x: [0, -14, 0], y: [0, 9, 0], scale: [1, 1.04, 1] }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : { duration: 20, repeat: Infinity, ease: "easeInOut" }
        }
      />
      <motion.div
        aria-hidden
        className="space-planet-halo left-[6%] top-[62%] h-52 w-52"
        animate={
          shouldReduceMotion
            ? undefined
            : { x: [0, 12, 0], y: [0, -7, 0], scale: [1, 1.05, 1] }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : { duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1.3 }
        }
      />
    </div>
  );
};

export default SpaceBackdrop;
