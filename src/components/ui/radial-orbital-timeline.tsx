"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { ElementType } from "react";
import { Badge } from "@/components/ui/badge";

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

export default function RadialOrbitalTimeline({ timelineData }: RadialOrbitalTimelineProps) {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [activeId, setActiveId] = useState<number | null>(timelineData[0]?.id ?? null);

  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  useEffect(() => {
    if (!autoRotate) return;
    const timer = setInterval(() => {
      setRotationAngle((prev) => Number(((prev + 0.3) % 360).toFixed(3)));
    }, 50);
    return () => clearInterval(timer);
  }, [autoRotate]);

  const handleActivate = (id: number) => {
    setActiveId(id);
    setAutoRotate(false);
  };

  const handleDeactivate = () => {
    setAutoRotate(true);
  };

  const activeItem = useMemo(
    () => timelineData.find((item) => item.id === activeId) ?? timelineData[0],
    [activeId, timelineData],
  );

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 200;
    const radian = (angle * Math.PI) / 180;
    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);
    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2)));
    return { x, y, angle, zIndex, opacity };
  };

  return (
    <div
      className="relative mx-auto flex h-[620px] w-full max-w-5xl items-center justify-center px-6"
      onMouseLeave={handleDeactivate}
    >
      <div className="relative flex h-[600px] w-full max-w-4xl items-center justify-center overflow-visible rounded-[2.5rem] border border-white/10 bg-black">
        <div className="pointer-events-none absolute h-16 w-16 animate-pulse rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500" />
        <div className="pointer-events-none absolute h-96 w-96 rounded-full border border-white/10" />

        {timelineData.map((item, index) => {
          const position = calculateNodePosition(index, timelineData.length);
          const isActive = activeItem?.id === item.id;
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              ref={(el) => (nodeRefs.current[item.id] = el)}
              className="absolute cursor-pointer transition-all duration-700"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)` ,
                zIndex: isActive ? 200 : position.zIndex,
                opacity: isActive ? 1 : position.opacity,
              }}
              onMouseEnter={() => handleActivate(item.id)}
              onClick={(e) => {
                e.stopPropagation();
                handleActivate(item.id);
              }}
            >
              <div
                className={`absolute -inset-1 rounded-full ${isActive ? "animate-pulse" : ""}`}
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)",
                  width: `${item.energy * 0.5 + 40}px`,
                  height: `${item.energy * 0.5 + 40}px`,
                  left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                  top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                }}
              />

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition-transform duration-300 ${
                  isActive
                    ? "scale-150 border-white bg-white text-black shadow-lg shadow-white/30"
                    : "border-white/40 bg-black text-white hover:scale-110"
                }`}
              >
                <Icon size={18} />
              </div>

              <div
                className={`absolute top-14 whitespace-nowrap text-xs font-semibold tracking-wider transition-all duration-300 ${
                  isActive ? "scale-125 text-white" : "text-white/70"
                }`}
              >
                {item.title}
              </div>
            </div>
          );
        })}

        {activeItem && (
          <div className="pointer-events-none absolute right-[-10rem] top-1/2 hidden -translate-y-1/2 lg:flex">
            <div className="skill-card-spin">
              <div className="skill-card-spin-inner pointer-events-auto flex w-80 flex-col items-center gap-3 rounded-3xl border border-white/25 bg-[rgba(0,0,0,0.95)] px-8 py-6 text-center shadow-[0_25px_70px_rgba(0,0,0,0.6)]">
                <Badge className="border-white/40 bg-black/60 text-white/80">{activeItem.category}</Badge>
                <h3 className="text-xl font-semibold text-accent-white">{activeItem.title}</h3>
                {activeItem.skills && activeItem.skills.length > 0 && (
                  <div className="flex max-w-xs flex-wrap justify-center gap-2 text-xs text-white/70">
                    {activeItem.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/20 bg-white/10 px-3 py-1"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
