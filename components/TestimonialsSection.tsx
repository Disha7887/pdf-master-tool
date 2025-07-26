
'use client';

import { useState } from 'react';

export default function TestimonialsSection() {
  const [activeTab, setActiveTab] = useState('features');

  const tabs = [
    { id: 'features', label: 'Features', icon: 'ri-star-line' },
    { id: 'integrations', label: 'Integrations', icon: 'ri-links-line' },
    { id: 'security', label: 'Security', icon: 'ri-shield-check-line' }
  ];

  const features = [
    {
      title: "Enterprise Security",
      description: "Bank-grade encryption and compliance with GDPR, SOC 2, and ISO 27001 standards.",
      image: "https://readdy.ai/api/search-image?query=cybersecurity%20shield%20protection%20digital%20lock%20secure%20data%20encryption%20professional%20business%20technology%20blue%20lighting%20modern&width=64&height=64&seq=security001&orientation=squarish"
    },
    {
      title: "Lightning Fast",
      description: "Process documents in seconds with our optimized cloud infrastructure.",
      image: "https://readdy.ai/api/search-image?query=lightning%20fast%20speed%20rocket%20launch%20technology%20performance%20blue%20energy%20motion%20blur%20dynamic%20professional%20modern&width=64&height=64&seq=speed001&orientation=squarish"
    },
    {
      title: "Team Collaboration",
      description: "Share and collaborate on PDF documents with your team members seamlessly.",
      image: "https://readdy.ai/api/search-image?query=team%20collaboration%20business%20people%20working%20together%20office%20modern%20workspace%20professional%20meeting%20discussion%20clean%20bright&width=64&height=64&seq=team001&orientation=squarish"
    },
    {
      title: "AI-Powered OCR",
      description: "Advanced optical character recognition for scanned documents and images.",
      image: "https://readdy.ai/api/search-image?query=artificial%20intelligence%20AI%20computer%20vision%20optical%20character%20recognition%20technology%20digital%20brain%20processing%20modern%20tech%20blue&width=64&height=64&seq=ai001&orientation=squarish"
    },
    {
      title: "Mobile Optimized",
      description: "Access all tools from any device with our responsive web interface.",
      image: "https://readdy.ai/api/search-image?query=mobile%20smartphone%20tablet%20responsive%20design%20modern%20technology%20clean%20minimal%20white%20background%20professional%20device&width=64&height=64&seq=mobile001&orientation=squarish"
    },
    {
      title: "Batch Processing",
      description: "Handle multiple files simultaneously to boost your productivity.",
      image: "https://readdy.ai/api/search-image?query=batch%20processing%20multiple%20files%20documents%20workflow%20automation%20efficiency%20productivity%20modern%20office%20technology%20clean&width=64&height=64&seq=batch001&orientation=squarish"
    }
  ];

  const integrations = [
    { name: "Google Drive", icon: "ri-google-fill", color: "text-blue-500" },
    { name: "Dropbox", icon: "ri-dropbox-fill", color: "text-blue-600" },
    { name: "OneDrive", icon: "ri-microsoft-fill", color: "text-blue-700" },
    { name: "Box", icon: "ri-box-3-fill", color: "text-blue-800" },
    { name: "Slack", icon: "ri-slack-fill", color: "text-purple-500" },
    { name: "Zapier", icon: "ri-flashlight-fill", color: "text-orange-500" }
  ];

  const securityFeatures = [
    {
      title: "End-to-End Encryption",
      description: "256-bit SSL encryption for all data transfers",
      icon: "ri-lock-line"
    },
    {
      title: "Zero Data Retention",
      description: "Files are automatically deleted after processing",
      icon: "ri-delete-bin-line"
    },
    {
      title: "Compliance Ready",
      description: "GDPR, HIPAA, and SOC 2 compliant infrastructure",
      icon: "ri-shield-check-line"
    },
    {
      title: "Audit Trails",
      description: "Complete logging and monitoring of all activities",
      icon: "ri-file-list-line"
    }
  ];

  const backgroundImages = [
    "https://readdy.ai/api/search-image?query=professional%20business%20office%20environment%20with%20documents%20and%20technology%2C%20modern%20workspace%20with%20laptops%20and%20papers%2C%20clean%20minimalist%20design%2C%20soft%20natural%20lighting%2C%20productivity%20focused%20atmosphere&width=400&height=300&seq=bg001&orientation=landscape",
    "https://readdy.ai/api/search-image?query=team%20collaboration%20in%20modern%20office%20space%2C%20people%20working%20with%20digital%20documents%2C%20tablets%20and%20computers%2C%20bright%20clean%20workspace%2C%20professional%20meeting%20environment&width=400&height=300&seq=bg002&orientation=landscape",
    "https://readdy.ai/api/search-image?query=digital%20transformation%20technology%20concept%2C%20cloud%20computing%20and%20data%20processing%2C%20modern%20tech%20infrastructure%2C%20servers%20and%20networking%20equipment%2C%20blue%20lighting%20professional&width=400&height=300&seq=bg003&orientation=landscape",
    "https://readdy.ai/api/search-image?query=mobile%20devices%20and%20responsive%20design%20showcase%2C%20smartphones%20tablets%20laptops%20displaying%20documents%2C%20modern%20technology%20setup%2C%20clean%20white%20background%20professional&width=400&height=300&seq=bg004&orientation=landscape",
    "https://readdy.ai/api/search-image?query=cybersecurity%20and%20data%20protection%20visualization%2C%20digital%20locks%20shields%20and%20encryption%20symbols%2C%20secure%20network%20infrastructure%2C%20professional%20technology%20background&width=400&height=300&seq=bg005&orientation=landscape",
    "https://readdy.ai/api/search-image?query=document%20management%20and%20file%20organization%20system%2C%20digital%20filing%20cabinets%20and%20folders%2C%20productivity%20tools%20and%20workflow%20automation%2C%20modern%20office%20technology&width=400&height=300&seq=bg006&orientation=landscape"
  ];

  return (
    <div className="relative bg-gray-900 py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className="absolute rounded-2xl overflow-hidden shadow-lg"
            style={{
              width: '300px',
              height: '200px',
              animationDelay: `${index * 2}s`,
              animationDuration: '20s',
              animationIterationCount: 'infinite',
              animationTimingFunction: 'ease-in-out'
            }}
          >
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover"
              style={{
                filter: 'blur(2px) brightness(0.7)'
              }}
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-inter">
            Everything You Need for PDF Success
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
            Powerful features, seamless integrations, and enterprise-grade security - all in one platform
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 rounded-full p-2 shadow-lg border border-white/20 backdrop-blur-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ease-in-out whitespace-nowrap font-inter ${
                  activeTab === tab.id
                    ? 'bg-red-500 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <i className={`${tab.icon} mr-2`}></i>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[500px]">
          {activeTab === 'features' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
              {features.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl overflow-hidden group-hover:scale-110 transition-transform duration-200 ease-in-out">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 font-inter">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed font-inter">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'integrations' && (
            <div className="animate-fadeIn">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-white mb-4 font-inter">
                  Connect with Your Favorite Tools
                </h3>
                <p className="text-gray-300 font-inter">
                  Seamlessly integrate with popular cloud storage and productivity platforms
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {integrations.map((integration, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-colors duration-200 ease-in-out">
                      <i className={`${integration.icon} text-3xl ${integration.color}`}></i>
                    </div>
                    <h4 className="font-semibold text-white font-inter">
                      {integration.name}
                    </h4>
                  </div>
                ))}
              </div>
              <div className="text-center mt-12">
                <button className="px-8 py-4 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors duration-200 ease-in-out whitespace-nowrap font-inter">
                  <i className="ri-add-line mr-2"></i>
                  View All Integrations
                </button>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="animate-fadeIn">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-white mb-4 font-inter">
                  Enterprise-Grade Security
                </h3>
                <p className="text-gray-300 font-inter">
                  Your documents and data are protected with industry-leading security measures
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="bg-white/10 rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-shadow duration-200 ease-in-out backdrop-blur-sm">
                    <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mb-4 border border-red-400/30">
                      <i className={`${feature.icon} text-red-400 text-xl`}></i>
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2 font-inter">
                      {feature.title}
                    </h4>
                    <p className="text-gray-300 font-inter">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-white/10 rounded-2xl p-8 shadow-lg border border-white/20 backdrop-blur-sm">
                <h4 className="text-xl font-semibold text-white mb-6 text-center font-inter">
                  Compliance & Certifications
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto border border-green-400/30">
                      <i className="ri-shield-check-line text-green-400 text-xl"></i>
                    </div>
                    <div className="font-semibold text-white font-inter">GDPR</div>
                    <div className="text-sm text-gray-300">Compliant</div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto border border-blue-400/30">
                      <i className="ri-medal-line text-blue-400 text-xl"></i>
                    </div>
                    <div className="font-semibold text-white font-inter">SOC 2</div>
                    <div className="text-sm text-gray-300">Type II</div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto border border-purple-400/30">
                      <i className="ri-hospital-line text-purple-400 text-xl"></i>
                    </div>
                    <div className="font-semibold text-white font-inter">HIPAA</div>
                    <div className="text-sm text-gray-300">Compliant</div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto border border-orange-400/30">
                      <i className="ri-global-line text-orange-400 text-xl"></i>
                    </div>
                    <div className="font-semibold text-white font-inter">ISO 27001</div>
                    <div className="text-sm text-gray-300">Certified</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-white mb-4 font-inter">
            Ready to Transform Your PDF Workflow?
          </h3>
          <p className="text-gray-300 mb-8 font-inter">
            Join millions of users who trust our platform for their document needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors duration-200 ease-in-out whitespace-nowrap font-inter">
              <i className="ri-arrow-right-line mr-2"></i>
              Get Started Free
            </button>
            <button className="px-8 py-4 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors duration-200 ease-in-out whitespace-nowrap font-inter border border-white/20">
              <i className="ri-phone-line mr-2"></i>
              Contact Sales
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float-bg-1 {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(100px, -50px) rotate(90deg); }
          50% { transform: translate(-50px, -100px) rotate(180deg); }
          75% { transform: translate(-100px, 50px) rotate(270deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }

        @keyframes float-bg-2 {
          0% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-80px, 60px) rotate(120deg); }
          66% { transform: translate(80px, -40px) rotate(240deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }

        @keyframes float-bg-3 {
          0% { transform: translate(0, 0) rotate(0deg); }
          20% { transform: translate(60px, -80px) rotate(72deg); }
          40% { transform: translate(-40px, -60px) rotate(144deg); }
          60% { transform: translate(-80px, 40px) rotate(216deg); }
          80% { transform: translate(40, 80px) rotate(288deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }

        @keyframes float-bg-4 {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-70px, -30px) rotate(-90deg); }
          50% { transform: translate(30px, -70px) rotate(-180deg); }
          75% { transform: translate(70px, 30px) rotate(-270deg); }
          100% { transform: translate(0, 0) rotate(-360deg); }
        }

        @keyframes float-bg-5 {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-90px, 90px) rotate(180deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }

        @keyframes float-bg-6 {
          0% { transform: translate(0, 0) rotate(0deg); }
          30% { transform: translate(50px, -100px) rotate(108deg); }
          60% { transform: translate(-100px, -50px) rotate(216deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }

        .absolute:nth-child(1) {
          top: 10%;
          left: 5%;
          animation: float-bg-1 25s infinite;
        }

        .absolute:nth-child(2) {
          top: 60%;
          right: 10%;
          animation: float-bg-2 30s infinite;
        }

        .absolute:nth-child(3) {
          bottom: 20%;
          left: 15%;
          animation: float-bg-3 22s infinite;
        }

        .absolute:nth-child(4) {
          top: 30%;
          right: 20%;
          animation: float-bg-4 28s infinite;
        }

        .absolute:nth-child(5) {
          bottom: 40%;
          right: 5%;
          animation: float-bg-5 35s infinite;
        }

        .absolute:nth-child(6) {
          top: 50%;
          left: 30%;
          animation: float-bg-6 32s infinite;
        }
      `}</style>
    </div>
  );
}
