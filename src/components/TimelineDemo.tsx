import { Timeline } from "@/components/ui/timeline";
import { Award, Code, Database, Users, Zap } from "lucide-react";

export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div className="space-y-4">
          <div className="bg-dark-gray/50 rounded-xl p-6 border border-medium-gray">
            <h4 className="text-accent-white text-lg font-semibold mb-3">Current Role</h4>
            <p className="text-accent-gray text-sm leading-relaxed mb-4">
              Software Developer at Aztra, leading Java Spring Boot microservices on AWS. 
              Handling over 100,000 daily transactions with near-perfect uptime.
            </p>
            <div className="flex items-center gap-3 mb-3">
              <Award className="h-5 w-5 text-accent-white" />
              <span className="text-accent-white font-medium">Key Achievement: 100K+ Daily Transactions</span>
            </div>
            <div className="flex items-center gap-3">
              <Zap className="h-5 w-5 text-accent-white" />
              <span className="text-accent-white font-medium">AI Integration: LangChain & GPT-4</span>
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
      title: "2022-2023",
      content: (
        <div className="space-y-4">
          <div className="bg-dark-gray/50 rounded-xl p-6 border border-medium-gray">
            <h4 className="text-accent-white text-lg font-semibold mb-3">Research Assistant</h4>
            <p className="text-accent-gray text-sm leading-relaxed mb-4">
              Software Developer at University of Maryland, Baltimore County. Built real-time research dashboards 
              and scalable backend services supporting thousands of concurrent users.
            </p>
            <div className="flex items-center gap-3 mb-3">
              <Code className="h-5 w-5 text-accent-white" />
              <span className="text-accent-white font-medium">Frontend: Angular Universal</span>
            </div>
            <div className="flex items-center gap-3">
              <Database className="h-5 w-5 text-accent-white" />
              <span className="text-accent-white font-medium">Backend: Node.js & GraphQL</span>
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
      title: "2021-2022",
      content: (
        <div className="space-y-4">
          <div className="bg-dark-gray/50 rounded-xl p-6 border border-medium-gray">
            <h4 className="text-accent-white text-lg font-semibold mb-3">Software Developer</h4>
            <p className="text-accent-gray text-sm leading-relaxed mb-4">
              Software Developer at UST, focusing on payment workflows and distributed transaction management. 
              Led a Scrum team and optimized microservices for better performance.
            </p>
            <div className="flex items-center gap-3 mb-3">
              <Users className="h-5 w-5 text-accent-white" />
              <span className="text-accent-white font-medium">Leadership: Scrum Lead</span>
            </div>
            <div className="flex items-center gap-3">
              <Zap className="h-5 w-5 text-accent-white" />
              <span className="text-accent-white font-medium">Focus: Payment Systems</span>
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
      title: "2021",
      content: (
        <div className="space-y-4">
          <div className="bg-dark-gray/50 rounded-xl p-6 border border-medium-gray">
            <h4 className="text-accent-white text-lg font-semibold mb-3">Analyst Intern</h4>
            <p className="text-accent-gray text-sm leading-relaxed mb-4">
              Started my professional journey at Fidelity National Financial, learning data engineering and automation. 
              Focused on ETL pipelines and database optimization.
            </p>
            <div className="flex items-center gap-3 mb-3">
              <Database className="h-5 w-5 text-accent-white" />
              <span className="text-accent-white font-medium">Focus: Data Engineering</span>
            </div>
            <div className="flex items-center gap-3">
              <Award className="h-5 w-5 text-accent-white" />
              <span className="text-accent-white font-medium">Achievement: ETL Optimization</span>
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
      <div className="mx-auto max-w-7xl px-0 md:px-4 lg:px-6">
        <Timeline data={data} />
      </div>
    </div>
  );
}
