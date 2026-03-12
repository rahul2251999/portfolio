"use client";

import { motion } from "framer-motion";

export function Logo() {
  return (
    <div className="fixed top-6 left-6 z-[60]">
      <motion.a
        href="#hero"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="group relative inline-flex items-center px-2 py-1"
      >
        <span className="relative select-none text-2xl font-black tracking-tight text-white md:text-3xl -skew-y-3">
          <span className="absolute -left-1 top-1 h-full w-full rounded-sm border border-lime-300/60 opacity-70 blur-[1px] group-hover:opacity-100 transition-opacity duration-200" />
          <span className="relative px-1">
            RP
          </span>
          <span className="absolute -bottom-1 left-1 h-[2px] w-6 rounded-full bg-gradient-to-r from-lime-300/70 via-emerald-400/80 to-transparent" />
        </span>
      </motion.a>
    </div>
  );
}
