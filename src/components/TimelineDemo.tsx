import { Timeline } from "@/components/ui/timeline";
import { Award, Code, Database, Zap } from "lucide-react";

export function TimelineDemo() {
  const data = [
    {
      title: "Aztra",
      content: (
        <div className="space-y-4">
          <div className="bg-dark-gray/50 rounded-xl p-6 border border-medium-gray">
            <h4 className="text-accent-white text-lg font-semibold">Software Engineer II · Aztra</h4>
            <p className="text-xs uppercase tracking-[0.2em] text-accent-gray/80 mt-1 mb-3">May 2024 – Present · Columbus, OH</p>
            <p className="text-accent-gray text-sm leading-relaxed mb-4">
              Within Aztra&apos;s AI analytics platform I stitch together Spring services, event streams, and observability loops so investigations flow as smoothly as payments. The mission is simple: make complex systems feel calm for the people who depend on them.
            </p>
            <div className="flex items-center gap-3 mb-3">
              <Award className="h-5 w-5 text-accent-white" />
              <span className="text-accent-white font-medium">Theme: payment rails that never flinch</span>
            </div>
            <div className="flex items-center gap-3">
              <Zap className="h-5 w-5 text-accent-white" />
              <span className="text-accent-white font-medium">Focus: LangChain, Claude, and human-guided automation</span>
            </div>
          </div>
          
          <div className="bg-dark-gray/30 rounded-lg p-4 border border-medium-gray">
            <h5 className="text-accent-white font-medium mb-3">Skills & Technologies</h5>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-accent-white/10 text-accent-white text-xs rounded-full">Java</span>
              <span className="px-3 py-1 bg-accent-white/10 text-accent-white text-xs rounded-full">Spring Boot</span>
              <span className="px-3 py-1 bg-accent-white/10 text-accent-white text-xs rounded-full">AWS</span>
              <span className="px-3 py-1 bg-accent-white/10 text-accent-white text-xs rounded-full">Kafka</span>
              <span className="px-3 py-1 bg-accent-white/10 text-accent-white text-xs rounded-full">AI/ML</span>
              <span className="px-3 py-1 bg-accent-white/10 text-accent-white text-xs rounded-full">Microservices</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "UMBC",
      content: (
        <div className="space-y-4">
          <div className="bg-dark-gray/50 rounded-xl p-6 border border-medium-gray">
            <h4 className="text-accent-white text-lg font-semibold">Software Engineer & Research Assistant · UMBC</h4>
            <p className="text-xs uppercase tracking-[0.2em] text-accent-gray/80 mt-1 mb-3">September 2022 – November 2023 · Baltimore, MD</p>
            <p className="text-accent-gray text-sm leading-relaxed mb-4">
              At UMBC I balanced academic rigor with production pragmatism, shaping real-time dashboards, Kubernetes clusters, and security patterns that gave research teams a live view of their data without sacrificing compliance.
            </p>
            <div className="flex items-center gap-3 mb-3">
              <Code className="h-5 w-5 text-accent-white" />
              <span className="text-accent-white font-medium">Craft: Angular Universal storytelling</span>
            </div>
            <div className="flex items-center gap-3">
              <Database className="h-5 w-5 text-accent-white" />
              <span className="text-accent-white font-medium">Backbone: GraphQL, Node, and carefully tuned caches</span>
            </div>
          </div>
          
          <div className="bg-dark-gray/30 rounded-lg p-4 border border-medium-gray">
            <h5 className="text-accent-white font-medium mb-3">Skills & Technologies</h5>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-accent-white/10 text-accent-white text-xs rounded-full">Angular</span>
              <span className="px-3 py-1 bg-accent-white/10 text-accent-white text-xs rounded-full">Node.js</span>
              <span className="px-3 py-1 bg-accent-white/10 text-accent-white text-xs rounded-full">GraphQL</span>
              <span className="px-3 py-1 bg-accent-white/10 text-accent-white text-xs rounded-full">Kubernetes</span>
              <span className="px-3 py-1 bg-accent-white/10 text-accent-white text-xs rounded-full">JWT</span>
              <span className="px-3 py-1 bg-accent-white/10 text-accent-white text-xs rounded-full">RBAC</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "UST",
      content: (
        <div className="space-y-4">
          <div className="bg-dark-gray/50 rounded-xl p-6 border border-medium-gray">
            <h4 className="text-accent-white text-lg font-semibold">Software Development Engineer · UST</h4>
            <p className="text-xs uppercase tracking-[0.2em] text-accent-gray/80 mt-1 mb-3">August 2021 – June 2022 · Bangalore, India</p>
            <p className="text-accent-gray text-sm leading-relaxed mb-4">
              UST introduced me to the choreography of payment workflows and the discipline of microservice design. I guided teams through daily rituals, rewired legacy pathways, and learned how resilient design keeps warehouses and ledgers aligned.
            </p>
            <div className="flex items-center gap-3 mb-3">
              <Code className="h-5 w-5 text-accent-white" />
              <span className="text-accent-white font-medium">Engineering lens: asynchronous messaging and resilient microservices</span>
            </div>
            <div className="flex items-center gap-3">
              <Zap className="h-5 w-5 text-accent-white" />
              <span className="text-accent-white font-medium">Focus: saga patterns and graceful recovery</span>
            </div>
          </div>
          
          <div className="bg-dark-gray/30 rounded-lg p-4 border border-medium-gray">
            <h5 className="text-accent-white font-medium mb-3">Skills & Technologies</h5>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-accent-white/10 text-accent-white text-xs rounded-full">Java</span>
              <span className="px-3 py-1 bg-accent-white/10 text-accent-white text-xs rounded-full">Kafka</span>
              <span className="px-3 py-1 bg-accent-white/10 text-accent-white text-xs rounded-full">Microservices</span>
              <span className="px-3 py-1 bg-accent-white/10 text-accent-white text-xs rounded-full">Scrum</span>
              <span className="px-3 py-1 bg-accent-white/10 text-accent-white text-xs rounded-full">REST APIs</span>
              <span className="px-3 py-1 bg-accent-white/10 text-accent-white text-xs rounded-full">Saga Pattern</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Fidelity National Financial",
      content: (
        <div className="space-y-4">
          <div className="bg-dark-gray/50 rounded-xl p-6 border border-medium-gray">
            <h4 className="text-accent-white text-lg font-semibold">Software Engineer Intern · Fidelity National Financial</h4>
            <p className="text-xs uppercase tracking-[0.2em] text-accent-gray/80 mt-1 mb-3">April 2021 – August 2021 · Bangalore, India</p>
            <p className="text-accent-gray text-sm leading-relaxed mb-4">
              My industry story began with automation work in insurance. I tuned ETL flows, traced memory leaks, and discovered how thoughtful scripting clears the runway for teams handling sensitive client journeys.
            </p>
            <div className="flex items-center gap-3 mb-3">
              <Database className="h-5 w-5 text-accent-white" />
              <span className="text-accent-white font-medium">Focus: data pipelines built for trust</span>
            </div>
            <div className="flex items-center gap-3">
              <Award className="h-5 w-5 text-accent-white" />
              <span className="text-accent-white font-medium">Takeaway: automation as a force multiplier</span>
            </div>
          </div>
          
          <div className="bg-dark-gray/30 rounded-lg p-4 border border-medium-gray">
            <h5 className="text-accent-white font-medium mb-3">Skills & Technologies</h5>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-accent-white/10 text-accent-white text-xs rounded-full">Java</span>
              <span className="px-3 py-1 bg-accent-white/10 text-accent-white text-xs rounded-full">ETL</span>
              <span className="px-3 py-1 bg-accent-white/10 text-accent-white text-xs rounded-full">Jenkins</span>
              <span className="px-3 py-1 bg-accent-white/10 text-accent-white text-xs rounded-full">Docker</span>
              <span className="px-3 py-1 bg-accent-white/10 text-accent-white text-xs rounded-full">Oracle</span>
              <span className="px-3 py-1 bg-accent-white/10 text-accent-white text-xs rounded-full">Redshift</span>
            </div>
          </div>
        </div>
      ),
    },
  ];
  
  return (
    <div className="container mx-auto px-4">
      <div className="mx-auto mb-12 max-w-4xl px-0 md:px-4 lg:px-6">
        <h2 className="text-left text-lg md:text-4xl font-bold text-accent-white mb-4">
          Experience
        </h2>
        <p className="text-left text-accent-gray text-sm md:text-base max-w-2xl">
          Roles that shaped my systems thinking—from fintech payments to AI research and large-scale distributed platforms.
        </p>
      </div>
      <div className="mx-auto max-w-6xl px-0 md:px-4 lg:px-6">
        <Timeline data={data} />
      </div>
    </div>
  );
}
