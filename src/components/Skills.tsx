"use client";

import { Brain, Cloud, Code2, Database, Network, Layers } from 'lucide-react';
import RadialOrbitalTimeline from '@/components/ui/radial-orbital-timeline';

const skillsTimeline = [
  {
    id: 1,
    title: 'Programming Languages',
    date: 'Core Stack',
    content:
      'Fluent across modern compiled and scripting languages with production experience building services, tooling, and user interfaces.',
    category: 'Languages',
    icon: Code2,
    relatedIds: [2, 4, 5],
    status: 'completed' as const,
    energy: 95,
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C++', 'C#', 'Kotlin', 'HTML', 'CSS'],
  },
  {
    id: 2,
    title: 'Frameworks & Libraries',
    date: 'Application Layer',
    content:
      'Deliver resilient services and delightful front-ends using proven frameworks, messaging backbones, and modern API paradigms.',
    category: 'Frameworks',
    icon: Layers,
    relatedIds: [1, 3, 5],
    status: 'completed' as const,
    energy: 92,
    skills: [
      'Spring Boot',
      'Spring Framework',
      'Node.js',
      'Express',
      'Angular',
      'Angular Universal',
      'React',
      'REST APIs',
      'GraphQL',
      'gRPC',
      'FastAPI',
    ],
  },
  {
    id: 3,
    title: 'Cloud & DevOps',
    date: 'Delivery & Operations',
    content:
      'Own the full release pipeline with cloud-native patterns, automated delivery, and container orchestration tuned for scale.',
    category: 'DevOps',
    icon: Cloud,
    relatedIds: [2, 5],
    status: 'completed' as const,
    energy: 90,
    skills: [
      'AWS (EC2, Lambda, S3, EKS, CloudWatch, IAM)',
      'Azure',
      'Docker',
      'Kubernetes',
      'Jenkins',
      'GitHub Actions',
      'Terraform',
      'Helm',
      'Prometheus',
      'Grafana',
      'CI/CD',
      'Git',
    ],
  },
  {
    id: 4,
    title: 'Data & AI',
    date: 'Data Layer',
    content:
      'Design high-availability storage, analytics pipelines, and intelligent retrieval systems backed by modern data and AI tooling.',
    category: 'Data & AI',
    icon: Database,
    relatedIds: [1, 2],
    status: 'completed' as const,
    energy: 88,
    skills: [
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'Apache Kafka',
      'Milvus',
      'Pinecone',
      'TensorFlow',
      'scikit-learn',
      'LangChain',
      'OpenAI API',
      'Claude API',
      'LLMs',
      'RAG Pipelines',
      'Vector Databases',
      'Prompt Engineering',
    ],
  },
  {
    id: 5,
    title: 'Engineering & Architecture',
    date: 'Engineering DNA',
    content:
      'Lead cross-functional delivery with deep systems knowledge, microservices thinking, and architectural patterns tuned for reliability.',
    category: 'Architecture',
    icon: Network,
    relatedIds: [1, 2, 3, 6],
    status: 'completed' as const,
    energy: 93,
    skills: [
      'Microservices Architecture',
      'Event-Driven Architecture',
      'Saga Pattern',
      'Distributed Systems',
      'API Design',
      'System Design',
      'Performance Optimization',
      'ETL Pipelines',
      'Data Migration',
      'JWT Authentication',
    ],
  },
  {
    id: 6,
    title: 'Testing & Agile Delivery',
    date: 'Quality & Process',
    content:
      'Ship with confidence using disciplined test practices, performance tooling, and Agile rituals tuned for high-velocity teams.',
    category: 'Quality',
    icon: Brain,
    relatedIds: [1, 2, 3],
    status: 'completed' as const,
    energy: 90,
    skills: [
      'JMeter',
      'Selenium',
      'Junit',
      'Mockito',
      'Jest',
      'Postman',
      'TDD/BDD',
      'Agile',
      'Scrum',
      'Kanban',
      'Jira',
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative border-t border-dark-gray bg-pure-black py-24 mt-8">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-6xl text-center">
          <span className="text-sm uppercase tracking-[0.4em] text-accent-gray">Skills</span>
          <h2 className="mt-4 text-4xl font-bold text-accent-white sm:text-5xl">Technical Orbit</h2>
          <p className="mt-4 text-accent-gray">
            A systems-first toolkit honed across payment platforms, real-time analytics, and AI-assisted customer experiences.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <RadialOrbitalTimeline timelineData={skillsTimeline} />
        </div>

      </div>
    </section>
  );
}

export default Skills;
