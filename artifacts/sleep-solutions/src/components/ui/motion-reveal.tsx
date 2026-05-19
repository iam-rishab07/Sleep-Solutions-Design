import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MotionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  width?: "fit-content" | "100%";
}

export function MotionReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.6,
  width = "100%",
}: MotionRevealProps) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <div style={{ width }} className={cn("overflow-hidden", className)}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            ...directions[direction],
          },
          visible: {
            opacity: 1,
            y: 0,
            x: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration, delay, ease: [0.25, 0.25, 0, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
