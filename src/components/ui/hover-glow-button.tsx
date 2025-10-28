"use client";

import { MouseEvent, ReactNode, useRef, useState } from "react";

interface HoverButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  glowColor?: string;
  backgroundColor?: string;
  textColor?: string;
  hoverTextColor?: string;
}

export function HoverButton({
  children,
  onClick,
  className = "",
  disabled = false,
  glowColor = "#00ffc3",
  backgroundColor = "#111827",
  textColor = "#ffffff",
  hoverTextColor = "#67e8f9",
}: HoverButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event: MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setGlowPosition({ x: event.clientX - rect.left, y: event.clientY - rect.top });
  };

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      disabled={disabled}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative inline-block overflow-hidden rounded-lg px-6 py-3 text-lg font-semibold transition-colors duration-300 ${
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
      } ${className}`}
      style={{
        backgroundColor,
        color: isHovered ? hoverTextColor : textColor,
      }}
    >
      <div
        className={`pointer-events-none absolute h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 transform-gpu rounded-full opacity-50 transition-transform duration-300 ${
          isHovered ? "scale-110" : "scale-0"
        }`}
        style={{
          left: glowPosition.x,
          top: glowPosition.y,
          background: `radial-gradient(circle, ${glowColor} 10%, transparent 70%)`,
          zIndex: 0,
        }}
      />
      <span className="relative z-[1] inline-flex items-center gap-2">{children}</span>
    </button>
  );
}
