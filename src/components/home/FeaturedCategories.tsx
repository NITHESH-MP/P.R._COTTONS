
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const categories = [
  {
    id: 1,
    name: 'Baby Swaddle',
    image: '/CottonBlankets .jpg',
    description: 'Premium quality  Cotton Muslin Blankets,  Bamboo Muslin Blankets, BAMBOO Muslin Swaddles.',
    slug: 'bed-linen',
  },
  {
    id: 2,
    name: 'Beach Towels',
    image: '/Cotton Beach Towel.jpg',
    description: 'Providing you the best range of Cotton Beach Towel',
    slug: 'towels',
  },
  {
    id: 3,
    name: 'Bleach Resist Towels',
    image: 'Bleach_resist.jpg',
    description: 'Pioneers in the industry, we offer Cotton Salon Towel, Hair Salon Towels and Disposable Salon Towel from India',
    slug: 'curtains',
  },
  {
    id: 4,
    name: 'Kitchen Towels',
    image: 'Kitchen Towels.jpg',
    description: 'Functional and stylish kitchen towels,  Assorted Cotton Kitchen Towels, and Cotton Terry Kitchen Towel.',
    slug: 'kitchen-linen',
  },
  {
    id: 5,
    name: 'Table Linen',
    image: '/tablecloth.png',
    description: 'Elegant tablecloths, napkins, and runners for any occasion.',
    slug: 'table-linen',
  },
];

const FeaturedCategories = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-charcoal mb-4">
            Featured Categories
          </h2>
          <p className="text-textGray text-lg max-w-2xl mx-auto">
            Explore our wide range of premium textile products crafted with the finest materials and exceptional attention to detail.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card 
              key={category.id}
              className={cn(
                "overflow-hidden bg-white border border-gray-200 rounded-lg transition-all duration-300",
                hoveredId === category.id && "shadow-xl transform scale-[1.02]"
              )}
              onMouseEnter={() => setHoveredId(category.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className={cn(
                    "w-full h-full object-cover transition-transform duration-700",
                    hoveredId === category.id && "scale-110"
                  )}
                />
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent opacity-0 transition-opacity duration-300",
                  hoveredId === category.id && "opacity-100"
                )}>
                </div>
              </div>
              <CardContent className="p-6 relative">
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-textGray mb-4">{category.description}</p>
                <Link 
                  to={`/products?category=${category.slug}`}
                  className={cn(
                    "inline-flex items-center text-primary font-medium transition-colors",
                    hoveredId === category.id ? "text-accent" : "text-primary"
                  )}
                >
                  View Products
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
