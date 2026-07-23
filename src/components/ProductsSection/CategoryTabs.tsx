import type { CategoryId } from '../../types';
import { CATEGORY_TABS } from '../../data/constants';

interface CategoryTabsProps {
  activeCategory: CategoryId;
  onCategoryChange: (category: CategoryId) => void;
}

export default function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
  return (
    <div className="flex flex-wrap gap-2 text-xs font-bold uppercase">
      {CATEGORY_TABS.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onCategoryChange(tab.id)}
          className={`px-4 py-2 rounded transition ${
            activeCategory === tab.id
              ? 'bg-red-600 text-white font-black'
              : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
