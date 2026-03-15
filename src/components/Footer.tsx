"use client";

import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-pure-black py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        <p className="text-[11px] uppercase tracking-[0.3em] text-white/30">
          © {new Date().getFullYear()} Rahul Podugu
        </p>

        <p className="text-[11px] uppercase tracking-[0.3em] text-white/20">
          Built with Next.js · Framer Motion
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/rahulpodugu/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white/30 transition-colors duration-200 hover:text-white/70"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/Rahul2251999"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-white/30 transition-colors duration-200 hover:text-white/70"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
