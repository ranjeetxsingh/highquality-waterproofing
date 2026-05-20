import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary-50 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative shadow-2xl z-10">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                src="https://www.highqualitywaterproofing.co.nz/assets/images/meeting-02.png" 
                alt="Waterproofing Team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
              {/* Overlay Box */}
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-auto bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/20"
              >
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-inner shadow-white/20">
                    10+
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Years Experience</h4>
                    <p className="text-sm text-gray-500 font-medium">In Auckland area</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Background Accent Element */}
            <div className="absolute -z-10 top-1/2 -translate-y-[45%] -left-8 w-full h-[105%] bg-primary-100/50 rounded-[2.5rem] border border-primary-200/30"></div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-primary-600 font-bold tracking-wider uppercase text-lg md:text-xl lg:text-2xl mb-4 flex items-center gap-3">
              <span className="w-10 md:w-16 h-[2px] bg-primary-600"></span>
              Why Choose Us
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-gray-900 mb-6 leading-[1.1] font-heading tracking-tight">Certified Applicators Delivering Best Services</h3>
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
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                  className="flex items-start gap-4 p-3 -mx-3 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
                >
                  <div className="bg-primary-50 rounded-full p-1.5 group-hover:bg-primary-100 group-hover:scale-110 transition-all duration-300">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  </div>
                  <span className="text-gray-800 font-medium group-hover:text-primary-900 transition-colors pt-1">{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              href="#contact"
              className="inline-flex items-center justify-center bg-gray-900 hover:bg-primary-600 text-white px-8 py-4 rounded-2xl font-bold tracking-wide transition-all shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.3)] hover:-translate-y-1"
            >
              Discuss Your Project
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
