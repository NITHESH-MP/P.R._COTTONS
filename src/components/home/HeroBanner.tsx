
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1553340386-1cb0f5dc9e34?q=80&w=1920&auto=format&fit=crop',
    title: 'Premium Textile Exports from Karur, India',
    subtitle: 'Quality Woven Globally',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1464287441781-6835e063c578?q=80&w=1920&auto=format&fit=crop',
    title: 'Sustainable Fabrics',
    subtitle: 'Eco-friendly Manufacturing',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1528822855841-e8bf3134cdc9?q=80&w=1920&auto=format&fit=crop',
    title: 'Handcrafted Excellence',
    subtitle: '30+ Years of Heritage',
  },
];

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="absolute inset-0 bg-charcoal/50"></div>
          </div>
          
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4 md:px-6 text-center md:text-left">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button 
                    asChild
                    size="lg" 
                    className="bg-accent hover:bg-accent/90 text-white"
                  >
                    <Link to="/products">Explore Products</Link>
                  </Button>
                  <Button 
                    asChild
                    size="lg" 
                    variant="outline" 
                    className="bg-transparent hover:bg-white/10 text-white border-white hover:text-white"
                  >
                    <Link to="/inquiry">Request a Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0">
        <div className="flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-white' : 'bg-white/40'
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
