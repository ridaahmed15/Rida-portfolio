"use client";

import { Github, Heart, Linkedin, Mail } from "lucide-react";
import { navLinks, profile } from "@/lib/portfolio-data";

const SOCIALS = [
  { href: profile.github, label: "GitHub", Icon: Github },
  { href: profile.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border/60 bg-card/40 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Brand */}
          <a href="#home" className="flex items-center gap-2">
            <span className="bg-primary text-primary-foreground font-display flex h-8 w-8 items-center justify-center rounded-lg text-xs font-extrabold">
              RA
            </span>
            <span className="font-display text-sm font-bold">
              Rida Ahmed<span className="text-primary">.</span>
            </span>
          </a>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary text-xs font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-2.5">
            {SOCIALS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="glass hover:border-primary/50 hover:text-primary text-muted-foreground flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-border/60 mt-8 flex flex-col items-center justify-between gap-3 border-t pt-6 text-center md:flex-row md:text-left">
          <p className="text-muted-foreground text-xs">
            © {year} {profile.name}. All rights reserved.
          </p>
          <p className="text-muted-foreground inline-flex items-center gap-1.5 text-xs">
            Designed &amp; built with
            <Heart
              className="h-3.5 w-3.5 fill-red-400/80 text-red-400/80"
              aria-hidden="true"
            />
            using Next.js, Tailwind CSS &amp; Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
