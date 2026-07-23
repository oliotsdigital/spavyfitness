import { Calendar, MapPin } from 'lucide-react';

export default function InvitationalCard() {
  const handleBuyTickets = () => {
    alert('Spavy Invitational Ticket desk opening soon for 2026!');
  };

  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-xl relative shadow-sm">
      <span className="text-xs font-extrabold text-red-600 dark:text-red-500 uppercase tracking-widest">
        GLOBAL ATHLETICS PROGRAM
      </span>
      <h3 className="text-3xl font-black text-zinc-900 dark:text-white uppercase mt-2 italic">2026 SPAVY INVITATIONAL</h3>
      <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2">
        Returning for our annual flagship strength showdown in Aberdeen &amp; Mumbai.
      </p>

      <div className="mt-6 space-y-3">
        <div className="flex items-center text-xs text-zinc-700 dark:text-zinc-300 gap-2">
          <Calendar className="w-4 h-4 text-red-600 dark:text-red-500" />
          <span>October 23 - 25, 2026</span>
        </div>
        <div className="flex items-center text-xs text-zinc-700 dark:text-zinc-300 gap-2">
          <MapPin className="w-4 h-4 text-red-600 dark:text-red-500" />
          <span>Spavy Athletic Arena &amp; Convention Center</span>
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={handleBuyTickets}
          className="bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs px-6 py-3 rounded uppercase transition"
        >
          Buy Event Tickets
        </button>
      </div>
    </div>
  );
}
