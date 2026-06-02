import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Malaiyappan S',
  title: 'Malaiyappan S — Cybersecurity Engineer',
  description:
    'Cybersecurity engineer specializing in application security, DevSecOps, and security research. Projects in vulnerability management, ML-based threat detection, and cloud security.',
  url: 'https://malaiyappan.dev',
  ogImage: '/og-image.png',
  keywords: [
    'Cybersecurity Engineer',
    'Application Security',
    'DevSecOps',
    'Security Research',
    'Vulnerability Management',
    'Threat Detection',
    'Cloud Security',
    'Malaiyappan S',
  ],
  socials: [
    {
      platform: 'email',
      url: 'mailto:malaiyappan.official@gmail.com',
      icon: 'Mail',
      displayText: 'malaiyappan.official@gmail.com',
    },
    {
      platform: 'linkedin',
      url: 'https://www.linkedin.com/in/malaiyappanssecurityprofessional/',
      icon: 'Linkedin',
      displayText: 'LinkedIn',
    },
    {
      platform: 'github',
      url: 'https://github.com/Malaiyappan-STUX05',
      icon: 'Github',
      displayText: 'GitHub',
    },
  ],
  navLinks: [
    { label: 'About', href: '/#about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Research', href: '/research' },
    { label: 'Resume', href: '/resume' },
    { label: 'Contact', href: '/#contact' },
  ],
  footerLinks: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/malaiyappanssecurityprofessional/', external: true },
    { label: 'GitHub', href: 'https://github.com/Malaiyappan-STUX05', external: true },
    { label: 'Email', href: 'mailto:malaiyappan.official@gmail.com', external: true },
  ],
};
