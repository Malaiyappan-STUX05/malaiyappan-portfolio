'use client';

import { useState, useEffect } from 'react';

/**
 * Returns scroll progress from 0 (top) to 1 (bottom).
 * Used for scroll-linked animations and progress indicators.
 */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handler = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) {
        setProgress(0);
        return;
      }
      setProgress(window.scrollY / scrollHeight);
    };

    window.addEventListener('scroll', handler, { passive: true });
    handler();

    return () => window.removeEventListener('scroll', handler);
  }, []);

  return progress;
}
