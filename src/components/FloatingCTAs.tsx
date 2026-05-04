import { MessageCircle, Phone } from 'lucide-react';

export default function FloatingCTAs() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-5 items-end">
      
      <a
        href="tel:0212266765"
        className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 relative group"
        aria-label="Call us"
      >
        <Phone className="w-5 h-5" />
        <span className="absolute right-16 bg-white text-gray-800 text-sm font-bold py-1.5 px-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap pointer-events-none translate-x-2 group-hover:translate-x-0">
          Call Now
        </span>
      </a>

      <a
        href="https://wa.me/64212266765"
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:scale-110 transition-all duration-300 relative group animate-pulse-ring cursor-pointer"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-20 bg-white text-gray-900 text-sm font-bold py-2 px-4 rounded-xl shadow-xl whitespace-nowrap flex items-center gap-2 shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#25D366]"></span>
          </span>
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
