"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export function Logo() {
  const { scrollY } = useScroll();
  const [isExpanded, setIsExpanded] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const threshold = typeof window !== "undefined" ? window.innerHeight * 4.5 : 4000;
    if (latest > threshold) {
      if (!isExpanded) setIsExpanded(true);
    } else {
      if (isExpanded) setIsExpanded(false);
    }
  });

  return (
    <motion.div
      className="fixed top-8 left-8 md:top-10 md:left-12 z-[60]"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 2.2 }}
    >
      <a
        href="#hero"
        aria-label="Home"
        className="group relative flex items-center py-2"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <div className="flex items-center text-[11px] md:text-xs font-bold uppercase tracking-[0.4em] text-accent-white transition-opacity duration-300 group-hover:text-accent-white/70">
          
          <div className="flex items-center">
            <span>R</span>
            <motion.div
              initial={false}
              animate={{ 
                width: isExpanded ? "auto" : 0, 
                opacity: isExpanded ? 1 : 0 
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden flex items-center"
            >
              <span className="pr-3">AHUL</span>
            </motion.div>
          </div>

          <div className="flex items-center">
            <span>P</span>
            <motion.div
              initial={false}
              animate={{ 
                width: isExpanded ? "auto" : 0, 
                opacity: isExpanded ? 1 : 0 
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: isExpanded ? 0.05 : 0 }}
              className="overflow-hidden flex items-center"
            >
              <span>ODUGU</span>
            </motion.div>
          </div>

          {/* Understated Status Dot */}
          <motion.div 
            className="w-1 h-1 rounded-full bg-accent-white ml-2 opacity-50"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />
        </div>
      </a>
    </motion.div>
  );
}
