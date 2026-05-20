import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'David R.',
    location: 'North Shore, Auckland',
    text: 'We had a persistent leak in our basement that several others failed to fix. High Quality Waterproofing found the source quickly and their tanking solution has kept it bone dry ever since.',
    rating: 5,
  },
  {
    name: 'Sarah M.',
    location: 'Central Auckland',
    text: 'Highly professional team! They installed a torch-on membrane for our flat roof. Communication was excellent from quote to completion. Highly recommend their services.',
    rating: 5,
  },
  {
    name: 'James L.',
    location: 'West Auckland',
    text: 'The deck above our garage was leaking and ruining the ceiling below. They ripped up the old surface, applied a new liquid membrane, and the result is flawless.',
    rating: 5,
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-gray-950 text-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FF8C00]/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary-500 font-bold tracking-wider uppercase text-lg md:text-xl lg:text-2xl mb-4 flex items-center justify-center gap-3">
              <span className="w-10 md:w-16 h-[2px] bg-primary-500/50"></span>
              Testimonials
              <span className="w-10 md:w-16 h-[2px] bg-primary-500/50"></span>
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 font-heading tracking-tight text-white">Satisfied Clients</h3>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
              Don't just take our word for it. Review what Auckland homeowners and businesses have to say about our waterproofing services.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gray-900/50 backdrop-blur-xl border border-white/5 hover:border-primary-500/30 rounded-[2rem] p-10 relative shadow-xl hover:shadow-2xl hover:shadow-primary-600/10 transition-all duration-500 group flex flex-col"
            >
              <Quote className="absolute top-8 right-8 w-16 h-16 text-white/5 group-hover:text-primary-500/10 transition-colors duration-500 flex-shrink-0" />
              
              <div className="flex gap-1.5 mb-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (index * 0.1) + (i * 0.1), type: "spring", stiffness: 200, damping: 15 }}
                  >
                    <Star className="w-5 h-5 fill-[#FF8C00] text-[#FF8C00] drop-shadow-[0_2px_10px_rgba(255,140,0,0.3)]" />
                  </motion.div>
                ))}
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-8 relative z-10 font-light text-lg group-hover:text-white transition-colors duration-500 flex-grow">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-white/10 pt-6 mt-auto">
                <h5 className="font-bold text-xl text-white font-heading tracking-tight mb-1">{testimonial.name}</h5>
                <span className="text-sm text-primary-400 font-medium tracking-wide uppercase">{testimonial.location}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
