import { Users, Target, Shield, Zap } from 'lucide-react';

export default function AboutUsPage() {
  return (
    <div className="flex-1 bg-white text-zinc-900 pb-16">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] min-h-[400px] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
            alt="About Us Hero"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-12">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            EMPOWERING YOUR FITNESS JOURNEY
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto font-medium leading-relaxed">
            We build premium, durable, and innovative strength equipment for athletes who demand the best from themselves and their gear.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-[#E5231B] uppercase mb-3">Our Mission</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-6">Forging better athletes through superior equipment.</h3>
            <p className="text-zinc-600 mb-6 text-lg leading-relaxed">
              Founded on the belief that quality equipment is the foundation of a great workout, Spavy is dedicated to providing high-performance strength and conditioning gear to commercial facilities, home gyms, and elite training centers worldwide.
            </p>
            <p className="text-zinc-600 text-lg leading-relaxed">
              Every barbell, rack, and plate we produce undergoes rigorous testing to ensure it withstands the toughest workouts. We don't just sell equipment; we equip champions.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square bg-zinc-100 rounded-2xl overflow-hidden relative shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop"
                alt="Gym Equipment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#E5231B] rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse"></div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-600 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-zinc-50 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Our Core Values</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto text-lg">The principles that drive every product we make and every decision we take.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Uncompromising Quality', desc: 'Built to last a lifetime of heavy lifting.' },
              { icon: Target, title: 'Precision Engineering', desc: 'Exact tolerances for optimal performance.' },
              { icon: Zap, title: 'Constant Innovation', desc: 'Pushing boundaries in design and function.' },
              { icon: Users, title: 'Community First', desc: 'Supporting the athletes who support us.' }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-zinc-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#E5231B] transition-colors duration-300">
                  <value.icon className="w-7 h-7 text-zinc-900 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
