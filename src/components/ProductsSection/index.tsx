import type { Product, CategoryId } from '../../types';
import { useProductsState } from '../../hooks/useProductsState';
import CategoryTabs from './CategoryTabs';
import ProductCard from './ProductCard';

interface ProductsSectionProps {
  activeCategory: CategoryId;
  searchQuery: string;
  onCategoryChange: (category: CategoryId) => void;
  onQuickView: (product: Product) => void;
  onViewMore: (product: Product) => void;
}

export default function ProductsSection({
  activeCategory,
  searchQuery,
  onCategoryChange,
  onQuickView,
  onViewMore,
}: ProductsSectionProps) {
  const { filteredProducts, isLoading } = useProductsState({ activeCategory, searchQuery });

  return (
    <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-200 dark:border-zinc-800 pb-4 mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-black uppercase text-zinc-900 dark:text-white tracking-wide flex items-center gap-2">
            FEATURED EQUIPMENT{' '}
            <span className="text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-normal px-2 py-0.5 rounded">
              SPAVY SPEC
            </span>
          </h2>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
            Official heavy-duty fitness equipment by Spavy Fitness Equipments PVT. LTD.
          </p>
        </div>

        <CategoryTabs activeCategory={activeCategory} onCategoryChange={onCategoryChange} />
      </div>

      {isLoading ? (
        <div className="text-center text-zinc-400 text-sm py-12">Loading equipment catalog...</div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onQuickView={onQuickView} 
              onViewMore={onViewMore}
            />
          ))}
        </div>
      )}

      {!isLoading && filteredProducts.length === 0 && (
        <div className="text-center text-zinc-400 text-sm py-12">
          No products match your search. Try a different category or keyword.
        </div>
      )}
    </section>
  );
}
