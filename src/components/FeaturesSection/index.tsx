import { Tag, Truck, Award, MessageSquare } from 'lucide-react';

interface FeaturesSectionProps {
  onOpenTracker: () => void;
  onOpenLiveChat: () => void;
}

const FEATURES = [
  {
    id: 'deals',
    icon: Tag,
    title: 'DAILY SHIPPING DEALS',
    description: 'Save time & money with Spavy flat-rate freight deals.',
    action: null as (() => void) | null,
  },
  {
    id: 'tracker',
    icon: Truck,
    title: 'TRACK YOUR ORDER',
    description: 'Follow order progress directly from our warehouse to your door.',
    action: 'tracker' as const,
  },
  {
    id: 'gift-cards',
    icon: Award,
    title: 'SPAVY GIFT CARDS',
    description: 'Give the gift of commercial-grade fitness equipment.',
    action: null as (() => void) | null,
  },
  {
    id: 'contact',
    icon: MessageSquare,
    title: 'CONTACT & HELP',
    description: 'Chat directly with equipment specialists & engineers.',
    action: 'chat' as const,
  },
];

export default function FeaturesSection({ onOpenTracker, onOpenLiveChat }: FeaturesSectionProps) {
  const handleClick = (action: typeof FEATURES[number]['action']) => {
    if (action === 'tracker') onOpenTracker();
    if (action === 'chat') onOpenLiveChat();
  };

  return (
    <section className="bg-zinc-950 border-t border-zinc-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {FEATURES.map((feature) => {
          const Icon = feature.icon;
          const isClickable = feature.action !== null;

          return (
            <div
              key={feature.id}
              onClick={isClickable ? () => handleClick(feature.action) : undefined}
              className={`bg-zinc-900 p-6 rounded border border-zinc-800 ${
                isClickable ? 'cursor-pointer hover:border-zinc-700 transition' : ''
              }`}
            >
              <Icon className="w-6 h-6 text-red-500 mb-2" />
              <h4 className="font-black text-white uppercase text-sm">{feature.title}</h4>
              <p className="text-xs text-zinc-400 mt-1">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
