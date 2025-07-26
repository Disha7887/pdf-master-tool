
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function GallerySection() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: 'ri-exchange-line',
      title: 'Convert',
      description: 'Transform your documents between different formats with perfect quality preservation.',
      items: ['PDF to Word', 'Word to PDF', 'Excel to PDF', 'Image to PDF'],
      color: 'red'
    },
    {
      icon: 'ri-scissors-line',
      title: 'Organize',
      description: 'Merge, split, and reorganize your PDF documents with powerful editing tools.',
      items: ['Merge PDFs', 'Split PDFs', 'Compress Files', 'Rotate Pages'],
      color: 'blue'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Secure',
      description: 'Protect your documents with advanced security features and encryption.',
      items: ['Password Protect', 'Remove Password', 'Add Watermark', 'Digital Signature'],
      color: 'green'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gray-900 py-24 overflow-hidden">
      {/* Animated Dark Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Moving geometric shapes */}
        <div className="absolute w-96 h-96 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full blur-3xl animate-dark-float-1" style={{top: '5%', left: '10%'}}></div>
        <div className="absolute w-80 h-80 bg-gradient-to-br from-blue-500/15 to-purple-500/15 rounded-full blur-2xl animate-dark-float-2" style={{top: '40%', right: '15%'}}></div>
        <div className="absolute w-64 h-64 bg-gradient-to-br from-green-500/12 to-emerald-500/12 rounded-full blur-2xl animate-dark-float-3" style={{bottom: '20%', left: '20%'}}></div>
        <div className="absolute w-72 h-72 bg-gradient-to-br from-purple-500/8 to-pink-500/8 rounded-full blur-3xl animate-dark-float-4" style={{top: '60%', right: '5%'}}></div>
        <div className="absolute w-56 h-56 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-2xl animate-dark-float-5" style={{bottom: '40%', right: '25%'}}></div>
        <div className="absolute w-88 h-88 bg-gradient-to-br from-cyan-500/8 to-blue-500/8 rounded-full blur-3xl animate-dark-float-6" style={{top: '15%', left: '40%'}}></div>

        {/* Floating particles */}
        <div className="absolute w-4 h-4 bg-white/20 rounded-full animate-particle-1" style={{top: '10%', left: '20%'}}></div>
        <div className="absolute w-3 h-3 bg-red-400/30 rounded-full animate-particle-2" style={{top: '30%', right: '30%'}}></div>
        <div className="absolute w-2 h-2 bg-blue-400/40 rounded-full animate-particle-3" style={{bottom: '25%', left: '15%'}}></div>
        <div className="absolute w-5 h-5 bg-green-400/25 rounded-full animate-particle-4" style={{top: '70%', right: '10%'}}></div>
        <div className="absolute w-3 h-3 bg-purple-400/35 rounded-full animate-particle-5" style={{bottom: '15%', right: '20%'}}></div>
        <div className="absolute w-4 h-4 bg-orange-400/30 rounded-full animate-particle-6" style={{top: '50%', left: '70%'}}></div>

        {/* Moving lines */}
        <div className="absolute w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent animate-line-1" style={{top: '20%', left: '25%'}}></div>
        <div className="absolute w-px h-24 bg-gradient-to-b from-transparent via-red-400/30 to-transparent animate-line-2" style={{top: '60%', right: '35%'}}></div>
        <div className="absolute w-px h-28 bg-gradient-to-b from-transparent via-blue-400/25 to-transparent animate-line-3" style={{bottom: '30%', left: '60%'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-6 font-inter">Transform Your PDF Workflow</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-inter">
            Discover how millions of users worldwide are revolutionizing their document management with our powerful PDF tools
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-red-500/20 text-red-300 rounded-full text-sm font-medium border border-red-400/30 font-inter">
                <i className="ri-flash-line mr-2"></i>
                Industry Leading Performance
              </div>

              <h3 className="text-4xl font-bold text-white leading-tight font-inter">
                Professional PDF Tools Built for Modern Workflows
              </h3>

              <p className="text-lg text-gray-300 leading-relaxed font-inter">
                From converting documents to merging files, our comprehensive suite of PDF tools handles every aspect of your document workflow with precision and speed.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center mt-1 border border-red-400/30">
                  <i className="ri-check-line text-red-400 text-sm"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1 font-inter">Lightning Fast Processing</h4>
                  <p className="text-gray-300 font-inter">Convert and process documents in seconds, not minutes</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center mt-1 border border-red-400/30">
                  <i className="ri-check-line text-red-400 text-sm"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1 font-inter">Enterprise-Grade Security</h4>
                  <p className="text-gray-300 font-inter">Your documents are encrypted and processed securely</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center mt-1 border border-red-400/30">
                  <i className="ri-check-line text-red-400 text-sm"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1 font-inter">Cross-Platform Compatibility</h4>
                  <p className="text-gray-300 font-inter">Works seamlessly across all devices and operating systems</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/tools" className="px-8 py-4 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-all duration-200 ease-in-out transform hover:scale-105 shadow-lg whitespace-nowrap font-inter cursor-pointer">
                <i className="ri-arrow-right-line mr-2"></i>
                Try Tools Now
              </Link>
              <button className="px-8 py-4 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-200 ease-in-out whitespace-nowrap backdrop-blur-sm border border-white/20 font-inter">
                <i className="ri-play-circle-line mr-2"></i>
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right side - Interactive Demo */}
          <div className="relative">
            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 shadow-2xl backdrop-blur-sm border border-white/20">
              <div className="bg-white/90 rounded-2xl p-6 shadow-lg backdrop-blur-sm">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="flex-1 bg-gray-100 rounded-full px-4 py-2">
                    <span className="text-sm text-gray-600 font-inter">PDF Converter Pro</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border-2 border-dashed border-red-200 rounded-xl p-6 text-center hover:border-red-300 transition-colors duration-200 ease-in-out">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <i className="ri-file-pdf-line text-red-500 text-xl"></i>
                    </div>
                    <p className="text-sm text-gray-600 mb-2 font-inter">Drop your files here</p>
                    <button className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600 transition-colors duration-200 ease-in-out whitespace-nowrap font-inter">
                      Browse Files
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-gray-50 rounded-lg p-3 text-center hover:bg-gray-100 transition-colors duration-200 ease-in-out">
                      <i className="ri-file-word-line text-blue-500 text-xl mb-1"></i>
                      <p className="text-xs text-gray-600 font-inter">Word</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 text-center hover:bg-gray-100 transition-colors duration-200 ease-in-out">
                      <i className="ri-file-excel-line text-green-500 text-xl mb-1"></i>
                      <p className="text-xs text-gray-600 font-inter">Excel</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 text-center hover:bg-gray-100 transition-colors duration-200 ease-in-out">
                      <i className="ri-image-line text-purple-500 text-xl mb-1"></i>
                      <p className="text-xs text-gray-600 font-inter">Image</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white/5 rounded-3xl p-12 mb-20 backdrop-blur-sm border border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2 font-inter">10M+</div>
              <div className="text-gray-300 font-inter">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2 font-inter">100M+</div>
              <div className="text-gray-300 font-inter">Files Processed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2 font-inter">99.9%</div>
              <div className="text-gray-300 font-inter">Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2 font-inter">24/7</div>
              <div className="text-gray-300 font-inter">Support</div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white/5 rounded-2xl p-8 border backdrop-blur-sm hover:bg-white/10 transition-all duration-200 ease-in-out transform hover:scale-105 ${
                activeFeature === index ? 'border-red-400/50 bg-white/10' : 'border-white/10'
              }`}
              onMouseEnter={() => setActiveFeature(index)}
            >
              <div className={`w-16 h-16 bg-${feature.color}-500/20 rounded-full flex items-center justify-center mb-6 border border-${feature.color}-400/30`}>
                <i className={`${feature.icon} text-${feature.color}-400 text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-inter">{feature.title}</h3>
              <p className="text-gray-300 mb-6 font-inter">{feature.description}</p>
              <div className="space-y-2">
                {feature.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="text-sm text-gray-400 font-inter">• {item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes dark-float-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(40px, -30px) rotate(90deg); }
          50% { transform: translate(-30px, -50px) rotate(180deg); }
          75% { transform: translate(-50px, 30px) rotate(270deg); }
        }

        @keyframes dark-float-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-35px, 40px) rotate(-90deg); }
          50% { transform: translate(45px, 25px) rotate(-180deg); }
          75% { transform: translate(25px, -45px) rotate(-270deg); }
        }

        @keyframes dark-float-3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -40px) rotate(120deg); }
          66% { transform: translate(-40px, -15px) rotate(240deg); }
        }

        @keyframes dark-float-4 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(50px, 30px) rotate(45deg); }
          50% { transform: translate(-25px, 45px) rotate(90deg); }
          75% { transform: translate(-45px, -35px) rotate(135deg); }
        }

        @keyframes dark-float-5 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          20% { transform: translate(35px, -25px) rotate(72deg); }
          40% { transform: translate(-20px, -40px) rotate(144deg); }
          60% { transform: translate(-45px, 20px) rotate(216deg); }
          80% { transform: translate(25px, 45px) rotate(288deg); }
        }

        @keyframes dark-float-6 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          30% { transform: translate(-30px, 35px) rotate(-108deg); }
          60% { transform: translate(40px, -30px) rotate(-216deg); }
        }

        @keyframes particle-1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          25% { transform: translate(20px, -30px) scale(1.2); opacity: 0.6; }
          50% { transform: translate(-15px, -20px) scale(0.8); opacity: 0.9; }
          75% { transform: translate(-25px, 15px) scale(1.1); opacity: 0.4; }
        }

        @keyframes particle-2 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
          33% { transform: translate(25px, 20px) scale(1.3); opacity: 0.7; }
          66% { transform: translate(-20px, -25px) scale(0.9); opacity: 0.5; }
        }

        @keyframes particle-3 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
          25% { transform: translate(-30px, 25px) scale(1.1); opacity: 0.8; }
          50% { transform: translate(20px, -15px) scale(0.7); opacity: 0.3; }
          75% { transform: translate(35px, 30px) scale(1.2); opacity: 0.6; }
        }

        @keyframes particle-4 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          50% { transform: translate(-40px, 35px) scale(1.4); opacity: 0.7; }
        }

        @keyframes particle-5 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
          25% { transform: translate(30px, -20px) scale(0.8); opacity: 0.6; }
          50% { transform: translate(-25px, -30px) scale(1.1); opacity: 0.8; }
          75% { transform: translate(-35px, 25px) scale(0.9); opacity: 0.5; }
        }

        @keyframes particle-6 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
          33% { transform: translate(-20px, -35px) scale(1.2); opacity: 0.8; }
          66% { transform: translate(40px, 20px) scale(0.8); opacity: 0.4; }
        }

        @keyframes line-1 {
          0% { transform: translateY(-100px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }

        @keyframes line-2 {
          0% { transform: translateY(-100px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }

        @keyframes line-3 {
          0% { transform: translateY(-100px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }

        .animate-dark-float-1 { animation: dark-float-1 30s ease-in-out infinite; }
        .animate-dark-float-2 { animation: dark-float-2 35s ease-in-out infinite; }
        .animate-dark-float-3 { animation: dark-float-3 25s ease-in-out infinite; }
        .animate-dark-float-4 { animation: dark-float-4 32s ease-in-out infinite; }
        .animate-dark-float-5 { animation: dark-float-5 28s ease-in-out infinite; }
        .animate-dark-float-6 { animation: dark-float-6 40s ease-in-out infinite; }
        
        .animate-particle-1 { animation: particle-1 20s ease-in-out infinite; }
        .animate-particle-2 { animation: particle-2 25s ease-in-out infinite; }
        .animate-particle-3 { animation: particle-3 18s ease-in-out infinite; }
        .animate-particle-4 { animation: particle-4 22s ease-in-out infinite; }
        .animate-particle-5 { animation: particle-5 26s ease-in-out infinite; }
        .animate-particle-6 { animation: particle-6 24s ease-in-out infinite; }

        .animate-line-1 { animation: line-1 8s linear infinite; }
        .animate-line-2 { animation: line-2 10s linear infinite 2s; }
        .animate-line-3 { animation: line-3 12s linear infinite 4s; }

        @media (max-width: 768px) {
          .animate-dark-float-1, .animate-dark-float-2, .animate-dark-float-3, .animate-dark-float-4, .animate-dark-float-5, .animate-dark-float-6 {
            animation-duration: 20s;
          }
          .animate-particle-1, .animate-particle-2, .animate-particle-3, .animate-particle-4, .animate-particle-5, .animate-particle-6 {
            animation-duration: 15s;
          }
        }
      `}</style>
    </div>
  );
}
