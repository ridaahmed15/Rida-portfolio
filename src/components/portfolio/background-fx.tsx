"use client";

import { motion } from "framer-motion";

/** Deterministic decorative particles (fixed positions to avoid hydration mismatch). */
const PARTICLES = [
  { left: "8%", top: "22%", size: 3, delay: "0s" },
  { left: "16%", top: "68%", size: 2, delay: "1.2s" },
  { left: "27%", top: "38%", size: 2.5, delay: "2.1s" },
  { left: "42%", top: "14%", size: 2, delay: "0.6s" },
  { left: "55%", top: "76%", size: 3, delay: "1.8s" },
  { left: "64%", top: "30%", size: 2, delay: "2.6s" },
  { left: "76%", top: "58%", size: 2.5, delay: "0.9s" },
  { left: "88%", top: "24%", size: 3, delay: "1.5s" },
  { left: "92%", top: "70%", size: 2, delay: "2.9s" },
  { left: "35%", top: "86%", size: 2, delay: "0.3s" },
];

export function BackgroundFX() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base grid */}
      <div className="bg-grid absolute inset-0" />

      {/* Animated glow blobs */}
      <motion.div
        className="animate-blob absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-emerald-500/12 blur-3xl"
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="animate-blob absolute top-1/3 -right-40 h-[520px] w-[520px] rounded-full bg-teal-500/10 blur-3xl"
        style={{ animationDelay: "-6s" }}
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="animate-blob absolute -bottom-40 left-1/4 h-[420px] w-[420px] rounded-full bg-emerald-400/8 blur-3xl"
        style={{ animationDelay: "-11s" }}
        animate={{ opacity: [0.35, 0.7, 0.35] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="animate-float absolute rounded-full bg-emerald-300/40"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
