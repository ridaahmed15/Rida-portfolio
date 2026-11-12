"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { specializations } from "@/lib/portfolio-data";

export function Expertise() {
  return (
    <section id="expertise" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="What I Do"
          title="AI Expertise, End to End"
          description="Every layer of the AI stack — from raw data to deployed intelligence."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {specializations.map((spec, i) => (
            <motion.article
              key={spec.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass glow-card group rounded-2xl p-6"
            >
              <div className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300">
                <spec.icon className="h-6 w-6" aria-hidden="true" />
              </div>

              <h3 className="font-display text-lg font-semibold">
                {spec.title}
              </h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {spec.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {spec.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-accent text-accent-foreground rounded-full px-2.5 py-1 text-[11px] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
