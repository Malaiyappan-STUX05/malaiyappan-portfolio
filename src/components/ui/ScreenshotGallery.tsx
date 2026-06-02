'use client';

import Image from 'next/image';
import { type Screenshot } from '@/types';
import { Card } from './Card';

interface ScreenshotGalleryProps {
  screenshots: Screenshot[];
  className?: string;
}

export function ScreenshotGallery({
  screenshots,
  className = '',
}: ScreenshotGalleryProps) {
  if (screenshots.length === 0) {
    return (
      <Card variant="glass" className={`text-center py-12 ${className}`}>
        <div className="text-[#5A5A72]">
          <div className="text-3xl mb-3">🖼️</div>
          <p className="text-sm">
            Screenshots will be added soon. Check the GitHub repository for
            visuals.
          </p>
        </div>
      </Card>
    );
  }

  return (
    <div className={`grid gap-4 ${screenshots.length > 1 ? 'md:grid-cols-2' : ''} ${className}`}>
      {screenshots.map((screenshot, i) => (
        <Card key={i} variant="glass" hover className="overflow-hidden p-0">
          <div className="relative aspect-video bg-[#0A0A0F]">
            <Image
              src={screenshot.src}
              alt={screenshot.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {screenshot.caption && (
            <div className="px-4 py-3 border-t border-[rgba(0,240,255,0.06)]">
              <p className="text-xs text-[#5A5A72]">{screenshot.caption}</p>
            </div>
          )}
        </Card>
      ))}
    </div>
  );
}
