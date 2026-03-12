"use client";

import { motion } from "framer-motion";
import { GlowingEffectDemo } from "./ui/glowing-effect-demo";

export default function Projects() {
  return (
    <section className="relative z-20 bg-pure-black pt-24 pb-24 px-6 md:px-12" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-[0.4em] text-accent-gray">Recent Builds</span>
          <h2 className="mt-4 text-3xl font-bold text-accent-white md:text-5xl">
            Systems I&apos;m excited to have shipped
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-sm text-accent-gray md:text-base">
            Distributed rails, real-time engines, and AI copilots that keep teams calm when the load spikes.
          </p>
          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-white/20" />
        </motion.div>

        <GlowingEffectDemo />
      </div>
    </section>
  );
}
