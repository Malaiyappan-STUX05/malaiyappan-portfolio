export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  highlights: string[];
  tags: string[];
}

export const experiences: Experience[] = [
  {
    id: "palo-alto",
    role: "Security Intern",
    company: "Palo Alto Networks (AICTE)",
    location: "Remote",
    period: "May 2025 – Jul 2025",
    type: "Internship",
    highlights: [
      "Selected through the AICTE Cybersecurity Cohort, implemented Zero Trust security using PAN-OS, Cortex XSOAR, and Prisma Cloud, enhancing access governance and SIEM efficiency by 30%",
    ],
    tags: ["PAN-OS", "Cortex XSOAR", "Prisma Cloud", "Zero Trust", "SIEM"],
  },
  {
    id: "hack-secure",
    role: "Blue Team Intern",
    company: "Hack Secure",
    location: "Remote",
    period: "Feb 2025 – Mar 2025",
    type: "Internship",
    highlights: [
      "Detected and analyzed 20+ real-world threats using Wireshark, Wazuh SIEM, and Autopsy, enhancing forensic reporting and lateral movement detection",
    ],
    tags: ["Wireshark", "Wazuh", "Autopsy", "Blue Team", "Forensics"],
  },
  {
    id: "zscaler",
    role: "Security Intern",
    company: "Zscaler (AICTE)",
    location: "Remote",
    period: "Jan 2025 – Feb 2025",
    type: "Internship",
    highlights: [
      "Joined via AICTE cohort to design Zero Trust workflows using ZIA, ZPA, and IAM policies, securing access for 100+ simulated endpoints in cloud-native environments",
    ],
    tags: ["ZIA", "ZPA", "IAM", "Zero Trust", "Cloud Security"],
  },
  {
    id: "corizo",
    role: "Cybersecurity Intern",
    company: "Corizo Technologies",
    location: "Hybrid",
    period: "Nov 2024 – Jan 2025",
    type: "Internship",
    highlights: [
      "Conducted VAPT for 15+ applications using Burp Suite, Sqlmap, Nmap, and Nikto, identifying OWASP Top 10 flaws and simulating real-world attacks in Kali Linux",
    ],
    tags: ["Burp Suite", "Sqlmap", "Nmap", "Nikto", "VAPT", "OWASP"],
  },
  {
    id: "ncsrc",
    role: "Cybersecurity Intern",
    company: "National Cybersecurity Research Council",
    location: "New Delhi, India",
    period: "May 2024 – Jul 2024",
    type: "Internship",
    highlights: [
      "Authored content for the NCSRC Handbook and built insider threat tools using Python, auditd, and Streamlit, focusing on threat modeling and risk scoring systems",
    ],
    tags: ["Python", "auditd", "Streamlit", "Threat Modeling", "Research"],
  },
];
