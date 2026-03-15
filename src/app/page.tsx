"use client";

import { useEffect, useState } from "react";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { TimelineDemo } from "@/components/TimelineDemo";
import { Contact } from "@/components/Contact";
import { NavBarDemo } from "@/components/NavBarDemo";
import { Logo } from "@/components/Logo";
import { LoadingBreadcrumb } from "@/components/ui/animated-loading-svg-text-shimmer";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import TechMarquee from "@/components/TechMarquee";

export default function Home() {
  const [bootLoading, setBootLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setBootLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen bg-pure-black">
      {/* Boot loading overlay - always visible for at least 2 seconds */}
      {bootLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-pure-black">
          <LoadingBreadcrumb text="Cooking" />
        </div>
      )}

      <Logo />
      <NavBarDemo />
      
      {/* Sticky Hero Section (500vh) */}
      <div className="relative" id="hero">
        <ScrollyCanvas />
        <Overlay />
      </div>

      {/* Main Content Area */}
      <div className="relative z-20">
        <div id="about">
          <About />
        </div>
        
        <TimelineDemo />

        <Projects />

        <TechMarquee />

        <Skills />
        
        <Contact />
      </div>

      <Footer />
      <BackToTop />
    </main>
  );
}
