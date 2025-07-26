'use client';

import { useState } from 'react';

export default function TutorialSection() {
  const [selectedTutorial, setSelectedTutorial] = useState(0);

  const tutorials = [
    {
      title: 'Getting Started with PDF Conversion',
      description: 'Learn the basics of converting files to and from PDF format',
      duration: '5:30',
      difficulty: 'Beginner',
      views: 15420,
      thumbnail: 'https://readdy.ai/api/search-image?query=computer%20screen%20showing%20PDF%20conversion%20interface%20with%20drag%20and%20drop%20functionality%2C%20clean%20modern%20web%20application%20design%2C%20step%20by%20step%20tutorial%20visualization%2C%20user-friendly%20interface%20with%20clear%20buttons%20and%20progress%20indicators&width=400&height=225&seq=tutorial-1&orientation=landscape',
      steps: [
        'Upload your file using drag & drop',
        'Select output format',
        'Choose quality settings',
        'Click convert and download'
      ]
    },
    {
      title: 'Advanced PDF Editing Features',
      description: 'Master advanced editing tools and batch processing',
      duration: '8:45',
      difficulty: 'Intermediate',
      views: 8930,
      thumbnail: 'https://readdy.ai/api/search-image?query=advanced%20PDF%20editing%20software%20interface%20showing%20multiple%20editing%20tools%2C%20batch%20processing%20panel%2C%20file%20management%20system%2C%20professional%20document%20editing%20workspace%20with%20various%20formatting%20options&width=400&height=225&seq=tutorial-2&orientation=landscape',
      steps: [
        'Access advanced editing tools',
        'Use batch processing features',
        'Apply custom settings',
        'Save and export results'
      ]
    },
    {
      title: 'API Integration Guide',
      description: 'Integrate PDF tools into your applications',
      duration: '12:15',
      difficulty: 'Advanced',
      views: 4560,
      thumbnail: 'https://readdy.ai/api/search-image?query=developer%20workspace%20with%20code%20editor%20showing%20API%20integration%2C%20multiple%20monitors%20displaying%20documentation%20and%20code%20samples%2C%20modern%20programming%20environment%20with%20syntax%20highlighting%20and%20terminal%20windows&width=400&height=225&seq=tutorial-3&orientation=landscape',
      steps: [
        'Set up API credentials',
        'Make your first API call',
        'Handle responses and errors',
        'Implement in your application'
      ]
    },
    {
      title: 'Troubleshooting Common Issues',
      description: 'Resolve the most common problems quickly',
      duration: '6:20',
      difficulty: 'Beginner',
      views: 12340,
      thumbnail: 'https://readdy.ai/api/search-image?query=technical%20support%20specialist%20helping%20with%20computer%20troubleshooting%2C%20problem%20solving%20interface%20with%20diagnostic%20tools%2C%20step%20by%20step%20troubleshooting%20guide%20visualization%2C%20helpful%20support%20documentation&width=400&height=225&seq=tutorial-4&orientation=landscape',
      steps: [
        'Identify common error messages',
        'Check file compatibility',
        'Clear browser cache',
        'Contact support if needed'
      ]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-inter">
            Video Tutorials & Guides
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-inter">
            Step-by-step video tutorials to help you master our PDF tools and get the most out of our platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative">
                <img
                  src={tutorials[selectedTutorial].thumbnail}
                  alt={tutorials[selectedTutorial].title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <button className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all cursor-pointer">
                    <i className="ri-play-fill text-2xl text-indigo-600 ml-1"></i>
                  </button>
                </div>
                <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm font-inter">
                  {tutorials[selectedTutorial].duration}
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(tutorials[selectedTutorial].difficulty)}`}>
                    {tutorials[selectedTutorial].difficulty}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-inter">
                  {tutorials[selectedTutorial].title}
                </h3>
                <p className="text-gray-600 mb-4 font-inter">
                  {tutorials[selectedTutorial].description}
                </p>
                
                <div className="flex items-center space-x-4 mb-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <i className="ri-eye-line"></i>
                    <span className="font-inter">{tutorials[selectedTutorial].views.toLocaleString()} views</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <i className="ri-time-line"></i>
                    <span className="font-inter">{tutorials[selectedTutorial].duration}</span>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900 mb-3 font-inter">What you'll learn:</h4>
                  <ul className="space-y-2">
                    {tutorials[selectedTutorial].steps.map((step, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-indigo-600 text-sm font-semibold font-inter">{index + 1}</span>
                        </div>
                        <span className="text-gray-700 font-inter">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4 font-inter">
              More Tutorials
            </h3>
            
            {tutorials.map((tutorial, index) => (
              <button
                key={index}
                onClick={() => setSelectedTutorial(index)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all cursor-pointer ${
                  selectedTutorial === index
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-gray-200 bg-white hover:border-indigo-300'
                }`}
              >
                <div className="flex space-x-3">
                  <div className="relative flex-shrink-0">
                    <img
                      src={tutorial.thumbnail}
                      alt={tutorial.title}
                      className="w-20 h-12 object-cover rounded"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 rounded flex items-center justify-center">
                      <i className="ri-play-fill text-white text-sm"></i>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 text-sm mb-1 font-inter line-clamp-2">
                      {tutorial.title}
                    </h4>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <span className="font-inter">{tutorial.duration}</span>
                      <span className="font-inter">•</span>
                      <span className="font-inter">{tutorial.views.toLocaleString()} views</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
            
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white">
              <h4 className="text-lg font-bold mb-2 font-inter">
                Need Custom Training?
              </h4>
              <p className="text-indigo-100 text-sm mb-4 font-inter">
                Get personalized training sessions for your team
              </p>
              <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer font-inter">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}