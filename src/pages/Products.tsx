import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import { Product } from '@/types/product';
import { useNavigate } from 'react-router-dom';

// Sample colors
const colorSwatches = [
  { id: 'white', color: '#FFFFFF', name: 'White' },
  { id: 'beige', color: '#F5F5DC', name: 'Beige' },
  { id: 'gray', color: '#808080', name: 'Gray' },
  { id: 'navy', color: '#000080', name: 'Navy' },
  { id: 'green', color: '#008000', name: 'Green' },
  { id: 'red', color: '#FF0000', name: 'Red' },
];

//category data
const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'Baby Swaddle', name: 'Baby Swaddle' },
  { id: 'Beach Towels', name: 'Beach Towels' },
  { id: 'Kitchen Towels', name: 'Kitchen Towels' },
  { id: 'Bleach Resist Towels', name: 'Bleach Resist Towels' },
  { id: 'Table Linen', name: 'Table Linen' },
];

const ProductCard = ({ product }: { product: Product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  
  const handleInquiryClick = () => {
    // Navigate to inquiry page with product details
    navigate(`/inquiry?product=${encodeURIComponent(product.name)}`);
  };
  
  return (
    <Card 
      className={cn(
        "overflow-hidden transition-all duration-300 h-full",
        isHovered && "shadow-xl"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.name}
            className={cn(
              "w-full h-full object-cover transition-transform duration-500",
              isHovered && "scale-110"
            )}
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">No image available</span>
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-3">{product.name}</h3>
        <div className="space-y-2 mb-4 text-sm text-textGray">
          <div className="flex justify-between">
            <span>GSM:</span>
            <span className="font-medium">{product.gsm}</span>
          </div>
          <div className="flex justify-between">
            <span>Width:</span>
            <span className="font-medium">{product.width}</span>
          </div>
          <div className="flex justify-between">
            <span>Colors:</span>
            <span className="font-medium">{product.colors}</span>
          </div>
          <div className="flex justify-between">
            <span>MOQ:</span>
            <span className="font-medium">{product.moq} meters</span>
          </div>
        </div>
        <Button 
          className={cn(
            "w-full transition-all",
            isHovered ? "bg-accent hover:bg-accent/90" : "bg-primary hover:bg-primary/90"
          )}
          onClick={handleInquiryClick}
        >
          Ask for Details
        </Button>
      </CardContent>
    </Card>
  );
};

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category') || 'all';
  const [gsmRange, setGsmRange] = useState<number[]>([0, 1000]); // Changed to wider range
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [actualGsmRange, setActualGsmRange] = useState<[number, number]>([0, 1000]);

  useEffect(() => {
    // Load products from localStorage
    const loadProducts = () => {
      setLoading(true);
      try {
        const storedProducts = localStorage.getItem('products');
        console.log('Stored products:', storedProducts);
        
        if (storedProducts) {
          const parsedProducts = JSON.parse(storedProducts);
          console.log('Parsed products:', parsedProducts);
          
          // Calculate actual GSM range from products
          if (parsedProducts.length > 0) {
            const gsmValues = parsedProducts.map(p => Number(p.gsm)).filter(gsm => !isNaN(gsm));
            if (gsmValues.length > 0) {
              const minGsm = Math.min(...gsmValues);
              const maxGsm = Math.max(...gsmValues);
              const range: [number, number] = [Math.max(0, minGsm - 10), maxGsm + 10];
              setActualGsmRange(range);
              setGsmRange([range[0], range[1]]);
              console.log('GSM range set to:', range);
            }
          }
          
          setProducts(parsedProducts);
        } else {
          console.log('No products found in localStorage');
          setProducts([]);
        }
      } catch (error) {
        console.error('Error loading products:', error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    
    loadProducts();
  }, []);

  const filteredProducts = products.filter(product => {
    console.log('Filtering product:', product.name, 'GSM:', product.gsm, 'Category:', product.category);
    
    // Filter by category
    if (selectedCategory !== 'all' && product.category !== selectedCategory) {
      console.log('Filtered out by category');
      return false;
    }
    
    
    
    // If there are selected colors, we'd filter by them here
    // For demo purposes, we'll just pass all products since we don't have color data per product
    
    console.log('Product passed filters');
    return true;
  });
  
  const toggleCategory = (categoryId: string) => {
    setSearchParams({ category: categoryId });
  };
  
  

  return (
    <MainLayout>
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold font-playfair text-center">
            Product Catalog
          </h1>
          <p className="text-xl text-center mt-4 max-w-2xl mx-auto">
            Browse our extensive range of premium textile products
          </p>
        </div>
      </section>
      
      <section className="py-12 bg-ivory">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => toggleCategory(category.id)}
                      className={cn(
                        "block w-full text-left px-3 py-2 rounded-md transition-colors",
                        selectedCategory === category.id
                          ? "bg-primary text-white"
                          : "hover:bg-gray-100"
                      )}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>            
            
            </div>
            
            {/* Products Grid */}
            <div className="lg:col-span-3">
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <p className="text-lg text-gray-500">Loading products...</p>
                </div>
              ) : (
                <>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.length > 0 ? (
                      filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                      ))
                    ) : (
                      <div className="col-span-full p-8 text-center">
                        <p className="text-lg text-textGray">
                          No products found. {products.length === 0 ? 'Add products via the admin panel to see them here.' : 'Try adjusting your filters.'}
                        </p>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Products;