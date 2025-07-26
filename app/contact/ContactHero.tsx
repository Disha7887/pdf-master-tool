'use client';

import { useState } from 'react';

export default function ContactHero() {
  const [activeTab, setActiveTab] = useState('support');

  const tabs = [
    { id: 'support', label: 'Technical Support', icon: 'ri-customer-service-2-line' },
    { id: 'business', label: 'Business Inquiry', icon: 'ri-briefcase-line' },
    { id: 'feedback', label: 'Feedback', icon: 'ri-feedback-line' },
    { id: 'partnership', label: 'Partnership', icon: 'ri-handshake-line' }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-red-600 via-orange-600 to-red-700 text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20professional%20office%20environment%20with%20customer%20service%20representatives%20working%20at%20computers%2C%20helping%20clients%20with%20technical%20support%2C%20bright%20office%20lighting%2C%20clean%20workspace%2C%20business%20communication%20concept%2C%20professional%20atmosphere%2C%20contemporary%20office%20design&width=1920&height=1080&seq=contact-hero-bg&orientation=landscape')`
        }}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold leading-tight font-inter">
                Get Expert Help & Support
              </h1>
              <p className="text-xl text-gray-100 leading-relaxed font-inter">
                Our dedicated team is here to assist you with any questions, technical issues, or business inquiries. Choose how you'd like to connect with us.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-orange-200 font-inter">24/7</div>
                <div className="text-sm text-gray-200 font-inter">Support Available</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-orange-200 font-inter">&lt;1hr</div>
                <div className="text-sm text-gray-200 font-inter">Response Time</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex flex-wrap gap-2 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-white text-red-600 font-semibold'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  <i className={`${tab.icon} text-sm`}></i>
                  <span className="text-sm font-inter">{tab.label}</span>
                </button>
              ))}
            </div>
            
            <div className="space-y-4">
              {activeTab === 'support' && (
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold font-inter">Technical Support</h3>
                  <p className="text-gray-200 text-sm font-inter">Having trouble with our tools? Get instant help from our technical team.</p>
                  <div className="flex items-center space-x-3 text-sm">
                    <i className="ri-time-line text-orange-200"></i>
                    <span className="text-gray-200 font-inter">Average response: 15 minutes</span>
                  </div>
                </div>
              )}
              
              {activeTab === 'business' && (
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold font-inter">Business Inquiry</h3>
                  <p className="text-gray-200 text-sm font-inter">Interested in enterprise solutions or custom integrations? Let's discuss your needs.</p>
                  <div className="flex items-center space-x-3 text-sm">
                    <i className="ri-time-line text-orange-200"></i>
                    <span className="text-gray-200 font-inter">Average response: 2 hours</span>
                  </div>
                </div>
              )}
              
              {activeTab === 'feedback' && (
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold font-inter">Feedback</h3>
                  <p className="text-gray-200 text-sm font-inter">Help us improve! Share your experience, suggestions, or report issues.</p>
                  <div className="flex items-center space-x-3 text-sm">
                    <i className="ri-time-line text-orange-200"></i>
                    <span className="text-gray-200 font-inter">Average response: 1 hour</span>
                  </div>
                </div>
              )}
              
              {activeTab === 'partnership' && (
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold font-inter">Partnership</h3>
                  <p className="text-gray-200 text-sm font-inter">Explore collaboration opportunities, API partnerships, or integration possibilities.</p>
                  <div className="flex items-center space-x-3 text-sm">
                    <i className="ri-time-line text-orange-200"></i>
                    <span className="text-gray-200 font-inter">Average response: 4 hours</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}