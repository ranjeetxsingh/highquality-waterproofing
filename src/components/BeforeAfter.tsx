import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { GripVertical } from 'lucide-react';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', () => setIsDragging(false));
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', () => setIsDragging(false));
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', () => setIsDragging(false));
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', () => setIsDragging(false));
    };
  }, [isDragging]);

  return (
    <section className="py-24 bg-gray-950 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-900/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-white font-semibold tracking-wide uppercase text-sm mb-2">See The Difference</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 font-heading">Transformations That Last</h3>
          <p className="text-lg text-gray-400">
            Slide to see the incredible difference our premium waterproofing membranes make. From leaky, degraded roofs to fully sealed, weather-resistant defenses.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div 
            ref={containerRef}
            className="relative w-full aspect-square sm:aspect-[4/3] md:aspect-[21/9] rounded-3xl overflow-hidden cursor-ew-resize select-none shadow-2xl ring-1 ring-white/10"
            style={{ touchAction: 'pan-y' }}
            onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
            onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
          >
            {/* After Image (Background) */}
            <div className="absolute inset-0 w-full h-full text-white">
               <img 
                src="https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=2500&auto=format&fit=crop" 
                alt="After Waterproofing" 
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
              />
              <div className="absolute top-4 right-4 bg-primary-600/90 backdrop-blur text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg tracking-wider">
                AFTER
              </div>
            </div>

            {/* Before Image (Clipped) */}
            <div 
              className="absolute inset-0 w-full h-full text-white"
              style={{ 
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                WebkitClipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=2500&auto=format&fit=crop" 
                alt="Before Waterproofing" 
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 sepia-[.40]"
                draggable={false}
              />
              <div className="absolute top-4 left-4 bg-gray-900/90 backdrop-blur text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg tracking-wider border border-white/10">
                BEFORE
              </div>
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.3)] text-primary-600 hover:scale-110 hover:bg-primary-50 transition-all">
                <GripVertical className="w-6 h-6" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
