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

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-2">What We Do</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Expert Waterproofing Services</h3>
          <p className="text-lg text-gray-600">
            We offer a complete range of waterproofing solutions for residential and commercial properties in Auckland. 
            All work is carried out by certified applicators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="group flex flex-col items-center cursor-pointer"
            >
              <div className="w-full relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-transparent transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/90 backdrop-blur text-primary-600 rounded-xl flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300 shadow-md">
                  <service.icon className="w-6 h-6" />
                </div>
              </div>
              <h4 className="text-xl font-bold font-heading text-gray-900 mb-3 text-center group-hover:text-primary-600 transition-colors">
                {service.title}
              </h4>
              <p className="text-gray-600 leading-relaxed text-center opacity-90 group-hover:opacity-100 transition-opacity">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
