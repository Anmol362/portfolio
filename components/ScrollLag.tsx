"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  intensity?: number;
};

const ScrollLag = ({ children, className, intensity = 58 }: Props) => {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const lagRange = useTransform(scrollYProgress, [0, 1], [0, -intensity]);
  const smoothY = useSpring(lagRange, {
    stiffness: 64,
    damping: 20,
    mass: 0.52
  });

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div style={{ y: smoothY }} className={className}>
      {children}
    </motion.div>
  );
};

export default ScrollLag;
