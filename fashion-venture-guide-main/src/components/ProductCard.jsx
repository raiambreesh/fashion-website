
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className="opacity-0 group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[4/5] overflow-hidden rounded-lg bg-gray-100 mb-4 relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-apple group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Quick view overlay */}
        <div className={`absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button 
            className="bg-white text-black text-sm font-medium py-2 px-4 rounded-full transform transition-transform duration-300 hover:scale-105"
          >
            Quick View
          </button>
        </div>
      </div>
      
      <h3 className="font-medium text-lg">{product.name}</h3>
      <p className="mt-1 text-gray-700">${product.price.toFixed(2)}</p>
      <p className="mt-2 text-sm text-gray-500 line-clamp-2">{product.description}</p>
    </div>
  );
};

export default ProductCard;
