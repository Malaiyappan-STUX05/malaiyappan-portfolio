export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  type: "certification" | "award" | "competition" | "role";
}

export const achievements: Achievement[] = [
  {
    id: "comptia",
    title: "CompTIA Security+",
    description: "Industry-standard cybersecurity certification",
    date: "May 2025",
    type: "certification",
  },
  {
    id: "ccna",
    title: "CCNA – Routing & Switching / CyberOps",
    description: "Cisco Certified Network Associate",
    date: "Dec 2024",
    type: "certification",
  },
  {
    id: "aws-ml",
    title: "AWS Machine Learning Essentials",
    description: "AWS ML fundamentals certification",
    date: "Dec 2023",
    type: "certification",
  },
  {
    id: "ctf-finalist",
    title: "Top 10 Finalist — State-Level CTF",
    description: "Capture The Flag competition at SRM Valliammai Engineering College",
    date: "2024",
    type: "competition",
  },
  {
    id: "young-scientist",
    title: "Young Scientist Award",
    description: "National Science Congress",
    date: "2018",
    type: "award",
  },
  {
    id: "ctf-lead",
    title: "CTF Coordinator @Centinals",
    description: "Organized CTF competitions for 500+ students, mentored 100+ participants",
    date: "Jun 2024 – Present",
    type: "role",
  },
  {
    id: "ncsrc-author",
    title: "Contributing Author — NCSRC Handbook",
    description: "National Cybersecurity Reference Handbook, 4th Edition",
    date: "2024",
    type: "role",
  },
  {
    id: "bug-bounty",
    title: "Bug Bounty — Elogit (HackerOne)",
    description: "Identified and reported security vulnerability",
    date: "2024",
    type: "competition",
  },
];
