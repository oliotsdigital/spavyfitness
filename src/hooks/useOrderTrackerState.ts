import { useState, useCallback } from 'react';
import type { FormEvent } from 'react';
import type { TrackingResult } from '../types';
import { trackOrder } from '../api';

export function useOrderTrackerState() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState<TrackingResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleTrackOrder = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) return;

    setIsLoading(true);
    try {
      const result = await trackOrder(trackingNumber);
      setTrackingResult(result);
    } finally {
      setIsLoading(false);
    }
  }, [trackingNumber]);

  const resetTracker = useCallback(() => {
    setTrackingNumber('');
    setTrackingResult(null);
  }, []);

  return {
    trackingNumber,
    trackingResult,
    isLoading,
    setTrackingNumber,
    handleTrackOrder,
    resetTracker,
  };
}
