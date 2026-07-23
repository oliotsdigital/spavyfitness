import type { CategoryId, Product } from '../../types';
import { useProductsState } from '../../hooks/useProductsState';
import ProductCard from '../../components/ProductsSection/ProductCard';
import CategoryTabs from '../../components/ProductsSection/CategoryTabs';

interface CategoryPageProps {
  activeCategory: CategoryId;
  searchQuery: string;
  onCategoryChange: (category: CategoryId) => void;
  onQuickView: (product: Product) => void;
  onEnquireNow: (product: Product) => void;
}

export default function CategoryPage({
  activeCategory,
  searchQuery,
  onCategoryChange,
  onQuickView,
  onEnquireNow,
}: CategoryPageProps) {
  const { filteredProducts, isLoading } = useProductsState({ activeCategory, searchQuery });

  return (
    <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-800 pb-4 mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-black uppercase text-white tracking-wide">
            {activeCategory === 'all' ? 'ALL PRODUCTS' : activeCategory.toUpperCase().replace('-', ' ')}
          </h1>
          <p className="text-sm text-zinc-400 mt-2">
            Browse our full catalog of premium fitness equipment.
          </p>
        </div>

        <CategoryTabs activeCategory={activeCategory} onCategoryChange={onCategoryChange} />
      </div>

      {isLoading ? (
        <div className="text-center text-zinc-400 py-12">Loading catalog...</div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              variant="category"
              onQuickView={onQuickView}
              onEnquireNow={onEnquireNow}
            />
          ))}
        </div>
      )}

      {!isLoading && filteredProducts.length === 0 && (
        <div className="text-center text-zinc-400 py-12">
          No products match your search. Try a different category or keyword.
        </div>
      )}
    </main>
  );
}
