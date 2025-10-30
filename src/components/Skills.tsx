import { Brain, Cloud, Code2, Database, Network } from 'lucide-react';
import RadialOrbitalTimeline from '@/components/ui/radial-orbital-timeline';

const skillsTimeline = [
  {
    id: 1,
    title: 'Programming Languages',
    date: 'Core Stack',
    content:
      'Fluent across modern compiled and scripting languages with production experience building services, tooling, and rich user interfaces.',
    category: 'Languages',
    icon: Code2,
    relatedIds: [2, 4, 5],
    status: 'completed' as const,
    energy: 95,
    skills: ['Java', 'Python', 'C++', 'C#', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    id: 2,
    title: 'Frameworks & Technologies',
    date: 'Application Layer',
    content:
      'Deliver resilient services and delightful front-ends using proven frameworks, messaging backbones, and modern API paradigms.',
    category: 'Frameworks',
    icon: Brain,
    relatedIds: [1, 3, 5],
    status: 'completed' as const,
    energy: 92,
    skills: [
      'Spring Boot',
      'Hibernate',
      'REST APIs',
      'gRPC',
      'GraphQL',
      'Apache Kafka',
      'Apache Spark',
      'Redis',
      'React',
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
    skills: ['AWS compute, storage, and serverless tooling', 'Docker', 'Kubernetes', 'Jenkins', 'GitLab CI'],
  },
  {
    id: 4,
    title: 'Databases & Big Data',
    date: 'Data Layer',
    content:
      'Design high-availability storage and analytics pipelines, from OLTP systems to large-scale batch and streaming workloads.',
    category: 'Data',
    icon: Database,
    relatedIds: [1, 2],
    status: 'completed' as const,
    energy: 88,
    skills: ['MySQL', 'MongoDB', 'Cassandra', 'Hive', 'Presto', 'Spark SQL'],
  },
  {
    id: 5,
    title: 'Systems & Tools',
    date: 'Engineering DNA',
    content:
      'Lead cross-functional delivery with deep systems knowledge, observability, and collaboration practices that keep teams shipping.',
    category: 'Systems',
    icon: Network,
    relatedIds: [1, 2, 3],
    status: 'completed' as const,
    energy: 93,
    skills: [
      'Microservices Architecture',
      'Distributed Systems',
      'Linux',
      'Git',
      'Agile/Scrum',
      'Concurrency & Multithreading',
      'TCP/IP & HTTP',
      'Prometheus',
      'Grafana',
      'ELK Stack',
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative border-t border-dark-gray bg-pure-black py-24">
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
