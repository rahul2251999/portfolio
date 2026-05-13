"use client";

import { useEffect, useState } from "react";
import type React from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function NavBar({ items, className }: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    setIsOpen(false);
    // Wait for the menu closing animation before scrolling
    setTimeout(() => {
      document.querySelector<HTMLElement>(url)?.scrollIntoView({ behavior: "smooth" });
    }, 700);
  };

  // Framer Motion Variants
  const menuVariants = {
    closed: {
      opacity: 0,
      clipPath: "inset(0 0 100% 0)",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    },
    open: {
      opacity: 1,
      clipPath: "inset(0 0 0% 0)",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    }
  };

  const containerVariants = {
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    open: { transition: { delayChildren: 0.2, staggerChildren: 0.1 } }
  };

  const itemVariants = {
    closed: { y: 120, opacity: 0, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } },
    open: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
  };

  return (
    <>
      {/* Persistent Toggle Button */}
      <button
        onClick={toggleMenu}
        className={cn(
          "fixed top-8 right-8 md:top-10 md:right-12 z-[100] group flex items-center gap-4 focus:outline-none mix-blend-difference",
          className
        )}
        aria-label="Toggle Menu"
      >
        <span className="relative h-4 w-12 overflow-hidden hidden md:block">
          <motion.span 
            className="absolute top-0 left-0 w-full text-[11px] font-bold tracking-[0.3em] text-white uppercase transition-transform duration-500 ease-[0.76,0,0.24,1]"
            animate={{ y: isOpen ? -20 : 0, opacity: isOpen ? 0 : 1 }}
          >
            Menu
          </motion.span>
          <motion.span 
            className="absolute top-0 left-0 w-full text-[11px] font-bold tracking-[0.3em] text-white uppercase transition-transform duration-500 ease-[0.76,0,0.24,1]"
            animate={{ y: isOpen ? 0 : 20, opacity: isOpen ? 1 : 0 }}
          >
            Close
          </motion.span>
        </span>
        <div className="relative flex h-2.5 w-8 flex-col justify-between overflow-hidden">
          <motion.span 
            className="h-[1.5px] w-full bg-white origin-right transition-transform duration-500 ease-[0.76,0,0.24,1]"
            animate={isOpen ? { rotate: -45, y: -0.5, scaleX: 1.1 } : { rotate: 0, y: 0, scaleX: 1 }}
          />
          <motion.span 
            className="h-[1.5px] w-full bg-white origin-right transition-transform duration-500 ease-[0.76,0,0.24,1]"
            animate={isOpen ? { rotate: 45, y: 0.5, scaleX: 1.1 } : { rotate: 0, y: 0, scaleX: 1 }}
          />
        </div>
      </button>

      {/* Full Screen Cinematic Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[90] flex flex-col bg-[#050505] px-6 py-8 md:px-12 lg:px-24 overflow-y-auto"
          >
            {/* Subtle background noise/gradient for the menu */}
            <div className="fixed inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.05] via-[#050505] to-[#050505] pointer-events-none" />
            
            <div className="m-auto flex flex-col justify-center w-full relative z-10 py-12">
              <motion.nav
                variants={containerVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="relative flex flex-col items-start md:items-center justify-center gap-2 md:gap-4 w-full max-w-[90rem] mx-auto"
              >
                {items.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div key={item.name} variants={itemVariants} className="overflow-hidden w-full flex md:justify-center">
                      <a
                        href={item.url}
                        onClick={(e) => handleClick(e, item.url)}
                        className="group flex items-center gap-4 md:gap-12 w-full md:w-auto py-1"
                      >
                        <span className="text-accent-gray/30 text-sm md:text-xl font-bold tracking-widest hidden md:block opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          0{index + 1}
                        </span>
                        <h1 className="text-[clamp(2.5rem,8vw,7.5rem)] max-h-[12dvh] font-bold tracking-tighter text-accent-white/30 transition-colors duration-500 group-hover:text-accent-white leading-none" style={{ fontSize: 'min(8vw, 10dvh)' }}>
                          {item.name}
                        </h1>
                        <Icon className="w-10 h-10 md:w-14 md:h-14 text-accent-white opacity-0 -translate-x-8 transition-all duration-500 ease-[0.16,1,0.3,1] group-hover:opacity-100 group-hover:translate-x-0 hidden md:block" />
                      </a>
                    </motion.div>
                  );
                })}
              </motion.nav>
            </div>
            
            {/* Footer Elements inside menu */}
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mt-auto relative z-10 pt-4">
              <motion.div 
                className="flex flex-col gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              >
                <span className="text-[10px] uppercase tracking-[0.3em] text-accent-gray">Available for work</span>
                <a href="mailto:rahulpodugu2@gmail.com" className="text-sm font-light text-accent-white hover:text-accent-gray transition-colors">rahulpodugu2@gmail.com</a>
              </motion.div>
              
              <motion.div 
                className="flex gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              >
                <a href="https://linkedin.com/in/rahulpodugu" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-[0.2em] text-accent-white/50 hover:text-accent-white transition-colors">
                  LinkedIn
                </a>
                <a href="https://github.com/Rahul2251999" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-[0.2em] text-accent-white/50 hover:text-accent-white transition-colors">
                  GitHub
                </a>
              </motion.div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
