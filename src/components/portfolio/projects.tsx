"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { profile, projects } from "@/lib/portfolio-data";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Projects"
          description="Selected work across LLMs, computer vision, NLP and classic machine learning."
        />

        <div className="grid gap-6 md:grid-cols-2 sm:gap-7">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.1 }}
              className="glass glow-card group flex flex-col overflow-hidden rounded-2xl"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} — ${project.subtitle} project thumbnail`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
                  aria-hidden="true"
                />
                <span className="glass absolute top-3 left-3 rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide text-emerald-300">
                  {project.category}
                </span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} on GitHub`}
                  className="bg-primary text-primary-foreground absolute right-3 bottom-3 flex h-9 w-9 items-center justify-center rounded-full opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 hover:scale-110 max-md:opacity-100"
                >
                  <ArrowUpRight className="h-4.5 w-4.5" aria-hidden="true" />
                </a>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="font-display text-lg font-semibold sm:text-xl">
                  {project.title}
                  <span className="text-muted-foreground ml-2 text-sm font-normal">
                    {project.subtitle}
                  </span>
                </h3>
                <p className="text-muted-foreground mt-2 flex-1 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-accent text-accent-foreground rounded-md px-2 py-1 font-mono text-[11px]"
                    >
                      {t}
                    </span>
                  ))}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary ml-auto inline-flex items-center gap-1.5 text-xs font-medium transition-colors"
                  >
                    <Github className="h-3.5 w-3.5" aria-hidden="true" />
                    Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 text-center"
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass hover:border-primary/50 hover:text-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            Explore more on GitHub
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
