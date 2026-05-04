import { Droplets, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400 py-16 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="bg-primary-600 p-2 rounded-xl shadow-none">
                <Droplets className="text-white w-5 h-5" />
              </div>
              <div className="flex flex-col ml-1">
                <span className="font-heading font-bold text-lg leading-none text-white tracking-tight">
                  High Quality
                </span>
                <span className="text-white font-semibold text-xs leading-none tracking-[0.2em] uppercase mt-0.5">
                  Waterproofing
                </span>
              </div>
            </a>
            <p className="text-sm leading-relaxed mb-6">
              Auckland's premium waterproofing experts. Specializing in leak repairs, membrane applications, and protecting your property from water damage.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/hqw.nz/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://nz.linkedin.com/in/high-quality-waterproofing-1a6305251" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Services</h5>
            <ul className="space-y-4 text-sm">
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Torch On Membrane</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">TPO Membrane</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Liquid Coatings</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Basement Leak Repair</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Flat Roof Leak Repair</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h5>
            <ul className="space-y-4 text-sm">
              <li><a href="#home" className="hover:text-primary-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary-400 transition-colors">About Us</a></li>
              <li><a href="#projects" className="hover:text-primary-400 transition-colors">Our Projects</a></li>
              <li><a href="#testimonials" className="hover:text-primary-400 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-primary-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Info</h5>
            <ul className="space-y-4 text-sm">
              <li className="flex flex-col">
                <span className="uppercase text-xs font-semibold text-gray-500 mb-1">Phone</span>
                <a href="tel:0212266765" className="text-white hover:text-primary-400 transition-colors">021 226 6765</a>
              </li>
              <li className="flex flex-col">
                <span className="uppercase text-xs font-semibold text-gray-500 mb-1">Email</span>
                <a href="mailto:info@highqualitywaterproofing.co.nz" className="text-white hover:text-primary-400 transition-colors">info@highqualitywaterproofing.co.nz</a>
              </li>
              <li className="flex flex-col">
                <span className="uppercase text-xs font-semibold text-gray-500 mb-1">Area Setup</span>
                <span className="text-white">Auckland, New Zealand</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {currentYear} High Quality Waterproofing. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
