
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import { Inquiry } from '@/types/inquiry';

// Sample country list
const countries = [
  "United States", "Canada", "United Kingdom", "Germany", "France", 
  "Italy", "Spain", "Australia", "Japan", "China", "India", "Brazil"
];

const InquiryForm = () => {
  const [searchParams] = useSearchParams();
  const preselectedProduct = searchParams.get('product') || '';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    product: preselectedProduct,
    quantity: 0,
    country: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [availableProducts, setAvailableProducts] = useState<string[]>([]);
  
  useEffect(() => {
    // Load available products from localStorage
    const loadProducts = () => {
      const storedProducts = localStorage.getItem('products');
      if (storedProducts) {
        const parsedProducts = JSON.parse(storedProducts);
        const productNames = parsedProducts.map((product: any) => product.name);
        setAvailableProducts(productNames);
      }
    };
    
    loadProducts();
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'quantity' ? Number(value) : value
    }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create inquiry object
      const newInquiry: Inquiry = {
        id: Date.now().toString(),
        product: formData.product,
        quantity: formData.quantity,
        country: formData.country,
        message: formData.message,
        date: new Date().toISOString(),
        email: formData.email,
        name: formData.name,
      };
      
      // Get existing inquiries from localStorage
      const existingInquiries = localStorage.getItem('inquiries');
      const inquiries = existingInquiries ? JSON.parse(existingInquiries) : [];
      
      // Add new inquiry
      inquiries.push(newInquiry);
      
      // Save back to localStorage
      localStorage.setItem('inquiries', JSON.stringify(inquiries));
      
      // Show success message
      toast({
        title: 'Inquiry submitted successfully',
        description: 'We have received your inquiry and will contact you soon.',
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        product: '',
        quantity: 0,
        country: '',
        message: '',
      });
      
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      toast({
        title: 'Error submitting inquiry',
        description: 'There was a problem submitting your inquiry. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Your Name</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Smith"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Your Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@company.com"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="product">Product of Interest</Label>
          <Select
            value={formData.product}
            onValueChange={(value) => handleSelectChange('product', value)}
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a product" />
            </SelectTrigger>
            <SelectContent>
              {availableProducts.length > 0 ? (
                availableProducts.map((product) => (
                  <SelectItem key={product} value={product}>
                    {product}
                  </SelectItem>
                ))
              ) : (
                <SelectItem value="sample" disabled>
                  No products available
                </SelectItem>
              )}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="quantity">Quantity (meters)</Label>
          <Input
            id="quantity"
            name="quantity"
            type="number"
            value={formData.quantity || ''}
            onChange={handleChange}
            placeholder="1000"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="country">Country</Label>
          <Select
            value={formData.country}
            onValueChange={(value) => handleSelectChange('country', value)}
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="Select your country" />
            </SelectTrigger>
            <SelectContent>
              {countries.map((country) => (
                <SelectItem key={country} value={country}>
                  {country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Your Requirements</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Please provide details about your requirements, including specific colors, finishes, or any other specifications."
          className="min-h-[150px]"
          required
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full" 
        size="lg"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
      </Button>
    </form>
  );
};

const InquiryPage = () => {
  return (
    <MainLayout>
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold font-playfair text-center">
            Product Inquiry
          </h1>
          <p className="text-xl text-center mt-4 max-w-2xl mx-auto">
            Interested in our products? Fill out the form below and we'll get back to you shortly.
          </p>
        </div>
      </section>
      
      <section className="py-12 bg-ivory">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto bg-white p-6 md:p-10 rounded-lg shadow">
            <InquiryForm />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default InquiryPage;
