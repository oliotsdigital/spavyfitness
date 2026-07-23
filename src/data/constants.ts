import type { ShippingDeal, Challenge, CategoryTab, CategoryCollection } from '../types';

export const SHIPPING_DEALS: ShippingDeal[] = [
  {
    title: 'BUY A FUNCTIONAL TRAINER',
    desc: 'YOUR ENTIRE ORDER SHIPS FREE',
    code: 'TRAINERFREE',
  },
  {
    title: '3 SHIPS FREE PROGRAM',
    desc: 'BUY 3 ELIGIBLE ITEMS & THEY SHIP FREE',
    code: '3FREE',
  },
  {
    title: 'FREE SHIPPING ON ORDERS OVER ₹50,000',
    desc: 'APPLIES TO SELECT EQUIPMENT',
    code: 'FREESHIP50',
  },
];

export const CHALLENGES: Challenge[] = [
  {
    id: 1,
    title: "Mikko's Triangle",
    desc: '52 Min EMOM: Row, Bike & Ski Erg Test',
    record: '1,240 Reps',
  },
  {
    id: 2,
    title: 'Pump N Run Challenge',
    desc: 'Bench Press Bodyweight + 5K Run Sprint',
    record: '18m 12s',
  },
  {
    id: 3,
    title: 'Pump N Row',
    desc: 'Max Bench Press + 2,000m Row Challenge',
    record: '6m 45s',
  },
  {
    id: 4,
    title: '1000 LB Club',
    desc: 'Combined Max: Squat, Bench & Deadlift',
    record: '1,850 lbs Total',
  },
];

export const CATEGORY_TABS: CategoryTab[] = [
  { id: 'featured', label: 'Featured' },
  { id: 'crossfit', label: 'CrossFit' },
  { id: 'powerlifting', label: 'Powerlifting' },
  { id: 'olympic', label: 'Olympic' },
  { id: 'strongman', label: 'Strongman' },
];

export const CATEGORY_COLLECTIONS: CategoryCollection[] = [
  {
    id: 'iron-game',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800',
    alt: 'Iron Game Programming',
    subtitle: 'Training & Software',
    title: 'Iron Game Programming',
  },
  {
    id: 'apparel',
    image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&q=80&w=800',
    alt: 'Apparel',
    subtitle: 'Gear & Apparel',
    title: 'Spavy Official Apparel',
  },
  {
    id: 'echo-lineup',
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&q=80&w=800',
    alt: 'Echo Lineup',
    subtitle: 'Cardio Ergometers',
    title: 'Echo Lineup Series',
  },
];

export const NAV_LINKS = [
  { label: 'Shop New Gear', href: '#products' },
  { label: 'Functional Trainers', href: '#products' },
  { label: 'Rigs & Racks', href: '#products' },
  { label: 'Crossfit Equipment', href: '#products' },
  { label: 'Barbells', href: '#products' },
  { label: 'Plates', href: '#products' },
  { label: 'Apparel', href: '#products' },
  { label: '3 Ships Free', href: '#deals', highlight: true },
];
