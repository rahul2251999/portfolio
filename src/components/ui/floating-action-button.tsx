'use client'

import { motion } from "framer-motion"
import { Plus, LucideIcon } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface SocialIcon {
  Icon: LucideIcon
  href?: string
  className?: string
  label?: string
}

interface AnimatedSocialIconsProps {
  icons: SocialIcon[]
  className?: string
  iconSize?: number
}

export function AnimatedSocialIcons({
  icons,
  className,
  iconSize = 20
}: AnimatedSocialIconsProps) {
  const [active, setActive] = useState(false)

  const buttonSize = "h-12 w-12 sm:h-14 sm:w-14"

  return (
    <div className={cn("relative z-50 flex items-center justify-start gap-3", className)}>
      <motion.button
        className={cn(
          buttonSize,
          "flex items-center justify-center rounded-full bg-primary transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-pure-black"
        )}
        onClick={() => setActive(!active)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setActive(!active);
          }
        }}
        animate={{ rotate: active ? 45 : 0 }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          duration: 0.35,
        }}
        aria-label={active ? "Close social links" : "Open social links"}
        aria-expanded={active}
      >
        <Plus
          size={iconSize}
          strokeWidth={3}
          className="text-primary-foreground"
        />
      </motion.button>

      {icons.map(({ Icon, href, className, label }, index) => (
        <motion.div
          key={index}
          className={cn(
            buttonSize,
            "flex items-center justify-center rounded-full border border-border/60 bg-background/60 shadow-lg transition-all hover:shadow-xl",
            className
          )}
          initial={{ opacity: 0, x: -12, scale: 0.85, rotate: -15 }}
          animate={{
            opacity: active ? 1 : 0,
            x: active ? 0 : -12,
            scale: active ? 1 : 0.85,
            rotate: active ? 0 : -15,
          }}
          transition={{
            type: "tween",
            ease: "easeInOut",
            duration: 0.3 + index * 0.05,
          }}
          style={{ pointerEvents: active ? "auto" : "none" }}
        >
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-accent-white/50 focus:ring-offset-2 focus:ring-offset-pure-black rounded-full"
              aria-label={label ?? "Open social link"}
            >
              <Icon
                size={iconSize}
                className="text-muted-foreground transition-transform duration-200 hover:scale-110 hover:text-foreground"
              />
            </a>
          ) : (
            <div className="flex items-center justify-center">
              <Icon
                size={iconSize}
                className="text-muted-foreground transition-transform duration-200 hover:scale-110 hover:text-foreground"
              />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  )
}
