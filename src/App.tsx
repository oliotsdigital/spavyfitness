import { useLandingPageState } from './hooks/useLandingPageState';
import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import PromoBanner from './components/PromoBanner';
import SearchOverlay from './components/SearchOverlay';
import HeroSection from './components/HeroSection';
import ProductCarousel from './components/ProductCarousel';
import ProductsSection from './components/ProductsSection';
import ShippingDealsSection from './components/ShippingDealsSection';
import CategoryCollectionsSection from './components/CategoryCollectionsSection';
import InvitationalSection from './components/InvitationalSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import QuickViewModal from './components/QuickViewModal';
import OrderTrackerModal from './components/OrderTrackerModal';
import LiveChatWidget from './components/LiveChatWidget';

import CategoryPage from './pages/CategoryPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';

export default function App() {
  const {
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
    closeSearch,
    openQuickView,
    closeQuickView,
    openTracker,
    closeTracker,
    openLiveChat,
    closeLiveChat,
    navigateToAbout,
    navigateToContact,
  } = useLandingPageState();

  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-[#111111] text-zinc-900 dark:text-gray-100 font-sans antialiased flex flex-col transition-colors duration-300">
      <PromoBanner onSeeDetails={setActiveCategory} />

      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeCategory={activeCategory}
        onCategoryChange={(cat) => {
          setActiveCategory(cat);
          navigateToCategory();
        }}
        onNavigateHome={navigateToHome}
        onOpenTracker={openTracker}
        onOpenLiveChat={openLiveChat}
        onOpenContactUs={navigateToContact}
        onNavigateAbout={navigateToAbout}
        onNavigateCategories={navigateToCategory}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {isSearchOpen && (
        <SearchOverlay
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onClose={closeSearch}
        />
      )}

      {currentPage === 'home' && (
        <>
          <HeroSection onOpenLiveChat={openLiveChat} />
          <ProductCarousel />
          <ProductsSection
            activeCategory={activeCategory}
            searchQuery={searchQuery}
            onCategoryChange={setActiveCategory}
            onQuickView={openQuickView}
            onViewMore={navigateToCategory}
          />
          <ShippingDealsSection />
          <CategoryCollectionsSection />
          <InvitationalSection />
          <FeaturesSection onOpenTracker={openTracker} onOpenLiveChat={openLiveChat} />
        </>
      )}

      {currentPage === 'category' && (
        <CategoryPage
          activeCategory={activeCategory}
          searchQuery={searchQuery}
          onCategoryChange={setActiveCategory}
          onQuickView={openQuickView}
          onEnquireNow={openLiveChat}
        />
      )}

      {currentPage === 'about' && <AboutUsPage />}

      {currentPage === 'contact' && <ContactUsPage />}

      <Footer onOpenLiveChat={openLiveChat} onOpenTracker={openTracker} />

      {isQuickViewOpen && selectedProduct && (
        <QuickViewModal
          product={selectedProduct}
          onClose={closeQuickView}
          onInquireQuote={openLiveChat}
        />
      )}

      {isTrackerOpen && <OrderTrackerModal onClose={closeTracker} />}

      {isLiveChatOpen && <LiveChatWidget onClose={closeLiveChat} />}
    </div>
  );
}
