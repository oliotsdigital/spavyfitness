import { Truck } from 'lucide-react';
import type { ShippingDeal } from '../../types';

interface ShippingDealCardProps {
  deal: ShippingDeal;
}

export default function ShippingDealCard({ deal }: ShippingDealCardProps) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg relative overflow-hidden group hover:border-red-600 transition">
      <div className="absolute top-0 right-0 bg-red-600 text-white font-mono text-[10px] px-2 py-0.5 uppercase font-bold">
        PROMO
      </div>
      <Truck className="w-8 h-8 text-red-500 mb-4" />
      <h3 className="text-base font-black text-white uppercase">{deal.title}</h3>
      <p className="text-xs text-zinc-400 mt-2 mb-4">{deal.desc}</p>
      <span className="inline-block bg-black border border-zinc-700 text-zinc-300 font-mono text-xs px-3 py-1.5 rounded">
        Use Code: <strong className="text-red-500">{deal.code}</strong>
      </span>
    </div>
  );
}
