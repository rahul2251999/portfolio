import { useState, useEffect, useRef, useMemo } from "react";
import { Code, Github, Instagram, Linkedin } from "lucide-react";
import profile from "@/assets/image1.png";
import FancyButton from "@/components/ui/shiny-button";
import HeroText from "@/components/ui/hero-shutter-text";

// Custom X Logo Component matching X branding
const XLogo = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="X logo"
  >
    <path
      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      fill="currentColor"
    />
  </svg>
);

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
  const socialIcons = useMemo(
    () => [
      { Icon: Linkedin, href: "https://www.linkedin.com/in/rahulpodugu", label: "LinkedIn profile", variant: "indigo" as const, isX: false },
      { Icon: Github, href: "https://github.com/Rahul2251999", label: "GitHub profile", variant: "default" as const, isX: false },
      { href: "http://x.com/rahulku67492929", label: "X profile", variant: "default" as const, isX: true },
      { Icon: Instagram, href: "https://www.instagram.com/rahul_podugu/", label: "Instagram profile", variant: "red" as const, isX: false },
      { Icon: Code, href: "https://leetcode.com/u/rahulpodugu2/", label: "LeetCode profile", variant: "green" as const, isX: false },
    ],
    [],
  );

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
        <div className="pointer-events-none absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-4">
          <div
            className="relative text-center"
            style={{ fontFamily: "'Fira Code', monospace" }}
          >
            {/* Soft radial glow behind avatar */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(190,242,100,0.5),transparent_65%)] blur-3xl opacity-80 sm:h-[230px] sm:w-[230px] md:h-[260px] md:w-[260px]" />
            <HeroText
              text="RAHUL"
              inline
              characterClassName="text-[110px] sm:text-[160px] md:text-[210px] lg:text-[240px] leading-[0.75] font-bold tracking-tighter text-lime-300"
              className="whitespace-nowrap"
            />
            <div className="relative inline-block">
              <HeroText
                text="PODUGU"
                inline
                characterClassName="text-[110px] sm:text-[160px] md:text-[210px] lg:text-[240px] leading-[0.75] font-bold tracking-tighter text-lime-300"
                className="whitespace-nowrap"
              />
              {/* Underline accent tied to last name */}
              <div className="pointer-events-none mx-auto mt-4 h-[3px] w-32 rounded-full bg-gradient-to-r from-lime-300/0 via-lime-300/80 to-emerald-400/0 sm:w-40 md:w-48" />
            </div>

            <div className="absolute left-1/2 top-1/2 z-10 h-[120px] w-[70px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full shadow-[0_0_40px_rgba(190,242,100,0.35)] ring-2 ring-lime-300/40 transition-transform duration-300 hover:scale-110 sm:h-[160px] sm:w-[95px] md:h-[190px] md:w-[115px] lg:h-[225px] lg:w-[135px]">
              <img src={profile} alt="Rahul Podugu" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>

        <div className="absolute left-1/2 bottom-4 z-20 w-full -translate-x-1/2 px-6 sm:bottom-8 md:bottom-12 lg:bottom-16 xl:bottom-20">
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-3">
              <BlurText
                text="Software Engineer · Backend, Payments, AI Systems"
                delay={70}
                animateBy="words"
                direction="top"
                className="text-center text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] uppercase tracking-[0.3em] bg-gradient-to-r from-lime-300 via-emerald-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(190,242,100,0.35)]"
                style={{ fontFamily: "'Antic', sans-serif" }}
              />
              <BlurText
                text="Designing calm, reliable platforms across payment rails, analytics pipelines, and AI workloads."
                delay={120}
                animateBy="words"
                direction="top"
                className="text-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-neutral-300/90 transition-colors duration-300 hover:text-white max-w-3xl"
                style={{ fontFamily: "'Antic', sans-serif" }}
              />
            </div>
            <div className="flex flex-col items-center gap-2 relative z-30">
              <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.25em] text-neutral-500/80">
                Find me around the web
              </p>
              <div className="flex flex-wrap justify-center gap-4">
              {socialIcons.map(({ Icon, href, label, variant, isX }) => (
                <FancyButton
                  key={label}
                  icon={
                    isX ? (
                      <XLogo size={20} className="text-current" />
                    ) : (
                      Icon && <Icon size={20} className="text-current" />
                    )
                  }
                  variant={variant}
                  ariaLabel={label}
                  onClick={() => window.open(href, '_blank', 'noopener noreferrer')}
                />
              ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
