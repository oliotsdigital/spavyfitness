import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenLiveChat: () => void;
}

export default function HeroSection({ onOpenLiveChat }: HeroSectionProps) {
  return (
    <section className="relative bg-zinc-950 overflow-hidden border-b border-zinc-800">
      <div className="absolute inset-0 z-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1600')] bg-cover bg-center filter grayscale" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col justify-center">
        <div className="max-w-2xl space-y-4">
          <span className="inline-block bg-red-600 text-white text-xs font-black px-3 py-1 uppercase tracking-widest rounded-sm">
            2026 SPAVY INVITATIONAL • OCT 23-25
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase italic leading-none">
            SPAVY GARAGE GYM <span className="text-red-600">ESSENTIALS</span>
          </h1>
          <p className="text-zinc-300 text-sm sm:text-base font-normal max-w-xl leading-relaxed">
            Engineered by Spavy Fitness Equipments PVT. LTD. Built with heavy-gauge American and Indian
            steel standards. Gear up your training facility with competition-grade barbells, racks, and
            conditioning equipment.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <a
              href="#products"
              className="bg-red-600 hover:bg-red-700 text-white font-extrabold uppercase text-sm px-8 py-3.5 rounded shadow-lg transition flex items-center gap-2"
            >
              Shop Gear Now <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={onOpenLiveChat}
              className="bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 text-white font-extrabold uppercase text-sm px-6 py-3.5 rounded transition flex items-center gap-2"
            >
              Custom Facility Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
