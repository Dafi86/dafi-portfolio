"use client";

import { motion } from "framer-motion";

export default function Reveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
        scale: 0.98,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.7,
        ease: [0.25, 1, 0.5, 1],
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}
