import type { NavbarLogoProps } from './Navbar.types';

export default function NavbarLogo({ onLogoClick }: NavbarLogoProps) {
  return (
    <a
      href="#"
      onClick={onLogoClick}
      className="flex items-center select-none focus:outline-none py-1 group"
    >
      {/* 
        Primary Logo Image: 
        Place your 'logo.png' file inside the 'public/' directory (i.e., public/logo.png)
      */}
      <img
        src="/logo.png"
        alt="Spavy Fitness Logo"
        style={{ height: '50px' }}
        className="w-48 sm:w-64 object-cover object-center"
        onError={(e) => {
          // Fallback to text logo if logo.png is not found yet
          const target = e.currentTarget;
          target.style.display = 'none';
          if (target.nextElementSibling) {
            target.nextElementSibling.classList.remove('hidden');
            target.nextElementSibling.classList.add('flex');
          }
        }}
      />

      {/* Styled Typography Fallback */}
      <div className="hidden items-center space-x-2 tracking-wider">
        <span className="text-2xl sm:text-3xl font-black text-[#E5231B] tracking-wider uppercase font-sans flex items-center">
          SP<span className="inline-block transform -translate-y-[0.5px]">Λ</span>VY
        </span>
        <span className="text-2xl sm:text-3xl font-black text-black tracking-wider uppercase font-sans">
          FITNESS
        </span>
      </div>
    </a>
  );
}
