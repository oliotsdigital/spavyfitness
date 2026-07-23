import { MessageSquare, PhoneCall } from 'lucide-react';
import type { NavbarActionsProps } from './Navbar.types';

export default function NavbarActions({
  onOpenLiveChat,
  onOpenContactUs,
}: NavbarActionsProps) {
  return (
    <div className="flex items-center space-x-6 text-xs text-zinc-700 font-semibold">
      {/* Live Chat */}
      <button
        onClick={onOpenLiveChat}
        className="flex items-center space-x-1.5 hover:text-black transition-colors duration-150 focus:outline-none"
      >
        <MessageSquare className="w-4 h-4 text-zinc-600" />
        <span>Live Chat</span>
      </button>

      {/* Contact Us Red Button */}
      <button
        onClick={onOpenContactUs}
        className="flex items-center space-x-2 bg-[#E5231B] hover:bg-red-700 text-white font-extrabold px-4 py-2 rounded text-xs uppercase tracking-wide transition-colors duration-150 shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      >
        <PhoneCall className="w-3.5 h-3.5" />
        <span>Contact Us</span>
      </button>
    </div>
  );
}
