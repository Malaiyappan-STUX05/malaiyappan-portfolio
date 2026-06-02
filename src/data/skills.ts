import { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'application-security',
    name: 'Application Security',
    icon: 'Shield',
    skills: [
      {
        name: 'OWASP ZAP',
        level: 'advanced',
        description: 'Automated vulnerability scanning and security testing',
      },
      {
        name: 'Burp Suite',
        level: 'advanced',
        description: 'Web application security testing and penetration testing',
      },
      {
        name: 'Vulnerability Assessment',
        level: 'advanced',
        description: 'Systematic identification and classification of security weaknesses',
      },
      {
        name: 'Wireshark',
        level: 'intermediate',
        description: 'Network protocol analysis and traffic inspection',
      },
      {
        name: 'Penetration Testing',
        level: 'intermediate',
        description: 'Authorized security testing to identify exploitable vulnerabilities',
      },
    ],
  },
  {
    id: 'programming',
    name: 'Programming',
    icon: 'Code',
    skills: [
      {
        name: 'Python',
        level: 'advanced',
        description: 'Security tooling, automation, and ML model development',
      },
      {
        name: 'Java',
        level: 'intermediate',
        description: 'Application development and security-focused programming',
      },
    ],
  },
  {
    id: 'cloud-devops',
    name: 'Cloud & DevOps',
    icon: 'Cloud',
    skills: [
      {
        name: 'Docker',
        level: 'advanced',
        description: 'Containerization for secure application deployment',
      },
      {
        name: 'Kubernetes',
        level: 'intermediate',
        description: 'Container orchestration and security configuration',
      },
      {
        name: 'AWS',
        level: 'intermediate',
        description: 'Cloud infrastructure and security services',
      },
      {
        name: 'Jenkins',
        level: 'intermediate',
        description: 'CI/CD pipeline automation and DevSecOps integration',
      },
    ],
  },
  {
    id: 'monitoring-siem',
    name: 'Monitoring & SIEM',
    icon: 'Activity',
    skills: [
      {
        name: 'Splunk',
        level: 'intermediate',
        description: 'Security information and event management',
      },
      {
        name: 'ELK Stack',
        level: 'intermediate',
        description: 'Elasticsearch, Logstash, Kibana for security log analysis',
      },
      {
        name: 'SIEM Technologies',
        level: 'intermediate',
        description: 'Security monitoring, correlation, and incident detection',
      },
    ],
  },
  {
    id: 'systems',
    name: 'Systems',
    icon: 'Terminal',
    skills: [
      {
        name: 'Linux',
        level: 'advanced',
        description: 'System administration, hardening, and security configuration',
      },
    ],
  },
  {
    id: 'security-research',
    name: 'Security Research',
    icon: 'Search',
    skills: [
      {
        name: 'Machine Learning for Security',
        level: 'intermediate',
        description: 'ML models for threat detection and vulnerability analysis',
      },
      {
        name: 'Threat Intelligence',
        level: 'intermediate',
        description: 'Analysis of threat actors, TTPs, and emerging risks',
      },
      {
        name: 'Security Research',
        level: 'advanced',
        description: 'Vulnerability research, tool development, and framework analysis',
      },
    ],
  },
];
