"use client";

import { motion } from "framer-motion";

export function Logo() {
  return (
    <motion.div
      className="fixed top-8 left-8 md:top-10 md:left-12 z-[60]"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 2.2 }}
    >
      <a
        href="#hero"
        aria-label="Home"
        className="group relative flex items-center justify-center overflow-hidden py-2"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <div className="flex flex-col leading-[1.1]">
          {/* Main Wordmark */}
          <span className="relative text-[14px] font-black tracking-[0.25em] text-accent-white uppercase transition-all duration-500 ease-[0.16,1,0.3,1] group-hover:tracking-[0.3em]">
            <span className="relative z-10">Rahul</span>
            
            {/* Subtle Light Sweep Effect */}
            <span className="absolute inset-0 z-20 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:translate-x-full group-hover:opacity-100" />
          </span>

          {/* Subtext */}
          <span className="text-[10px] font-bold tracking-[0.45em] text-accent-gray uppercase mt-1 transition-colors duration-500 group-hover:text-accent-white/80">
            Podugu
          </span>
        </div>
      </a>
    </motion.div>
  );
}
