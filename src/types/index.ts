export interface Product {
  id: string;
  name: string;
  category: string;
  tag: string;
  price: string;
  usdPrice: string;
  rating: number;
  reviews: number;
  shippingDeal: string;
  image: string;
  description: string;
}

export interface ShippingDeal {
  title: string;
  desc: string;
  code: string;
}

export interface Challenge {
  id: number;
  title: string;
  desc: string;
  record: string;
}

export interface TrackingResult {
  id: string;
  status: string;
  carrier: string;
  origin: string;
  destination: string;
  estimatedDelivery: string;
}

export interface ChatMessage {
  sender: 'system' | 'user';
  text: string;
}

export type CategoryId = 'featured' | 'crossfit' | 'powerlifting' | 'olympic' | 'strongman';

export interface CategoryTab {
  id: CategoryId;
  label: string;
}

export interface CategoryCollection {
  id: string;
  image: string;
  alt: string;
  subtitle: string;
  title: string;
}

export interface NavLink {
  label: string;
  href: string;
  highlight?: boolean;
}
