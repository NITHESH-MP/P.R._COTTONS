
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={cn(
        'fixed w-full top-0 z-50 transition-all duration-300 py-4',
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-primary font-playfair">Karur Textiles</h1>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-charcoal hover:text-primary transition-colors">Home</Link>
            <Link to="/products" className="text-charcoal hover:text-primary transition-colors">Products</Link>
            <Link to="/company" className="text-charcoal hover:text-primary transition-colors">Company</Link>
            <Link to="/inquiry" className="text-charcoal hover:text-primary transition-colors">Inquiry</Link>
            <Link to="/contact" className="text-charcoal hover:text-primary transition-colors">Contact</Link>
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
          <Link to="/admin/login">  <Button className="bg-accent hover:bg-accent/90 text-white">
              Admin
            </Button></Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-charcoal p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="w-6 h-6"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white rounded-lg shadow-lg animate-fade-in">
            <nav className="flex flex-col space-y-4 p-4">
              <Link 
                to="/" 
                className="text-charcoal hover:text-primary transition-colors pb-2 border-b"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className="text-charcoal hover:text-primary transition-colors pb-2 border-b"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                to="/company" 
                className="text-charcoal hover:text-primary transition-colors pb-2 border-b"
                onClick={() => setMobileMenuOpen(false)}
              >
                Company
              </Link>
              <Link 
                to="/inquiry" 
                className="text-charcoal hover:text-primary transition-colors pb-2 border-b"
                onClick={() => setMobileMenuOpen(false)}
              >
                Inquiry
              </Link>
              <Link 
                to="/contact" 
                className="text-charcoal hover:text-primary transition-colors pb-2 border-b"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Button className="bg-accent hover:bg-accent/90 text-white w-full mt-2">
                Request Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
