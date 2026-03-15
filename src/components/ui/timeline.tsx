"use client";

import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

function TimelineItem({ item }: { item: TimelineEntry; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px -15% 0px" });

  return (
    <div
      ref={ref}
      className="flex justify-start pt-10 md:pt-40 md:gap-10"
    >
      {/* Left sticky column: dot + title */}
      <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
        {/* Dot */}
        <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-pure-black flex items-center justify-center">
          <motion.div
            animate={
              isInView
                ? { scale: 1, backgroundColor: "#ffffff", boxShadow: "0 0 0 6px rgba(255,255,255,0.08)" }
                : { scale: 1, backgroundColor: "#2a2a2a", boxShadow: "0 0 0 0px rgba(255,255,255,0)" }
            }
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="h-4 w-4 rounded-full border border-medium-gray"
          />
        </div>

        {/* Title — slides in from left */}
        <motion.h3
          initial={{ opacity: 0, x: -28 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -28 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-accent-white"
        >
          {item.title}
        </motion.h3>
      </div>

      {/* Right content column — slides in from right */}
      <div className="relative pl-20 pr-4 md:pl-4 w-full">
        <motion.h3
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="md:hidden block text-2xl mb-4 text-left font-bold text-accent-white"
        >
          {item.title}
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          {item.content}
        </motion.div>
      </div>
    </div>
  );
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 15%", "end 60%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <div className="w-full font-sans" ref={containerRef}>
      <div ref={ref} className="relative mx-auto max-w-6xl pb-20 px-4 md:px-8 lg:px-10">
        {data.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}

        {/* Scroll-driven fill line */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-medium-gray to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-accent-white via-accent-gray to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
