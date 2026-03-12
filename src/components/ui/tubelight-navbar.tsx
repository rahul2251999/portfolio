"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      // When the user is near the very top, always treat it as "Home"
      if (scrollY < 120) {
        setActiveTab(items[0].name)
        return
      }

      const scrollPosition = scrollY + window.innerHeight * 0.3
      let currentSection = items[0].name

      items.forEach((item) => {
        if (!item.url || !item.url.startsWith("#")) return
        const section = document.querySelector<HTMLElement>(item.url)
        if (!section) return

        if (scrollPosition >= section.offsetTop) {
          currentSection = item.name
        }
      })

      setActiveTab((prev) => (prev === currentSection ? prev : currentSection))
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [items])

  return (
    <div
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50",
        className,
      )}
    >
      <div className="relative z-50 flex items-center gap-3 rounded-full border border-border/60 bg-pure-black/80 px-1 py-1 shadow-lg backdrop-blur-lg">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <a
              key={item.name}
              href={item.url}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(item.name);
                const element = document.querySelector(item.url);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={cn(
                "relative z-50 pointer-events-auto cursor-pointer rounded-full px-5 py-2 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-accent-white/50 focus:ring-offset-2 focus:ring-offset-pure-black",
                "text-accent-gray hover:text-accent-white",
                isActive && "bg-background/60 text-accent-white",
              )}
              aria-label={`Navigate to ${item.name} section`}
              aria-current={isActive ? "page" : undefined}
              >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden flex items-center justify-center">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full rounded-full bg-accent-white/10 -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              )}
            </a>
          )
        })}
      </div>
    </div>
  )
}
