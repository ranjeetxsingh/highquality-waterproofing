import { motion } from 'motion/react';
import { ArrowRight, PhoneCall, ShieldCheck, Award, ThumbsUp } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100vh] flex items-center pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-gray-950">
      {/* Artistic Dynamic Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full origin-center"
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
            alt="Premium Waterproofing Services"
            className="w-full h-full object-cover"
          />
          {/* Gradient masking for the image to blend it seamlessly into the dark background */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent"></div>
          
          {/* Overlay to enforce brand color */}
          <div className="absolute inset-0 bg-primary-900/60 mix-blend-multiply"></div>
        </motion.div>
      </div>

      {/* Abstract Animated Geometry */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <motion.div 
          animate={{ translate: ['0% 0%', '5% -5%', '0% 0%'], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-[100%] bg-primary-600/20 blur-[120px]"
        />
        <motion.div 
          animate={{ translate: ['0% 0%', '-5% 5%', '0% 0%'], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[10%] left-[20%] w-[50%] h-[50%] rounded-[100%] bg-[#FF8C00]/10 blur-[100px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <motion.div 
            className="lg:col-span-7 2xl:col-span-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-8">
              <span 
                className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-red-500/10 text-red-400 font-bold text-[10px] sm:text-xs tracking-widest uppercase border border-red-500/20 backdrop-blur-sm shadow-[0_0_15px_rgba(239,68,68,0.2)] animate-pulse"
              >
                <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
                24/7 Emergency Repairs
              </span>
              <span 
                className="inline-block py-1.5 px-4 rounded-full bg-primary-500/30 text-white font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase border border-primary-500/50 backdrop-blur-md"
              >
                Auckland's Trusted Experts
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold text-white mb-4 sm:mb-6 leading-[1.05] font-heading tracking-tight"
            >
              Defend Your <br className="hidden sm:block" />
              <span className="relative inline-block mt-1 sm:mt-2 px-1">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-200 to-primary-500">
                  Property
                </span>
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 1, ease: "circOut" }}
                  className="absolute bottom-[10%] left-0 w-full h-[35%] bg-primary-600/40 rounded-sm origin-left -z-0"
                ></motion.div>
              </span>
              <br />
              Against Water.
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 max-w-xl leading-relaxed mix-blend-lighten font-light"
            >
              Advanced waterproofing systems and leak diagnostics for Auckland homes and businesses. We don't just patch leaks; we eliminate them forever.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 sm:gap-5"
            >
              <a
                href="#quote"
                className="group w-full sm:w-auto relative inline-flex items-center justify-center gap-3 bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 xl:py-5 rounded-2xl font-bold transition-all shadow-[0_10px_40px_rgba(255,140,0,0.4)] hover:shadow-[0_15px_60px_rgba(255,140,0,0.5)] hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] skew-x-[-20deg] group-hover:animate-shine z-0"></div>
                <span className="relative z-10">Get Instant Quote</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:0212266765"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/30 px-8 py-4 xl:py-5 rounded-2xl font-bold transition-all backdrop-blur-md hover:-translate-y-1"
              >
                <PhoneCall className="w-5 h-5 text-[#FF8C00] group-hover:text-white transition-colors group-hover:animate-bounce" />
                Call 021 226 6765
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 2xl:col-span-4 hidden lg:block"
          >
            {/* Glassmorphism Feature List */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 lg:p-10 shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary-500/20 blur-[60px] rounded-full group-hover:bg-primary-500/30 transition-colors duration-700"></div>
              
              <h3 className="text-white font-heading font-bold text-2xl mb-8 tracking-tight">Why Choose Us?</h3>
              <ul className="space-y-6">
                {[
                  { icon: ShieldCheck, title: "Certified Applicators", desc: "LBP registered & manufacturer approved" },
                  { icon: Award, title: "10+ Years Warranty", desc: "Guaranteed peace of mind on all work" },
                  { icon: ThumbsUp, title: "1000+ Projects", desc: "Proven track record across Auckland" }
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    whileHover={{ x: 5 }}
                    className="flex gap-4 group/item cursor-default"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center group-hover/item:bg-primary-600 transition-colors flex-shrink-0">
                      <item.icon className="w-7 h-7 text-primary-400 group-hover/item:text-white transition-colors" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="text-white font-semibold text-lg leading-tight mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
