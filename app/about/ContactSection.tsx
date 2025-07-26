
'use client';

export default function ContactSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-inter">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto font-inter">
            Have questions about our services? We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-building-2-line text-3xl text-white"></i>
            </div>
            <h3 className="text-xl font-bold mb-4 font-inter">Company</h3>
            <p className="text-gray-200 font-inter">Mizan Store Ltd</p>
            <p className="text-gray-200 font-inter">Professional PDF Solutions</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-phone-line text-3xl text-white"></i>
            </div>
            <h3 className="text-xl font-bold mb-4 font-inter">Phone</h3>
            <p className="text-gray-200 font-inter">+447429919748</p>
            <p className="text-gray-200 text-sm font-inter">Available 24/7</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-global-line text-3xl text-white"></i>
            </div>
            <h3 className="text-xl font-bold mb-4 font-inter">Website</h3>
            <p className="text-gray-200 font-inter">pdfconvertmaster.com</p>
            <p className="text-gray-200 text-sm font-inter">Your trusted PDF partner</p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer font-inter">
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
}
