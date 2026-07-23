import { ChevronRight } from 'lucide-react';
import type { CategoryCollection } from '../../types';

interface CategoryCollectionCardProps {
  collection: CategoryCollection;
}

export default function CategoryCollectionCard({ collection }: CategoryCollectionCardProps) {
  return (
    <div className="relative h-64 bg-zinc-900 rounded-lg overflow-hidden group">
      <img
        src={collection.image}
        alt={collection.alt}
        className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-6 flex flex-col justify-end">
        <span className="text-xs text-red-500 font-bold uppercase">{collection.subtitle}</span>
        <h3 className="text-xl font-black text-white uppercase">{collection.title}</h3>
        <a
          href="#products"
          className="text-xs font-bold text-white underline mt-2 flex items-center gap-1"
        >
          Shop Now <ChevronRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
