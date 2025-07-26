
'use client';

export default function AboutHero() {
  return (
    <section 
      className="relative py-24 bg-gradient-to-r from-red-600 to-orange-600 text-white overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20modern%20office%20building%20with%20glass%20facade%20and%20corporate%20headquarters%20architecture%2C%20clean%20minimalist%20design%20with%20blue%20and%20orange%20accents%2C%20professional%20business%20environment%20with%20natural%20lighting%20and%20contemporary%20interior%20design&width=1200&height=600&seq=about-hero&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'multiply'
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-inter">
            About <span className="text-orange-300">PDF Convert Master</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto font-inter">
            Empowering businesses and individuals with professional PDF solutions since our founding
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg">
            <div className="flex items-center space-x-2">
              <i className="ri-building-line text-orange-300"></i>
              <span>Mizan Store Ltd</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="ri-phone-line text-orange-300"></i>
              <span>+447429919748</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
