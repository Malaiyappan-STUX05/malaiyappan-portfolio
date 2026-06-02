'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { getSiteConfig } from '@/lib/data';

interface MobileMenuProps {
  onClose: () => void;
}

const site = getSiteConfig();

const menuVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <motion.div
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-40 bg-[#0A0A0F]/98 backdrop-blur-xl pt-20 md:hidden"
    >
      <nav className="flex flex-col items-center justify-center h-full gap-8 -mt-20">
        {site.navLinks.map(link => (
          <motion.div key={link.label} variants={itemVariants}>
            <Link
              href={link.href}
              onClick={onClose}
              className="text-2xl font-bold text-[#E8E8F0] hover:text-[#00F0FF] transition-colors"
            >
              {link.label}
            </Link>
          </motion.div>
        ))}

        {/* Social links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-6 mt-8"
        >
          {site.socials.map(social => (
            <a
              key={social.platform}
              href={social.url}
              target={social.platform !== 'email' ? '_blank' : undefined}
              rel={
                social.platform !== 'email'
                  ? 'noopener noreferrer'
                  : undefined
              }
              className="text-sm text-[#5A5A72] hover:text-[#00F0FF] transition-colors"
            >
              {social.platform.charAt(0).toUpperCase() + social.platform.slice(1)}
            </a>
          ))}
        </motion.div>
      </nav>
    </motion.div>
  );
}
