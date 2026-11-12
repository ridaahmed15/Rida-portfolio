"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { experience } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Career Path"
          title="Professional Experience"
          description="Four years of building, shipping and iterating on intelligent systems."
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[19px] w-px bg-gradient-to-b from-emerald-400/60 via-border to-transparent sm:left-[23px]"
          />

          <ol className="space-y-10">
            {experience.map((item, i) => (
              <motion.li
                key={item.role + item.period}
                initial={{ opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="relative pl-14 sm:pl-16"
              >
                {/* Dot */}
                <span
                  aria-hidden="true"
                  className="bg-background absolute top-1 left-0 flex h-10 w-10 items-center justify-center rounded-full border sm:h-12 sm:w-12"
                >
                  <span
                    className={`flex h-full w-full items-center justify-center rounded-full ${
                      item.current
                        ? "bg-primary/15 text-primary"
                        : "bg-accent text-muted-foreground"
                    }`}
                  >
                    <Briefcase className="h-4.5 w-4.5 sm:h-5 sm:w-5" aria-hidden="true" />
                  </span>
                  {item.current ? (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/25" />
                  ) : null}
                </span>

                <div className="glass glow-card rounded-2xl p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <h3 className="font-display text-lg font-semibold sm:text-xl">
                      {item.role}
                    </h3>
                    {item.current ? (
                      <span className="bg-primary/15 text-primary rounded-full px-2.5 py-0.5 text-[11px] font-semibold">
                        Current
                      </span>
                    ) : null}
                  </div>
                  <p className="text-muted-foreground mt-0.5 text-sm font-medium">
                    {item.company}
                  </p>
                  <p className="text-primary mt-2 font-mono text-xs font-semibold tracking-wide">
                    {item.period}
                  </p>

                  <ul className="mt-3 space-y-2">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="text-muted-foreground flex gap-2.5 text-sm leading-relaxed"
                      >
                        <span
                          className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400"
                          aria-hidden="true"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
