import { Menu, X } from 'lucide-react';
import type { NavbarProps } from './Navbar.types';
import { useNavbarState } from './Navbar.state';
import NavbarLogo from './NavbarLogo';
import NavbarSearch from './NavbarSearch';
import NavbarActions from './NavbarActions';
import NavbarCategoryMenu from './NavbarCategoryMenu';

export default function Navbar({
  searchQuery,
  onSearchChange,
  activeCategory,
  onCategoryChange,
  onOpenTracker,
  onOpenLiveChat,
  onOpenContactUs,
  onNavigateHome,
  onNavigateAbout,
  onNavigateCategories,
  theme,
  toggleTheme,
}: NavbarProps) {
  // Component state management hook
  const {
    searchQuery: currentSearchQuery,
    activeCategoryId,
    isMobileMenuOpen,
    categories,
    setSearchQuery,
    setActiveCategory,
    toggleMobileMenu,
    handleContactUsClick,
  } = useNavbarState({
    externalSearchQuery: searchQuery,
    onExternalSearchChange: onSearchChange,
    externalActiveCategory: activeCategory,
    onExternalCategoryChange: onCategoryChange,
    onOpenLiveChat,
    onOpenContactUs,
  });

  return (
    <header className="bg-white border-b border-zinc-200 sticky top-0 z-40 shadow-sm">
      {/* Top Header Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 flex items-center justify-between gap-4">
        {/* Brand Logo Sub-component */}
        <NavbarLogo onLogoClick={onNavigateHome} />

        {/* Search Input Sub-component (Desktop & Tablet) */}
        <div className="hidden md:flex flex-1 justify-center px-4">
          <NavbarSearch
            searchQuery={currentSearchQuery}
            onSearchChange={setSearchQuery}
          />
        </div>

        {/* Actions Sub-component (Order Status, Live Chat, Red Contact Us Button) */}
        <div className="hidden lg:flex items-center">
          <NavbarActions
            onOpenTracker={onOpenTracker}
            onOpenContactUs={handleContactUsClick}
            onNavigateAbout={onNavigateAbout}
            onNavigateCategories={onNavigateCategories}
            theme={theme}
            toggleTheme={toggleTheme}
          />
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex lg:hidden items-center space-x-2">
          <button
            onClick={toggleMobileMenu}
            className="text-zinc-700 hover:text-black p-2 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar Row */}
      <div className="md:hidden px-4 pb-3">
        <NavbarSearch
          searchQuery={currentSearchQuery}
          onSearchChange={setSearchQuery}
        />
      </div>

      {/* Mobile Actions Drawer (When Mobile Menu Open) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-zinc-200 px-4 py-4 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-3 pb-2 border-b border-zinc-200">
            <button
              onClick={() => {
                if (onNavigateAbout) onNavigateAbout();
                toggleMobileMenu();
              }}
              className="text-left text-xs font-semibold text-zinc-700 hover:text-black py-1"
            >
              ℹ️ About Us
            </button>
            <button
              onClick={() => {
                if (onNavigateCategories) onNavigateCategories();
                toggleMobileMenu();
              }}
              className="text-left text-xs font-semibold text-zinc-700 hover:text-black py-1"
            >
              🗂️ Categories
            </button>
            {theme && toggleTheme && (
              <button
                onClick={() => {
                  toggleTheme();
                  toggleMobileMenu();
                }}
                className="text-left text-xs font-semibold text-zinc-700 hover:text-black py-1"
              >
                {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
              </button>
            )}
            <button
              onClick={() => {
                handleContactUsClick();
                toggleMobileMenu();
              }}
              className="w-full bg-[#E5231B] text-white font-bold py-2 rounded text-xs uppercase tracking-wide text-center"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}

      {/* Bottom Categories Navigation Bar */}
      <NavbarCategoryMenu
        categories={categories}
        activeCategoryId={activeCategoryId}
        onSelectCategory={setActiveCategory}
      />
    </header>
  );
}

export * from './Navbar.types';
