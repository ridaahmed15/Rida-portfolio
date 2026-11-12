"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { profile } from "@/lib/portfolio-data";

const CONTACT_CARDS = [
  {
    Icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    external: false,
  },
  {
    Icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: profile.phoneHref,
    external: false,
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    value: "in/ridaahmed-dev",
    href: profile.linkedin,
    external: true,
  },
  {
    Icon: Github,
    label: "GitHub",
    value: "ridaahmed15",
    href: profile.github,
    external: true,
  },
];

type FormState = "idle" | "sending" | "error";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [state, setState] = useState<FormState>("idle");

  const validate = () => {
    const next: Record<string, string> = {};
    if (name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      next.email = "Please enter a valid email.";
    if (message.trim().length < 10)
      next.message = "Message should be at least 10 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = (await res.json()) as { ok: boolean; error?: string };

      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? "Failed to send message.");
      }

      toast.success("Message sent!", {
        description: "Thanks for reaching out — I'll get back to you soon.",
      });
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
      setState("idle");
    } catch (err) {
      setState("error");
      toast.error("Couldn't send your message.", {
        description:
          err instanceof Error
            ? err.message
            : "Please try again in a moment.",
      });
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Build Something Intelligent"
          description="Have a project in mind or a role to fill? My inbox is always open."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.25fr] lg:gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="glass flex items-center gap-3.5 rounded-2xl p-4">
              <span className="bg-primary/15 text-primary flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-muted-foreground text-[11px] tracking-wider uppercase">
                  Location
                </p>
                <p className="text-sm font-semibold">{profile.location}</p>
              </div>
            </div>

            {CONTACT_CARDS.map(({ Icon, label, value, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                aria-label={`${label}: ${value}`}
                className="glass glow-card flex items-center gap-3.5 rounded-2xl p-4"
              >
                <span className="bg-primary/15 text-primary flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-muted-foreground text-[11px] tracking-wider uppercase">
                    {label}
                  </p>
                  <p className="truncate text-sm font-semibold">{value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            noValidate
            className="glass rounded-2xl p-6 sm:p-8"
            aria-label="Contact form"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-name"
                  className="text-sm font-medium"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                  className={`bg-input/40 placeholder:text-muted-foreground/60 w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-primary/60 focus:ring-2 focus:ring-primary/25 ${
                    errors.name ? "border-red-500/70" : "border-border"
                  }`}
                />
                {errors.name ? (
                  <p id="contact-name-error" className="text-xs text-red-400">
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="contact-email"
                  className="text-sm font-medium"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                  className={`bg-input/40 placeholder:text-muted-foreground/60 w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-primary/60 focus:ring-2 focus:ring-primary/25 ${
                    errors.email ? "border-red-500/70" : "border-border"
                  }`}
                />
                {errors.email ? (
                  <p id="contact-email-error" className="text-xs text-red-400">
                    {errors.email}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="mt-5 space-y-1.5">
              <label htmlFor="contact-message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="contact-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project or role..."
                rows={6}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
                className={`bg-input/40 placeholder:text-muted-foreground/60 w-full resize-none rounded-xl border px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-primary/60 focus:ring-2 focus:ring-primary/25 ${
                  errors.message ? "border-red-500/70" : "border-border"
                }`}
              />
              {errors.message ? (
                <p id="contact-message-error" className="text-xs text-red-400">
                  {errors.message}
                </p>
              ) : null}
            </div>

            <button
              type="submit"
              disabled={state === "sending"}
              className="bg-primary text-primary-foreground hover:bg-primary/90 mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-500/25 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto"
            >
              {state === "sending" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
