'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

interface ParticleFieldProps {
  count?: number;
  radius?: number;
  mouseInfluence?: number;
}

export function ParticleField({
  count = 600,
  radius = 12,
  mouseInfluence = 0.3,
}: ParticleFieldProps) {
  const meshRef = useRef<THREE.Points>(null);
  const lineRef = useRef<THREE.LineSegments>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Generate particle positions
  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // Distribute particles in a spherical volume
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = radius * Math.cbrt(Math.random());

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      // Cyan to teal color gradient
      const t = Math.random();
      colors[i * 3] = 0;
      colors[i * 3 + 1] = 0.85 + t * 0.1;
      colors[i * 3 + 2] = 0.9 + t * 0.1;
    }

    return { positions, colors };
  }, [count, radius]);

  // Generate connection lines between nearby particles
  const linePositions = useMemo(() => {
    const linePositions: number[] = [];
    const maxDistance = 2.5;
    const maxLines = 300;
    let linesAdded = 0;

    for (let i = 0; i < count && linesAdded < maxLines; i++) {
      for (let j = i + 1; j < count && linesAdded < maxLines; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < maxDistance) {
          linePositions.push(
            positions[i * 3],
            positions[i * 3 + 1],
            positions[i * 3 + 2],
            positions[j * 3],
            positions[j * 3 + 1],
            positions[j * 3 + 2]
          );
          linesAdded++;
        }
      }
    }

    return new Float32Array(linePositions);
  }, [positions, count]);

  // Animation loop
  useFrame(state => {
    const time = state.clock.getElapsedTime();

    if (meshRef.current) {
      meshRef.current.rotation.y = time * 0.02;
      meshRef.current.rotation.x = Math.sin(time * 0.01) * 0.05;
    }

    if (lineRef.current) {
      lineRef.current.rotation.y = time * 0.02;
      lineRef.current.rotation.x = Math.sin(time * 0.01) * 0.05;
    }

    // Track mouse for subtle parallax
    if (state.pointer) {
      mouseRef.current.x += (state.pointer.x - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (state.pointer.y - mouseRef.current.y) * 0.05;
    }
  });

  return (
    <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.3}>
      <group>
        {/* Particles */}
        <points ref={meshRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={count}
              array={positions}
              itemSize={3}
            />
            <bufferAttribute
              attach="attributes-color"
              count={count}
              array={colors}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.04}
            vertexColors
            transparent
            opacity={0.7}
            sizeAttenuation
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </points>

        {/* Connection lines */}
        {linePositions.length > 0 && (
          <lineSegments ref={lineRef}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={linePositions.length / 3}
                array={linePositions}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial
              color="#00F0FF"
              transparent
              opacity={0.06}
              blending={THREE.AdditiveBlending}
              depthWrite={false}
            />
          </lineSegments>
        )}
      </group>
    </Float>
  );
}
