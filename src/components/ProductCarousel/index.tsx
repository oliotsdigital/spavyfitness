const carouselItems = [
  {
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    name: "Pro Barbell",
    desc: "20kg Olympic Bar"
  },
  {
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop",
    name: "Squat Rack",
    desc: "Heavy Duty Frame"
  },
  {
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    name: "Kettlebell Set",
    desc: "Cast Iron 16kg"
  },
  {
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
    name: "Bumper Plates",
    desc: "Competition Grade"
  },
  {
    image: "https://images.unsplash.com/photo-1526506118021-d1c8f495dfb0?q=80&w=2070&auto=format&fit=crop",
    name: "Dumbbell Set",
    desc: "Hex Rubber 50lbs"
  },
  {
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop",
    name: "Assault Bike",
    desc: "Air Resistance"
  },
  {
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop",
    name: "Plyo Box",
    desc: "3-in-1 Wooden"
  },
  {
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=2070&auto=format&fit=crop",
    name: "Rowing Machine",
    desc: "Concept2 Elite"
  },
];

export default function ProductCarousel() {
  return (
    <div className="w-full h-[100px] py-[5px] overflow-hidden bg-zinc-50 dark:bg-[#111111] flex items-center border-y border-zinc-200 dark:border-zinc-800 transition-colors duration-300 select-none">
      <div className="flex shrink-0 animate-marquee items-center gap-6 pr-6">
        {carouselItems.map((item, idx) => (
          <div key={`first-${idx}`} className="h-[90px] w-[260px] flex items-center bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden flex-shrink-0 cursor-pointer shadow-sm hover:shadow-md transition-all group">
            <div className="flex-1 px-4 flex flex-col justify-center min-w-0">
              <h3 className="text-sm font-bold text-zinc-900 dark:text-white truncate">{item.name}</h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">{item.desc}</p>
            </div>
            <div className="w-[90px] h-full relative shrink-0">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/10 dark:bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex shrink-0 animate-marquee items-center gap-6 pr-6" aria-hidden="true">
        {carouselItems.map((item, idx) => (
          <div key={`second-${idx}`} className="h-[90px] w-[260px] flex items-center bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden flex-shrink-0 cursor-pointer shadow-sm hover:shadow-md transition-all group">
            <div className="flex-1 px-4 flex flex-col justify-center min-w-0">
              <h3 className="text-sm font-bold text-zinc-900 dark:text-white truncate">{item.name}</h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">{item.desc}</p>
            </div>
            <div className="w-[90px] h-full relative shrink-0">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/10 dark:bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
