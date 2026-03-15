"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ElementType } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
  skills?: string[];
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

const RADIUS = 185;   // px from centre to node centre
const RPF    = 0.20;  // degrees rotated per animation frame

export default function RadialOrbitalTimeline({ timelineData }: RadialOrbitalTimelineProps) {
  const total = timelineData.length;

  // ── React state: only for the active item (triggers card swap) ──────────
  const [activeId, setActiveId] = useState<number>(timelineData[0]?.id ?? 1);

  // ── Mutable refs: drive the animation without causing re-renders ─────────
  const activeIdRef = useRef(activeId);
  const pausedRef   = useRef(false);
  const rotRef      = useRef(0);
  const rafRef      = useRef<number>(0);

  const wrapperRefs = useRef<(HTMLDivElement  | null)[]>(Array(total).fill(null));
  const innerRefs   = useRef<(HTMLDivElement  | null)[]>(Array(total).fill(null));
  const labelRefs   = useRef<(HTMLSpanElement | null)[]>(Array(total).fill(null));

  // Keep activeIdRef in sync so the RAF loop reads the latest value
  useEffect(() => { activeIdRef.current = activeId; }, [activeId]);

  // ── Main animation loop ─────────────────────────────────────────────────
  useEffect(() => {
    const tick = () => {
      if (!pausedRef.current) {
        rotRef.current = (rotRef.current + RPF) % 360;
      }

      timelineData.forEach((item, i) => {
        const wrapper = wrapperRefs.current[i];
        if (!wrapper) return;

        const rad     = ((i / total) * 360 + rotRef.current) * (Math.PI / 180);
        const x       = RADIUS * Math.cos(rad);
        const y       = RADIUS * Math.sin(rad);
        const depth   = Math.sin(rad);                             // -1 (back) → 1 (front)
        const isActive = item.id === activeIdRef.current;
        const opacity  = isActive ? 1 : 0.3 + 0.6 * ((1 + depth) / 2);

        // Position — direct DOM, no React state, no CSS transition on wrapper
        wrapper.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
        wrapper.style.opacity   = String(opacity);
        wrapper.style.zIndex    = isActive ? "50" : String(Math.round(10 + 10 * depth));

        // Icon button — CSS transitions only for colour/scale, NOT for position
        const inner = innerRefs.current[i];
        if (inner) {
          if (isActive) {
            inner.style.borderColor     = "rgba(255,255,255,1)";
            inner.style.backgroundColor = "rgba(255,255,255,1)";
            inner.style.color           = "rgba(0,0,0,1)";
            inner.style.transform       = "scale(1.4)";
            inner.style.boxShadow       = "0 0 24px rgba(255,255,255,0.25)";
          } else {
            inner.style.borderColor     = "rgba(255,255,255,0.3)";
            inner.style.backgroundColor = "rgba(0,0,0,1)";
            inner.style.color           = "rgba(255,255,255,1)";
            inner.style.transform       = "scale(1)";
            inner.style.boxShadow       = "none";
          }
        }

        // Label
        const label = labelRefs.current[i];
        if (label) {
          label.style.opacity    = isActive ? "1"   : "0.45";
          label.style.fontWeight = isActive ? "600" : "400";
        }
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [timelineData, total]);

  // ── Interaction handlers ────────────────────────────────────────────────
  const handleActivate = useCallback((id: number) => {
    pausedRef.current   = true;
    activeIdRef.current = id;
    setActiveId(id);
  }, []);

  const handleDeactivate = useCallback(() => {
    pausedRef.current = false;
  }, []);

  const activeItem = timelineData.find(item => item.id === activeId) ?? timelineData[0];

  return (
    <div
      className="relative mx-auto flex w-full max-w-4xl items-center justify-center select-none"
      style={{ height: "500px" }}
      onMouseLeave={handleDeactivate}
    >
      {/* Orbit guide ring */}
      <div
        className="pointer-events-none absolute rounded-full border border-white/[0.07]"
        style={{ width: RADIUS * 2, height: RADIUS * 2 }}
      />
      {/* Inner subtle ring */}
      <div className="pointer-events-none absolute h-8 w-8 rounded-full border border-white/10" />

      {/* ── Orbit nodes ─────────────────────────────────────────────────── */}
      {timelineData.map((item, i) => {
        const Icon = item.icon;
        return (
          <div
            key={item.id}
            ref={el => { wrapperRefs.current[i] = el; }}
            className="absolute left-1/2 top-1/2"
            style={{ willChange: "transform, opacity" }}
            onMouseEnter={() => handleActivate(item.id)}
            onClick={() => handleActivate(item.id)}
          >
            {/* Icon circle */}
            <div
              ref={el => { innerRefs.current[i] = el; }}
              className="flex h-11 w-11 items-center justify-center rounded-full border-2"
              style={{
                borderColor:     "rgba(255,255,255,0.3)",
                backgroundColor: "rgba(0,0,0,1)",
                color:           "rgba(255,255,255,1)",
                cursor:          "pointer",
                transition:      "transform 0.3s cubic-bezier(0.16,1,0.3,1), border-color 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease",
              }}
            >
              <Icon size={16} />
            </div>

            {/* Category label */}
            <span
              ref={el => { labelRefs.current[i] = el; }}
              className="absolute left-1/2 whitespace-nowrap text-[10px] tracking-widest text-white/45 uppercase"
              style={{
                top: "calc(100% + 10px)",
                transform: "translateX(-50%)",
                transition: "opacity 0.25s ease",
              }}
            >
              {item.category}
            </span>
          </div>
        );
      })}

      {/* ── Centre skill card (inside the orbit, animated on active change) ─ */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeItem?.id}
          initial={{ opacity: 0, scale: 0.9, y: 6 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: -6 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-none absolute flex flex-col items-center gap-2 text-center px-2"
          style={{ maxWidth: "210px", zIndex: 5 }}
        >
          <p className="text-[9px] uppercase tracking-[0.35em] text-white/30">
            {activeItem?.category}
          </p>
          <h3 className="text-[15px] font-semibold leading-tight text-white">
            {activeItem?.title}
          </h3>
          {activeItem?.skills && activeItem.skills.length > 0 && (
            <div className="mt-1 flex flex-wrap justify-center gap-1.5">
              {activeItem.skills.slice(0, 8).map(skill => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-0.5 text-[9px] text-white/50"
                >
                  {skill}
                </span>
              ))}
              {activeItem.skills.length > 8 && (
                <span className="rounded-full px-2.5 py-0.5 text-[9px] text-white/25">
                  +{activeItem.skills.length - 8} more
                </span>
              )}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
