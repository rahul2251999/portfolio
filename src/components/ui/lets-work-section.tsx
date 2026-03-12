"use client"

import type React from "react"

import { useState } from "react"
import { ArrowUpRight, Calendar, Github, Instagram, Linkedin, Twitter, Code2, X } from "lucide-react"

export function LetsWorkTogether() {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [isButtonHovered, setIsButtonHovered] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setIsClicked(true)

    setTimeout(() => {
      setShowSuccess(true)
    }, 500)
  }

  const handleBookCall = () => {
    window.open("https://calendly.com/rahulpodugu2/30min", "_blank")
  }

  const handleBack = () => {
    setShowSuccess(false)
    setTimeout(() => {
      setIsClicked(false)
      setIsHovered(false)
    }, 300)
  }

  return (
    <section className="section bg-pure-black py-24" id="contact">
      <div className="container mx-auto px-4">
        <div className="relative mx-auto flex max-w-xl flex-col items-center gap-8">
        <div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: showSuccess ? 1 : 0,
            transform: showSuccess ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
            pointerEvents: showSuccess ? "auto" : "none",
          }}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={handleBack}
            className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background/70 text-muted-foreground/80 transition-all duration-200 hover:border-foreground/70 hover:text-foreground hover:bg-background"
            style={{
              opacity: showSuccess ? 1 : 0,
            }}
            aria-label="Close"
          >
            <X className="h-4 w-4" strokeWidth={2} />
          </button>

          {/* Elegant heading */}
          <div className="flex flex-col items-center gap-1.5">
            <span
              className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground transition-all duration-500"
              style={{
                transform: showSuccess ? "translateY(0)" : "translateY(10px)",
                opacity: showSuccess ? 1 : 0,
                transitionDelay: "100ms",
              }}
            >
              Perfect
            </span>
            <h3
              className="text-2xl font-light tracking-tight text-foreground transition-all duration-500 sm:text-3xl md:text-4xl"
              style={{
                transform: showSuccess ? "translateY(0)" : "translateY(10px)",
                opacity: showSuccess ? 1 : 0,
                transitionDelay: "200ms",
              }}
            >
              Let&apos;s talk
            </h3>
          </div>

          {/* Book a call button */}
          <button
            onClick={handleBookCall}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
            className="group relative flex items-center gap-3 transition-all duration-500 cursor-pointer"
            style={{
              transform: showSuccess
                ? isButtonHovered
                  ? "translateY(0) scale(1.02)"
                  : "translateY(0) scale(1)"
                : "translateY(15px) scale(1)",
              opacity: showSuccess ? 1 : 0,
              transitionDelay: "150ms",
            }}
          >
            {/* Left line */}
            <div
              className="h-px w-6 bg-border transition-all duration-500 sm:w-10"
              style={{
                transform: isButtonHovered ? "scaleX(0)" : "scaleX(1)",
                opacity: isButtonHovered ? 0 : 0.5,
              }}
            />

            {/* Button content */}
            <div
              className="relative flex items-center gap-2.5 overflow-hidden rounded-full border px-5 py-2.5 transition-all duration-500 sm:px-7 sm:py-3"
              style={{
                borderColor: isButtonHovered ? "var(--foreground)" : "var(--border)",
                backgroundColor: isButtonHovered ? "var(--foreground)" : "transparent",
                boxShadow: isButtonHovered ? "0 0 30px rgba(0,0,0,0.1), 0 10px 40px rgba(0,0,0,0.08)" : "none",
              }}
            >
              <Calendar
                className="size-4 transition-all duration-500 sm:size-5"
                strokeWidth={1.5}
                style={{
                  color: isButtonHovered ? "var(--background)" : "var(--foreground)",
                }}
              />
              <span
                className="text-xs font-medium tracking-wide transition-all duration-500 sm:text-sm"
                style={{
                  color: isButtonHovered ? "var(--background)" : "var(--foreground)",
                }}
              >
                Book a call
              </span>
              <ArrowUpRight
                className="size-4 transition-all duration-500 sm:size-5"
                strokeWidth={1.5}
                style={{
                  color: isButtonHovered ? "var(--background)" : "var(--foreground)",
                  transform: isButtonHovered ? "translate(3px, -3px) scale(1.1)" : "translate(0, 0) scale(1)",
                }}
              />
            </div>

            {/* Right line */}
            <div
              className="h-px w-6 bg-border transition-all duration-500 sm:w-10"
              style={{
                transform: isButtonHovered ? "scaleX(0)" : "scaleX(1)",
                opacity: isButtonHovered ? 0 : 0.5,
              }}
            />
          </button>

          {/* Subtle subtext */}
          <span
            className="text-[11px] tracking-widest uppercase text-muted-foreground/50 transition-all duration-500"
            style={{
              transform: showSuccess ? "translateY(0)" : "translateY(10px)",
              opacity: showSuccess ? 1 : 0,
              transitionDelay: "450ms",
            }}
          >
            15 min intro call
          </span>
        </div>

        <div
          className="flex items-center gap-3 transition-all duration-500"
          style={{
            opacity: isClicked ? 0 : 1,
            transform: isClicked ? "translateY(-20px)" : "translateY(0)",
            pointerEvents: isClicked ? "none" : "auto",
          }}
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
            Available for opportunities
          </span>
        </div>

        <div
          className="group relative cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={(e) => handleClick(e as unknown as React.MouseEvent<HTMLAnchorElement>)}
          style={{
            pointerEvents: isClicked ? "none" : "auto",
          }}
        >
          <div className="flex flex-col items-center gap-4">
            <h2
              className="relative text-center text-4xl font-light tracking-tight text-foreground sm:text-5xl md:text-6xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                opacity: isClicked ? 0 : 1,
                transform: isClicked ? "translateY(-40px) scale(0.95)" : "translateY(0) scale(1)",
              }}
            >
              <span className="block overflow-hidden">
                <span
                  className="block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    transform: isHovered && !isClicked ? "translateY(-8%)" : "translateY(0)",
                  }}
                >
                  Let&apos;s work
                </span>
              </span>
              <span className="block overflow-hidden">
                <span
                  className="block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-75"
                  style={{
                    transform: isHovered && !isClicked ? "translateY(-8%)" : "translateY(0)",
                  }}
                >
                  <span className="text-muted-foreground/60">together</span>
                </span>
              </span>
            </h2>

            <div className="relative mt-3 flex size-14 items-center justify-center sm:size-16">
              <div
                className="pointer-events-none absolute inset-0 rounded-full border transition-all ease-out"
                style={{
                  borderColor: isClicked ? "var(--foreground)" : isHovered ? "var(--foreground)" : "var(--border)",
                  backgroundColor: isClicked ? "transparent" : isHovered ? "var(--foreground)" : "transparent",
                  transform: isClicked ? "scale(3)" : isHovered ? "scale(1.1)" : "scale(1)",
                  opacity: isClicked ? 0 : 1,
                  transitionDuration: isClicked ? "700ms" : "500ms",
                }}
              />
              <ArrowUpRight
                className="size-6 transition-all ease-[cubic-bezier(0.16,1,0.3,1)] sm:size-7"
                style={{
                  transform: isClicked
                    ? "translate(100px, -100px) scale(0.5)"
                    : isHovered
                      ? "translate(2px, -2px)"
                      : "translate(0, 0)",
                  opacity: isClicked ? 0 : 1,
                  color: isHovered && !isClicked ? "var(--background)" : "var(--foreground)",
                  transitionDuration: isClicked ? "600ms" : "500ms",
                }}
              />
            </div>
          </div>

          <div className="absolute -left-8 top-1/2 -translate-y-1/2 sm:-left-16">
            <div
              className="h-px w-8 bg-border transition-all duration-500 sm:w-12"
              style={{
                transform: isClicked ? "scaleX(0) translateX(-20px)" : isHovered ? "scaleX(1.5)" : "scaleX(1)",
                opacity: isClicked ? 0 : isHovered ? 1 : 0.5,
              }}
            />
          </div>
          <div className="absolute -right-8 top-1/2 -translate-y-1/2 sm:-right-16">
            <div
              className="h-px w-8 bg-border transition-all duration-500 sm:w-12"
              style={{
                transform: isClicked ? "scaleX(0) translateX(20px)" : isHovered ? "scaleX(1.5)" : "scaleX(1)",
                opacity: isClicked ? 0 : isHovered ? 1 : 0.5,
              }}
            />
          </div>
        </div>

        <div
          className="mt-8 flex flex-col items-center gap-4 text-center transition-all duration-500 delay-100"
          style={{
            opacity: isClicked ? 0 : 1,
            transform: isClicked ? "translateY(20px)" : "translateY(0)",
            pointerEvents: isClicked ? "none" : "auto",
          }}
        >
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s create something exceptional together.
          </p>
          <span className="text-xs tracking-widest uppercase text-muted-foreground/60">
            RAHULPODUGU2@GMAIL.COM
          </span>

          {/* Social links */}
          <div className="mt-5 flex items-center justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/rahulpodugu/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/70 text-accent-gray shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-white/70 hover:text-accent-white hover:shadow-[0_0_18px_rgba(148,163,184,0.5)]"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/Rahul2251999"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/70 text-accent-gray shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-white/70 hover:text-accent-white hover:shadow-[0_0_18px_rgba(148,163,184,0.5)]"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/rahulku67492929"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/70 text-accent-gray shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-white/70 hover:text-accent-white hover:shadow-[0_0_18px_rgba(148,163,184,0.5)]"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/rahul_podugu/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/70 text-accent-gray shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-white/70 hover:text-accent-white hover:shadow-[0_0_18px_rgba(248,113,113,0.5)]"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://leetcode.com/u/rahulpodugu2/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/70 text-accent-gray shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-white/70 hover:text-accent-white hover:shadow-[0_0_18px_rgba(250,204,21,0.5)]"
            >
              <Code2 className="h-5 w-5" />
            </a>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
