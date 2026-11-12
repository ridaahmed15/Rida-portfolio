"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Award,
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";
import { profile } from "@/lib/portfolio-data";

/* ------------------------- Typewriter effect ------------------------- */

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    const finishedTyping = !deleting && text === word;
    const cleared = deleting && text === "";
    const delay = finishedTyping ? 2000 : deleting ? 38 : 85;

    const timeout = setTimeout(() => {
      if (finishedTyping) {
        setDeleting(true);
      } else if (cleared) {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return text;
}

/* ------------------------- Floating tech chips ------------------------- */

const CHIPS = [
  { label: "Python", className: "-left-4 top-8 sm:-left-10", delay: "0s" },
  { label: "PyTorch", className: "-right-3 top-20 sm:-right-8", delay: "1.1s" },
  { label: "LangChain", className: "-left-5 bottom-24 sm:-left-12", delay: "2s" },
  { label: "LLMs", className: "-right-2 bottom-10 sm:-right-6", delay: "0.6s" },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16 md:pt-28"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
        {/* ---------------------------- Left column ---------------------------- */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-emerald-300 sm:text-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {profile.availability}
          </motion.div>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground mt-6 text-base font-medium sm:text-lg"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="font-display mt-2 text-4xl font-extrabold tracking-tight text-balance sm:text-6xl lg:text-[4.2rem] lg:leading-[1.05]"
          >
            <span className="text-gradient">Rida Ahmed</span>
          </motion.h1>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.26 }}
            className="mt-4 flex items-center justify-center gap-3 text-xl font-semibold sm:text-2xl lg:justify-start lg:text-3xl"
            aria-live="polite"
          >
            <span className="font-mono text-emerald-300">
              &lt;
            </span>
            <span className="min-h-[1.4em]">{typed}</span>
            <span className="animate-caret inline-block h-[1.1em] w-[3px] rounded bg-emerald-400" />
            <span className="font-mono text-emerald-300">/&gt;</span>
          </motion.div>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.34 }}
            className="text-muted-foreground mx-auto mt-6 max-w-xl text-base leading-relaxed text-pretty sm:text-lg lg:mx-0"
          >
            I design and ship production-grade AI systems — from LLM
            applications and RAG pipelines to computer vision and end-to-end
            machine learning products. Based in {profile.location}, turning
            complex data into intelligent, real-world solutions.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.42 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <a
              href="#projects"
              className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-500/30 sm:text-base"
            >
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              View My Work
            </a>
            <a
              href="#contact"
              className="glass hover:border-primary/50 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 sm:text-base"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.5 }}
            className="mt-8 flex items-center justify-center gap-3 lg:justify-start"
          >
            {[
              { href: profile.github, label: "GitHub", Icon: Github },
              { href: profile.linkedin, label: "LinkedIn", Icon: Linkedin },
              { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="glass hover:border-primary/50 hover:text-primary flex h-11 w-11 items-center justify-center rounded-xl text-muted-foreground transition-all duration-300 hover:-translate-y-1"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* ---------------------------- Right column ---------------------------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="relative order-1 mx-auto w-fit lg:order-2"
        >
          {/* Rotating dashed ring */}
          <div
            aria-hidden="true"
            className="animate-spin-slower absolute -inset-4 rounded-full border-2 border-dashed border-emerald-400/25 sm:-inset-6"
          />

          {/* Glow */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 scale-90 rounded-full bg-emerald-500/20 blur-3xl"
          />

          {/* Photo frame */}
          <div className="bg-card/60 relative w-[270px] overflow-hidden rounded-[2rem] border border-emerald-400/20 p-2 shadow-2xl shadow-emerald-950/40 backdrop-blur-sm sm:w-[340px]">
            <div className="relative aspect-square overflow-hidden rounded-[1.6rem]">
              <Image
                src={profile.avatar}
                alt="Portrait photo of Rida Ahmed, AI Engineer"
                fill
                priority
                sizes="(max-width: 640px) 270px, 340px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Floating tech chips */}
          {CHIPS.map((chip) => (
            <span
              key={chip.label}
              className={`animate-float glass absolute ${chip.className} rounded-xl px-3 py-1.5 font-mono text-xs font-semibold text-emerald-300 shadow-lg shadow-black/20`}
              style={{ animationDelay: chip.delay }}
            >
              {chip.label}
            </span>
          ))}

          {/* Experience badge */}
          <div className="animate-float glass absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2.5 rounded-2xl px-4 py-2.5 shadow-xl shadow-black/25 sm:left-auto sm:right-[-2rem] sm:translate-x-0">
            <span className="bg-primary/15 text-primary flex h-9 w-9 items-center justify-center rounded-xl">
              <Award className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="text-left leading-tight">
              <span className="font-display block text-sm font-bold">
                {profile.yearsOfExperience} Years
              </span>
              <span className="text-muted-foreground block text-[11px]">
                Experience
              </span>
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="text-muted-foreground hover:text-primary absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 transition-colors md:flex"
      >
        <span className="text-[11px] tracking-widest uppercase">Scroll</span>
        <ChevronDown className="animate-bounce h-5 w-5" aria-hidden="true" />
      </motion.a>
    </section>
  );
}
