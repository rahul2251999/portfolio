import type { ReactNode } from 'react';
import { ArrowUpRight, Brain, Database, Server, TrendingUp } from 'lucide-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';

export function Projects() {
  const projects: ProjectCard[] = [
    {
      title: "Decentralized File Sharing System",
      description: "I crafted a peer to peer file sharing network that pairs RSA and AES encryption with a distributed hash table so neighbors can discover each other quickly. The multithreaded pipeline keeps transfers nimble even when peers churn.",
      icon: <Server className="w-4 h-4 text-blue-500" />,
      tags: ["Java", "Peer to Peer", "Encryption"],
      highlight: "Distributed storytelling about trust, speed, and resilience",
      link: "https://github.com/rahul2251999/Peer-to-Peer-Secured-File-System"
    },
    {
      title: "Real-Time Stock Trading Engine",
      description: "A trading engine shaped around lock-free concurrency and compare-and-swap loops, built to match orders in split-second markets without letting latency steal the spotlight.",
      icon: <TrendingUp className="w-4 h-4 text-emerald-500" />,
      tags: ["Java", "CAS", "Trading"],
      highlight: "Concurrency that keeps market streams steady",
      link: "https://github.com/rahul2251999/stock-trading-engine"
    },
    {
      title: "AI Customer Support Chatbot",
      description: "An AI assistant that blends LangChain, Azure Bot Services, and custom natural language pipelines so on-call engineers can surface answers inside incident heat without sifting through endless runbooks.",
      icon: <Brain className="w-4 h-4 text-purple-500" />,
      tags: ["AI", "NLP", "Azure"],
      highlight: "Conversational systems grounded in context and empathy",
      link: "https://github.com/rahul2251999/AI-Powered-Customer-Support-Chatbot"
    },
    {
      title: "Distributed Cache System",
      description: "A distributed cache stitched together with Redis and consistent hashing so applications stay responsive even as nodes ebb and flow across the cluster.",
      icon: <Database className="w-4 h-4 text-cyan-500" />,
      tags: ["Redis", "Distributed", "Cache"],
      highlight: "Clustered caching that embraces graceful failover",
      link: "https://github.com/rahul2251999/Distributed-Cache-System"
    }
  ];

  return (
    <section className="section py-24 bg-pure-black" id="projects">
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-4xl px-0 md:px-4 lg:px-6">
          <h2 className="text-left text-lg md:text-4xl font-bold text-accent-white mb-4">
            Projects
          </h2>
          <p className="text-left text-accent-gray text-sm md:text-base max-w-2xl">
            A sampling of systems I&apos;ve shipped—from distributed infrastructure to AI-driven experiences.
          </p>
        </div>
        
        <ul className="projects-content grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </ul>
      </div>
    </section>
  );
}

interface ProjectCard {
  icon: ReactNode;
  title: string;
  description: string;
  tags: string[];
  link: string;
  highlight: string;
}

function ProjectCard({
  icon,
  title,
  description,
  tags,
  link,
  highlight,
}: ProjectCard) {
  return (
    <li className="list-none">
      <div className="group relative flex h-full flex-col rounded-[1.25rem] border border-border/60 bg-background/60 p-3 backdrop-blur md:rounded-2xl md:p-4">
        <GlowingEffect
          spread={40}
          glow
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
          <div className="relative flex h-full flex-col gap-6 overflow-hidden rounded-xl border border-border/60 bg-background/80 p-6 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-accent-white/40 group-hover:bg-background dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]">
          <div className="h-24 w-full rounded-lg bg-gradient-to-br from-accent-white/10 via-dark-gray/40 to-transparent ring-1 ring-inset ring-border/30 transition-transform duration-500 group-hover:scale-[1.02]" />
          <div className="relative flex flex-1 flex-col justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-muted">
                {icon}
              </div>
              <h3 className="text-xl font-semibold leading-tight tracking-[-0.04em] text-accent-white md:text-2xl">
                {title}
              </h3>
            </div>
            <p className="text-sm text-accent-gray md:text-base">{description}</p>
            <div className="rounded-lg border border-border/60 bg-dark-gray/40 px-4 py-2 text-xs font-medium uppercase tracking-widest text-accent-gray">
              {highlight}
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border px-3 py-1 text-xs font-medium uppercase tracking-widest text-accent-gray"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-accent-white transition-colors hover:text-accent-gray focus:outline-none focus:ring-2 focus:ring-accent-white/50 focus:ring-offset-2 focus:ring-offset-pure-black rounded-md px-2 py-1"
              aria-label={`View ${title} repository on GitHub`}
            >
              View Repository
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}
