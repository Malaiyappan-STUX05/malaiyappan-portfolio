'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export function CyberGlobe() {
  const groupRef = useRef<THREE.Group>(null);
  const ringsRef = useRef<THREE.Group>(null);
  const dotsRef = useRef<THREE.Points>(null);

  // Generate latitude/longitude grid points
  const { gridPositions, dotPositions } = useMemo(() => {
    const grid: number[] = [];
    const dots: number[] = [];

    // Latitude lines
    for (let lat = -80; lat <= 80; lat += 30) {
      const phi = (lat * Math.PI) / 180;
      for (let lon = 0; lon <= 360; lon += 6) {
        const theta = (lon * Math.PI) / 180;
        const x = Math.cos(phi) * Math.cos(theta);
        const y = Math.sin(phi);
        const z = Math.cos(phi) * Math.sin(theta);
        grid.push(x, y, z);
        // Connect to next point
        if (lon < 360) {
          const nextTheta = ((lon + 6) * Math.PI) / 180;
          grid.push(
            Math.cos(phi) * Math.cos(nextTheta),
            Math.sin(phi),
            Math.cos(phi) * Math.sin(nextTheta)
          );
        }
      }
    }

    // Longitude lines
    for (let lon = 0; lon < 360; lon += 30) {
      const theta = (lon * Math.PI) / 180;
      for (let lat = -90; lat < 90; lat += 6) {
        const phi = (lat * Math.PI) / 180;
        const nextPhi = ((lat + 6) * Math.PI) / 180;
        grid.push(
          Math.cos(phi) * Math.cos(theta),
          Math.sin(phi),
          Math.cos(phi) * Math.sin(theta),
          Math.cos(nextPhi) * Math.cos(theta),
          Math.sin(nextPhi),
          Math.cos(nextPhi) * Math.sin(theta)
        );
      }
    }

    // Scattered dots on surface for threat points
    for (let i = 0; i < 80; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.0 + (Math.random() - 0.5) * 0.02;
      dots.push(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      );
    }

    return {
      gridPositions: new Float32Array(grid),
      dotPositions: new Float32Array(dots),
    };
  }, []);

  useFrame(state => {
    const time = state.clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.08;
    }

    if (ringsRef.current) {
      ringsRef.current.rotation.z = time * 0.03;
    }
  });

  return (
    <Float speed={0.8} rotationIntensity={0.15} floatIntensity={0.2}>
      <group ref={groupRef} position={[3.5, 0.5, -2]} scale={0.9}>
        {/* Core sphere — very subtle */}
        <mesh>
          <sphereGeometry args={[0.98, 32, 32]} />
          <meshBasicMaterial
            color="#00F0FF"
            transparent
            opacity={0.015}
            depthWrite={false}
          />
        </mesh>

        {/* Grid lines */}
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={gridPositions.length / 3}
              array={gridPositions}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color="#00F0FF"
            transparent
            opacity={0.12}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </lineSegments>

        {/* Surface dots (threat points) */}
        <points ref={dotsRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={dotPositions.length / 3}
              array={dotPositions}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            color="#00C4D4"
            size={0.025}
            transparent
            opacity={0.6}
            sizeAttenuation
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </points>

        {/* Outer rings */}
        <group ref={ringsRef}>
          {/* Ring 1 */}
          <mesh rotation={[Math.PI / 3, 0, 0]}>
            <torusGeometry args={[1.3, 0.005, 8, 100]} />
            <meshBasicMaterial
              color="#00F0FF"
              transparent
              opacity={0.2}
              blending={THREE.AdditiveBlending}
            />
          </mesh>

          {/* Ring 2 */}
          <mesh rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
            <torusGeometry args={[1.5, 0.004, 8, 100]} />
            <meshBasicMaterial
              color="#00F0FF"
              transparent
              opacity={0.15}
              blending={THREE.AdditiveBlending}
            />
          </mesh>

          {/* Ring 3 */}
          <mesh rotation={[Math.PI / 6, -Math.PI / 3, 0]}>
            <torusGeometry args={[1.7, 0.003, 8, 100]} />
            <meshBasicMaterial
              color="#00C4D4"
              transparent
              opacity={0.1}
              blending={THREE.AdditiveBlending}
            />
          </mesh>
        </group>
      </group>
    </Float>
  );
}
