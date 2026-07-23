import { Globe, Search, Truck, MessageSquare, Phone } from 'lucide-react';

interface TopBarProps {
  onToggleSearch: () => void;
  onOpenTracker: () => void;
  onOpenLiveChat: () => void;
}

export default function TopBar({ onToggleSearch, onOpenTracker, onOpenLiveChat }: TopBarProps) {
  return (
    <div className="bg-[#0d0d0d] border-b border-zinc-800 text-xs py-2 px-4 text-zinc-400">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center space-x-4">
          <span className="flex items-center gap-1 hover:text-white cursor-pointer transition">
            <Globe className="w-3.5 h-3.5 text-red-600" /> India (INR ₹)
          </span>
          <span className="hidden sm:inline-block text-zinc-600">|</span>
          <span className="hidden sm:inline hover:text-white cursor-pointer transition">
            Spavy Fitness Equipments PVT. LTD.
          </span>
        </div>

        <div className="flex items-center space-x-6">
          <button
            onClick={onToggleSearch}
            className="flex items-center gap-1.5 hover:text-white transition"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Search</span>
          </button>
          <button
            onClick={onOpenTracker}
            className="flex items-center gap-1.5 hover:text-white transition"
          >
            <Truck className="w-3.5 h-3.5" />
            <span>Order Status</span>
          </button>
          <button
            onClick={onOpenLiveChat}
            className="flex items-center gap-1.5 hover:text-white transition"
          >
            <MessageSquare className="w-3.5 h-3.5 text-green-500" />
            <span>Live Chat</span>
          </button>
          <a href="tel:+91203586190" className="hidden md:flex items-center gap-1 hover:text-white transition">
            <Phone className="w-3.5 h-3.5 text-red-500" />
            <span>+91 (20) 358-6190</span>
          </a>
        </div>
      </div>
    </div>
  );
}
