import { Profile } from '@/types';

export const profile: Profile = {
  name: 'Malaiyappan S',
  firstName: 'Malaiyappan',
  lastName: 'S',
  role: 'Cybersecurity Engineer',
  tagline: 'Application Security · DevSecOps · Security Research',
  bio: `I am a cybersecurity engineer focused on building intelligent security systems — from vulnerability prioritization to automated threat detection. My work sits at the intersection of application security, DevSecOps, and security research.

I do not just use security tools — I engineer them. From enhancing CVSS-based vulnerability scoring with machine learning to architecting defense-in-depth file upload pipelines, I build systems that make security teams more effective.

Currently pursuing my B.Tech in CSE (Cybersecurity) at SRM IST, I have interned with leading cybersecurity organizations including Palo Alto Networks, Zscaler, and Hack Secure, gaining hands-on experience across the security stack.`,
  shortBio: 'Cybersecurity engineer focused on application security, DevSecOps, and security research. I build intelligent security systems — from vulnerability scoring to threat detection.',
  location: 'Chennai, Tamil Nadu, India',
  avatar: '/images/avatar/profile.png',
  resumeUrl: '/resume.pdf',
  education: [
    {
      degree: 'B.Tech Computer Science & Engineering (Cybersecurity)',
      institution: 'SRM Institute of Science and Technology (SRMIST)',
      period: '2022 – 2026',
    },
  ],
};
