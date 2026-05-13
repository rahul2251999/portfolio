"use client";

import { motion, useScroll, useTransform, useVelocity, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Overlay() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 2100); // fires just after boot loader
    return () => clearTimeout(t);
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Tighter scroll velocity → subtle, grounded skew on hero panels
  const scrollVelocity = useVelocity(scrollY);
  const skewVelocity = useSpring(scrollVelocity, { stiffness: 800, damping: 100 });
  const skewY = useTransform(skewVelocity, [-3000, 3000], [-1.5, 1.5]);

  // Section 1: Center (0-20%) — keep name fully visible on first frame
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.25, 0.3], [1, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.3], [0, -100]);

  // Section 2: Left (30-50%)
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.5, 0.6], [0, 1, 1, 0]);
  const x2 = useTransform(scrollYProgress, [0.3, 0.6], [-50, 0]);

  // Section 3: Right (60-80%)
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.85, 0.95], [0, 1, 1, 0]);
  const x3 = useTransform(scrollYProgress, [0.6, 0.9], [50, 0]);

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 z-10 h-[500vh]">
      {/* Section 1: The Editorial Hero */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Blueprint HUD: Left */}
        <motion.div 
          className="absolute bottom-8 left-6 md:bottom-12 md:left-12 flex flex-col gap-1 text-[9px] uppercase tracking-[0.4em] text-accent-gray/50"
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 2.2 }}
        >
          <span>LAT 39.2904</span>
          <span>LNG -76.6122</span>
          <span className="text-accent-white/40 mt-1 md:mt-2">BALTIMORE / MD</span>
        </motion.div>

        {/* Blueprint HUD: Right */}
        <motion.div 
          className="absolute bottom-8 right-6 md:bottom-12 md:right-12 flex flex-col items-end gap-1 text-[9px] uppercase tracking-[0.4em] text-accent-gray/50"
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 2.4 }}
        >
          <span>SYS.ONLINE</span>
          <span>VER 2.0.26</span>
          <div className="flex items-center gap-2 mt-1 md:mt-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            <span className="text-accent-white/40">SYSTEM OPTIMAL</span>
          </div>
        </motion.div>



        <motion.div
          style={{ opacity: opacity1, y: y1, skewY }}
          className="w-full max-w-[90rem] px-6 md:px-12 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mt-12 md:mt-0"
        >
          <div className="flex flex-col">
            

            {/* Cinematic Line-Masking Title */}
            <div className="flex flex-col">
              <div className="overflow-hidden pb-1 md:pb-2">
                <motion.h1
                  className="text-6xl sm:text-[6rem] md:text-[8rem] lg:text-[11rem] leading-[0.85] font-bold tracking-tighter text-accent-white"
                  initial={{ y: "100%" }}
                  animate={mounted ? { y: 0 } : {}}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                >
                  RAHUL
                </motion.h1>
              </div>
              <div className="overflow-hidden pt-1 md:pt-2 pb-2 md:pb-4">
                <motion.h1
                  className="text-6xl sm:text-[6rem] md:text-[8rem] lg:text-[11rem] leading-[0.85] font-bold tracking-tighter text-accent-gray"
                  initial={{ y: "-100%" }}
                  animate={mounted ? { y: 0 } : {}}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                >
                  PODUGU.
                </motion.h1>
              </div>
            </div>
            
            <motion.span
              className="text-[10px] md:text-xs text-accent-gray mt-4 md:mt-6 uppercase tracking-[0.45em] ml-1 md:ml-2 font-bold"
              initial={{ opacity: 0 }}
              animate={mounted ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1 }}
            >
              Software &amp; AI Engineer
            </motion.span>
          </div>

          <motion.div 
            className="max-w-xs text-left lg:text-right hidden lg:block pb-12"
            initial={{ opacity: 0, x: 20 }}
            animate={mounted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
          >
            <p className="text-sm text-accent-gray leading-relaxed">
              Architecting high-tier digital experiences. <br/> Rejecting the obvious. Building calm.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Section 2: Statement One */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-start px-6 md:px-12 lg:px-24">
        <motion.div
          style={{ opacity: opacity2, x: x2, skewY }}
          className="max-w-2xl"
        >
          <h2 className="text-4xl md:text-7xl lg:text-[5.5rem] font-bold text-accent-white leading-[0.95] tracking-tight">
            I design calm, <br/>
            <span className="text-accent-gray">reliable systems.</span>
          </h2>
          <div className="mt-8 h-[1px] w-16 bg-white/20" />
          <p className="text-accent-gray mt-8 text-base md:text-xl font-light leading-relaxed max-w-xl">
            From payment rails to AI analytics, I focus on predictable latency, clear observability, and architectures teams can trust implicitly.
          </p>
        </motion.div>
      </div>

      {/* Section 3: Statement Two */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-end px-6 md:px-12 lg:px-24">
        <motion.div
          style={{ opacity: opacity3, x: x3, skewY }}
          className="max-w-2xl text-left md:text-right"
        >
          <h2 className="text-4xl md:text-7xl lg:text-[5.5rem] font-bold text-accent-white leading-[0.95] tracking-tight">
            Bridging AI, <br/>
            <span className="text-accent-gray">data, &amp; platforms.</span>
          </h2>
          <div className="mt-8 h-[1px] w-16 bg-white/20 ml-0 md:ml-auto" />
          <p className="text-accent-gray mt-8 text-base md:text-xl font-light leading-relaxed max-w-xl ml-0 md:ml-auto">
            Turning research, infrastructure, and product constraints into resilient systems that stay profoundly calm under load.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
