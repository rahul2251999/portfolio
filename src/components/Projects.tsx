import type { ReactNode } from 'react';
import { ArrowUpRight, Brain, Cloud, Database, Layers, Server, TrendingUp } from 'lucide-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';

export function Projects() {
  const projects: ProjectCard[] = [
    {
      title: "Decentralized File Sharing System",
      description: "P2P file sharing application with RSA/AES encryption and DHT indexing using Java and Linux io_uring. Implemented multithreaded architecture achieving 3x faster access times.",
      icon: <Server className="w-4 h-4 text-blue-500" />,
      tags: ["Java", "P2P", "Encryption"],
      highlight: "Distributed systems, encryption, low latency file access",
      link: "https://github.com/rahul2251999"
    },
    {
      title: "Real-Time Stock Trading Engine",
      description: "High-performance matching engine using lock-free concurrency with Compare-And-Swap (CAS) operations. Achieved sub-millisecond latency for processing 1,000+ stock tickers.",
      icon: <TrendingUp className="w-4 h-4 text-emerald-500" />,
      tags: ["Java", "CAS", "Trading"],
      highlight: "Lock-free concurrency, real-time market data ingestion",
      link: "https://github.com/rahul2251999"
    },
    {
      title: "AI Customer Support Chatbot",
      description: "Intelligent customer support system with Azure Bot Services, LUIS, and custom NLP stack. Handles 1,000+ queries daily with 60% improved resolution rate.",
      icon: <Brain className="w-4 h-4 text-purple-500" />,
      tags: ["AI", "NLP", "Azure"],
      highlight: "Conversational AI, real-time analytics, scalable architecture",
      link: "https://github.com/rahul2251999"
    },
    {
      title: "Microservices E-commerce",
      description: "Scalable e-commerce platform using microservices architecture with Spring Boot backend and React frontend, containerized with Docker.",
      icon: <Layers className="w-4 h-4 text-red-500" />,
      tags: ["Spring Boot", "React", "Docker"],
      highlight: "Saga orchestration, resilient payments, shared UI library",
      link: "https://github.com/rahul2251999"
    },
    {
      title: "Distributed Cache System",
      description: "Distributed caching system using Redis with consistent hashing algorithm for high availability and fault tolerance across multiple nodes.",
      icon: <Database className="w-4 h-4 text-cyan-500" />,
      tags: ["Redis", "Distributed", "Cache"],
      highlight: "Clustered caching, consistent hashing, zero-downtime deploys",
      link: "https://github.com/rahul2251999"
    }
  ];

  return (
    <section className="section py-20 bg-pure-black" id="projects">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-4xl px-0 md:px-4 lg:px-6">
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
      <div className="group relative flex h-full flex-col rounded-[1.25rem] border border-border/60 bg-background/40 p-3 backdrop-blur md:rounded-2xl md:p-4">
        <GlowingEffect
          spread={40}
          glow
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col gap-6 overflow-hidden rounded-xl border border-border/60 bg-background/90 p-6 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-accent-white/40 group-hover:bg-background dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]">
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
              className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-accent-white transition-colors hover:text-accent-gray"
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
