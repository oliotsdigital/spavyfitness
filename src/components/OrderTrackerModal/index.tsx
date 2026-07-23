import { useEffect } from 'react';
import { Truck, X } from 'lucide-react';
import { useOrderTrackerState } from '../../hooks/useOrderTrackerState';

interface OrderTrackerModalProps {
  onClose: () => void;
}

export default function OrderTrackerModal({ onClose }: OrderTrackerModalProps) {
  const {
    trackingNumber,
    trackingResult,
    isLoading,
    setTrackingNumber,
    handleTrackOrder,
    resetTracker,
  } = useOrderTrackerState();

  useEffect(() => {
    return () => resetTracker();
  }, [resetTracker]);

  const handleClose = () => {
    resetTracker();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-sm">
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg max-w-md w-full p-6 relative text-zinc-900 dark:text-zinc-100 shadow-2xl">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-700 dark:hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-lg font-black uppercase text-zinc-900 dark:text-white mb-2 flex items-center gap-2">
          <Truck className="w-5 h-5 text-red-600 dark:text-red-500" /> Track Spavy Shipment
        </h3>
        <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-4">
          Enter your Spavy order tracking number below to check freight status.
        </p>

        <form onSubmit={handleTrackOrder} className="space-y-3">
          <input
            type="text"
            placeholder="e.g. SPAVY-889410"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            className="w-full bg-zinc-100 dark:bg-black border border-zinc-300 dark:border-zinc-700 rounded px-3 py-2 text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-red-600"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white font-bold text-xs py-2.5 rounded uppercase transition"
          >
            {isLoading ? 'Tracking...' : 'Track Status'}
          </button>
        </form>

        {trackingResult && (
          <div className="mt-4 p-4 bg-zinc-100 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded text-xs space-y-2">
            <div className="flex justify-between font-bold text-zinc-900 dark:text-white">
              <span>Order: {trackingResult.id}</span>
              <span className="text-green-600 dark:text-green-400">{trackingResult.status}</span>
            </div>
            <p><span className="text-zinc-500">Carrier:</span> {trackingResult.carrier}</p>
            <p><span className="text-zinc-500">Dispatch:</span> {trackingResult.origin}</p>
            <p><span className="text-zinc-500">Est. Delivery:</span> {trackingResult.estimatedDelivery}</p>
          </div>
        )}
      </div>
    </div>
  );
}
