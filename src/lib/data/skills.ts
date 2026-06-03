export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 70 },
      { name: "AWS", level: 85 },
      { name: "Azure", level: 70 },
      { name: "Jenkins", level: 75 },
      { name: "Ansible", level: 65 },
      { name: "Git/GitHub", level: 95 },
      { name: "ELK Stack", level: 75 },
    ],
  },
  {
    category: "Security Tools",
    skills: [
      { name: "Burp Suite", level: 90 },
      { name: "Metasploit", level: 80 },
      { name: "Wireshark", level: 90 },
      { name: "Nmap", level: 95 },
      { name: "Nessus", level: 80 },
      { name: "Wazuh", level: 85 },
      { name: "Nikto", level: 85 },
      { name: "Sqlmap", level: 80 },
    ],
  },
  {
    category: "Programming",
    skills: [
      { name: "Python", level: 95 },
      { name: "Bash", level: 85 },
      { name: "PowerShell", level: 75 },
      { name: "C++", level: 70 },
      { name: "TypeScript", level: 75 },
    ],
  },
  {
    category: "Operating Systems",
    skills: [
      { name: "Kali Linux", level: 95 },
      { name: "Ubuntu", level: 90 },
      { name: "Windows", level: 90 },
      { name: "SIFT Workstation", level: 80 },
    ],
  },
  {
    category: "Core Domains",
    skills: [
      { name: "SIEM", level: 90 },
      { name: "Threat Hunting", level: 85 },
      { name: "Incident Response", level: 85 },
      { name: "Malware Analysis", level: 80 },
      { name: "Web & API Security", level: 85 },
      { name: "Cloud Security", level: 80 },
      { name: "Blue Team Automation", level: 80 },
      { name: "Forensics", level: 80 },
    ],
  },
];
