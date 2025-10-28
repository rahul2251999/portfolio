import { useState, useEffect, useRef, useMemo } from "react";
import profile from "@/assets/image1.png";

interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  className?: string;
  style?: React.CSSProperties;
}

const BlurText = ({
  text,
  delay = 50,
  animateBy = "words",
  direction = "top",
  className = "",
  style,
}: BlurTextProps) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const segments = useMemo(
    () => (animateBy === "words" ? text.split(" ") : text.split("")),
    [text, animateBy],
  );

  return (
    <p ref={ref} className={`flex flex-wrap ${className}`} style={style}>
      {segments.map((segment, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            filter: inView ? "blur(0px)" : "blur(10px)",
            opacity: inView ? 1 : 0,
            transform: inView
              ? "translateY(0)"
              : `translateY(${direction === "top" ? "-20px" : "20px"})`,
            transition: `all 0.5s ease-out ${i * delay}ms`,
          }}
        >
          {segment}
          {animateBy === "words" && i < segments.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </p>
  );
};

export function PortfolioHero() {
  const isDark = true;

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div
      id="hero"
      className="min-h-screen transition-colors"
      style={{
        backgroundColor: isDark ? "hsl(0 0% 0%)" : "hsl(0 0% 98%)",
        color: isDark ? "hsl(0 0% 100%)" : "hsl(0 0% 10%)",
      }}
    >
      <main className="relative flex min-h-screen flex-col">
        <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-4">
          <div className="relative text-center">
            <BlurText
              text="RAHUL"
              delay={90}
              animateBy="letters"
              direction="top"
              className="justify-center whitespace-nowrap font-bold leading-[0.75] tracking-tighter text-[110px] text-lime-300 sm:text-[160px] md:text-[210px] lg:text-[240px]"
              style={{ fontFamily: "'Fira Code', monospace" }}
            />
            <BlurText
              text="PODUGU"
              delay={90}
              animateBy="letters"
              direction="top"
              className="justify-center whitespace-nowrap font-bold leading-[0.75] tracking-tighter text-[110px] text-lime-300 sm:text-[160px] md:text-[210px] lg:text-[240px]"
              style={{ fontFamily: "'Fira Code', monospace" }}
            />

            <div className="absolute left-1/2 top-1/2 z-10 h-[120px] w-[70px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full shadow-2xl transition-transform duration-300 hover:scale-110 sm:h-[160px] sm:w-[95px] md:h-[190px] md:w-[115px] lg:h-[225px] lg:w-[135px]">
              <img src={profile} alt="Rahul Podugu" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>

        <div className="absolute left-1/2 bottom-16 w-full -translate-x-1/2 px-6 sm:bottom-20 md:bottom-24 lg:bottom-32 xl:bottom-36">
          <div className="flex justify-center">
            <BlurText
              text="Software Engineer."
              delay={150}
              animateBy="words"
              direction="top"
              className="text-center text-[15px] text-neutral-400 transition-colors duration-300 hover:text-white sm:text-[18px] md:text-[20px] lg:text-[22px]"
              style={{ fontFamily: "'Antic', sans-serif" }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
