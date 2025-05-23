
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const IntroSection = () => {
  return (
    <section className="py-16 bg-ivory">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left column - Bullet points */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-charcoal">
              Crafting Premium Textiles <br />
              <span className="text-primary">For the Global Market</span>
            </h2>
            
            <p className="text-textGray text-lg">
              Since 2020, Karur Textiles has been a trusted name in the textile export business, 
              blending traditional craftsmanship with modern manufacturing techniques to create exceptional products.
            </p>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-charcoal">5 Years Expertise</h3>
                  <p className="text-textGray">Bunch of experience and knowledge in textile manufacturing and exports.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-charcoal">Indiamart Certified</h3>
                  <p className="text-textGray">Our products meet international standards for safety and sustainability.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-charcoal">Custom Manufacturing</h3>
                  <p className="text-textGray">Tailored solutions to meet your specific requirements and brand needs.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - Quick Link Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <Link to="/products">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-xl mb-2">Products</h3>
                  <p className="text-textGray">Browse our complete range of textile products.</p>
                </CardContent>
              </Link>
            </Card>
            
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <Link to="/company">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-xl mb-2">Company</h3>
                  <p className="text-textGray">Learn about our history and values.</p>
                </CardContent>
              </Link>
            </Card>
            
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <Link to="/inquiry">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-xl mb-2">Inquiry</h3>
                  <p className="text-textGray">Submit your product inquiries and requirements.</p>
                </CardContent>
              </Link>
            </Card>
            
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <Link to="/contact">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-xl mb-2">Contact</h3>
                  <p className="text-textGray">Get in touch with our sales and support team.</p>
                </CardContent>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
