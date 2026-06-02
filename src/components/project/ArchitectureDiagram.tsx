'use client';

import Image from 'next/image';

interface ArchitectureDiagramProps {
  src: string;
  alt: string;
  caption?: string;
}

export function ArchitectureDiagram({
  src,
  alt,
  caption,
}: ArchitectureDiagramProps) {
  return (
    <figure className="rounded-xl overflow-hidden bg-[#12121A] border border-[rgba(0,240,255,0.08)]">
      <div className="relative aspect-video bg-[#0A0A0F]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain p-4"
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>
      {caption && (
        <figcaption className="px-4 py-3 border-t border-[rgba(0,240,255,0.06)] text-xs text-[#5A5A72] text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function ArchitectureDiagramPlaceholder() {
  return (
    <div className="rounded-xl bg-[#12121A] border border-dashed border-[rgba(0,240,255,0.1)] p-12 text-center">
      <div className="text-[#5A5A72]">
        <div className="text-3xl mb-3">📐</div>
        <p className="text-sm">
          Architecture diagram will be added. Check the GitHub repository for
          design documents.
        </p>
      </div>
    </div>
  );
}
