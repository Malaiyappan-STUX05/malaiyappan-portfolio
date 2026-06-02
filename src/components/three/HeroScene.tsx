'use client';

import dynamic from 'next/dynamic';
import { useReducedMotion } from '@/hooks/useReducedMotion';

// Dynamic import to avoid SSR issues with Three.js
const SceneProvider = dynamic(
  () => import('./SceneProvider').then(m => ({ default: m.SceneProvider })),
  {
    ssr: false,
    loading: () => <div className="w-full h-full bg-[#0A0A0F]" />,
  }
);

// Fallback for reduced motion preference
function StaticFallback() {
  return (
    <div className="w-full h-full bg-[#0A0A0F]">
      {/* Subtle static background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 70% 30%, rgba(0,240,255,0.3) 0%, transparent 50%),
            radial-gradient(circle at 30% 70%, rgba(0,196,212,0.2) 0%, transparent 40%)
          `,
        }}
      />
    </div>
  );
}

export function HeroScene() {
  const prefersReducedMotion = useReducedMotion();

  // Detect mobile/tablet for reduced particle count
  const isMobile =
    typeof window !== 'undefined' && window.innerWidth < 768;
  const isTablet =
    typeof window !== 'undefined' &&
    window.innerWidth >= 768 &&
    window.innerWidth < 1024;

  const particleCount = prefersReducedMotion
    ? 100
    : isMobile
      ? 200
      : isTablet
        ? 400
        : 600;

  if (prefersReducedMotion) {
    return <StaticFallback />;
  }

  return (
    <div className="w-full h-full absolute inset-0">
      <SceneProvider particleCount={particleCount} />
    </div>
  );
}
