'use client';

import { useState } from 'react';

export default function KnowledgeBase() {
  const [activeCategory, setActiveCategory] = useState('getting-started');

  const categories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: 'ri-play-circle-line',
      count: 12,
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'conversion-guides',
      title: 'Conversion Guides',
      icon: 'ri-file-transfer-line',
      count: 25,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      icon: 'ri-tools-line',
      count: 18,
      color: 'from-red-500 to-pink-600'
    },
    {
      id: 'account-billing',
      title: 'Account & Billing',
      icon: 'ri-user-settings-line',
      count: 15,
      color: 'from-purple-500 to-violet-600'
    },
    {
      id: 'api-docs',
      title: 'API Documentation',
      icon: 'ri-code-line',
      count: 22,
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 'advanced-features',
      title: 'Advanced Features',
      icon: 'ri-settings-3-line',
      count: 14,
      color: 'from-teal-500 to-cyan-600'
    }
  ];

  const articles = {
    'getting-started': [
      { title: 'How to Convert Your First PDF', views: 2543, difficulty: 'Beginner', time: '3 min' },
      { title: 'Understanding File Formats', views: 1876, difficulty: 'Beginner', time: '5 min' },
      { title: 'Creating Your Account', views: 3421, difficulty: 'Beginner', time: '2 min' },
      { title: 'Navigation Overview', views: 1654, difficulty: 'Beginner', time: '4 min' }
    ],
    'conversion-guides': [
      { title: 'PDF to Word Conversion Guide', views: 4321, difficulty: 'Intermediate', time: '8 min' },
      { title: 'Excel to PDF Best Practices', views: 2876, difficulty: 'Intermediate', time: '6 min' },
      { title: 'Image to PDF Conversion', views: 3654, difficulty: 'Beginner', time: '4 min' },
      { title: 'Batch Processing Multiple Files', views: 2109, difficulty: 'Advanced', time: '10 min' }
    ],
    'troubleshooting': [
      { title: 'File Upload Issues', views: 1987, difficulty: 'Beginner', time: '3 min' },
      { title: 'Conversion Quality Problems', views: 1543, difficulty: 'Intermediate', time: '7 min' },
      { title: 'Browser Compatibility', views: 2321, difficulty: 'Beginner', time: '5 min' },
      { title: 'Download Problems', views: 1876, difficulty: 'Beginner', time: '4 min' }
    ],
    'account-billing': [
      { title: 'Subscription Plans Explained', views: 2654, difficulty: 'Beginner', time: '5 min' },
      { title: 'Payment Methods', views: 1432, difficulty: 'Beginner', time: '3 min' },
      { title: 'Managing Your Account', views: 2109, difficulty: 'Intermediate', time: '6 min' },
      { title: 'Cancellation Process', views: 987, difficulty: 'Beginner', time: '4 min' }
    ],
    'api-docs': [
      { title: 'API Authentication', views: 1543, difficulty: 'Advanced', time: '12 min' },
      { title: 'Endpoint Reference', views: 2876, difficulty: 'Advanced', time: '15 min' },
      { title: 'SDK Integration', views: 1321, difficulty: 'Advanced', time: '20 min' },
      { title: 'Error Handling', views: 1098, difficulty: 'Advanced', time: '8 min' }
    ],
    'advanced-features': [
      { title: 'Batch Processing Setup', views: 1876, difficulty: 'Advanced', time: '15 min' },
      { title: 'Custom Output Settings', views: 1432, difficulty: 'Intermediate', time: '10 min' },
      { title: 'Automation Workflows', views: 987, difficulty: 'Advanced', time: '18 min' },
      { title: 'Integration Options', views: 1234, difficulty: 'Advanced', time: '12 min' }
    ]
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-inter">
            Knowledge Base
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-inter">
            Comprehensive guides, tutorials, and documentation to help you make the most of our PDF tools
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`text-left p-6 rounded-xl border-2 transition-all cursor-pointer ${
                activeCategory === category.id
                  ? 'border-indigo-500 bg-indigo-50'
                  : 'border-gray-200 bg-white hover:border-indigo-300'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                  <i className={`${category.icon} text-white text-xl`}></i>
                </div>
                <div className="bg-gray-100 text-gray-600 text-sm px-2 py-1 rounded-full font-inter">
                  {category.count} articles
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-inter">
                {category.title}
              </h3>
            </button>
          ))}
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6">
            <h3 className="text-2xl font-bold mb-2 font-inter">
              {categories.find(c => c.id === activeCategory)?.title}
            </h3>
            <p className="text-indigo-100 font-inter">
              {articles[activeCategory as keyof typeof articles].length} helpful articles
            </p>
          </div>
          
          <div className="p-6">
            <div className="space-y-4">
              {articles[activeCategory as keyof typeof articles].map((article, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer group">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                      <i className="ri-file-text-line text-indigo-600"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors font-inter">
                        {article.title}
                      </h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                        <div className="flex items-center space-x-1">
                          <i className="ri-eye-line"></i>
                          <span className="font-inter">{article.views} views</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <i className="ri-time-line"></i>
                          <span className="font-inter">{article.time} read</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(article.difficulty)}`}>
                      {article.difficulty}
                    </span>
                    <i className="ri-arrow-right-line text-gray-400 group-hover:text-indigo-600 transition-colors"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}