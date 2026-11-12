"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { aboutParagraphs, profile, stats } from "@/lib/portfolio-data";

/* ------------------------------ Count up ------------------------------ */

function CountUp({ to, suffix }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

/* ------------------------------ Quick info ------------------------------ */

const INFO = [
  { Icon: MapPin, label: "Location", value: profile.location },
  { Icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { Icon: Phone, label: "Phone", value: profile.phone, href: profile.phoneHref },
  { Icon: Linkedin, label: "LinkedIn", value: "ridaahmed-dev", href: profile.linkedin },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About Me"
          title="Turning Data Into Intelligent Solutions"
          description="A quick look at who I am, what I do, and the numbers behind my journey."
        />

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Bio + quick info */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {aboutParagraphs.map((p, i) => (
              <p
                key={i}
                className="text-muted-foreground leading-relaxed text-pretty"
              >
                {p}
              </p>
            ))}

            <ul className="grid gap-3 pt-3 sm:grid-cols-2">
              {INFO.map(({ Icon, label, value, href }) => {
                const content = (
                  <>
                    <span className="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                      <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="text-muted-foreground block text-[11px] tracking-wider uppercase">
                        {label}
                      </span>
                      <span className="block truncate text-sm font-medium">
                        {value}
                      </span>
                    </span>
                  </>
                );
                const className =
                  "glass glow-card flex items-center gap-3 rounded-2xl p-3.5";
                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className={className}
                        aria-label={`${label}: ${value}`}
                      >
                        {content}
                      </a>
                    ) : (
                      <div className={className}>{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4 sm:gap-5"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass glow-card flex flex-col items-center justify-center rounded-2xl p-6 text-center sm:p-8"
              >
                <span className="font-display text-primary text-3xl font-extrabold sm:text-4xl">
                  <CountUp to={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-muted-foreground mt-2 text-xs font-medium tracking-wide sm:text-sm">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
