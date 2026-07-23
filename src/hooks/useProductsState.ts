import { useState, useEffect, useMemo } from 'react';
import type { Product, CategoryId } from '../types';
import { fetchProducts, filterProducts } from '../api';

interface UseProductsStateProps {
  activeCategory: CategoryId;
  searchQuery: string;
}

export function useProductsState({ activeCategory, searchQuery }: UseProductsStateProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function loadProducts() {
      setIsLoading(true);
      try {
        const data = await fetchProducts();
        if (!cancelled) setProducts(data);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    loadProducts();
    return () => {
      cancelled = true;
    };
  }, []);

  const filteredProducts = useMemo(
    () => filterProducts(products, activeCategory, searchQuery),
    [products, activeCategory, searchQuery],
  );

  return { products, filteredProducts, isLoading };
}
