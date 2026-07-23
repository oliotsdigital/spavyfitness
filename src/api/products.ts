import type { Product, CategoryId } from '../types';
import { PRODUCTS } from '../data/products';

const simulateDelay = (ms = 300) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchProducts(): Promise<Product[]> {
  await simulateDelay();
  return PRODUCTS;
}

export function filterProducts(
  products: Product[],
  activeCategory: CategoryId,
  searchQuery: string,
): Product[] {
  const query = searchQuery.toLowerCase();
  return products.filter((product) => {
    const matchesCategory = activeCategory === 'featured' || product.tag === activeCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });
}
