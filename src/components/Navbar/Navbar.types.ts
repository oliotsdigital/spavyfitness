import type { CategoryId } from '../../types';

export interface NavbarCategory {
  id: string;
  label: string;
  isHighlight?: boolean;
}

export interface NavbarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeCategory: CategoryId | string;
  onCategoryChange: (category: CategoryId) => void;
  onOpenTracker: () => void;
  onOpenLiveChat: () => void;
  onOpenContactUs?: () => void;
  onNavigateHome?: () => void;
  onNavigateAbout?: () => void;
  onNavigateCategories?: () => void;
  theme?: 'light' | 'dark';
  toggleTheme?: () => void;
}

export interface NavbarLogoProps {
  onLogoClick?: () => void;
}

export interface NavbarSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSubmitSearch?: () => void;
}

export interface NavbarActionsProps {
  onOpenTracker: () => void;
  onOpenContactUs: () => void;
  onNavigateAbout?: () => void;
  onNavigateCategories?: () => void;
  theme?: 'light' | 'dark';
  toggleTheme?: () => void;
}

export interface NavbarCategoryMenuProps {
  categories: NavbarCategory[];
  activeCategoryId: string;
  onSelectCategory: (categoryId: string) => void;
}

export interface NavbarState {
  searchQuery: string;
  activeCategoryId: string;
  isMobileMenuOpen: boolean;
  categories: NavbarCategory[];
  isLoadingCategories: boolean;
}

export interface NavbarStateActions {
  setSearchQuery: (query: string) => void;
  setActiveCategory: (categoryId: string) => void;
  toggleMobileMenu: () => void;
  handleContactUsClick: () => void;
}
