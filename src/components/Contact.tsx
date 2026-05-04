import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-2">Get In Touch</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Let's Fix That Leak!</h3>
            <p className="text-lg text-gray-600 mb-10">
              Need a trustworthy and reliable waterproofer in Auckland? Book your job now or ask us for expert advice.
            </p>

            <div className="space-y-6">
              <a href="tel:0212266765" className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100 group">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">Call Us</h4>
                  <p className="text-gray-600 font-medium font-mono">021 226 6765</p>
                </div>
              </a>
              
              <a href="mailto:info@highqualitywaterproofing.co.nz" className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100 group">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600 font-medium">info@highqualitywaterproofing.co.nz</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100 group">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">Location</h4>
                  <p className="text-gray-600 font-medium">Auckland Region</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100 group">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">Working Hours</h4>
                  <p className="text-gray-600 font-medium">Mon - Sat: 8am - 6pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100"
          >
            <h4 className="text-2xl font-bold text-gray-900 mb-8">Send Us A Message</h4>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully! (Demo only)'); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">Name *</label>
                  <input type="text" id="name" required className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">Phone *</label>
                  <input type="tel" id="phone" required className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all" placeholder="021 123 4567" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">Email *</label>
                <input type="email" id="email" required className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all" placeholder="john@example.com" />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-2">What do you need help with?</label>
                <select id="service" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all appearance-none cursor-pointer">
                  <option>Membrane Maintenance & Repairs</option>
                  <option>Roof / Deck Waterproofing</option>
                  <option>Basement Leak Repair</option>
                  <option>New Build Waterproofing</option>
                  <option>Other / Unsure</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">Your Message *</label>
                <textarea id="message" rows={4} required className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all resize-none" placeholder="Please describe the issue..." />
              </div>

              <button type="submit" className="w-full py-4 px-8 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-primary-600/30">
                Send Message & Get Quote
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
