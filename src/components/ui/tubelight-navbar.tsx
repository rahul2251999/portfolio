"use client";

import { useEffect, useRef, useState } from "react";
import type React from "react";
import { motion } from "framer-motion";
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
  const [activeTab, setActiveTab] = useState(items[0].name);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const mid = window.scrollY + window.innerHeight * 0.35;
        let best = items[0].name;
        for (const item of items) {
          if (!item.url.startsWith("#")) continue;
          const el = document.querySelector<HTMLElement>(item.url);
          if (el && el.offsetTop <= mid) best = item.name;
        }
        setActiveTab((prev) => (prev === best ? prev : best));
        ticking.current = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: NavItem,
  ) => {
    e.preventDefault();
    setActiveTab(item.name);
    document.querySelector<HTMLElement>(item.url)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      className={cn("fixed top-5 left-1/2 z-50 -translate-x-1/2", className)}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 2.25 }}
    >
      <nav
        aria-label="Site navigation"
        className="flex items-center gap-1 rounded-full border border-white/[0.1] bg-black/75 p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl"
      >
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <a
              key={item.name}
              href={item.url}
              aria-label={item.name}
              aria-current={isActive ? "page" : undefined}
              onClick={(e) => handleClick(e, item)}
              title={item.name}
              className="group relative flex items-center"
            >
              {/* Sliding white bubble */}
              {isActive && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 rounded-full bg-white"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}

              {/* Icon + expanding label */}
              <span
                className={cn(
                  "relative z-10 flex items-center gap-2 rounded-full transition-colors duration-200",
                  isActive
                    ? "px-4 py-2 text-black"
                    : "p-2.5 text-white/40 hover:text-white/75",
                )}
              >
                <Icon
                  size={15}
                  strokeWidth={isActive ? 2.5 : 2}
                  className="shrink-0"
                />
                {/* Label slides open only for the active item */}
                <span
                  className="overflow-hidden whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.14em] transition-all duration-300"
                  style={{
                    maxWidth: isActive ? "72px" : "0px",
                    opacity: isActive ? 1 : 0,
                  }}
                >
                  {item.name}
                </span>
              </span>
            </a>
          );
        })}
      </nav>
    </motion.div>
  );
}
