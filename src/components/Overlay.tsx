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

  // Scroll velocity → subtle skew on hero panels
  const scrollVelocity = useVelocity(scrollY);
  const skewVelocity = useSpring(scrollVelocity, { stiffness: 500, damping: 80 });
  const skewY = useTransform(skewVelocity, [-3000, 3000], [-2.5, 2.5]);

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
      {/* Section 1 */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        <motion.div
          style={{ opacity: opacity1, y: y1, skewY }}
          className="text-center px-6"
        >
          <motion.h1
            className="text-5xl md:text-8xl xl:text-9xl font-bold tracking-tighter text-white"
            initial={{ opacity: 0, filter: "blur(12px)", y: 20 }}
            animate={mounted ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            RAHUL PODUGU.
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white/60 mt-4 uppercase tracking-[0.25em]"
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={mounted ? { opacity: 1, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            Software Engineer · Backend &amp; Distributed Systems
          </motion.p>
        </motion.div>
      </div>

      {/* Section 2 */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-start px-12 md:px-24">
        <motion.div
          style={{ opacity: opacity2, x: x2, skewY }}
          className="max-w-xl"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            I design calm, reliable systems.
          </h2>
          <p className="text-white/60 mt-6 text-lg">
            From payment rails to AI analytics, I focus on predictable latency, clear observability, and architectures teams can trust.
          </p>
        </motion.div>
      </div>

      {/* Section 3 */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-end px-12 md:px-24">
        <motion.div
          style={{ opacity: opacity3, x: x3, skewY }}
          className="max-w-xl text-right"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Bridging AI, data, and platforms.
          </h2>
          <p className="text-white/60 mt-6 text-lg">
            Turning research, infrastructure, and product constraints into resilient systems that stay calm under load.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
