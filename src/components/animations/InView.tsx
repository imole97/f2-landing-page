"use client";
import React from "react";
import { motion } from "motion/react";
// removed
type InViewProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /** Positive values slide from that direction. E.g., y=24 slides up into place. */
  y?: number;
  x?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
  /** Root margin for intersection trigger, e.g. "-10% 0px" */
  margin?: string;
  /** Portion of element that must be in view to trigger (0 to 1) */
  amount?: number | "some" | "all";
};

export default function InView(props: Readonly<InViewProps>) {
  const {
    children,
    className,
    style,
    y = 24,
    x = 0,
    delay = 0,
    duration = 0.6,
    once = true,
    margin = "-10% 0px",
    amount = 0.25,
  } = props;
  // Smooth ease-out curve
  const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
  return (
    <motion.div
      className={className}
      style={{ willChange: "transform, opacity", ...style }}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin, amount }}
      transition={{ duration, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
