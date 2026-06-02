'use client';

import { motion } from 'framer-motion';
import { type TechCategory } from '@/types';
import { Badge } from '@/components/ui/Badge';

interface TechStackListProps {
  categories: TechCategory[];
}

export function TechStackList({ categories }: TechStackListProps) {
  return (
    <div className="space-y-5">
      {categories.map((cat, i) => (
        <motion.div
          key={cat.category}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
        >
          <h4 className="text-sm font-semibold text-[#5A5A72] uppercase tracking-wider mb-2">
            {cat.category}
          </h4>
          <div className="flex flex-wrap gap-2">
            {cat.items.map(item => (
              <Badge key={item} variant="default" size="md">
                {item}
              </Badge>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
