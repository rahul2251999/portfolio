import { useState } from "react";
import { Code, Database, Cloud, Cpu, GitBranch, Shield } from "lucide-react";

interface SkillItem {
  id: number;
  title: string;
  level: string;
  description: string;
  icon: React.ElementType;
  skills: string[];
}

const skillsData: SkillItem[] = [
  {
    id: 1,
    title: "Backend",
    level: "Expert",
    description: "Backend Development Technologies and Frameworks",
    icon: Code,
    skills: ["Java", "Spring Boot", "Node.js", "Python", "C++", "C#", "Kotlin", "Microservices", "REST APIs", "GraphQL", "Database Design", "System Architecture"]
  },
  {
    id: 2,
    title: "Database",
    level: "Advanced",
    description: "Database Management and Data Technologies",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "MySQL", "Oracle", "Database Optimization", "Query Performance", "Data Modeling", "ETL Pipelines"]
  },
  {
    id: 3,
    title: "Cloud",
    level: "Advanced",
    description: "Cloud Computing and Infrastructure",
    icon: Cloud,
    skills: ["AWS Lambda", "AWS S3", "AWS DynamoDB", "AWS EC2", "Docker", "Kubernetes", "CI/CD Pipelines", "Infrastructure as Code", "Serverless Architecture"]
  },
  {
    id: 4,
    title: "DevOps",
    level: "Intermediate",
    description: "DevOps and Deployment Technologies",
    icon: GitBranch,
    skills: ["Jenkins", "GitLab CI", "Terraform", "Monitoring", "Logging", "Performance Optimization", "Deployment Strategies", "Git", "Version Control", "Automation"]
  },
  {
    id: 5,
    title: "AI/ML",
    level: "Learning",
    description: "Artificial Intelligence and Machine Learning",
    icon: Cpu,
    skills: ["LangChain", "GPT-4 Integration", "Vector Search", "FAISS", "Machine Learning Pipelines", "AI-powered Applications", "Natural Language Processing", "Data Science"]
  },
  {
    id: 6,
    title: "Security",
    level: "Intermediate",
    description: "Security and Authentication Technologies",
    icon: Shield,
    skills: ["JWT Authentication", "RBAC", "OAuth2", "Security Best Practices", "Data Encryption", "Vulnerability Assessment", "Penetration Testing", "Security Auditing"]
  }
];

export default function SimpleSkillsGrid() {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  return (
    <div className="w-full min-h-[600px] bg-black p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Skills & Technologies</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {skillsData.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.id}
                className="bg-gray-900 border border-gray-700 rounded-lg p-6 cursor-pointer hover:border-white transition-all duration-300 hover:scale-105"
                onClick={() => setSelectedSkill(skill)}
              >
                <div className="flex items-center mb-4">
                  <Icon className="w-8 h-8 text-white mr-3" />
                  <div>
                    <h3 className="text-white font-semibold text-lg">{skill.title}</h3>
                    <p className="text-gray-400 text-sm">{skill.level}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">{skill.description}</p>
              </div>
            );
          })}
        </div>

        {selectedSkill && (
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <selectedSkill.icon className="w-8 h-8 text-white mr-3" />
                <div>
                  <h3 className="text-white font-semibold text-xl">{selectedSkill.title}</h3>
                  <p className="text-gray-400">{selectedSkill.level}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedSkill(null)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            
            <p className="text-gray-300 mb-4">{selectedSkill.description}</p>
            
            <div>
              <h4 className="text-white font-semibold mb-3">Skills & Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedSkill.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-white/10 text-white px-3 py-1 rounded-full text-sm border border-white/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
