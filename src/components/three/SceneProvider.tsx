'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { ParticleField } from './ParticleField';
import { CyberGlobe } from './CyberGlobe';

interface SceneProviderProps {
  particleCount?: number;
}

export function SceneProvider({ particleCount = 600 }: SceneProviderProps) {
  return (
    <Canvas
      className="!absolute inset-0"
      camera={{ position: [0, 0, 8], fov: 60 }}
      dpr={[1, 1.5]}
      performance={{ min: 0.5 }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      }}
      style={{ pointerEvents: 'none' }}
    >
      <Suspense fallback={null}>
        {/* Ambient lighting for depth */}
        <ambientLight intensity={0.3} />

        {/* Particle field — background layer */}
        <ParticleField count={particleCount} radius={14} />

        {/* Cyber globe — focal point */}
        <CyberGlobe />
      </Suspense>
    </Canvas>
  );
}
