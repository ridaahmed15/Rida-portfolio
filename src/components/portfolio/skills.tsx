"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { marqueeSkills, skillBars, toolbox } from "@/lib/portfolio-data";

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-container marquee-mask overflow-hidden">
      <div
        className={`flex w-max gap-3 py-1.5 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {doubled.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="glass flex items-center gap-2.5 rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap"
          >
            <span
              className="h-1.5 w-1.5 rounded-full bg-emerald-400"
              aria-hidden="true"
            />
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Skills & Technologies"
          description="The tools I reach for every day to build, train and ship AI systems."
        />

        {/* Infinite marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 space-y-3"
        >
          <MarqueeRow items={marqueeSkills.slice(0, 12)} />
          <MarqueeRow items={marqueeSkills.slice(12)} reverse />
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Proficiency bars */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-6 sm:p-8"
          >
            <h3 className="font-display mb-6 text-xl font-semibold">
              Core Proficiency
            </h3>
            <ul className="space-y-5">
              {skillBars.map((skill, i) => (
                <li key={skill.label}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium">{skill.label}</span>
                    <span className="text-primary font-mono text-xs font-semibold">
                      {skill.value}%
                    </span>
                  </div>
                  <div
                    className="bg-secondary h-2 overflow-hidden rounded-full"
                    role="meter"
                    aria-valuenow={skill.value}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={skill.label}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{
                        duration: 1.1,
                        delay: 0.15 + i * 0.08,
                        ease: "easeOut",
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-300"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Toolbox categories */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="grid content-start gap-4 sm:grid-cols-2"
          >
            {toolbox.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="glass glow-card rounded-2xl p-5"
              >
                <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold tracking-wide">
                  <span
                    className="h-2 w-2 rounded-full bg-emerald-400"
                    aria-hidden="true"
                  />
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="bg-accent text-accent-foreground hover:bg-primary/15 hover:text-primary rounded-md px-2 py-1 text-[11px] font-medium transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
