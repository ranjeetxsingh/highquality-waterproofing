import { useState, useEffect } from 'react';
import { Menu, X, Phone, Droplets } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-out flex justify-center w-full px-4 sm:px-6 mt-4`}
    >
      <div 
        className={`w-full max-w-6xl mx-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ${
          isScrolled 
            ? 'bg-gray-950/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.4)] border border-white/10' 
            : 'bg-transparent border border-transparent'
        }`}
      >
        <a href="#home" className="flex items-center gap-1.5 lg:gap-2 group px-1 lg:px-2 py-1 shrink-0">
          <div className="relative flex items-center justify-center shrink-0">
            <svg viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[16px] h-[20px] lg:w-[20px] lg:h-[25px] group-hover:scale-105 transition-transform">
              <path d="M20 0C20 0 4 18 4 28C4 36.8366 11.1634 44 20 44C28.8366 44 36 36.8366 36 28C36 18 20 0 20 0Z" fill="url(#drop-gradient)"/>
              <ellipse cx="20" cy="45" rx="18" ry="2.5" stroke="#00A2EE" strokeWidth="1.5" fill="none" />
              <ellipse cx="20" cy="49" rx="12" ry="1.5" stroke="#0055A4" strokeWidth="1.5" fill="none" />
              <defs>
                <linearGradient id="drop-gradient" x1="20" y1="0" x2="20" y2="44" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00A2EE" />
                  <stop offset="1" stopColor="#004494" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-sans font-black text-[12px] lg:text-[15px] leading-[0.85] text-[#FF8C00] tracking-tight uppercase" style={{ WebkitTextStroke: '0.3px #FF8C00' }}>
              High Quality
            </span>
            <span className="font-serif font-black text-[10px] lg:text-[13px] leading-[0.9] text-white tracking-widest uppercase mt-0.5 lg:mt-1">
              Waterproofing
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-3 lg:gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white text-[11px] lg:text-sm font-semibold tracking-wide transition-colors whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:0212266765"
            className="flex items-center gap-1.5 lg:gap-2 bg-primary-600 hover:bg-primary-500 text-white px-3 py-1.5 lg:px-5 lg:py-2.5 rounded-full text-[11px] lg:text-sm font-bold transition-all shadow-[0_4px_14px_rgba(37,99,235,0.3)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 ml-1 lg:ml-2 whitespace-nowrap shrink-0"
          >
            <Phone className="w-3 h-3 lg:w-4 lg:h-4" />
            021 226 6765
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-20 left-4 right-4 md:hidden bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-white/10 my-2"></div>
              <a
                href="tel:0212266765"
                className="flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 text-white mt-2 px-5 py-4 rounded-xl font-bold transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call 021 226 6765
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
