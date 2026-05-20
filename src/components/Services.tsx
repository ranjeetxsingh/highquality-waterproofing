import { motion } from 'motion/react';
import { Layers, ShieldCheck, Home, Ruler, Droplets, Wrench } from 'lucide-react';

const services = [
  {
    title: 'Torch On Membrane',
    description: 'Durable and cost-effective bituminous waterproofing membrane designed for flat roofs and decks.',
    icon: Layers,
    image: 'https://www.highqualitywaterproofing.co.nz/assets/images/course-08.JPG'
  },
  {
    title: 'TPO Membrane',
    description: 'ThermoPlastic Olefin (TPO) single-ply roofing, perfect for commercial flats roofs providing excellent UV resistance.',
    icon: Ruler,
    image: 'https://www.highqualitywaterproofing.co.nz/assets/images/course-09.JPG'
  },
  {
    title: 'Liquid Membrane',
    description: 'Seamless liquid-applied waterproofing ideal for complex roof shapes, balconies, and detailed joints.',
    icon: Droplets,
    image: 'https://www.highqualitywaterproofing.co.nz/assets/images/course-10.JPG'
  },
  {
    title: 'Basement Leak Repair',
    description: 'Comprehensive basement waterproofing and leak fixes to keep your lower levels dry and safe from moisture damage.',
    icon: Home,
    image: 'https://www.highqualitywaterproofing.co.nz/assets/images/course-11.jpeg'
  },
  {
    title: 'Tanking Solutions',
    description: 'Below-ground waterproofing services (tanking) to prevent water ingress in retaining walls and foundations.',
    icon: ShieldCheck,
    image: 'https://www.highqualitywaterproofing.co.nz/assets/images/course-13.jpeg'
  },
  {
    title: 'Flat Roof Leak Repair',
    description: 'Expert diagnostics and repairs for all types of leaking flat roofs across Auckland, ensuring watertight seals.',
    icon: Wrench,
    image: 'https://www.highqualitywaterproofing.co.nz/assets/images/course-12.jpeg'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-100/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary-600 font-bold tracking-wider uppercase text-lg md:text-xl lg:text-2xl mb-4 flex items-center justify-center gap-3">
              <span className="w-10 md:w-16 h-[2px] bg-primary-600"></span>
              What We Do
              <span className="w-10 md:w-16 h-[2px] bg-primary-600"></span>
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-heading tracking-tight">Expert Waterproofing Services</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a complete range of waterproofing solutions for residential and commercial properties in Auckland. 
              All work is carried out by certified applicators.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group flex flex-col items-center cursor-pointer bg-white rounded-3xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 border border-gray-100"
            >
              <div className="w-full relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-primary-900/20 transition-colors duration-500"></div>
                <div className="absolute bottom-4 left-4 w-14 h-14 bg-white/90 backdrop-blur-md text-primary-600 rounded-2xl flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-colors duration-500 shadow-xl overflow-hidden">
                  <motion.div
                    initial={false}
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    <service.icon className="w-7 h-7 relative z-10" />
                  </motion.div>
                </div>
              </div>
              <h4 className="text-xl font-bold font-heading text-gray-900 mb-3 text-center group-hover:text-primary-600 transition-colors px-2">
                {service.title}
              </h4>
              <p className="text-gray-600 leading-relaxed text-center px-4 pb-4">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
