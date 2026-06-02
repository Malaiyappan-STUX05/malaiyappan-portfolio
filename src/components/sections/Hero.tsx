'use client';

import { useEffect, useRef, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowDown, Shield, Lock, Search } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { getProfile, getFeaturedCertifications } from '@/lib/data';
import { GridBackground } from '@/components/ui/GridBackground';
import { GradientOrb } from '@/components/ui/GradientOrb';

const HeroScene = lazy(() =>
  import('@/components/three/HeroScene').then(m => ({ default: m.HeroScene }))
);

const profile = getProfile();
const featuredCerts = getFeaturedCertifications();

export function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <GridBackground />

      {/* Gradient orbs */}
      <GradientOrb
        color="cyan"
        size="xl"
        position={{ top: '-10%', right: '-5%' }}
        delay={0.2}
      />
      <GradientOrb
        color="teal"
        size="lg"
        position={{ bottom: '10%', left: '-10%' }}
        delay={0.5}
      />

      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Suspense
          fallback={
            <div className="w-full h-full bg-[#0A0A0F]" />
          }
        >
          <HeroScene />
        </Suspense>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-32">
        <div className="max-w-3xl">
          {/* Featured cert badge */}
          {featuredCerts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(0,240,255,0.06)] border border-[rgba(0,240,255,0.15)]">
                <Shield className="w-3.5 h-3.5 text-[#00F0FF]" />
                <span className="text-xs font-medium text-[#00F0FF]">
                  {featuredCerts[0].name} Certified
                </span>
              </div>
            </motion.div>
          )}

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-[#E8E8F0] leading-[1.05] tracking-tight"
          >
            {profile.name}
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-4 text-xl md:text-2xl font-semibold text-[#00F0FF]"
          >
            {profile.role}
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-2 text-base md:text-lg text-[#9A9AAA] font-medium"
          >
            {profile.tagline}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-6 text-lg text-[#9A9AAA] leading-relaxed max-w-2xl"
          >
            I engineer intelligent security systems — from ML-powered
            vulnerability scoring to automated threat detection. Focused on
            application security, DevSecOps, and security research.
          </motion.p>

          {/* Role badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Badge
              variant="default"
              size="md"
              className="inline-flex items-center gap-1.5"
            >
              <Shield className="w-3.5 h-3.5" />
              Application Security
            </Badge>
            <Badge
              variant="default"
              size="md"
              className="inline-flex items-center gap-1.5"
            >
              <Lock className="w-3.5 h-3.5" />
              DevSecOps
            </Badge>
            <Badge
              variant="default"
              size="md"
              className="inline-flex items-center gap-1.5"
            >
              <Search className="w-3.5 h-3.5" />
              Security Research
            </Badge>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={scrollToContent}
            >
              View My Work
              <ArrowDown className="w-5 h-5" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href={profile.resumeUrl}
              external
            >
              <Download className="w-5 h-5" />
              Download Resume
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <button
          onClick={scrollToContent}
          className="flex flex-col items-center gap-2 text-[#5A5A72] hover:text-[#00F0FF] transition-colors"
          aria-label="Scroll to content"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}
