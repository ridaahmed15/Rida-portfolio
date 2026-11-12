"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { certifications, education } from "@/lib/portfolio-data";

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Foundation"
          title="Education & Certifications"
        />

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {/* Education card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="glass glow-card rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-start gap-4">
              <span className="bg-primary/15 text-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                <GraduationCap className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <span className="bg-primary/15 text-primary inline-block rounded-full px-3 py-1 font-mono text-xs font-semibold">
                  {education.period}
                </span>
                <h3 className="font-display mt-3 text-lg font-semibold sm:text-xl">
                  {education.degree}
                </h3>
                <p className="text-muted-foreground text-sm font-medium">
                  {education.institution}
                </p>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                  {education.description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Certifications card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="glass glow-card rounded-2xl p-6 sm:p-8"
          >
            <h3 className="font-display mb-5 text-lg font-semibold sm:text-xl">
              Certifications
            </h3>
            <ul className="space-y-4">
              {certifications.map((cert) => (
                <li key={cert.title} className="flex items-center gap-3.5">
                  <span className="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                    <Award className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{cert.title}</p>
                    <p className="text-muted-foreground text-xs">
                      {cert.issuer}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
