import { Search, X } from 'lucide-react';

interface SearchOverlayProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onClose: () => void;
}

export default function SearchOverlay({ searchQuery, onSearchChange, onClose }: SearchOverlayProps) {
  return (
    <div className="bg-zinc-900 border-b border-zinc-700 py-3 px-4">
      <div className="max-w-3xl mx-auto flex items-center space-x-3">
        <Search className="w-5 h-5 text-red-500" />
        <input
          type="text"
          placeholder="Search by product name, e.g. Echo Bike, Power Rack, Barbell..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full bg-transparent border-none text-white focus:outline-none text-sm placeholder-zinc-500"
          autoFocus
        />
        <button onClick={onClose} className="text-zinc-400 hover:text-white">
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
