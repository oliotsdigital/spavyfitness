import type { TrackingResult } from '../types';

const simulateDelay = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms));

export async function trackOrder(trackingNumber: string): Promise<TrackingResult> {
  await simulateDelay();

  return {
    id: trackingNumber.toUpperCase(),
    status: 'In Transit - On Schedule',
    carrier: 'Spavy Express Logistics',
    origin: 'Spavy Manufacturing HQ, Pune, India',
    destination: 'Customer Delivery Address',
    estimatedDelivery: 'October 28, 2026',
  };
}
