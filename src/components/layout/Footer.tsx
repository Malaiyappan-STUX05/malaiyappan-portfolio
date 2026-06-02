'use client';

import Link from 'next/link';
import { getSiteConfig, getProfile } from '@/lib/data';

const site = getSiteConfig();
const profile = getProfile();

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[rgba(0,240,255,0.06)] bg-[#0A0A0F]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-xl font-bold text-[#E8E8F0] hover:text-[#00F0FF] transition-colors"
            >
              {profile.firstName}
              <span className="text-[#00F0FF]">.</span>
            </Link>
            <p className="mt-3 text-sm text-[#5A5A72] leading-relaxed max-w-xs">
              Cybersecurity engineer building intelligent security systems.
              Application security, DevSecOps, and security research.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-[#E8E8F0] uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {site.navLinks.map(link => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#5A5A72] hover:text-[#00F0FF] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div>
            <h4 className="text-sm font-semibold text-[#E8E8F0] uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5">
              {site.footerLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={
                      link.external ? 'noopener noreferrer' : undefined
                    }
                    className="text-sm text-[#5A5A72] hover:text-[#00F0FF] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[rgba(0,240,255,0.04)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#5A5A72]">
            &copy; {currentYear} {profile.name}. All rights reserved.
          </p>
          <p className="text-xs text-[#5A5A72]">
            Built with security in mind.
          </p>
        </div>
      </div>
    </footer>
  );
}
