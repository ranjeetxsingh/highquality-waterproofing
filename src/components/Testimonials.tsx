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

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-primary-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-400 font-semibold tracking-wide uppercase text-sm mb-2">Testimonials</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Satisfied Clients</h3>
          <p className="text-lg text-gray-400">
            Don't just take our word for it. Review what Auckland homeowners and businesses have to say about our waterproofing services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.7, ease: "easeOut" }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gray-800/80 backdrop-blur-md border border-gray-700/50 hover:border-primary-500/30 rounded-3xl p-8 relative shadow-xl hover:shadow-2xl hover:shadow-primary-600/10 transition-all duration-300 group"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-gray-700/50 group-hover:text-primary-500/20 transition-colors duration-300 flex-shrink-0" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + (index * 0.1) + (i * 0.1), type: "spring" }}
                  >
                    <Star className="w-5 h-5 fill-accent-400 text-accent-400 drop-shadow-md" />
                  </motion.div>
                ))}
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-8 relative z-10 font-medium group-hover:text-white transition-colors duration-300">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-gray-700/50 pt-6 mt-auto">
                <h5 className="font-bold text-lg text-white font-heading">{testimonial.name}</h5>
                <span className="text-sm text-primary-400 font-medium">{testimonial.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
