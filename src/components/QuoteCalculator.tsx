import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, Droplets, Ruler, Calculator, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function QuoteCalculator() {
  const [step, setStep] = useState(1);
  const [serviceType, setServiceType] = useState('');
  const [areaSize, setAreaSize] = useState<number>(50);
  const [estimate, setEstimate] = useState<number | null>(null);

  const calculateEstimate = () => {
    let baseRate = 0;
    if (serviceType === 'Torch On Flat Roof') baseRate = 120;
    if (serviceType === 'TPO Membrane') baseRate = 140;
    if (serviceType === 'Basement Tanking') baseRate = 180;
    if (serviceType === 'Deck / Balcony') baseRate = 110;
    
    // Simple mock calculation logic
    const total = baseRate * areaSize;
    setEstimate(total);
    setStep(3);
  };

  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative" id="quote">
      <div className="absolute inset-0 bg-primary-900/5 mix-blend-multiply pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-100 text-primary-700 font-semibold text-sm mb-6 border border-primary-200">
              <Calculator className="w-4 h-4" />
              Instant Estimation
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight font-heading">
              Get an Automated <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                Project Quote
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              No need to wait days for a ballpark figure. Use our automated quote generator to get an immediate estimated cost for your waterproofing needs based on average Auckland market rates.
            </p>
            <ul className="space-y-4">
              {[
                'Instant ballpark figures',
                'Transparent pricing',
                'No obligation required',
                'Covers roofs, basements, and decks'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-xl shadow-gray-200/50 relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-bl-[100px] -z-10 rounded-tr-3xl"></div>
            
            {/* Progress Bar */}
            <div className="flex gap-2 mb-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`h-2 flex-1 rounded-full transition-colors duration-500 ${step >= i ? 'bg-primary-600' : 'bg-gray-100'}`} />
              ))}
            </div>

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold font-heading text-gray-900">What do you need waterproofed?</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: 'Torch On Flat Roof', icon: Home },
                      { name: 'TPO Membrane', icon: Ruler },
                      { name: 'Basement Tanking', icon: Droplets },
                      { name: 'Deck / Balcony', icon: Home },
                    ].map((service) => (
                       <button
                        key={service.name}
                        onClick={() => setServiceType(service.name)}
                        className={`p-4 rounded-2xl border-2 text-left transition-all duration-300 ${
                          serviceType === service.name 
                            ? 'border-primary-600 bg-primary-50 text-primary-900 shadow-md' 
                            : 'border-gray-100 bg-white hover:border-primary-300 text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <service.icon className={`w-6 h-6 mb-3 ${serviceType === service.name ? 'text-primary-600' : 'text-gray-400'}`} />
                        <span className="font-semibold block">{service.name}</span>
                      </button>
                    ))}
                  </div>
                  <button
                    disabled={!serviceType}
                    onClick={() => setStep(2)}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-primary-600 text-white font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-700 transition-colors mt-6 shadow-lg shadow-primary-600/20"
                  >
                    Next Step <ArrowRight className="w-5 h-5" />
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold font-heading text-gray-900">Approximate Area Size</h3>
                  <p className="text-gray-500">Drag the slider to estimate the size of the area in square meters (m²).</p>
                  
                  <div className="py-8">
                    <div className="text-4xl font-bold text-center text-primary-600 mb-8 font-heading">
                      {areaSize} m²
                    </div>
                    <input 
                      type="range" 
                      min="10" 
                      max="300" 
                      step="5"
                      value={areaSize}
                      onChange={(e) => setAreaSize(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                    />
                    <div className="flex justify-between text-sm text-gray-400 font-medium mt-2">
                      <span>10m²</span>
                      <span>300m²+</span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => setStep(1)}
                      className="flex-1 py-4 rounded-xl bg-white text-gray-700 font-bold hover:bg-gray-50 transition-colors border border-gray-200 shadow-sm"
                    >
                      Back
                    </button>
                    <button
                      onClick={calculateEstimate}
                      className="flex-[2] py-4 rounded-xl bg-primary-600 text-white font-bold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30"
                    >
                      Calculate Estimate
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6"
                >
                  <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-gray-900 mb-2">Estimated Cost</h3>
                  <p className="text-gray-500 mb-6">For {areaSize}m² of {serviceType}</p>
                  
                  <div className="inline-block px-8 py-4 bg-gray-50 rounded-2xl border border-gray-100 mb-8 w-full">
                    <span className="text-gray-500 font-medium block mb-1">Estimated Range</span>
                    <span className="text-4xl font-bold font-heading text-primary-600">
                      ${(estimate || 0).toLocaleString()} - ${( (estimate || 0) * 1.25 ).toLocaleString()}
                    </span>
                  </div>

                  <p className="text-sm text-gray-400 mb-8 max-w-sm mx-auto">
                    *This is a ballpark estimate. Final cost depends on surface condition, access, and specific material grades.
                  </p>

                  <div className="flex flex-col gap-3">
                    <a
                      href="#contact"
                      className="w-full py-4 rounded-xl bg-gray-900 text-white font-bold hover:bg-gray-800 transition-colors shadow-lg"
                    >
                      Request Formal Quote
                    </a>
                    <button
                      onClick={() => { setStep(1); setServiceType(''); }}
                      className="w-full py-4 rounded-xl bg-transparent text-gray-500 font-bold hover:bg-gray-50 hover:text-gray-900 transition-colors border border-transparent hover:border-gray-200"
                    >
                      Start Over
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
