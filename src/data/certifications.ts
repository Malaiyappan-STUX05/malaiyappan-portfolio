import { Certification } from '@/types';

export const certifications: Certification[] = [
  {
    id: 'comptia-security-plus',
    name: 'CompTIA Security+ CE',
    issuer: 'CompTIA',
    issueDate: '2024',
    expiryDate: null,
    credentialId: undefined,
    credentialUrl: undefined,
    logo: '/images/certs/comptia-security-plus.png',
    featured: true,
  },
  {
    id: 'cyberops-associate',
    name: 'CyberOps Associate',
    issuer: 'Cisco',
    issueDate: '2024',
    expiryDate: null,
    credentialId: undefined,
    credentialUrl: undefined,
    logo: '/images/certs/cyberops-associate.png',
    featured: true,
  },
  {
    id: 'cybersecurity-essentials',
    name: 'Cybersecurity Essentials',
    issuer: 'Cisco',
    issueDate: '2023',
    expiryDate: null,
    credentialId: undefined,
    credentialUrl: undefined,
    logo: '/images/certs/cybersecurity-essentials.png',
    featured: false,
  },
  {
    id: 'introduction-to-cybersecurity',
    name: 'Introduction to Cybersecurity',
    issuer: 'Cisco',
    issueDate: '2023',
    expiryDate: null,
    credentialId: undefined,
    credentialUrl: undefined,
    logo: '/images/certs/intro-to-cybersecurity.png',
    featured: false,
  },
  {
    id: 'aws-ml-foundations',
    name: 'AWS Academy Machine Learning Foundations',
    issuer: 'Amazon Web Services',
    issueDate: '2024',
    expiryDate: null,
    credentialId: undefined,
    credentialUrl: undefined,
    logo: '/images/certs/aws-ml-foundations.png',
    featured: false,
  },
];

export const featuredCertifications = certifications.filter(c => c.featured);
export const allCertifications = certifications;
