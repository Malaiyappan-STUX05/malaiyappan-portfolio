'use client';

/**
 * Fallback component displayed when WebGL is unavailable.
 * Provides a CSS-only animated background.
 */
export function ThreeFallback() {
  return (
    <div className="absolute inset-0 bg-[#0A0A0F] overflow-hidden">
      {/* Gradient orbs */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.04] blur-3xl"
        style={{
          background: 'radial-gradient(circle, #00F0FF, transparent 70%)',
          top: '10%',
          right: '5%',
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-[0.03] blur-3xl"
        style={{
          background: 'radial-gradient(circle, #00C4D4, transparent 70%)',
          bottom: '10%',
          left: '5%',
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,240,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,240,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
}
