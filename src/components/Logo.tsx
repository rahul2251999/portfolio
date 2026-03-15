"use client";

import { motion } from "framer-motion";

export function Logo() {
  return (
    <motion.div
      className="fixed top-6 left-6 z-[60]"
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 2.2 }}
    >
      <a
        href="#hero"
        aria-label="Home"
        className="group flex items-center gap-2.5"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        {/* Geometric mark */}
        <div className="relative flex h-8 w-8 items-center justify-center">
          {/* Outer ring — fades in on hover */}
          <div className="absolute inset-0 rounded-full border border-white/0 transition-all duration-500 group-hover:border-white/20 group-hover:scale-110" />
          {/* Diamond */}
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            className="transition-transform duration-500 group-hover:rotate-90"
          >
            <rect
              x="11"
              y="1.5"
              width="13"
              height="13"
              rx="1.5"
              transform="rotate(45 11 11)"
              stroke="rgba(255,255,255,0.9)"
              strokeWidth="1.25"
            />
            <rect
              x="11"
              y="5.5"
              width="7"
              height="7"
              rx="0.5"
              transform="rotate(45 11 11)"
              fill="rgba(255,255,255,0.12)"
            />
          </svg>
        </div>

        {/* Wordmark */}
        <div className="flex flex-col leading-none">
          <span className="text-[11px] font-semibold tracking-[0.22em] text-white/90 uppercase transition-colors duration-300 group-hover:text-white">
            Rahul
          </span>
          <span className="text-[11px] font-semibold tracking-[0.22em] text-white/40 uppercase transition-colors duration-300 group-hover:text-white/70">
            Podugu
          </span>
        </div>
      </a>
    </motion.div>
  );
}
