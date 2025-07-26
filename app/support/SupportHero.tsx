'use client';

import { useState } from 'react';

export default function SupportHero() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Topics', icon: 'ri-apps-line' },
    { id: 'conversion', label: 'File Conversion', icon: 'ri-file-transfer-line' },
    { id: 'account', label: 'Account & Billing', icon: 'ri-user-settings-line' },
    { id: 'technical', label: 'Technical Issues', icon: 'ri-tools-line' },
    { id: 'api', label: 'API & Integration', icon: 'ri-code-line' }
  ];

  const quickActions = [
    { title: 'Live Chat', description: 'Get instant help', icon: 'ri-chat-3-line', color: 'bg-blue-500' },
    { title: 'Video Tutorials', description: 'Learn step by step', icon: 'ri-play-circle-line', color: 'bg-purple-500' },
    { title: 'Contact Support', description: 'Reach our team', icon: 'ri-customer-service-2-line', color: 'bg-green-500' },
    { title: 'System Status', description: 'Check service health', icon: 'ri-pulse-line', color: 'bg-orange-500' }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20help%20desk%20support%20center%20with%20friendly%20customer%20service%20representatives%20using%20headsets%20and%20computers%2C%20professional%20office%20environment%20with%20multiple%20screens%20showing%20support%20dashboards%2C%20bright%20lighting%2C%20contemporary%20workspace%20design%2C%20team%20collaboration%20atmosphere%2C%20technology%20support%20concept&width=1920&height=1080&seq=support-hero-bg&orientation=landscape')`
        }}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-6 font-inter">
            How Can We Help You?
          </h1>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto font-inter">
            Get instant answers, expert guidance, and comprehensive support for all your PDF conversion needs
          </p>
          
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <i className="ri-search-line text-gray-400 text-xl"></i>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for help articles, tutorials, or common issues..."
                className="w-full pl-12 pr-4 py-4 text-lg bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 font-inter"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'bg-white text-indigo-600 font-semibold'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <i className={`${category.icon} text-sm`}></i>
                <span className="font-inter">{category.label}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all cursor-pointer group">
              <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <i className={`${action.icon} text-white text-xl`}></i>
              </div>
              <h3 className="text-lg font-semibold mb-2 font-inter">{action.title}</h3>
              <p className="text-gray-200 text-sm font-inter">{action.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}