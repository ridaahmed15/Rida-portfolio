"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/lib/portfolio-data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 border-b border-border/60 shadow-lg shadow-black/20 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 md:h-[72px]"
      >
        {/* Logo */}
        <a
          href="#home"
          className="font-display group flex items-center gap-2 text-lg font-bold tracking-tight"
          aria-label="Rida Ahmed — back to top"
        >
          <span className="bg-primary text-primary-foreground flex h-9 w-9 items-center justify-center rounded-lg text-sm font-extrabold transition-transform duration-300 group-hover:rotate-6">
            RA
          </span>
          <span className="hidden sm:inline">
            Rida Ahmed<span className="text-primary">.</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-muted-foreground hover:text-primary relative rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="bg-primary text-primary-foreground hover:bg-primary/90 hidden rounded-full px-5 py-2 text-sm font-semibold shadow-md shadow-emerald-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 md:inline-flex"
          >
            Hire Me
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="glass hover:border-primary/40 inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="bg-background/95 overflow-hidden border-b border-border/60 backdrop-blur-xl md:hidden"
          >
            <ul className="space-y-1 px-4 py-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-muted-foreground hover:text-primary hover:bg-accent block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="bg-primary text-primary-foreground block rounded-lg px-4 py-2.5 text-center text-sm font-semibold"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
