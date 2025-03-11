
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-16 flex flex-col items-center justify-center min-h-[60vh] px-4 sm:px-6 lg:px-8">
        <h1 className="text-8xl font-bold mb-6">404</h1>
        <p className="text-xl text-gray-600 mb-8 text-center max-w-md">
          We couldn't find the page you were looking for.
        </p>
        <Link 
          to="/" 
          className="btn-primary"
        >
          Return to Home
        </Link>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
