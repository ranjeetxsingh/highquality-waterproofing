import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative shadow-2xl">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                src="https://www.highqualitywaterproofing.co.nz/assets/images/meeting-02.png" 
                alt="Waterproofing Team" 
                className="w-full h-full object-cover"
              />
              {/* Overlay Box */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    10+
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Years Experience</h4>
                    <p className="text-sm text-gray-600">In Auckland area</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="absolute -z-10 top-1/2 -translate-y-1/2 -left-10 w-full h-[110%] bg-primary-100 rounded-3xl"></div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-2">Why Choose Us</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Certified Applicators Delivering Best Services</h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At High Quality Waterproofing, we pride ourselves on protecting your residential and commercial properties against Auckland's harsh weather. A leaky roof or basement can cause widespread structural damage and health issues if not handled quickly and professionally.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                'Certified & Licensed Waterproofing Applicators',
                'Comprehensive Leak Diagnoses & Repairs',
                'Premium Materials (Torch-on, TPO, Liquid Membrane)',
                'Auckland-Wide Fast Response',
                'Quality Workmanship Warranty'
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1), duration: 0.4 }}
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 group"
                >
                  <div className="bg-primary-50 rounded-full p-1 group-hover:bg-primary-100 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  </div>
                  <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              href="#contact"
              className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-bold tracking-wide transition-all shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1"
            >
              Discuss Your Project
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
