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
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        <motion.div
          style={{ opacity: opacity1, y: y1, skewY }}
          className="w-full max-w-[90rem] px-6 md:px-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
        >
          <div className="flex flex-col">
            <motion.span
              className="text-xs md:text-sm text-accent-gray mb-4 uppercase tracking-[0.35em]"
              initial={{ opacity: 0, x: -20 }}
              animate={mounted ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              Software &amp; AI Engineer
            </motion.span>
            <motion.h1
              className="text-7xl md:text-[8rem] lg:text-[11rem] leading-[0.82] font-bold tracking-tighter text-accent-white"
              initial={{ opacity: 0, filter: "blur(12px)", y: 40 }}
              animate={mounted ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            >
              RAHUL
              <br />
              <span className="text-accent-gray">PODUGU.</span>
            </motion.h1>
          </div>
          <motion.div 
            className="max-w-xs text-left md:text-right hidden md:block pb-4"
            initial={{ opacity: 0 }}
            animate={mounted ? { opacity: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.4 }}
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
          <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-accent-white leading-[0.95] tracking-tight">
            I design calm, <br/>
            <span className="text-accent-gray">reliable systems.</span>
          </h2>
          <div className="mt-8 h-[1px] w-16 bg-white/20" />
          <p className="text-accent-gray mt-8 text-lg md:text-xl font-light leading-relaxed max-w-xl">
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
          <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-accent-white leading-[0.95] tracking-tight">
            Bridging AI, <br/>
            <span className="text-accent-gray">data, &amp; platforms.</span>
          </h2>
          <div className="mt-8 h-[1px] w-16 bg-white/20 ml-0 md:ml-auto" />
          <p className="text-accent-gray mt-8 text-lg md:text-xl font-light leading-relaxed max-w-xl ml-auto">
            Turning research, infrastructure, and product constraints into resilient systems that stay profoundly calm under load.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
