import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';

// Timeline data
const timelineEvents = [
  {
    id: 1,
    year: 2020,
    title: 'Company Founded',
    description: 'P.R.Cottons established as a textile manufacturer in Karur, Tamil Nadu.',
  },
  {
    id: 2,
    year: 2020,
    title: 'GST Registered',
    description: 'Officially registered under GST on March 3, 2020.',
  },
  {
    id: 3,
    year: 2021,
    title: 'First Export',
    description: 'Began international exports to the United States and Australia.',
  },
  {
    id: 4,
    year: 2023,
    title: 'Business Expansion',
    description: 'Expanded product lines and increased production capacity.',
  },
];

// Trust Seals (IndiaMART)
const trustSeals = [
  {
    id: 1,
    title: 'Verified Exporter',
    description: 'Certified international trade partner',
  },
  {
    id: 2,
    title: 'TrustSEAL Verified',
    description: 'IndiaMART verified business credentials',
  },
  {
    id: 3,
    title: 'GST Verified',
    description: 'Authentic GSTIN: 33AAJFR1234M1Z5',
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
              P.R.Cottons
            </h1>
            <p className="text-xl">
              Since 2020, we've been manufacturing premium cotton products in Karur, 
              serving both domestic and international markets with quality textiles.
            </p>
          </div>
        </div>
      </section>

      {/* Quick facts bar */}
      <section className="bg-secondary text-white py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold">2020</p>
              <p className="text-sm">Established</p>
            </div>
            <div>
              <p className="text-2xl font-bold">5+</p>
              <p className="text-sm">Export Countries</p>
            </div>
            <div>
              <p className="text-2xl font-bold">30+</p>
              <p className="text-sm">Employees</p>
            </div>
            <div>
              <p className="text-2xl font-bold">1.5-5Cr</p>
              <p className="text-sm">Annual Turnover</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline section */}
      <section className="py-16 bg-ivory">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold font-playfair text-charcoal text-center mb-12">
            Our Journey
          </h2>
          
          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
            
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <div key={event.id} className="relative">
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-white -ml-[2px]"></div>
                  
                  <div className={`bg-white p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'md:mr-auto md:w-1/2' : 'md:ml-auto md:w-1/2'}`}>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
                      {event.year}
                    </span>
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-textGray">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Trust Seals section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-playfair text-charcoal mb-4">
              Our Credentials
            </h2>
            <p className="text-textGray text-lg max-w-2xl mx-auto">
              Recognized and verified by India's leading B2B marketplace
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {trustSeals.map((seal) => (
              <Card key={seal.id} className="text-center p-6 border-2 border-primary/20 hover:border-primary/50 transition-colors">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{seal.title}</h3>
                <p className="text-textGray">{seal.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Address section */}
      <section className="py-16 bg-ivory">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold font-playfair text-charcoal mb-6">
            Our Headquarters
          </h2>
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <p className="text-lg mb-2">Ground Floor Room No.1, Door No.79/1</p>
            <p className="text-lg mb-2">Vaiyapurinagar Ist Cross</p>
            <p className="text-lg mb-2">Karur-639002, Tamil Nadu, India</p>
            <p className="text-lg font-semibold mt-4">Proprietor: Radhika Ramanathan</p>
            <p className="text-lg mt-2">GSTIN: 33AAJFR1234M1Z5</p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Company;