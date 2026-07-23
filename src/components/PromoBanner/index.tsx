import { Tag } from 'lucide-react';
import type { CategoryId } from '../../types';

interface PromoBannerProps {
  onSeeDetails: (category: CategoryId) => void;
}

export default function PromoBanner({ onSeeDetails }: PromoBannerProps) {
  return (
    <div className="bg-red-700 text-white text-xs font-bold py-2 px-4 shadow-inner">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Tag className="w-4 h-4" />
          <span className="uppercase tracking-wide font-extrabold">DAILY SHIPPING DEALS &gt;</span>
          <span className="hidden md:inline font-medium">
            BUY A FUNCTIONAL TRAINER AND YOUR ENTIRE ORDER SHIPS FREE!
          </span>
        </div>
        <button
          onClick={() => onSeeDetails('featured')}
          className="underline hover:text-zinc-200 text-xs"
        >
          See Details
        </button>
      </div>
    </div>
  );
}
