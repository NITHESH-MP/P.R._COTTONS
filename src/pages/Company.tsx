
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';

// Timeline data
const timelineEvents = [
  {
    id: 1,
    year: 1990,
    title: 'Company Founded',
    description: 'Karur Textiles was established as a small home-based enterprise.',
    image: 'https://images.unsplash.com/photo-1485217988980-11786ced9454?q=80&w=1470&auto=format&fit=crop',
  },
  {
    id: 2,
    year: 1997,
    title: 'First Export',
    description: 'Began exporting to European markets with bed linen products.',
    image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=1528&auto=format&fit=crop',
  },
  {
    id: 3,
    year: 2005,
    title: 'Factory Expansion',
    description: 'Expanded manufacturing capacity with a new 50,000 sq ft facility.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1470&auto=format&fit=crop',
  },
  {
    id: 4,
    year: 2010,
    title: 'OEKO-TEX Certification',
    description: 'Achieved OEKO-TEX Standard 100 certification for all products.',
    image: 'https://images.unsplash.com/photo-1621574539375-c09b0946ca90?q=80&w=1374&auto=format&fit=crop',
  },
  {
    id: 5,
    year: 2018,
    title: 'Sustainable Practices',
    description: 'Implemented water recycling and solar power in manufacturing.',
    image: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?q=80&w=1470&auto=format&fit=crop',
  },
  {
    id: 6,
    year: 2023,
    title: 'Global Expansion',
    description: 'Opened new offices in North America and the Middle East.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470&auto=format&fit=crop',
  },
];

// Values data
const coreValues = [
  {
    id: 1,
    title: 'Sustainability',
    description: 'Committed to eco-friendly manufacturing processes and materials.',
    icon: (
      <svg className="h-12 w-12 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Quality',
    description: 'Unwavering commitment to the highest standards in every product.',
    icon: (
      <svg className="h-12 w-12 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Innovation',
    description: 'Constantly evolving our techniques and designs for modern markets.',
    icon: (
      <svg className="h-12 w-12 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Integrity',
    description: 'Honest business practices and transparent relationships with clients.',
    icon: (
      <svg className="h-12 w-12 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

// Client logos
const clientLogos = [
  {
    id: 1,
    name: 'Client 1',
    logo: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Client 2',
    logo: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Client 3',
    logo: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Client 4',
    logo: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    name: 'Client 5',
    logo: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    name: 'Client 6',
    logo: 'https://via.placeholder.com/150',
  },
];

// Production gallery
const productionImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1581553673739-c4906b5d0de8?q=80&w=1470&auto=format&fit=crop',
    alt: 'Modern textile machinery',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1581341236741-b443adbd3cd1?q=80&w=1470&auto=format&fit=crop',
    alt: 'Fabric inspection',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1605452819360-da95b21c7c21?q=80&w=1470&auto=format&fit=crop',
    alt: 'Quality control',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1581342403275-df26e9000992?q=80&w=1470&auto=format&fit=crop',
    alt: 'Packaging process',
  },
];

const Company = () => {
  return (
    <MainLayout>
      {/* Hero section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
              Our Company
            </h1>
            <p className="text-xl">
              For over three decades, Karur Textiles has been delivering premium textile products
              to clients worldwide, combining traditional craftsmanship with modern manufacturing techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline section */}
      <section className="py-16 bg-ivory">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold font-playfair text-charcoal text-center mb-12">
            Our Journey
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
            
            <div className="space-y-12 md:space-y-0">
              {timelineEvents.map((event, index) => (
                <div key={event.id} className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-white"></div>
                  
                  {/* Left side - odd events */}
                  <div className={`md:contents ${index % 2 === 0 ? '' : 'md:flex md:flex-row-reverse'}`}>
                    <div className={`bg-white p-6 rounded-lg shadow-md mb-8 md:mb-0 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
                        {event.year}
                      </span>
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <p className="text-textGray">{event.description}</p>
                    </div>
                    
                    <div className="rounded-lg overflow-hidden mb-8 md:mb-0">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Values section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-playfair text-charcoal mb-4">
              Our Core Values
            </h2>
            <p className="text-textGray text-lg max-w-2xl mx-auto">
              The principles that guide our business and define our relationships with clients, partners, and the environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value) => (
              <Card key={value.id} className="bg-white border border-gray-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-textGray">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Global Reach section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-playfair text-charcoal mb-4">
              Global Reach
            </h2>
            <p className="text-textGray text-lg max-w-2xl mx-auto">
              Our products are trusted by clients in over 30 countries across 5 continents.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-8 mb-12">
            <img 
              src="https://images.unsplash.com/photo-1589519160732-57fc6a9dfe37?q=80&w=1470&auto=format&fit=crop" 
              alt="World Map" 
              className="w-full h-auto rounded"
            />
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6">Trusted By</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
              {clientLogos.map((client) => (
                <div 
                  key={client.id} 
                  className="bg-white p-4 rounded-lg flex items-center justify-center grayscale hover:grayscale-0 transition-all"
                >
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="max-h-12"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Production section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-playfair text-charcoal mb-4">
              Our Production
            </h2>
            <p className="text-textGray text-lg max-w-2xl mx-auto">
              State-of-the-art facilities combining traditional craftsmanship with modern technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {productionImages.map((image) => (
              <div key={image.id} className="overflow-hidden rounded-lg">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Company;
