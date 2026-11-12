import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rida Ahmed | AI Engineer, ML Engineer & Python Data Analyst",
  description:
    "Portfolio of Rida Ahmed — an AI Engineer from Karachi, Pakistan with 4+ years of experience building intelligent systems: LLM applications, RAG pipelines, computer vision and end-to-end machine learning products.",
  keywords: [
    "Rida Ahmed",
    "AI Engineer",
    "Machine Learning Engineer",
    "Python Data Analyst",
    "LLM",
    "RAG",
    "Computer Vision",
    "Karachi",
    "Pakistan",
  ],
  authors: [{ name: "Rida Ahmed" }],
  creator: "Rida Ahmed",
  openGraph: {
    title: "Rida Ahmed | AI Engineer",
    description:
      "AI Engineer, ML Engineer & Python Data Analyst from Karachi, Pakistan. Building intelligent systems that turn data into real-world impact.",
    siteName: "Rida Ahmed Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rida Ahmed | AI Engineer",
    description:
      "AI Engineer, ML Engineer & Python Data Analyst from Karachi, Pakistan.",
  },
};

export const viewport: Viewport = {
  themeColor: "#101614",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
        <Toaster theme="dark" position="bottom-right" richColors />
      </body>
    </html>
  );
}
