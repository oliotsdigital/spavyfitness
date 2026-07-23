import NewsletterSignup from './NewsletterSignup';

interface FooterProps {
  onOpenLiveChat: () => void;
  onOpenTracker: () => void;
}

export default function Footer({ onOpenLiveChat, onOpenTracker }: FooterProps) {
  return (
    <footer className="bg-black text-zinc-400 border-t border-zinc-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 space-y-4">
            <span className="text-2xl font-black text-white italic">
              SPAVY<span className="text-red-600">FITNESS</span>
            </span>
            <p className="text-xs leading-relaxed text-zinc-400">
              Spavy Fitness Equipments PVT. LTD. is a leading manufacturer and supplier of heavy-duty
              strength equipment, barbells, power racks, and conditioning gear for commercial facilities,
              affiliates, and home gyms worldwide.
            </p>
            <div className="text-xs space-y-1 text-zinc-300">
              <p>
                <strong>Spavy Fitness HQ:</strong> 545 E 5th Ave, Industrial Zone, Pune, Maharashtra, India
              </p>
              <p>
                <strong>Phone:</strong> +91 (20) 358-6190 | Fax: +91 (20) 340-7206
              </p>
              <p>
                <strong>Email:</strong> support@spavyfitness.com
              </p>
            </div>
          </div>

          <div>
            <h5 className="text-white text-xs font-black uppercase mb-3 tracking-wider">Company</h5>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-white transition">The Spavy Way</a></li>
              <li><a href="#" className="hover:text-white transition">Careers &amp; Jobs</a></li>
              <li><a href="#" className="hover:text-white transition">Retail Showroom</a></li>
              <li><a href="#" className="hover:text-white transition">Manufacturing HQ</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white text-xs font-black uppercase mb-3 tracking-wider">Customer Service</h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={onOpenLiveChat} className="hover:text-white text-left transition">
                  Custom Quotes
                </button>
              </li>
              <li>
                <button onClick={onOpenTracker} className="hover:text-white text-left transition">
                  Track Your Order
                </button>
              </li>
              <li><a href="#" className="hover:text-white transition">Returns &amp; Warranties</a></li>
              <li><a href="#" className="hover:text-white transition">Shipping Policies</a></li>
              <li><a href="#" className="hover:text-white transition">GSA Contract Info</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white text-xs font-black uppercase mb-3 tracking-wider">Policies</h5>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Use</a></li>
              <li><a href="#" className="hover:text-white transition">Product Policies</a></li>
              <li><a href="#" className="hover:text-white transition">Accessibility Notice</a></li>
            </ul>
          </div>
        </div>

        <NewsletterSignup />

        <div className="mt-8 text-center text-[11px] text-zinc-600">
          &copy; 2010 - 2026 Spavy Fitness Equipments PVT. LTD. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
