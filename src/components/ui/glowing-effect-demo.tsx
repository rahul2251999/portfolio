"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import type React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Box, Database, GitBranch, Layers } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import finsightImage from "../../../Projects images/Finsight.png";
import decentralizedImage from "../../../Projects images/decentralised.png";
import chatbotImage from "../../../Projects images/chatbot.png";
import cacheImage from "../../../Projects images/cache.png";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export function GlowingEffectDemo() {
  return (
    <motion.ul
      className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      <GridItem
        icon={<Database className="h-4 w-4 text-emerald-400" />}
        title="FinSight AI"
        description="An AWS-native RAG engine combining FastAPI, LlamaIndex, and OpenSearch Serverless to surface real-time risk signals from payment regulations and fraud narratives."
        meta="AWS-native fintech RAG platform with real-time risk intelligence"
        tags={["AWS", "RAG", "LLM", "SageMaker"]}
        repoUrl="https://github.com/rahul2251999/FinSight-AI"
        imageSrc={finsightImage as string}
      />
      <GridItem
        icon={<GitBranch className="h-4 w-4 text-sky-400" />}
        title="Decentralized File Sharing System"
        description="Peer-to-peer file sharing with RSA/AES encryption and a distributed hash table so neighbors can discover each other quickly and securely."
        meta="Distributed storytelling about trust, speed, and resilience"
        tags={["Java", "Peer to Peer", "Encryption"]}
        repoUrl="https://github.com/rahul2251999/Peer-to-Peer-Secured-File-System"
        imageSrc={decentralizedImage as string}
      />
      <GridItem
        icon={<Box className="h-4 w-4 text-purple-400" />}
        title="AI Customer Support Chatbot"
        description="An AI assistant on Azure with custom NLP pipelines that handles 1,000+ daily incidents through contextual, multi-turn conversations."
        meta="Conversational systems grounded in context and empathy"
        tags={["AI", "NLP", "Azure"]}
        repoUrl="https://github.com/rahul2251999/AI-Powered-Customer-Support-Chatbot"
        imageSrc={chatbotImage as string}
      />
      <GridItem
        icon={<Layers className="h-4 w-4 text-amber-300" />}
        title="Distributed Cache System"
        description="A Redis-backed distributed cache with consistent hashing that keeps services responsive even as nodes ebb and flow across the cluster."
        meta="Clustered caching that embraces graceful failover"
        tags={["Redis", "Distributed", "Cache"]}
        repoUrl="https://github.com/rahul2251999/Distributed-Cache-System"
        imageSrc={cacheImage as string}
      />
    </motion.ul>
  );
}

interface GridItemProps {
  icon: ReactNode;
  title: string;
  description: ReactNode;
  meta?: string;
  tags?: string[];
  repoUrl?: string;
  imageSrc?: string | { src: string };
}

const GridItem = ({ icon, title, description, tags, repoUrl, imageSrc }: GridItemProps) => {
  const resolvedImageSrc =
    typeof imageSrc === "string" ? imageSrc : imageSrc?.src;

  const cardRef = useRef<HTMLLIElement>(null);
  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);
  const rotateX = useSpring(rawRotateX, { stiffness: 220, damping: 22 });
  const rotateY = useSpring(rawRotateY, { stiffness: 220, damping: 22 });

  const onMouseMove = (e: React.MouseEvent<HTMLLIElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    rawRotateY.set(x * 14);
    rawRotateX.set(-y * 9);
  };

  const onMouseLeave = () => {
    rawRotateX.set(0);
    rawRotateY.set(0);
  };

  return (
    <motion.li
      ref={cardRef}
      variants={cardVariants}
      className={cn("min-h-[20rem] list-none group")}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-2xl border-[0.75px] bg-background shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]">
          {/* Image panel — full bleed, gradient fade at bottom */}
          {resolvedImageSrc ? (
            <div className="relative h-44 w-full overflow-hidden bg-black">
              <img
                src={resolvedImageSrc}
                alt={title}
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
              {/* gradient overlay — image bleeds into card */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
            </div>
          ) : (
            <div className="h-36 w-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.14),_transparent_60%)]" />
          )}

          <div className="relative flex flex-1 flex-col justify-between gap-4 px-6 pb-6">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl font-sans font-semibold leading-[1.375rem] tracking-[-0.04em] text-balance text-foreground md:text-2xl md:leading-[1.875rem]">
                {title}
              </h3>
              <p className="font-sans text-sm leading-[1.25rem] text-muted-foreground md:text-[0.95rem] md:leading-[1.4rem]">
                {description}
              </p>
              {tags && tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-black/40 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-accent-gray"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {repoUrl && (
              <div className="mt-2 flex items-center justify-between text-sm font-medium text-accent-white border-t border-border/40 pt-4">
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs md:text-sm opacity-60 transition-opacity duration-200 hover:opacity-100"
                >
                  <span>View Repository</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.li>
  );
};
