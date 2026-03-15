"use client";

import { useScroll, useSpring, motion } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[99997] h-[2px] origin-left"
      style={{
        scaleX,
        background:
          "linear-gradient(90deg, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.9) 100%)",
      }}
    />
  );
}
