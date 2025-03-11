
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CategoryCard from '../components/CategoryCard';
import { categories } from '../data/products';

const Index = () => {
  const featuredRef = useRef(null);
  const testimonialRef = useRef(null);
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };
    
    const observeElement = (element, className) => {
      if (!element) return;
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(className);
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);
      
      observer.observe(element);
      
      return () => {
        observer.unobserve(element);
      };
    };
    
    observeElement(featuredRef.current, 'animate-fade-in');
    observeElement(testimonialRef.current, 'animate-fade-in');
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm uppercase tracking-widest">Collections</span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-2 tracking-tight">Shop by Category</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>
      
      {/* Featured Section */}
      <section 
        ref={featuredRef}
        className="py-20 bg-gray-50 opacity-0"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-sm uppercase tracking-widest">Featured Collection</span>
              <h2 className="text-3xl md:text-4xl font-semibold mt-2 mb-6 tracking-tight">Essential Minimalism</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our signature collection embodies the spirit of modern minimalism. Clean lines, neutral tones, and premium materials create timeless pieces that elevate your everyday.
              </p>
              <Link 
                to="/category/women" 
                className="btn-primary inline-block"
              >
                Explore Collection
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Woman in minimalist outfit"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section 
        ref={testimonialRef}
        className="py-20 opacity-0"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm uppercase tracking-widest">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-2 mb-12 tracking-tight">What Our Customers Say</h2>
          
          <blockquote>
            <p className="text-xl md:text-2xl italic text-gray-600 leading-relaxed">
              "The attention to detail and quality of materials in MONO's pieces are exceptional. My wardrobe has never felt more cohesive and timeless."
            </p>
            <footer className="mt-8">
              <div className="flex items-center justify-center">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-sm font-medium">EJ</span>
                </div>
                <div className="ml-4 text-left">
                  <p className="font-medium">Emma Johnson</p>
                  <p className="text-sm text-gray-500">Design Director</p>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">Join Our Newsletter</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Subscribe to receive updates on new collections, exclusive offers, and styling inspirations.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-3 bg-white/10 border border-white/20 text-white rounded-full focus:ring-2 focus:ring-white/30 flex-grow"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-black rounded-full font-medium tracking-wide transition-all duration-300 hover:opacity-90 active:scale-[0.98] sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
