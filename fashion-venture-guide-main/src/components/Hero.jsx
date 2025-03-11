
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  const heroRef = useRef(null);
  
  useEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement) return;
    
    const handleMouseMove = (e) => {
      const { left, top, width, height } = heroElement.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      heroElement.style.setProperty('--x', x.toFixed(2));
      heroElement.style.setProperty('--y', y.toFixed(2));
    };
    
    heroElement.addEventListener('mousemove', handleMouseMove);
    return () => {
      heroElement.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
      style={{
        '--x': 0.5,
        '--y': 0.5
      }}
    >
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[400ms] ease-apple"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1800&q=80')",
          transform: "scale(1.05) translate(calc(var(--x) * -10px), calc(var(--y) * -10px))"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60 backdrop-filter"></div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-4">
            Refined Simplicity
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            Minimalist design. Maximum impact. Explore our curated collection of timeless essentials.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/category/women" 
              className="px-8 py-3 bg-white text-black rounded-full font-medium tracking-wide transition-all duration-300 hover:opacity-90 active:scale-[0.98]"
            >
              Shop Women
            </Link>
            <Link 
              to="/category/men" 
              className="px-8 py-3 bg-transparent text-white border border-white rounded-full font-medium tracking-wide transition-all duration-300 hover:bg-white/10 active:scale-[0.98]"
            >
              Shop Men
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Featured tags */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-6 text-white/70 text-sm">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="flex items-center gap-2"
        >
          <span className="w-1 h-1 bg-white/70 rounded-full"></span>
          <span>Sustainable</span>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          className="flex items-center gap-2"
        >
          <span className="w-1 h-1 bg-white/70 rounded-full"></span>
          <span>Timeless</span>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="flex items-center gap-2"
        >
          <span className="w-1 h-1 bg-white/70 rounded-full"></span>
          <span>Minimal</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
