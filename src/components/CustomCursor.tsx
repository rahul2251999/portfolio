"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);

  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let rafId: number;
    let ringX = 0;
    let ringY = 0;
    let glowX = 0;
    let glowY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${targetX}px, ${targetY}px) translate(-50%, -50%)`;
      }

      if (!visible) setVisible(true);
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animateRing = () => {
      ringX = lerp(ringX, targetX, 0.12);
      ringY = lerp(ringY, targetY, 0.12);
      glowX = lerp(glowX, targetX, 0.04);
      glowY = lerp(glowY, targetY, 0.04);

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      }

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${glowX}px, ${glowY}px) translate(-50%, -50%)`;
      }

      rafId = requestAnimationFrame(animateRing);
    };

    rafId = requestAnimationFrame(animateRing);

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    const onHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], [data-cursor-hover]")) {
        setHovering(true);
      }
    };

    const onHoverEnd = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], [data-cursor-hover]")) {
        setHovering(false);
      }
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onHoverStart);
    document.addEventListener("mouseout", onHoverEnd);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onHoverStart);
      document.removeEventListener("mouseout", onHoverEnd);
    };
  }, [visible]);

  return (
    <>
      {/* Ambient glow — large soft light that drifts lazily behind cursor */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed left-0 top-0 z-[99990] will-change-transform"
        style={{ opacity: visible ? 1 : 0, transition: "opacity 1s ease" }}
      >
        <div
          style={{
            width: "520px",
            height: "520px",
            borderRadius: "999px",
            background: "radial-gradient(circle, rgba(255,255,255,0.028) 0%, rgba(255,255,255,0.008) 40%, transparent 70%)",
          }}
        />
      </div>

      {/* Dot — snaps to cursor exactly */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[99999] will-change-transform"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        <div
          style={{
            width: clicking ? "5px" : "6px",
            height: clicking ? "5px" : "6px",
            borderRadius: "999px",
            backgroundColor: hovering ? "transparent" : "rgba(255,255,255,0.95)",
            border: hovering ? "1.5px solid rgba(255,255,255,0.9)" : "none",
            transition: "width 0.15s ease, height 0.15s ease, background-color 0.2s ease",
          }}
        />
      </div>

      {/* Ring — lags behind with lerp */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[99998] will-change-transform"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        <div
          style={{
            width: hovering ? "44px" : clicking ? "24px" : "32px",
            height: hovering ? "44px" : clicking ? "24px" : "32px",
            borderRadius: "999px",
            border: `1.5px solid rgba(255,255,255,${hovering ? 0.7 : 0.25})`,
            backgroundColor: hovering ? "rgba(255,255,255,0.04)" : "transparent",
            transition: "width 0.35s cubic-bezier(0.16,1,0.3,1), height 0.35s cubic-bezier(0.16,1,0.3,1), border-color 0.25s ease, background-color 0.25s ease",
          }}
        />
      </div>
    </>
  );
}
