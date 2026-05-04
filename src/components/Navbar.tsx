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
        <a href="#home" className="flex items-center gap-2 group">
          <div className="bg-primary-600 p-2 rounded-xl group-hover:bg-primary-500 transition">
            <Droplets className="text-white w-6 h-6" />
          </div>
          <div className="flex flex-col ml-1">
            <span className="font-heading font-bold text-xl leading-none text-white tracking-tight">
              High Quality
            </span>
            <span className="text-white font-semibold text-[11px] leading-tight tracking-[0.2em] uppercase mt-0.5 opacity-100">
              Waterproofing
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white text-sm font-semibold tracking-wide transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:0212266765"
            className="flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-[0_4px_14px_rgba(37,99,235,0.3)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 ml-2"
          >
            <Phone className="w-4 h-4" />
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
