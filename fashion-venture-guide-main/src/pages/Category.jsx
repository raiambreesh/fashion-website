
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

const Category = () => {
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [categoryInfo, setCategoryInfo] = useState(null);
  
  useEffect(() => {
    // Simulate loading data
    setLoading(true);
    
    setTimeout(() => {
      if (categoryId && products[categoryId]) {
        setCategoryProducts(products[categoryId]);
        setCategoryInfo(categories.find(cat => cat.id === categoryId));
      }
      setLoading(false);
    }, 500);
  }, [categoryId]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-28 pb-16 flex items-center justify-center min-h-[50vh]">
          <div className="w-8 h-8 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!categoryInfo) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-28 pb-16 text-center">
          <h2 className="text-2xl font-medium">Category not found</h2>
          <p className="mt-2 text-gray-600">The category you're looking for doesn't exist.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Category Header */}
        <div className="relative overflow-hidden rounded-xl mb-12 h-64">
          <div className="absolute inset-0">
            <img 
              src={categoryInfo.image} 
              alt={categoryInfo.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white text-center">
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">{categoryInfo.name}</h1>
            <p className="text-gray-100 mt-4 max-w-2xl mx-auto">{categoryInfo.description}</p>
          </div>
        </div>
        
        {/* Product Filtering & Sorting (UI only) */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 border-b pb-4">
          <p className="text-sm text-gray-600 mb-4 sm:mb-0">
            Showing {categoryProducts.length} products
          </p>
          <div className="flex items-center gap-4">
            <div className="relative">
              <select className="appearance-none bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-1 focus:ring-black">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            
            <button className="bg-black text-white p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {categoryProducts.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {categoryProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <p>No products found in this category.</p>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Category;
