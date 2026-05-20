import { motion } from 'motion/react';

const projects = [
  {
    image: 'https://www.highqualitywaterproofing.co.nz/assets/images/course-01.jpeg',
    title: 'Commercial TPO Roofing',
    category: 'Roofing'
  },
  {
    image: 'https://www.highqualitywaterproofing.co.nz/assets/images/course-02.jpeg',
    title: 'Basement Tanking',
    category: 'Basement Leak'
  },
  {
    image: 'https://www.highqualitywaterproofing.co.nz/assets/images/course-03.jpg',
    title: 'Deck Membrane Application',
    category: 'Deck Repairs'
  },
  {
    image: 'https://www.highqualitywaterproofing.co.nz/assets/images/course-04.jpg',
    title: 'Torch On Membrane',
    category: 'Flat Roof'
  },
  {
    image: 'https://www.highqualitywaterproofing.co.nz/assets/images/course-05.jpg',
    title: 'Liquid Coatings',
    category: 'Balcony'
  },
  {
    image: 'https://www.highqualitywaterproofing.co.nz/assets/images/course-06.jpg',
    title: 'Waterproofing Diagnostics',
    category: 'Inspection'
  },
];

export default function Gallery() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 font-bold tracking-wider uppercase text-lg md:text-xl lg:text-2xl mb-4 flex items-center justify-center gap-3">
            <span className="w-10 md:w-16 h-[2px] bg-primary-600"></span>
            Our Work
            <span className="w-10 md:w-16 h-[2px] bg-primary-600"></span>
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Recent Projects</h3>
          <p className="text-lg text-gray-600">
            A small selection of the high-quality waterproofing and leak repair jobs we've recently completed across Auckland.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -10 }}
              className="relative group rounded-3xl overflow-hidden aspect-[4/5] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className="text-accent-400 font-bold text-xs uppercase tracking-widest mb-3 block"
                >
                  {project.category}
                </motion.span>
                <h4 className="text-white text-2xl font-bold font-heading transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {project.title}
                </h4>
                
                <div className="mt-4 h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                  <div className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center text-white backdrop-blur-sm">
                    →
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
