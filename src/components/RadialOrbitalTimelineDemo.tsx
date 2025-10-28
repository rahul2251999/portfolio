import { Code, Database, Cloud, Shield, Layers, Server } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const skillsData = [
  {
    id: 1,
    title: "Programming Languages",
    date: "Expert",
    content: "Core programming languages and development fundamentals",
    category: "Programming Languages",
    icon: Code,
    relatedIds: [2, 3],
    status: "completed" as const,
    energy: 95,
    skills: [
      "Java", "Python", "C++", "C#", "JavaScript", "TypeScript", "HTML", "CSS"
    ]
  },
  {
    id: 2,
    title: "Frameworks & Technologies",
    date: "Advanced",
    content: "Modern frameworks and development technologies",
    category: "Frameworks & Technologies",
    icon: Layers,
    relatedIds: [1, 4],
    status: "completed" as const,
    energy: 90,
    skills: [
      "Spring Boot", "Hibernate", "RESTful APIs", "gRPC", "GraphQL", 
      "Apache Kafka", "Apache Spark", "Redis", "React"
    ]
  },
  {
    id: 3,
    title: "Cloud & DevOps",
    date: "Advanced",
    content: "Cloud computing and DevOps practices",
    category: "Cloud & DevOps",
    icon: Cloud,
    relatedIds: [1, 5],
    status: "in-progress" as const,
    energy: 85,
    skills: [
      "AWS (EC2, S3, Lambda)", "Docker", "Kubernetes", 
      "CI/CD (Jenkins, GitLab CI)"
    ]
  },
  {
    id: 4,
    title: "Databases & Big Data",
    date: "Advanced",
    content: "Database management and big data technologies",
    category: "Databases & Big Data",
    icon: Database,
    relatedIds: [2, 6],
    status: "completed" as const,
    energy: 88,
    skills: [
      "MySQL", "MongoDB", "Cassandra", "Hive", "Presto", "Spark SQL"
    ]
  },
  {
    id: 5,
    title: "Systems & Tools",
    date: "Expert",
    content: "System architecture and development tools",
    category: "Systems & Tools",
    icon: Server,
    relatedIds: [3, 6],
    status: "completed" as const,
    energy: 92,
    skills: [
      "Microservices Architecture", "Distributed Systems", "Linux", "Git", 
      "Agile/Scrum", "Concurrency & Multithreading", "Networking protocols (TCP/IP, HTTP)", 
      "Observability/Monitoring (Prometheus, Grafana, ELK)"
    ]
  },
  {
    id: 6,
    title: "Security",
    date: "Intermediate",
    content: "Security practices and authentication",
    category: "Security",
    icon: Shield,
    relatedIds: [4, 5],
    status: "in-progress" as const,
    energy: 75,
    skills: [
      "JWT Authentication", "RBAC", "OAuth2", "Security Best Practices", 
      "Data Encryption", "Vulnerability Assessment"
    ]
  },
];

export function RadialOrbitalTimelineDemo() {
  return (
    <>
      <RadialOrbitalTimeline timelineData={skillsData} />
    </>
  );
}

export default {
  RadialOrbitalTimelineDemo,
};
