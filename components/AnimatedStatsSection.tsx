
'use client';

import { useState, useEffect } from 'react';

export default function AnimatedStatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0]);

  const stats = [
    {
      icon: 'ri-user-line',
      value: 10000000,
      label: 'Active Users',
      suffix: 'M+',
      color: 'text-blue-500'
    },
    {
      icon: 'ri-file-line',
      value: 500000000,
      label: 'Files Processed',
      suffix: 'M+',
      color: 'text-green-500'
    },
    {
      icon: 'ri-star-line',
      value: 99,
      label: 'Success Rate',
      suffix: '%',
      color: 'text-yellow-500'
    },
    {
      icon: 'ri-time-line',
      value: 5,
      label: 'Avg Processing Time',
      suffix: 'sec',
      color: 'text-purple-500'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        const increment = stat.value / 100;
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(timer);
          }
          
          setAnimatedStats(prev => {
            const newStats = [...prev];
            newStats[index] = current;
            return newStats;
          });
        }, 20);
      });
    }
  }, [isVisible]);

  const formatNumber = (num: number, index: number) => {
    if (index === 0) return Math.floor(num / 1000000); // Users in millions
    if (index === 1) return Math.floor(num / 1000000); // Files in millions
    return Math.floor(num); // Others as is
  };

  return (
    <div id="stats-section" className="bg-gradient-to-r from-red-500 to-orange-500 py-16 sm:py-20 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center text-white transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              } w-full`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ease-in-out backdrop-blur-sm">
                <i className={`${stat.icon} text-2xl sm:text-3xl text-white`}></i>
              </div>
              
              <div className="text-3xl sm:text-4xl font-bold mb-2">
                {formatNumber(animatedStats[index], index)}
                <span className="text-xl sm:text-2xl ml-1">{stat.suffix}</span>
              </div>
              
              <div className="text-base sm:text-lg text-white/90 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
