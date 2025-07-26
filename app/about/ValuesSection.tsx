
'use client';

export default function ValuesSection() {
  const values = [
    {
      icon: 'ri-shield-check-line',
      title: 'Security First',
      description: 'Your documents are processed with bank-level security. We never store your files and all transfers are encrypted.'
    },
    {
      icon: 'ri-speed-line',
      title: 'Lightning Fast',
      description: 'Our optimized conversion engine processes files in seconds, not minutes. Get your results instantly.'
    },
    {
      icon: 'ri-heart-line',
      title: 'User-Centric',
      description: 'Every feature is designed with you in mind. Simple, intuitive, and powerful tools that just work.'
    },
    {
      icon: 'ri-global-line',
      title: 'Accessible',
      description: 'Available 24/7 from anywhere in the world. No downloads, no installations, just pure convenience.'
    },
    {
      icon: 'ri-leaf-line',
      title: 'Eco-Friendly',
      description: 'Digital-first approach reduces paper waste. Our servers run on renewable energy sources.'
    },
    {
      icon: 'ri-customer-service-line',
      title: 'Expert Support',
      description: 'Our dedicated support team is always ready to help. Professional assistance when you need it.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-inter">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            These principles guide everything we do at PDF Convert Master
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <i className={`${value.icon} text-2xl text-red-600`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 font-inter">{value.title}</h3>
              <p className="text-gray-600 font-inter">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
