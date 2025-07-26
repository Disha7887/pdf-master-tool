
'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen font-inter relative bg-gray-900">
      {/* Animated Dark Background - Applied to entire page */}
      <div className="fixed inset-0 overflow-hidden">
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

      {/* Scroll Progress Indicator */}
      <div 
        className="fixed top-0 left-0 h-1 bg-red-500 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Header />
        
        <div id="hero" data-section className="scroll-section">
          <HeroSection />
        </div>
        
        <div id="gallery" data-section className="scroll-section">
          <GallerySection />
        </div>
        
        <div id="testimonials" data-section className="scroll-section">
          <TestimonialsSection />
        </div>
        
        <Footer />
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

        .scroll-section {
          position: relative;
          z-index: 1;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

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