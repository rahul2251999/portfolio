"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hoverState, setHoverState] = useState<"none" | "link" | "text">("none");

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let rafId: number;
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!visible) setVisible(true);
    };

    const animateCursor = () => {
      // Lerp for smooth trailing
      currentX += (targetX - currentX) * 0.25;
      currentY += (targetY - currentY) * 0.25;
      
      // Velocity calculation
      const velX = targetX - currentX;
      const velY = targetY - currentY;
      const speed = Math.sqrt(velX * velX + velY * velY);
      
      // Angle for rotation (squash and stretch aligned to movement)
      const angle = Math.atan2(velY, velX) * (180 / Math.PI);
      
      // Distortion logic: Faster = longer and thinner
      const scaleX = Math.min(1 + speed * 0.02, 3);
      const scaleY = Math.max(1 - speed * 0.01, 0.3);

      if (cursorRef.current) {
        // We apply translation to the wrapper, and rotation/scale to the inner element
        // to prevent transform origin offset issues.
        cursorRef.current.style.transform = `translate(${currentX}px, ${currentY}px)`;
      }
      
      if (innerRef.current) {
        innerRef.current.style.transform = `translate(-50%, -50%) rotate(${angle}deg) scaleX(${scaleX}) scaleY(${scaleY})`;
      }
      
      rafId = requestAnimationFrame(animateCursor);
    };

    rafId = requestAnimationFrame(animateCursor);

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const onHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], .magnetic")) {
        setHoverState("link");
      } else if (target.closest("h1, h2, h3, p")) {
        setHoverState("text");
      }
    };

    const onHoverEnd = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], .magnetic")) {
        setHoverState("none");
      } else if (target.closest("h1, h2, h3, p")) {
        setHoverState("none");
      }
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseover", onHoverStart);
    document.addEventListener("mouseout", onHoverEnd);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseover", onHoverStart);
      document.removeEventListener("mouseout", onHoverEnd);
    };
  }, [visible]);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[99999] will-change-transform mix-blend-difference"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s ease" }}
    >
      <div
        ref={innerRef}
        className="bg-white"
        style={{
          width: hoverState === "link" ? "64px" : hoverState === "text" ? "4px" : "16px",
          height: hoverState === "link" ? "64px" : hoverState === "text" ? "32px" : "16px",
          borderRadius: hoverState === "text" ? "2px" : "999px",
          transition: "width 0.4s cubic-bezier(0.16,1,0.3,1), height 0.4s cubic-bezier(0.16,1,0.3,1), border-radius 0.4s ease",
        }}
      />
    </div>
  );
}
