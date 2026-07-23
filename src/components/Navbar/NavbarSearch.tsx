import { Search } from 'lucide-react';
import type { NavbarSearchProps } from './Navbar.types';

export default function NavbarSearch({
  searchQuery,
  onSearchChange,
  onSubmitSearch,
}: NavbarSearchProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSubmitSearch) {
      onSubmitSearch();
    }
  };

  return (
    <div className="relative w-full max-w-xl">
      <div className="relative flex items-center">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search Barbells, Racks, Bikes, Functional Trainers..."
          className="w-full bg-[#F4F4F5] border border-zinc-300 text-xs text-zinc-900 placeholder-zinc-500 rounded-md py-2.5 pl-9 pr-4 focus:outline-none focus:border-[#E5231B] focus:bg-white focus:ring-1 focus:ring-[#E5231B] transition-all duration-200 shadow-inner"
        />
        <Search className="w-4 h-4 text-zinc-500 absolute left-3 pointer-events-none" />
      </div>
    </div>
  );
}
