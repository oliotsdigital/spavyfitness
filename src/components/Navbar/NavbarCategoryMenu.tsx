import type { NavbarCategoryMenuProps } from './Navbar.types';

export default function NavbarCategoryMenu({
  categories,
  activeCategoryId,
  onSelectCategory,
}: NavbarCategoryMenuProps) {
  return (
    <div className="bg-white border-t border-b border-zinc-200 text-xs uppercase font-extrabold tracking-wider overflow-x-auto scrollbar-none shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-8 py-2.5 min-w-max">
        {categories.map((cat) => {
          const isActive = activeCategoryId === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`relative py-1 transition-colors duration-150 focus:outline-none whitespace-nowrap ${
                isActive
                  ? 'text-[#E5231B] font-black'
                  : cat.isHighlight
                  ? 'text-[#E5231B] hover:text-red-700 font-bold'
                  : 'text-zinc-800 hover:text-[#E5231B] font-bold'
              }`}
            >
              {cat.label}
              {/* Active Red Underline Indicator */}
              {isActive && (
                <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#E5231B] rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
