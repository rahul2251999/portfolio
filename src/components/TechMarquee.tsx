"use client";

const techs = [
  "Java", "Python", "TypeScript", "Spring Boot", "Node.js", "React",
  "AWS", "Kubernetes", "Docker", "Kafka", "PostgreSQL", "Redis",
  "LangChain", "FastAPI", "Terraform", "gRPC", "GraphQL", "RAG Pipelines",
];

export default function TechMarquee() {
  // Duplicate for seamless loop
  const items = [...techs, ...techs];

  return (
    <div className="relative border-y border-white/[0.06] bg-pure-black py-5 overflow-hidden">
      {/* Fade masks */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-pure-black to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-pure-black to-transparent z-10" />

      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((tech, i) => (
          <span
            key={i}
            className="mx-6 text-[11px] font-medium uppercase tracking-[0.3em] text-white/25"
          >
            {tech}
            <span className="ml-6 text-white/10">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
