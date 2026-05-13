"use client";

import { motion } from "framer-motion";
import { GlowingEffectDemo } from "./ui/glowing-effect-demo";

export default function Projects() {
  return (
    <section className="relative z-20 bg-pure-black py-32 md:py-48 px-6 md:px-12" id="projects">
      <div className="max-w-[90rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-24 md:mb-32 flex flex-col items-start"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-accent-gray font-medium">Recent Builds</span>
          <h2 className="mt-6 text-5xl md:text-7xl font-bold text-accent-white tracking-tight leading-[1.05]">
            Systems I&apos;m excited <br className="hidden md:block" /> to have shipped.
          </h2>
          <p className="mt-6 max-w-2xl text-lg md:text-xl font-light text-accent-gray leading-relaxed">
            Distributed rails, real-time engines, and AI copilots that keep teams calm when the load spikes.
          </p>
          <div className="mt-12 h-[1px] w-16 bg-white/20" />
        </motion.div>

        <GlowingEffectDemo />
      </div>
    </section>
  );
}
