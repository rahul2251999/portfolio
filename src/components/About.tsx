"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { AnimatedDownload } from "./ui/animated-download";
import { cn } from "@/lib/utils";

const NARRATIVE = `I am drawn to messy systems, not for the chaos, but for the chance to trace the signal inside the noise. Today, I steward platforms that run around the clock, stringing together architectures that keep trust intact even under extreme stress. Building calm for the people who rely on it.`;

function GlowingBentoCard({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group relative overflow-hidden rounded-[2rem] border border-white/[0.05] bg-[#050505] p-8 md:p-12 transition-colors duration-500 hover:border-white/[0.1] hover:bg-[#0a0a0a]",
        className
      )}
    >
      {/* Subtle radial gradient that tracks hover could go here, for now a static glow */}
      <div className="absolute -inset-px bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
      <div className="relative z-10 h-full flex flex-col justify-between">
        {children}
      </div>
    </motion.div>
  );
}

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleStartDownload = useCallback(() => {
    if (isDownloading) return;
    setIsDownloading(true);
  }, [isDownloading]);

  const handleAnimationComplete = useCallback(() => {
    setIsDownloading(false);
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
    const resumeUrl = `${basePath}/Resume.pdf`.replace(/\/\/+/g, '/');
    const a = document.createElement('a');
    a.href = resumeUrl;
    a.download = 'Rahul_Podugu_Resume.pdf';
    a.rel = 'noopener noreferrer';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }, []);

  return (
    <section ref={containerRef} className="relative z-20 bg-[#000000] py-32 md:py-48" id="about">
      <div className="mx-auto max-w-[90rem] px-6 md:px-12 w-full">
        
        {/* Minimal Section Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24 flex items-center gap-4"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-accent-gray">01. Identity</span>
          <div className="h-[1px] w-12 bg-white/10" />
        </motion.div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 auto-rows-min">
          
          {/* Main Narrative Card */}
          <GlowingBentoCard className="md:col-span-8 md:row-span-2" delay={0.1}>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-accent-gray/60 mb-8">
                The Philosophy
              </h3>
              <p className="text-2xl md:text-4xl lg:text-[2.75rem] font-bold text-accent-white/90 leading-[1.3] md:leading-[1.2] tracking-tight">
                {NARRATIVE}
              </p>
            </div>
          </GlowingBentoCard>

          {/* Metric 1 */}
          <GlowingBentoCard className="md:col-span-4" delay={0.2}>
            <div className="flex flex-col h-full justify-center">
              <span className="text-6xl md:text-7xl font-bold tracking-tighter text-white mb-2">02<span className="text-accent-gray/40">+</span></span>
              <span className="text-xs uppercase tracking-[0.2em] text-accent-gray/60 font-bold">Years Engineering</span>
            </div>
          </GlowingBentoCard>

          {/* Download Action Card */}
          <GlowingBentoCard className="md:col-span-4 bg-white/[0.02] border-white/[0.1] hover:bg-white/[0.04]" delay={0.3}>
            <div className="flex flex-col h-full justify-between gap-8 relative">
              <span className="text-xs uppercase tracking-[0.2em] text-accent-gray/60 font-bold">
                Documentation
              </span>
              
              <div className="w-full flex justify-center py-4">
                <button
                  onClick={handleStartDownload}
                  disabled={isDownloading}
                  className="group relative flex h-24 w-full items-center justify-center rounded-2xl border border-white/20 bg-transparent transition-all duration-500 hover:border-white focus:outline-none overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white scale-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:scale-y-100 origin-bottom" />
                  <span className="relative z-10 text-[11px] tracking-[0.3em] uppercase font-bold text-accent-white transition-colors duration-500 group-hover:text-black">
                    {isDownloading ? "Preparing..." : "Get Resume"}
                  </span>
                </button>
              </div>

              {/* The existing animated download bar below */}
              <div className="absolute bottom-0 left-0 right-0 h-1">
                <AnimatedDownload isAnimating={isDownloading} onAnimationComplete={handleAnimationComplete} width="100%" />
              </div>
            </div>
          </GlowingBentoCard>

        </div>
      </div>
    </section>
  );
}
