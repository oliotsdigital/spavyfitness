import { useState, useCallback } from 'react';
import type { CategoryId, Product } from '../types';

export interface LandingPageState {
  currentPage: 'home' | 'category';
  activeCategory: CategoryId;
  searchQuery: string;
  isSearchOpen: boolean;
  isQuickViewOpen: boolean;
  selectedProduct: Product | null;
  isTrackerOpen: boolean;
  isLiveChatOpen: boolean;
}

export interface LandingPageActions {
  navigateToHome: () => void;
  navigateToCategory: () => void;
  setActiveCategory: (category: CategoryId) => void;
  setSearchQuery: (query: string) => void;
  toggleSearch: () => void;
  closeSearch: () => void;
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;
  openTracker: () => void;
  closeTracker: () => void;
  openLiveChat: () => void;
  closeLiveChat: () => void;
}

export function useLandingPageState(): LandingPageState & LandingPageActions {
  const [currentPage, setCurrentPage] = useState<'home' | 'category'>('home');
  const [activeCategory, setActiveCategory] = useState<CategoryId>('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isTrackerOpen, setIsTrackerOpen] = useState(false);
  const [isLiveChatOpen, setIsLiveChatOpen] = useState(false);

  const navigateToHome = useCallback(() => setCurrentPage('home'), []);
  const navigateToCategory = useCallback(() => {
    setCurrentPage('category');
    window.scrollTo(0, 0);
  }, []);

  const toggleSearch = useCallback(() => setIsSearchOpen((prev) => !prev), []);
  const closeSearch = useCallback(() => setIsSearchOpen(false), []);

  const openQuickView = useCallback((product: Product) => {
    setSelectedProduct(product);
    setIsQuickViewOpen(true);
  }, []);

  const closeQuickView = useCallback(() => {
    setIsQuickViewOpen(false);
    setSelectedProduct(null);
  }, []);

  const openTracker = useCallback(() => setIsTrackerOpen(true), []);
  const closeTracker = useCallback(() => setIsTrackerOpen(false), []);
  const openLiveChat = useCallback(() => setIsLiveChatOpen(true), []);
  const closeLiveChat = useCallback(() => setIsLiveChatOpen(false), []);

  return {
    currentPage,
    activeCategory,
    searchQuery,
    isSearchOpen,
    isQuickViewOpen,
    selectedProduct,
    isTrackerOpen,
    isLiveChatOpen,
    navigateToHome,
    navigateToCategory,
    setActiveCategory,
    setSearchQuery,
    toggleSearch,
    closeSearch,
    openQuickView,
    closeQuickView,
    openTracker,
    closeTracker,
    openLiveChat,
    closeLiveChat,
  };
}
