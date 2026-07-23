import { Star } from 'lucide-react';
import type { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onViewMore?: (product: Product) => void;
  onEnquireNow?: (product: Product) => void;
  variant?: 'landing' | 'category';
}

export default function ProductCard({
  product,
  onQuickView,
  onViewMore,
  onEnquireNow,
  variant = 'landing',
}: ProductCardProps) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden group hover:border-zinc-600 transition duration-300 flex flex-col justify-between">
      <div>
        <div className="relative h-64 overflow-hidden bg-black flex items-center justify-center p-4">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover h-full w-full group-hover:scale-105 transition duration-500 opacity-90 group-hover:opacity-100"
          />
          <span className="absolute top-3 left-3 bg-red-600/90 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-wider">
            {product.shippingDeal}
          </span>
        </div>

        <div className="p-4 space-y-2">
          <div className="flex items-center text-amber-400 text-xs gap-1">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span className="font-bold">{product.rating}</span>
            <span className="text-zinc-500">({product.reviews})</span>
          </div>

          <h3 className="font-extrabold text-white text-base group-hover:text-red-500 transition line-clamp-1">
            {product.name}
          </h3>

          <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">{product.description}</p>
        </div>
      </div>

      <div className="p-4 pt-0 space-y-3">
        <div className="flex items-baseline space-x-2">
          <span className="text-xl font-black text-white">{product.price}</span>
          <span className="text-xs text-zinc-500 font-mono">({product.usdPrice})</span>
        </div>

        <div className="flex gap-2">
          {variant === 'landing' ? (
            <button
              onClick={() => onViewMore && onViewMore(product)}
              className="w-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white font-bold text-xs py-2 rounded transition"
            >
              View More
            </button>
          ) : (
            <>
              <button
                onClick={() => onQuickView(product)}
                className="w-1/2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white font-bold text-xs py-2 rounded transition"
              >
                View
              </button>
              <button
                onClick={() => onEnquireNow && onEnquireNow(product)}
                className="w-1/2 bg-[#E5231B] hover:bg-red-700 text-white font-bold text-xs py-2 rounded transition"
              >
                Enquire now
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
