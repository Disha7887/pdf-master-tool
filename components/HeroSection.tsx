
'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const texts = [
    "Every tool you need to work with PDFs in one place",
    "Convert, merge, split, and compress PDFs instantly",
    "Professional PDF tools trusted by millions"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % texts.length);
        setIsVisible(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileUpload = (file: File) => {
    setIsUploading(true);
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden w-full">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-gradient-to-br from-red-500/15 to-orange-500/15 rounded-full blur-3xl animate-float-enhanced-1" style={{top: '10%', left: '5%'}}></div>
        <div className="absolute w-80 h-80 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-full blur-3xl animate-float-enhanced-2" style={{top: '60%', right: '10%'}}></div>
        <div className="absolute w-64 h-64 bg-gradient-to-br from-pink-500/25 to-red-500/25 rounded-full blur-3xl animate-float-enhanced-3" style={{bottom: '20%', left: '15%'}}></div>
        <div className="absolute w-72 h-72 bg-gradient-to-br from-red-400/18 to-orange-400/18 rounded-full blur-3xl animate-float-enhanced-4" style={{top: '30%', right: '20%'}}></div>
        <div className="absolute w-56 h-56 bg-gradient-to-br from-orange-400/22 to-pink-400/22 rounded-full blur-3xl animate-float-enhanced-5" style={{bottom: '40%', right: '5%'}}></div>
        <div className="absolute w-88 h-88 bg-gradient-to-br from-pink-400/12 to-red-400/12 rounded-full blur-3xl animate-float-enhanced-6" style={{top: '50%', left: '30%'}}></div>

        <div className="absolute w-40 h-40 border-2 border-red-400/30 rounded-full animate-pulse-ring-1" style={{top: '25%', left: '20%'}}></div>
        <div className="absolute w-32 h-32 border-2 border-orange-400/40 rounded-full animate-pulse-ring-2" style={{top: '70%', right: '30%'}}></div>
        <div className="absolute w-48 h-48 border-2 border-pink-400/25 rounded-full animate-pulse-ring-3" style={{bottom: '30%', left: '60%'}}></div>

        <div className="absolute w-4 h-4 bg-white/30 rounded-full animate-particle-enhanced-1" style={{top: '20%', left: '10%'}}></div>
        <div className="absolute w-3 h-3 bg-red-400/40 rounded-full animate-particle-enhanced-2" style={{top: '40%', right: '15%'}}></div>
        <div className="absolute w-2 h-2 bg-orange-400/50 rounded-full animate-particle-enhanced-3" style={{bottom: '30%', left: '20%'}}></div>
        <div className="absolute w-5 h-5 bg-pink-400/35 rounded-full animate-particle-enhanced-4" style={{top: '60%', right: '25%'}}></div>
        <div className="absolute w-6 h-6 bg-red-300/30 rounded-full animate-particle-enhanced-5" style={{bottom: '50%', left: '70%'}}></div>

        <div className="absolute w-12 h-12 bg-gradient-to-br from-red-500/20 to-transparent rotate-45 animate-geometric-1" style={{top: '35%', left: '75%'}}></div>
        <div className="absolute w-8 h-8 bg-gradient-to-br from-orange-500/25 to-transparent rotate-45 animate-geometric-2" style={{bottom: '60%', right: '10%'}}></div>
        <div className="absolute w-16 h-16 bg-gradient-to-br from-pink-500/15 to-transparent rotate-45 animate-geometric-3" style={{top: '80%', left: '40%'}}></div>

        <div className="absolute w-px h-32 bg-gradient-to-b from-transparent via-red-400/30 to-transparent animate-line-enhanced-1" style={{top: '20%', left: '25%'}}></div>
        <div className="absolute w-px h-24 bg-gradient-to-b from-transparent via-orange-400/40 to-transparent animate-line-enhanced-2" style={{top: '60%', right: '35%'}}></div>
        <div className="absolute w-px h-28 bg-gradient-to-b from-transparent via-pink-400/35 to-transparent animate-line-enhanced-3" style={{bottom: '30%', left: '60%'}}></div>
      </div>

      <div className="relative z-10 flex items-center min-h-screen w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
            <div className="space-y-6 lg:space-y-8 animate-content-slide-in-enhanced order-2 lg:order-1">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-red-500/20 text-red-300 rounded-full text-sm font-medium animate-pulse-glow border border-red-400/30">
                  <i className="ri-star-fill mr-2 animate-star-twinkle"></i>
                  Trusted by 10M+ users worldwide
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight font-inter">
                  <span className={`block transition-all duration-300 ease-in-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                    {texts[currentText]}
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed font-inter animate-fade-in-up-delayed">
                  Every tool you need to use PDFs, at your fingertips. All are 100% FREE and easy to use! 
                  Merge, split, compress, convert, rotate, unlock and watermark PDFs with just a few clicks.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 animate-buttons-slide-in">
                <button className="px-6 sm:px-8 py-4 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-all duration-200 ease-in-out transform hover:scale-105 shadow-lg whitespace-nowrap font-inter animate-button-glow">
                  <i className="ri-rocket-line mr-2"></i>
                  Start Converting Now
                </button>
                <button className="px-6 sm:px-8 py-4 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-200 ease-in-out border-2 border-white/20 whitespace-nowrap font-inter backdrop-blur-sm">
                  <i className="ri-play-circle-line mr-2"></i>
                  Watch Demo
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-gray-300 font-inter animate-features-slide-in">
                <div className="flex items-center animate-feature-bounce-1">
                  <i className="ri-shield-check-line text-green-400 mr-2"></i>
                  100% Secure
                </div>
                <div className="flex items-center animate-feature-bounce-2">
                  <i className="ri-time-line text-blue-400 mr-2"></i>
                  Instant Processing
                </div>
                <div className="flex items-center animate-feature-bounce-3">
                  <i className="ri-money-dollar-circle-line text-purple-400 mr-2"></i>
                  Always Free
                </div>
              </div>
            </div>

            <div className="w-full animate-upload-slide-in-enhanced order-1 lg:order-2">
              <div 
                className={`relative border-2 border-dashed rounded-3xl p-8 sm:p-12 text-center transition-all duration-200 ease-in-out transform ${isDragging ? 'border-red-500 bg-red-500/10 scale-105 animate-drag-glow' : 'border-gray-500 bg-white/10 hover:border-red-400 hover:shadow-xl'} backdrop-blur-sm animate-upload-pulse w-full`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center animate-upload-icon">
                  <i className="ri-upload-cloud-2-line text-white text-2xl sm:text-3xl"></i>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 font-inter animate-title-glow">
                  Drop your PDF here
                </h3>
                <p className="text-gray-300 mb-6 sm:mb-8 font-inter text-sm sm:text-base">
                  or click to browse files
                </p>

                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileSelect}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="inline-block px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-200 ease-in-out transform hover:scale-105 shadow-lg cursor-pointer whitespace-nowrap font-inter animate-button-float text-sm sm:text-base"
                >
                  <i className="ri-file-upload-line mr-2"></i>
                  Select PDF File
                </label>

                {isUploading && (
                  <div className="mt-6 sm:mt-8 animate-fadeIn">
                    <div className="w-full bg-gray-600 rounded-full h-2 sm:h-3 mb-4">
                      <div 
                        className="bg-gradient-to-r from-red-500 to-red-600 h-2 sm:h-3 rounded-full transition-all duration-200 ease-in-out animate-progress-glow"
                        style={{ width: `${uploadProgress}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-300 font-medium font-inter">
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      Uploading... {uploadProgress}%
                    </p>
                  </div>
                )}

                <div className="mt-6 sm:mt-8 flex justify-center flex-wrap gap-x-4 gap-y-2 text-xs text-gray-400 font-inter animate-file-types">
                  <span className="flex items-center animate-file-type-bounce-1">
                    <i className="ri-file-pdf-line mr-1"></i>
                    PDF
                  </span>
                  <span className="flex items-center animate-file-type-bounce-2">
                    <i className="ri-file-word-line mr-1"></i>
                    DOC
                  </span>
                  <span className="flex items-center animate-file-type-bounce-3">
                    <i className="ri-file-excel-line mr-1"></i>
                    XLS
                  </span>
                  <span className="flex items-center animate-file-type-bounce-4">
                    <i className="ri-image-line mr-1"></i>
                    JPG
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Enhanced Float Animations */
        @keyframes float-enhanced-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          20% { transform: translate(60px, -40px) rotate(72deg) scale(1.1); }
          40% { transform: translate(-40px, -80px) rotate(144deg) scale(0.9); }
          60% { transform: translate(-80px, 40px) rotate(216deg) scale(1.05); }
          80% { transform: translate(40px, 80px) rotate(288deg) scale(0.95); }
        }

        @keyframes float-enhanced-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          16% { transform: translate(-50px, 60px) rotate(-60deg) scale(1.15); }
          33% { transform: translate(70px, 30px) rotate(-120deg) scale(0.85); }
          50% { transform: translate(30px, -70px) rotate(-180deg) scale(1.08); }
          66% { transform: translate(-60px, -50px) rotate(-240deg) scale(0.92); }
          83% { transform: translate(-30px, 70px) rotate(-300deg) scale(1.03); }
        }

        @keyframes float-enhanced-3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          25% { transform: translate(40px, -60px) rotate(90deg) scale(1.2); }
          50% { transform: translate(-60px, -20px) rotate(180deg) scale(0.8); }
          75% { transform: translate(-20px, 60px) rotate(270deg) scale(1.1); }
        }

        @keyframes float-enhanced-4 {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          14% { transform: translate(80px, 40px) rotate(51deg) scale(1.12); }
          28% { transform: translate(-30px, 70px) rotate(102deg) scale(0.88); }
          42% { transform: translate(-70px, -50px) rotate(153deg) scale(1.05); }
          57% { transform: translate(50px, -80px) rotate(204deg) scale(0.95); }
          71% { transform: translate(30px, 60px) rotate(255deg) scale(1.08); }
          85% { transform: translate(-60px, 30px) rotate(306deg) scale(0.92); }
        }

        @keyframes float-enhanced-5 {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          12% { transform: translate(50px, -30px) rotate(43deg) scale(1.15); }
          25% { transform: translate(-20px, -60px) rotate(86deg) scale(0.85); }
          37% { transform: translate(-70px, 20px) rotate(129deg) scale(1.1); }
          50% { transform: translate(30px, 70px) rotate(172deg) scale(0.9); }
          62% { transform: translate(60px, -40px) rotate(215deg) scale(1.05); }
          75% { transform: translate(-40px, 60px) rotate(258deg) scale(0.95); }
          87% { transform: translate(-50px, -30px) rotate(301deg) scale(1.08); }
        }

        @keyframes float-enhanced-6 {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          18% { transform: translate(-40px, 50px) rotate(-65deg) scale(1.1); }
          36% { transform: translate(60px, -40px) rotate(-130deg) scale(0.9); }
          54% { transform: translate(40px, 60px) rotate(-195deg) scale(1.15); }
          72% { transform: translate(-60px, -30px) rotate(-260deg) scale(0.85); }
          90% { transform: translate(30px, -60px) rotate(-325deg) scale(1.05); }
        }

        /* Pulse Ring Animations */
        @keyframes pulse-ring-1 {
          0% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.3); opacity: 0.3; }
          100% { transform: scale(1); opacity: 0.7; }
        }

        @keyframes pulse-ring-2 {
          0% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.5); opacity: 0.2; }
          100% { transform: scale(1); opacity: 0.6; }
        }

        @keyframes pulse-ring-3 {
          0% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.4); opacity: 0.1; }
          100% { transform: scale(1); opacity: 0.5; }
        }

        /* Enhanced Particle Animations */
        @keyframes particle-enhanced-1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
          25% { transform: translate(25px, -35px) scale(1.4); opacity: 0.8; }
          50% { transform: translate(-20px, -25px) scale(0.6); opacity: 1; }
          75% { transform: translate(-30px, 20px) scale(1.2); opacity: 0.6; }
        }

        @keyframes particle-enhanced-2 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
          33% { transform: translate(30px, 25px) scale(1.5); opacity: 0.9; }
          66% { transform: translate(-25px, -30px) scale(0.7); opacity: 0.7; }
        }

        @keyframes particle-enhanced-3 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          25% { transform: translate(-35px, 30px) scale(1.3); opacity: 1; }
          50% { transform: translate(25px, -20px) scale(0.5); opacity: 0.4; }
          75% { transform: translate(40px, 35px) scale(1.1); opacity: 0.8; }
        }

        @keyframes particle-enhanced-4 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
          50% { transform: translate(-45px, 40px) scale(1.6); opacity: 0.9; }
        }

        @keyframes particle-enhanced-5 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
          20% { transform: translate(35px, -25px) scale(0.8); opacity: 0.7; }
          40% { transform: translate(-30px, -35px) scale(1.3); opacity: 1; }
          60% { transform: translate(-40px, 30px) scale(0.9); opacity: 0.6; }
          80% { transform: translate(25px, 40px) scale(1.1); opacity: 0.8; }
        }

        /* Geometric Shape Animations */
        @keyframes geometric-1 {
          0%, 100% { transform: rotate(45deg) scale(1); opacity: 0.6; }
          50% { transform: rotate(225deg) scale(1.2); opacity: 0.8; }
        }

        @keyframes geometric-2 {
          0%, 100% { transform: rotate(45deg) scale(1); opacity: 0.7; }
          50% { transform: rotate(405deg) scale(0.8); opacity: 0.9; }
        }

        @keyframes geometric-3 {
          0%, 100% { transform: rotate(45deg) scale(1); opacity: 0.5; }
          50% { transform: rotate(315deg) scale(1.3); opacity: 0.7; }
        }

        /* Enhanced Line Animations */
        @keyframes line-enhanced-1 {
          0% { transform: translateY(-100px); opacity: 0; }
          30% { opacity: 0.8; }
          70% { opacity: 0.8; }
          100% { transform: translateY(100vh); opacity: 0; }
        }

        @keyframes line-enhanced-2 {
          0% { transform: translateY(-100px); opacity: 0; }
          40% { opacity: 1; }
          60% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }

        @keyframes line-enhanced-3 {
          0% { transform: translateY(-100px); opacity: 0; }
          35% { opacity: 0.9; }
          65% { opacity: 0.9; }
          100% { transform: translateY(100vh); opacity: 0; }
        }

        /* Content Animations */
        @keyframes content-slide-in-enhanced {
          from {
            opacity: 0;
            transform: translateX(-60px) translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0) translateY(0);
          }
        }

        @keyframes upload-slide-in-enhanced {
          from {
            opacity: 0;
            transform: translateX(60px) translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) translateY(0) scale(1);
          }
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 5px rgba(239, 68, 68, 0.3); }
          50% { box-shadow: 0 0 20px rgba(239, 68, 68, 0.6); }
        }

        @keyframes star-twinkle {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.2) rotate(180deg); }
        }

        @keyframes fade-in-up-delayed {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes buttons-slide-in {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes features-slide-in {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes feature-bounce-1 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @keyframes feature-bounce-2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @keyframes feature-bounce-3 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @keyframes upload-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }

        @keyframes upload-icon {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }

        @keyframes title-glow {
          0%, 100% { text-shadow: 0 0 5px rgba(255, 255, 255, 0.2); }
          50% { text-shadow: 0 0 15px rgba(255, 255, 255, 0.4); }
        }

        @keyframes button-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }

        @keyframes button-glow {
          0%, 100% { box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3); }
          50% { box-shadow: 0 8px 25px rgba(239, 68, 68, 0.5); }
        }

        @keyframes drag-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(239, 68, 68, 0.4); }
          50% { box-shadow: 0 0 40px rgba(239, 68, 68, 0.8); }
        }

        @keyframes progress-glow {
          0%, 100% { box-shadow: 0 0 10px rgba(239, 68, 68, 0.5); }
          50% { box-shadow: 0 0 20px rgba(239, 68, 68, 0.8); }
        }

        @keyframes file-types {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes file-type-bounce-1 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }

        @keyframes file-type-bounce-2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }

        @keyframes file-type-bounce-3 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }

        @keyframes file-type-bounce-4 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }

        /* Animation Classes */
        .animate-float-enhanced-1 { animation: float-enhanced-1 25s ease-in-out infinite; }
        .animate-float-enhanced-2 { animation: float-enhanced-2 30s ease-in-out infinite; }
        .animate-float-enhanced-3 { animation: float-enhanced-3 22s ease-in-out infinite; }
        .animate-float-enhanced-4 { animation: float-enhanced-4 28s ease-in-out infinite; }
        .animate-float-enhanced-5 { animation: float-enhanced-5 20s ease-in-out infinite; }
        .animate-float-enhanced-6 { animation: float-enhanced-6 35s ease-in-out infinite; }

        .animate-pulse-ring-1 { animation: pulse-ring-1 4s ease-in-out infinite; }
        .animate-pulse-ring-2 { animation: pulse-ring-2 5s ease-in-out infinite 1s; }
        .animate-pulse-ring-3 { animation: pulse-ring-3 6s ease-in-out infinite 2s; }

        .animate-particle-enhanced-1 { animation: particle-enhanced-1 15s ease-in-out infinite; }
        .animate-particle-enhanced-2 { animation: particle-enhanced-2 18s ease-in-out infinite; }
        .animate-particle-enhanced-3 { animation: particle-enhanced-3 12s ease-in-out infinite; }
        .animate-particle-enhanced-4 { animation: particle-enhanced-4 16s ease-in-out infinite; }
        .animate-particle-enhanced-5 { animation: particle-enhanced-5 20s ease-in-out infinite; }

        .animate-geometric-1 { animation: geometric-1 8s ease-in-out infinite; }
        .animate-geometric-2 { animation: geometric-2 10s ease-in-out infinite 2s; }
        .animate-geometric-3 { animation: geometric-3 12s ease-in-out infinite 4s; }

        .animate-line-enhanced-1 { animation: line-enhanced-1 6s linear infinite; }
        .animate-line-enhanced-2 { animation: line-enhanced-2 8s linear infinite 2s; }
        .animate-line-enhanced-3 { animation: line-enhanced-3 10s linear infinite 4s; }

        .animate-content-slide-in-enhanced { animation: content-slide-in-enhanced 1.2s ease-out; }
        .animate-upload-slide-in-enhanced { animation: upload-slide-in-enhanced 1.2s ease-out 0.4s both; }

        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .animate-star-twinkle { animation: star-twinkle 2s ease-in-out infinite; }
        .animate-fade-in-up-delayed { animation: fade-in-up-delayed 1s ease-out 0.8s both; }
        .animate-buttons-slide-in { animation: buttons-slide-in 1s ease-out 1.2s both; }
        .animate-features-slide-in { animation: features-slide-in 1s ease-out 1.6s both; }

        .animate-feature-bounce-1 { animation: feature-bounce-1 2s ease-in-out infinite; }
        .animate-feature-bounce-2 { animation: feature-bounce-2 2s ease-in-out infinite 0.5s; }
        .animate-feature-bounce-3 { animation: feature-bounce-3 2s ease-in-out infinite 1s; }

        .animate-upload-pulse { animation: upload-pulse 4s ease-in-out infinite; }
        .animate-upload-icon { animation: upload-icon 3s ease-in-out infinite; }
        .animate-title-glow { animation: title-glow 3s ease-in-out infinite; }
        .animate-button-float { animation: button-float 2s ease-in-out infinite; }
        .animate-button-glow { animation: button-glow 2s ease-in-out infinite; }
        .animate-drag-glow { animation: drag-glow 1s ease-in-out infinite; }
        .animate-progress-glow { animation: progress-glow 1s ease-in-out infinite; }

        .animate-file-types { animation: file-types 1s ease-out 2s both; }
        .animate-file-type-bounce-1 { animation: file-type-bounce-1 2s ease-in-out infinite; }
        .animate-file-type-bounce-2 { animation: file-type-bounce-2 2s ease-in-out infinite 0.3s; }
        .animate-file-type-bounce-3 { animation: file-type-bounce-3 2s ease-in-out infinite 0.6s; }
        .animate-file-type-bounce-4 { animation: file-type-bounce-4 2s ease-in-out infinite 0.9s; }

        /* Legacy animations for fallback */
        .animate-content-slide-in { animation: content-slide-in-enhanced 1s ease-out; }
        .animate-upload-slide-in { animation: upload-slide-in-enhanced 1s ease-out 0.3s both; }

        @media (max-width: 768px) {
          .animate-float-enhanced-1, .animate-float-enhanced-2, .animate-float-enhanced-3, .animate-float-enhanced-4, .animate-float-enhanced-5, .animate-float-enhanced-6 {
            animation-duration: 15s;
          }
          .animate-particle-enhanced-1, .animate-particle-enhanced-2, .animate-particle-enhanced-3, .animate-particle-enhanced-4, .animate-particle-enhanced-5 {
            animation-duration: 10s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}
