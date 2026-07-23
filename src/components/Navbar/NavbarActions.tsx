import { PhoneCall, Info, Grid, Sun, Moon } from 'lucide-react';
import type { NavbarActionsProps } from './Navbar.types';

export default function NavbarActions({
  onOpenContactUs,
  onNavigateAbout,
  onNavigateCategories,
  theme,
  toggleTheme,
}: NavbarActionsProps) {
  return (
    <div className="flex items-center space-x-6 text-xs text-zinc-700 font-semibold">
      {/* About Us */}
      <button
        onClick={onNavigateAbout}
        className="flex items-center space-x-1.5 hover:text-black transition-colors duration-150 focus:outline-none"
      >
        <Info className="w-4 h-4 text-zinc-600" />
        <span>About Us</span>
      </button>

      {/* Categories */}
      <button
        onClick={onNavigateCategories}
        className="flex items-center space-x-1.5 hover:text-black transition-colors duration-150 focus:outline-none"
      >
        <Grid className="w-4 h-4 text-zinc-600" />
        <span>Categories</span>
      </button>

      {/* Theme Toggle */}
      {theme && toggleTheme && (
        <button
          onClick={toggleTheme}
          className="flex items-center space-x-1.5 hover:text-black transition-colors duration-150 focus:outline-none"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? <Sun className="w-4 h-4 text-zinc-600" /> : <Moon className="w-4 h-4 text-zinc-600" />}
        </button>
      )}

      {/* Contact Us Red Button */}
      <button
        onClick={onOpenContactUs}
        className="flex items-center space-x-2 bg-[#E5231B] hover:bg-red-700 text-white font-extrabold px-4 py-2 rounded text-xs uppercase tracking-wide transition-colors duration-150 shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      >
        <PhoneCall className="w-3.5 h-3.5" />
        <span>Contact Us</span>
      </button>
    </div>
  );
}
