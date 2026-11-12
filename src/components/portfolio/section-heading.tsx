"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-widest text-emerald-300 uppercase"
      >
        <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
        {eyebrow}
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, delay: 0.08 }}
        className="font-display mt-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-[2.75rem] md:leading-[1.15]"
      >
        {title}
      </motion.h2>

      {description ? (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="text-muted-foreground mt-4 text-base text-pretty md:text-lg"
        >
          {description}
        </motion.p>
      ) : null}
    </div>
  );
}
