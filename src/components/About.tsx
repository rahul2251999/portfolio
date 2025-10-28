import { Github, Instagram, Linkedin, Twitter, Code } from 'lucide-react';
import { AnimatedSocialIcons } from './ui/floating-action-button';

export function About() {
  const socialIcons = [
    { Icon: Github, href: 'https://github.com/rahul2251999', label: 'GitHub profile' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/rahulpodugu/', label: 'LinkedIn profile' },
    { Icon: Instagram, href: 'https://www.instagram.com/rahul_podugu/', label: 'Instagram profile' },
    { Icon: Twitter, href: 'https://x.com/rahulku67492929', label: 'X profile' },
    { Icon: Code, href: 'https://leetcode.com/u/rahulpodugu2/', label: 'LeetCode profile' },
  ];

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
              From a young age, I was always fascinated by how things work—taking apart gadgets, exploring new technologies, and solving puzzles. This curiosity naturally led me to the world of software engineering, where every challenge is a new puzzle waiting to be solved.
            </p>
            <p>
              My journey began in India, where I built a strong foundation in computer science. As I moved to the United States for my master's at UMBC, I dove deeper into distributed systems, cloud computing, and AI. Along the way, I discovered my passion for building scalable, robust solutions that make a real impact—whether it's architecting payment microservices that handle thousands of transactions or developing AI-powered chatbots that help users in real time.
            </p>
            <p>
              I thrive in collaborative environments, leading teams through Agile sprints and mentoring others, always striving to learn and grow. For me, technology is not just about code—it's about creating experiences that are intuitive, efficient, and meaningful.
            </p>
            <p>
              Outside of work, I love sharing knowledge, contributing to open-source projects, and staying on the cutting edge of tech trends. My story is still being written, and I'm excited for the next chapter—solving bigger problems and building the future, one line of code at a time.
            </p>
            <div className="pt-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                <a
                  href="Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Rahul_Podugu_Resume.pdf"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-accent-white bg-background/60 border border-border/60 rounded-3xl transition-all duration-300 hover:bg-background/80 hover:border-accent-white/40 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-accent-white/50 focus:ring-offset-2 focus:ring-offset-pure-black"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Resume
                </a>
                <div>
                  <AnimatedSocialIcons
                    icons={socialIcons}
                    iconSize={18}
                    className="sm:justify-start"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
