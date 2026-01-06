'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useMemo, useCallback } from 'react';
import { ResearchArea } from '@/lib/types';

interface TagFilterProps {
  areas: ResearchArea[];
  counts?: Record<string, number>;
}

export function TagFilter({ areas, counts }: TagFilterProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selectedArea = searchParams.get('topic');

  const handleSelect = useCallback((areaId: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (areaId) {
      params.set('topic', areaId);
    } else {
      params.delete('topic');
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }, [searchParams, router, pathname]);

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <button
        onClick={() => handleSelect(null)}
        className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
          selectedArea === null
            ? 'bg-accent-primary text-bg-primary'
            : 'bg-bg-secondary border border-border text-text-secondary hover:border-accent-primary/50'
        }`}
      >
        All
      </button>
      {areas.map((area) => {
        const count = counts?.[area.id];
        return (
          <button
            key={area.id}
            onClick={() => handleSelect(area.id)}
            className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
              selectedArea === area.id
                ? 'bg-accent-primary text-bg-primary'
                : 'bg-bg-secondary border border-border text-text-secondary hover:border-accent-primary/50'
            }`}
          >
            {area.label}
            {count !== undefined && count > 0 && (
              <span className="ml-1.5 text-xs opacity-70">({count})</span>
            )}
          </button>
        );
      })}
    </div>
  );
}

// Hook to filter items by research area from URL
export function useTagFilter<T extends { topics?: string[]; tags?: string[] }>(
  items: T[],
  areas: ResearchArea[]
) {
  const searchParams = useSearchParams();
  const selectedArea = searchParams.get('topic');

  const filteredItems = useMemo(() => {
    if (!selectedArea) return items;

    const area = areas.find(a => a.id === selectedArea);
    if (!area) return items;

    const allTags = [area.id, ...area.aliases].map(t => t.toLowerCase());

    return items.filter(item => {
      const itemTags = item.topics || item.tags || [];
      return itemTags.some(tag => allTags.includes(tag.toLowerCase()));
    });
  }, [items, selectedArea, areas]);

  const counts = useMemo(() => {
    const result: Record<string, number> = {};
    for (const area of areas) {
      const allTags = [area.id, ...area.aliases].map(t => t.toLowerCase());
      result[area.id] = items.filter(item => {
        const itemTags = item.topics || item.tags || [];
        return itemTags.some(tag => allTags.includes(tag.toLowerCase()));
      }).length;
    }
    return result;
  }, [items, areas]);

  return {
    selectedArea,
    filteredItems,
    counts
  };
}
