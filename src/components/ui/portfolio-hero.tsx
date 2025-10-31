import { useState, useEffect, useRef, useMemo } from "react";
import { Code, Github, Instagram, Linkedin } from "lucide-react";
import profile from "@/assets/image1.png";

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
      { Icon: Linkedin, href: "https://www.linkedin.com/in/rahulpodugu", label: "LinkedIn profile", isX: false },
      { Icon: Github, href: "https://github.com/Rahul2251999", label: "GitHub profile", isX: false },
      { Icon: null, href: "http://x.com/rahulku67492929", label: "X profile", isX: true },
      { Icon: Instagram, href: "https://www.instagram.com/rahul_podugu/", label: "Instagram profile", isX: false },
      { Icon: Code, href: "https://leetcode.com/u/rahulpodugu2/", label: "LeetCode profile", isX: false },
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

        <div className="absolute left-1/2 bottom-4 z-20 w-full -translate-x-1/2 px-6 sm:bottom-8 md:bottom-12 lg:bottom-16 xl:bottom-20">
          <div className="flex flex-col items-center gap-6">
            <div className="flex justify-center">
              <BlurText
                text="Building Reliable Backend Systems."
                delay={150}
                animateBy="words"
                direction="top"
                className="text-center text-[15px] text-neutral-400 transition-colors duration-300 hover:text-white sm:text-[18px] md:text-[20px] lg:text-[22px]"
                style={{ fontFamily: "'Antic', sans-serif" }}
              />
            </div>
            <div className="flex flex-wrap justify-center gap-3 relative z-30">
              {socialIcons.map(({ Icon, href, label, isX }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="relative z-30 pointer-events-auto flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-black/60 text-neutral-300 transition-all duration-200 hover:-translate-y-1 hover:border-white/60 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-black cursor-pointer"
                >
                  {isX ? (
                    <XLogo size={18} className="text-current" />
                  ) : (
                    Icon && <Icon size={18} />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
