
'use client';

export default function CompanyStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6 font-inter">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 mb-6 font-inter">
              Founded with a vision to simplify document management, PDF Convert Master has become 
              the trusted solution for millions of users worldwide. Our journey began when we 
              recognized the growing need for reliable, secure, and user-friendly PDF tools.
            </p>
            <p className="text-lg text-gray-600 mb-6 font-inter">
              Under the umbrella of Mizan Store Ltd, we've built a platform that combines 
              cutting-edge technology with intuitive design, making professional PDF conversion 
              accessible to everyone.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">10M+</div>
                <div className="text-gray-600">Files Processed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">150+</div>
                <div className="text-gray-600">Countries Served</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=Modern%20professional%20team%20working%20in%20contemporary%20office%20space%20with%20computers%20and%20documents%2C%20diverse%20group%20of%20employees%20collaborating%20on%20digital%20projects%2C%20clean%20bright%20workspace%20with%20natural%20lighting%20and%20modern%20furniture&width=600&height=400&seq=company-story&orientation=landscape"
              alt="Our team working"
              className="rounded-lg shadow-xl object-cover w-full h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
