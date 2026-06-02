'use client';

import { useState } from 'react';
import { type ResearchArticle } from '@/types';
import { Badge } from '@/components/ui/Badge';

interface ResearchFilterProps {
  articles: ResearchArticle[];
  onFilter: (filtered: ResearchArticle[]) => void;
}

const categories = [
  { value: 'all', label: 'All' },
  { value: 'vulnerability-research', label: 'Vulnerability Research' },
  { value: 'appsec', label: 'Application Security' },
  { value: 'devsecops', label: 'DevSecOps' },
  { value: 'threat-analysis', label: 'Threat Analysis' },
  { value: 'tooling', label: 'Security Tooling' },
];

export function ResearchFilter({ articles, onFilter }: ResearchFilterProps) {
  const [active, setActive] = useState('all');

  const handleFilter = (category: string) => {
    setActive(category);
    if (category === 'all') {
      onFilter(articles);
    } else {
      onFilter(articles.filter(a => a.category === category));
    }
  };

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map(cat => (
        <button
          key={cat.value}
          onClick={() => handleFilter(cat.value)}
          className="cursor-pointer"
        >
          <Badge
            variant={active === cat.value ? 'cyan' : 'muted'}
            size="md"
          >
            {cat.label}
          </Badge>
        </button>
      ))}
    </div>
  );
}
