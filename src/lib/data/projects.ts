export type ThreatLevel = "HIGH" | "CRITICAL" | "MEDIUM" | "LOW";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  threatLevel: ThreatLevel;
  tools: string[];
  description: string;
  highlights: string[];
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
}

export const projects: Project[] = [
  {
    id: "vrs",
    title: "Vulnerability Risk Scoring System",
    subtitle: "Context-Aware CVE Prioritization Engine",
    threatLevel: "HIGH",
    tools: ["Python", "ML", "RoBERTa"],
    description:
      "Improved vulnerability prioritization by extending CVSS with contextual risk factors using transformer-based NLP",
    highlights: [
      "Improved vulnerability prioritization overall reclassification by 38% by extending CVSS with exploitability, impact, and patch availability features",
      "Processed 150,000+ real-world CVE records to engineer structured contextual risk attributes",
      "Increased contextual feature extraction precision by 93% by applying transformer-based NLP models to CVE descriptions",
    ],
    links: { github: "#" },
  },
  {
    id: "insider-threat",
    title: "Insider Threat Detection System",
    subtitle: "ML-Powered Anomaly Detection Platform",
    threatLevel: "CRITICAL",
    tools: ["Python", "Streamlit", "XGBoost"],
    description:
      "Multi-model anomaly detection system achieving 90%+ accuracy in identifying insider threats across DevSecOps environments",
    highlights: [
      "Achieved 90%+ detection accuracy by analyzing 6+ log types across DevSecOps environments",
      "Implemented XGBoost, Isolation Forest, and Autoencoders to identify anomalous insider behavior",
      "Built dashboards and reports to visualize threat patterns and detection outcomes",
    ],
    links: { github: "#" },
  },
  {
    id: "secure-file",
    title: "Secure File Sharing Platform",
    subtitle: "NIST CSF Simulation on AWS",
    threatLevel: "MEDIUM",
    tools: ["Python", "C++", "AWS"],
    description:
      "Cloud-based file-sharing system implementing all five NIST Cybersecurity Framework functions",
    highlights: [
      "Implemented role-based access control, logging, and backups on AWS to simulate NIST Cybersecurity Framework controls",
      "Built a cloud-based file-sharing system to demonstrate secure data access and recovery workflows",
      "Evaluated identify, protect, detect, respond, and recover phases using AWS-based security scenarios",
    ],
    links: { github: "#" },
  },
  {
    id: "siem-lab",
    title: "Home Lab SIEM Implementation",
    subtitle: "Centralized Log Analysis Environment",
    threatLevel: "MEDIUM",
    tools: ["Linux", "Windows", "SIEM"],
    description:
      "Self-hosted security operations center with centralized log collection and threat detection",
    highlights: [
      "Deployed a centralized SIEM home lab using 2 Linux VMs and 1 Windows VM for log collection and analysis",
      "Ingested and analyzed system, authentication, and security logs to detect suspicious activity patterns",
    ],
    links: { github: "#" },
  },
  {
    id: "keylogger",
    title: "Stealth Keylogger in Python",
    subtitle: "Ethical Security Research Tool",
    threatLevel: "HIGH",
    tools: ["Python", "pynput"],
    description:
      "Research tool demonstrating low-level system interaction and keystroke capture for security awareness",
    highlights: [
      "Built a Python-based keylogger using the pynput library, capturing 95%+ of keystrokes",
      "Implemented hidden execution, timed file writes, and optional email alerts",
      "Demonstrates low-level system interaction and ethical tool simulation",
    ],
    links: { github: "#" },
  },
];
