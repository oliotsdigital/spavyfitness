import { useLandingPageState } from './hooks/useLandingPageState';
import Navbar from './components/Navbar';
import PromoBanner from './components/PromoBanner';
import SearchOverlay from './components/SearchOverlay';
import HeroSection from './components/HeroSection';
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
  } = useLandingPageState();

  return (
    <div className="min-h-screen bg-[#111111] text-gray-100 font-sans antialiased flex flex-col">
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
        onOpenContactUs={openLiveChat}
      />

      {isSearchOpen && (
        <SearchOverlay
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onClose={closeSearch}
        />
      )}

      {currentPage === 'home' ? (
        <>
          <HeroSection onOpenLiveChat={openLiveChat} />
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
      ) : (
        <CategoryPage
          activeCategory={activeCategory}
          searchQuery={searchQuery}
          onCategoryChange={setActiveCategory}
          onQuickView={openQuickView}
          onEnquireNow={openLiveChat}
        />
      )}

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
