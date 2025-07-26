'use client';

export default function LocationSection() {
  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM GMT' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM GMT' },
    { day: 'Sunday', hours: 'Emergency Support Only' }
  ];

  const officeDetails = [
    {
      title: 'Headquarters',
      address: 'Mizan Store Ltd',
      city: 'London, United Kingdom',
      phone: '+447429919748',
      email: 'info@mizanstore.com',
      type: 'primary'
    },
    {
      title: 'Technical Support',
      address: 'PDF Convert Master',
      city: 'Technical Operations Center',
      phone: '+447429919748',
      email: 'support@pdfconvertmaster.com',
      type: 'support'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-inter">
            Our Location & Office Hours
          </h2>
          <p className="text-lg text-gray-600 font-inter">
            Find us in London, UK with global support coverage
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-inter">
              Office Information
            </h3>
            
            <div className="space-y-6">
              {officeDetails.map((office, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className={`ri-${office.type === 'primary' ? 'building-2' : 'customer-service-2'}-line text-red-600 text-xl`}></i>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 font-inter">
                        {office.title}
                      </h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <i className="ri-map-pin-line text-red-500"></i>
                          <span className="font-inter">{office.address}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-road-map-line text-red-500"></i>
                          <span className="font-inter">{office.city}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-phone-line text-red-500"></i>
                          <span className="font-inter">{office.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-mail-line text-red-500"></i>
                          <span className="font-inter">{office.email}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h4 className="text-lg font-semibold text-blue-900 mb-4 font-inter">
                Office Hours
              </h4>
              <div className="space-y-3">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-blue-800 font-medium font-inter">{schedule.day}</span>
                    <span className="text-blue-600 font-inter">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-blue-200">
                <div className="flex items-center space-x-2">
                  <i className="ri-phone-line text-blue-600"></i>
                  <span className="text-blue-800 text-sm font-inter">
                    24/7 Emergency Support: +447429919748
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-inter">
              Find Us on Map
            </h3>
            
            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.540943654877!2d-0.1445!3d51.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b2b5a7b4a81%3A0x4e0f4c9e2c8f3e0!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1635789012345!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-96"
              />
            </div>
            
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <div className="flex items-center space-x-2 mb-2">
                  <i className="ri-car-line text-green-600"></i>
                  <span className="font-semibold text-green-800 font-inter">Parking</span>
                </div>
                <p className="text-sm text-green-700 font-inter">
                  Free parking available for visitors
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="flex items-center space-x-2 mb-2">
                  <i className="ri-subway-line text-blue-600"></i>
                  <span className="font-semibold text-blue-800 font-inter">Transit</span>
                </div>
                <p className="text-sm text-blue-700 font-inter">
                  Central London location, easily accessible
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}