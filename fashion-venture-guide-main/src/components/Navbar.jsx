
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="text-xl md:text-2xl font-bold tracking-tight transition-opacity duration-300 hover:opacity-80"
          >
            MONO
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className={`category-link py-1 ${location.pathname === '/' ? 'after:scale-x-100' : ''}`}>
              Home
            </Link>
            <Link to="/category/men" className={`category-link py-1 ${location.pathname === '/category/men' ? 'after:scale-x-100' : ''}`}>
              Men
            </Link>
            <Link to="/category/women" className={`category-link py-1 ${location.pathname === '/category/women' ? 'after:scale-x-100' : ''}`}>
              Women
            </Link>
            <Link to="/category/kids" className={`category-link py-1 ${location.pathname === '/category/kids' ? 'after:scale-x-100' : ''}`}>
              Kids
            </Link>
            <Link to="/category/accessories" className={`category-link py-1 ${location.pathname === '/category/accessories' ? 'after:scale-x-100' : ''}`}>
              Accessories
            </Link>
            <Link to="/contact" className={`category-link py-1 ${location.pathname === '/contact' ? 'after:scale-x-100' : ''}`}>
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col space-y-1.5 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span 
              className={`block h-0.5 w-6 bg-black transition-transform duration-300 ease-apple ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span 
              className={`block h-0.5 w-6 bg-black transition-opacity duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span 
              className={`block h-0.5 w-6 bg-black transition-transform duration-300 ease-apple ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-transform duration-500 ease-apple ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-[-100%] opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center space-y-8 text-lg">
          <Link to="/" className="text-xl font-medium hover:opacity-70 transition-opacity">
            Home
          </Link>
          <Link to="/category/men" className="text-xl font-medium hover:opacity-70 transition-opacity">
            Men
          </Link>
          <Link to="/category/women" className="text-xl font-medium hover:opacity-70 transition-opacity">
            Women
          </Link>
          <Link to="/category/kids" className="text-xl font-medium hover:opacity-70 transition-opacity">
            Kids
          </Link>
          <Link to="/category/accessories" className="text-xl font-medium hover:opacity-70 transition-opacity">
            Accessories
          </Link>
          <Link to="/contact" className="text-xl font-medium hover:opacity-70 transition-opacity">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
