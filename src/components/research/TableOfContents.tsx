'use client';

import { useState, useEffect } from 'react';
import { type TableOfContentsItem } from '@/types';
import { List } from 'lucide-react';

interface TableOfContentsProps {
  items: TableOfContentsItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -80% 0px' }
    );

    items.forEach(item => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav className="rounded-xl bg-[#12121A] border border-[rgba(0,240,255,0.06)] p-5">
      <div className="flex items-center gap-2 mb-4">
        <List className="w-4 h-4 text-[#00F0FF]" />
        <h3 className="text-sm font-semibold text-[#E8E8F0] uppercase tracking-wider">
          Table of Contents
        </h3>
      </div>
      <ul className="space-y-2">
        {items.map(item => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block text-sm transition-colors duration-200 ${
                item.level === 2 ? 'pl-0' : 'pl-4'
              } ${
                activeId === item.id
                  ? 'text-[#00F0FF] font-medium'
                  : 'text-[#5A5A72] hover:text-[#9A9AAA]'
              }`}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
