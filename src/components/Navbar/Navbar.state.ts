import { useState, useEffect, useCallback } from 'react';
import type { CategoryId } from '../../types';
import type { NavbarCategory, NavbarState, NavbarStateActions } from './Navbar.types';
import { fetchNavbarCategories, submitContactInquiry } from '../../api/navbar';

interface UseNavbarStateParams {
  externalSearchQuery: string;
  onExternalSearchChange: (query: string) => void;
  externalActiveCategory: CategoryId | string;
  onExternalCategoryChange: (category: CategoryId) => void;
  onOpenLiveChat: () => void;
  onOpenContactUs?: () => void;
}

export function useNavbarState({
  externalSearchQuery,
  onExternalSearchChange,
  externalActiveCategory,
  onExternalCategoryChange,
  onOpenLiveChat,
  onOpenContactUs,
}: UseNavbarStateParams): NavbarState & NavbarStateActions {
  const [categories, setCategories] = useState<NavbarCategory[]>([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Map category IDs between Navbar menu and CategoryId type in products section
  const mapNavIdToCategoryId = (id: string): CategoryId => {
    switch (id) {
      case 'all':
        return 'featured';
      case 'crossfit':
        return 'crossfit';
      case 'rigs':
      case 'benches':
        return 'strongman';
      case 'barbells':
      case 'plates':
        return 'olympic';
      case 'functional':
      case 'conditioning':
      case 'apparel':
      case '3-ships-free':
      default:
        return 'featured';
    }
  };

  useEffect(() => {
    let isMounted = true;
    fetchNavbarCategories()
      .then((data) => {
        if (isMounted) {
          setCategories(data);
          setIsLoadingCategories(false);
        }
      })
      .catch((err) => {
        console.error('Failed to load navbar categories', err);
        if (isMounted) setIsLoadingCategories(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const setSearchQuery = useCallback(
    (query: string) => {
      onExternalSearchChange(query);
    },
    [onExternalSearchChange]
  );

  const setActiveCategory = useCallback(
    (categoryId: string) => {
      const mappedCategory = mapNavIdToCategoryId(categoryId);
      onExternalCategoryChange(mappedCategory);
    },
    [onExternalCategoryChange]
  );

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const handleContactUsClick = useCallback(() => {
    // Submit contact inquiry metric to API then trigger contact popup / live chat widget
    submitContactInquiry({ source: 'Navbar_CTA_Button' }).catch(() => {});
    if (onOpenContactUs) {
      onOpenContactUs();
    } else {
      onOpenLiveChat();
    }
  }, [onOpenContactUs, onOpenLiveChat]);

  // Determine current active navbar menu category
  const activeCategoryId = externalActiveCategory === 'featured' ? 'all' : (externalActiveCategory as string);

  return {
    searchQuery: externalSearchQuery,
    activeCategoryId,
    isMobileMenuOpen,
    categories,
    isLoadingCategories,
    setSearchQuery,
    setActiveCategory,
    toggleMobileMenu,
    handleContactUsClick,
  };
}
