import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, User, ChevronDown, MessageSquare, Wrench, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-100/50 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h2 className="text-primary-600 font-bold tracking-wider uppercase text-lg md:text-xl lg:text-2xl mb-4 flex items-center gap-3">
              <span className="w-10 md:w-16 h-[2px] bg-primary-600"></span>
              Get In Touch
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-heading tracking-tight">Let's Fix That Leak!</h3>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Need a trustworthy and reliable waterproofer in Auckland? Book your job now or ask us for expert advice.
            </p>

            <div className="space-y-4">
              <a href="tel:0212266765" className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100 group">
                <div className="w-12 h-12 bg-white shadow-sm text-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 group-hover:text-white group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="pt-1">
                  <h4 className="text-xs font-semibold tracking-wider text-gray-500 uppercase mb-1">Call Us</h4>
                  <p className="text-gray-900 font-bold text-lg font-mono">021 226 6765</p>
                </div>
              </a>
              
              <a href="mailto:info@highqualitywaterproofing.co.nz" className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100 group">
                <div className="w-12 h-12 bg-white shadow-sm text-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 group-hover:text-white group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="pt-1">
                  <h4 className="text-xs font-semibold tracking-wider text-gray-500 uppercase mb-1">Email</h4>
                  <p className="text-gray-900 font-bold">info@highqualitywaterproofing.co.nz</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100 group cursor-default">
                <div className="w-12 h-12 bg-white shadow-sm text-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 group-hover:text-white group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="pt-1">
                  <h4 className="text-xs font-semibold tracking-wider text-gray-500 uppercase mb-1">Location</h4>
                  <p className="text-gray-900 font-bold">Auckland Region</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100 group cursor-default">
                <div className="w-12 h-12 bg-white shadow-sm text-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 group-hover:text-white group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="pt-1">
                  <h4 className="text-xs font-semibold tracking-wider text-gray-500 uppercase mb-1">Working Hours</h4>
                  <p className="text-gray-900 font-bold">Mon - Sat: 8am - 6pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 bg-white p-8 md:p-10 lg:p-12 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 relative overflow-hidden group/form"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 opacity-50 group-hover/form:opacity-100 transition-opacity duration-700"></div>
            
            <h4 className="text-2xl font-bold text-gray-900 mb-8 font-heading">Send Us A Message</h4>
            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully! (Demo only)'); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative group/input">
                  <label htmlFor="name" className="block text-[13px] font-semibold text-gray-700 mb-1.5 ml-1">Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within/input:text-primary-500 transition-colors">
                      <User className="h-5 w-5" />
                    </div>
                    <input type="text" id="name" required className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 focus:bg-white transition-all shadow-sm" placeholder="John Doe" />
                  </div>
                </div>
                <div className="relative group/input">
                  <label htmlFor="phone" className="block text-[13px] font-semibold text-gray-700 mb-1.5 ml-1">Phone</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within/input:text-primary-500 transition-colors">
                      <Phone className="h-5 w-5" />
                    </div>
                    <input type="tel" id="phone" required className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 focus:bg-white transition-all shadow-sm" placeholder="021 123 4567" />
                  </div>
                </div>
              </div>
              
              <div className="relative group/input">
                <label htmlFor="email" className="block text-[13px] font-semibold text-gray-700 mb-1.5 ml-1">Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within/input:text-primary-500 transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <input type="email" id="email" required className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 focus:bg-white transition-all shadow-sm" placeholder="john@example.com" />
                </div>
              </div>

              <div className="relative group/input">
                <label htmlFor="service" className="block text-[13px] font-semibold text-gray-700 mb-1.5 ml-1">Service Required</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within/input:text-primary-500 transition-colors">
                    <Wrench className="h-5 w-5" />
                  </div>
                  <select id="service" defaultValue="" className="w-full pl-11 pr-12 py-3.5 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 focus:bg-white transition-all appearance-none cursor-pointer shadow-sm">
                    <option value="" disabled className="text-gray-400">Select a service...</option>
                    <option>Membrane Maintenance & Repairs</option>
                    <option>Roof / Deck Waterproofing</option>
                    <option>Basement Leak Repair</option>
                    <option>New Build Waterproofing</option>
                    <option>Other / Unsure</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-500">
                    <ChevronDown className="h-5 w-5 group-focus-within/input:text-primary-500 transition-colors" />
                  </div>
                </div>
              </div>

              <div className="relative group/input">
                <label htmlFor="message" className="block text-[13px] font-semibold text-gray-700 mb-1.5 ml-1">Your Message</label>
                <div className="relative">
                  <div className="absolute top-3.5 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within/input:text-primary-500 transition-colors">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <textarea id="message" rows={4} required className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 focus:bg-white transition-all resize-none shadow-sm" placeholder="Please describe the issue..." />
                </div>
              </div>

              <button type="submit" className="w-full py-4 px-8 mt-2 bg-primary-600 hover:bg-primary-500 text-white rounded-2xl font-bold transition-all shadow-[0_4px_14px_rgba(255,140,0,0.2)] hover:shadow-[0_6px_20px_rgba(255,140,0,0.4)] hover:-translate-y-0.5 flex items-center justify-center gap-2 group/btn">
                <span>Send Message & Get Quote</span>
                <Send className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
