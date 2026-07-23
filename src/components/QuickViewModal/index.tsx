import { X } from 'lucide-react';
import type { Product } from '../../types';

interface QuickViewModalProps {
  product: Product;
  onClose: () => void;
  onInquireQuote: () => void;
}

export default function QuickViewModal({ product, onClose, onInquireQuote }: QuickViewModalProps) {
  const handleInquire = () => {
    onClose();
    onInquireQuote();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-sm">
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg max-w-2xl w-full p-6 relative text-zinc-900 dark:text-zinc-100 shadow-2xl space-y-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-700 dark:hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-zinc-100 dark:bg-black rounded p-2 flex items-center justify-center">
            <img src={product.image} alt={product.name} className="max-h-60 object-cover rounded" />
          </div>

          <div className="space-y-3">
            <span className="text-[10px] bg-red-600 text-white font-black px-2 py-0.5 rounded uppercase">
              {product.shippingDeal}
            </span>

            <h3 className="text-xl font-black uppercase text-zinc-900 dark:text-white">{product.name}</h3>

            <div className="text-2xl font-black text-zinc-900 dark:text-white">
              {product.price}{' '}
              <span className="text-xs font-mono text-zinc-500">({product.usdPrice})</span>
            </div>

            <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">{product.description}</p>

            <div className="border-t border-zinc-200 dark:border-zinc-800 pt-3 text-xs space-y-1 text-zinc-600 dark:text-zinc-400">
              <p><strong className="text-zinc-900 dark:text-white">Manufacturer:</strong> Spavy Fitness Equipments PVT. LTD.</p>
              <p><strong className="text-zinc-900 dark:text-white">Warranty:</strong> Lifetime Frame / 2 Year Components</p>
              <p><strong className="text-zinc-900 dark:text-white">Availability:</strong> In Stock - Ships within 24 Hrs</p>
            </div>

            <button
              onClick={handleInquire}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs py-3 rounded uppercase transition mt-2"
            >
              Inquire For Commercial Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
