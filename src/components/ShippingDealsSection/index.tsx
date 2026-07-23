import { SHIPPING_DEALS } from '../../data/constants';
import ShippingDealCard from './ShippingDealCard';

export default function ShippingDealsSection() {
  return (
    <section id="deals" className="relative bg-white dark:bg-zinc-950 border-y border-zinc-200 dark:border-zinc-800 py-12 transition-colors duration-300 overflow-hidden">
      {/* Grey overlay layer */}
      <div className="absolute inset-0 bg-zinc-100/80 dark:bg-zinc-900/40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black uppercase text-zinc-900 dark:text-white tracking-wide">
            DAILY SHIPPING DEALS &amp; OFFERS
          </h2>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
            Save time and freight costs with official Spavy Fitness shipping programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SHIPPING_DEALS.map((deal) => (
            <ShippingDealCard key={deal.code} deal={deal} />
          ))}
        </div>
      </div>
    </section>
  );
}
