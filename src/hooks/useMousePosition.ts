'use client';

import { useState, useEffect } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

/**
 * Tracks normalized mouse position (-1 to 1).
 * Used for parallax and mouse-follow effects.
 */
export function useMousePosition(): MousePosition {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setPosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return position;
}
