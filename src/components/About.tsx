import { useCallback, useState } from 'react';

import { AnimatedDownload } from './ui/animated-download';
import { Button } from './ui/button';

export function About() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleStartDownload = useCallback(() => {
    if (isDownloading) return;
    setIsDownloading(true);
  }, [isDownloading]);

  const handleAnimationComplete = useCallback(() => {
    setIsDownloading(false);
    const resumeUrl = 'Resume.pdf';
    const anchor = document.createElement('a');
    anchor.href = resumeUrl;
    anchor.download = 'Rahul_Podugu_Resume.pdf';
    anchor.target = '_blank';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }, []);

  return (
    <section className="section py-24 bg-pure-black" id="about">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-4xl px-0 md:px-4 lg:px-6">
          <h2 className="text-left text-lg md:text-4xl font-bold text-accent-white mb-4">About Me</h2>
          <p className="text-left text-accent-gray text-sm md:text-base max-w-2xl">
            A quick look at how I think, build, and collaborate as a software engineer.
          </p>
        </div>

        <div className="mx-auto max-w-4xl px-0 md:px-4 lg:px-6">
          <div className="space-y-6 text-accent-gray leading-relaxed">
            <p>
              This portfolio is the map of a builder who chases quiet confidence. I am drawn to messy systems, not for the chaos, but for the chance to trace the signal inside the noise and leave teams with something sturdier than before.
            </p>
            <p>
              I grew up in India sketching circuits in notebooks and searching for patterns in every puzzle I could find. Graduate study at UMBC pulled that curiosity into distributed systems, cloud primitives, and applied machine intelligence. Each project here is a chapter from that move across continents, disciplines, and perspectives.
            </p>
            <p>
              Today, at Aztra, I steward payment and analytics platforms that run around the clock. The work blends patient systems thinking with collaborative rituals—pairing with product partners, mentoring teammates, and stringing together architectures that keep trust intact even under stress.
            </p>
            <p>
              Away from delivery sprints, I write, share what I learn, and keep experimenting with open source ideas that stretch my point of view. The story is still being written, and I am always searching for the next frontier where thoughtful engineering can create calm for the people who rely on it.
            </p>
          </div>

          <div className="mt-10 space-y-5 rounded-2xl border border-border/60 bg-background/40 p-6">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-accent-gray">Resume</h3>
              <p className="text-sm text-accent-gray">
                Launch the download to grab a fresh PDF after a quick systems-style status animation.
              </p>
            </div>
            <Button
              onClick={handleStartDownload}
              disabled={isDownloading}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-border/60 bg-background/70 px-5 py-3 text-sm font-medium text-accent-white transition-all duration-300 hover:-translate-y-1 hover:bg-background hover:border-accent-white/40 focus:outline-none focus:ring-2 focus:ring-accent-white/50 focus:ring-offset-2 focus:ring-offset-pure-black"
              variant="outline"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {isDownloading ? 'Preparing download...' : 'Download Resume'}
            </Button>
            <AnimatedDownload
              className="w-full"
              width="100%"
              isAnimating={isDownloading}
              onAnimationComplete={handleAnimationComplete}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
