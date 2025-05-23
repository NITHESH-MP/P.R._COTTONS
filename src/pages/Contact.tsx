import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';

const contactInfo = {
  address: {
    street: 'Ground Floor Room No.1, Door No.79/1',
    area: 'Vaiyapurinagar Ist Cross, Near',
    city: 'Karur',
    state: 'Tamil Nadu',
    country: 'India',
    zipCode: '639002',
  },
  contact: {
    name: 'Prakash (Proprietor)',
    phone: '08048608767',
    responseRate: '80% Response Rate',
    email: 'info@prcottons.com',
    website: 'www.prcottons.com',
  },
  hours: {
    weekdays: '9:00 AM - 6:00 PM',
    saturday: '10:00 AM - 4:00 PM',
    sunday: 'Closed',
  },
};

const Contact = () => {
  return (
    <MainLayout>
      {/* Hero section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
              Contact P.R.Cottons
            </h1>
            <p className="text-xl">
              Reach out to us for inquiries about our cotton products, wholesale orders, or export opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Map section */}
      <section className="bg-ivory py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              title="Google Map"
              className="w-full h-[450px] border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.0178936820403!2d78.06514617485975!3d10.962020689198214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2f0028a069ab%3A0xbc625510d9394fc8!2sP.R.COTTONS!5e0!3m2!1sen!2sin!4v1740848549609!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact information section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left column - Visit us */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold font-playfair">Our Location</h2>
                </div>
                
                <div className="space-y-4 ml-16">
                  <p className="text-lg">
                    {contactInfo.address.street}<br />
                    {contactInfo.address.area}<br />
                    {contactInfo.address.city}, {contactInfo.address.state}<br />
                    {contactInfo.address.country} - {contactInfo.address.zipCode}
                  </p>
                  
                  <a 
                    href="https://www.google.com/maps/place/P.R.COTTONS/@10.962021,78.065146,17z/data=!3m1!4b1!4m6!3m5!1s0x3baa2f0028a069ab:0xbc625510d9394fc8!8m2!3d10.962021!4d78.067721!16s%2Fg%2F11v0v4w7p1?entry=ttu"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent font-medium"
                  >
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Get Directions
                  </a>
                  
                  <div className="pt-4">
                    <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                    <ul className="space-y-1 text-textGray">
                      <li className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span>{contactInfo.hours.weekdays}</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Saturday</span>
                        <span>{contactInfo.hours.saturday}</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Sunday</span>
                        <span>{contactInfo.hours.sunday}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Right column - Contact details */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold font-playfair">Contact Details</h2>
                </div>
                
                <div className="space-y-6 ml-16">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Primary Contact</h3>
                    <p className="text-lg font-medium mb-2">{contactInfo.contact.name}</p>
                    <div className="flex flex-col">
                      <div className="flex items-center">
                        <svg className="h-5 w-5 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <a href={`tel:${contactInfo.contact.phone}`} className="text-primary hover:text-accent text-lg">
                          {contactInfo.contact.phone}
                        </a>
                      </div>
                      <div className="ml-8 mt-1">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <svg className="-ml-0.5 mr-1 h-3 w-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {contactInfo.contact.responseRate}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Other Contact Methods</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <a href={`mailto:${contactInfo.contact.email}`} className="text-primary hover:text-accent">
                          {contactInfo.contact.email}
                        </a>
                      </li>
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                        </svg>
                        <a href={`https://${contactInfo.contact.website}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent">
                          {contactInfo.contact.website}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-playfair text-charcoal mb-4">
              Ready to Place an Order?
            </h2>
            <p className="text-textGray text-lg mb-8">
              Contact us today for wholesale pricing, custom orders, or export inquiries.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href={`tel:${contactInfo.contact.phone}`}
                className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-md font-medium flex items-center justify-center"
              >
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now: {contactInfo.contact.phone}
              </a>
              <a 
                href="/inquiry" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md font-medium"
              >
                Send Inquiry Form
              </a>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;