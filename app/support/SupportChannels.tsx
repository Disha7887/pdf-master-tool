'use client';

import { useState } from 'react';

export default function SupportChannels() {
  const [selectedChannel, setSelectedChannel] = useState('live-chat');

  const channels = [
    {
      id: 'live-chat',
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: 'ri-chat-3-line',
      availability: 'Available 24/7',
      responseTime: 'Instant',
      color: 'from-blue-500 to-blue-600',
      features: ['Real-time support', 'Screen sharing', 'File sharing', 'Ticket creation']
    },
    {
      id: 'email-support',
      title: 'Email Support',
      description: 'Send detailed inquiries and get comprehensive answers',
      icon: 'ri-mail-line',
      availability: 'Response within 1 hour',
      responseTime: '< 1 hour',
      color: 'from-green-500 to-green-600',
      features: ['Detailed responses', 'Attachments supported', 'Priority handling', 'Follow-up tracking']
    },
    {
      id: 'phone-support',
      title: 'Phone Support',
      description: 'Talk directly with our technical experts',
      icon: 'ri-phone-line',
      availability: 'Mon-Fri 9AM-6PM GMT',
      responseTime: 'Immediate',
      color: 'from-purple-500 to-purple-600',
      features: ['Direct communication', 'Complex issue resolution', 'Premium support', 'Callback option']
    },
    {
      id: 'video-call',
      title: 'Video Support',
      description: 'Face-to-face assistance for complex issues',
      icon: 'ri-video-line',
      availability: 'By appointment',
      responseTime: 'Scheduled',
      color: 'from-orange-500 to-orange-600',
      features: ['Screen sharing', 'Visual guidance', 'Training sessions', 'Premium feature']
    }
  ];

  const supportStats = [
    { label: 'Average Response Time', value: '< 30 sec', icon: 'ri-time-line' },
    { label: 'Customer Satisfaction', value: '98.5%', icon: 'ri-heart-line' },
    { label: 'Issues Resolved', value: '99.2%', icon: 'ri-check-line' },
    { label: 'Support Languages', value: '15+', icon: 'ri-global-line' }
  ];

  const activeChannel = channels.find(c => c.id === selectedChannel);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-inter">
            Multiple Ways to Get Help
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-inter">
            Choose the support channel that works best for you. Our expert team is ready to help through multiple channels
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {channels.map((channel) => (
            <button
              key={channel.id}
              onClick={() => setSelectedChannel(channel.id)}
              className={`text-left p-6 rounded-xl border-2 transition-all cursor-pointer ${
                selectedChannel === channel.id
                  ? 'border-indigo-500 bg-indigo-50 shadow-lg'
                  : 'border-gray-200 bg-white hover:border-indigo-300 hover:shadow-md'
              }`}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${channel.color} rounded-lg flex items-center justify-center mb-4`}>
                <i className={`${channel.icon} text-white text-xl`}></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-inter">
                {channel.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3 font-inter">
                {channel.description}
              </p>
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <i className="ri-time-line"></i>
                <span className="font-inter">{channel.responseTime}</span>
              </div>
            </button>
          ))}
        </div>
        
        {activeChannel && (
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${activeChannel.color} rounded-xl flex items-center justify-center`}>
                    <i className={`${activeChannel.icon} text-white text-2xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 font-inter">
                      {activeChannel.title}
                    </h3>
                    <p className="text-gray-600 font-inter">
                      {activeChannel.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <i className="ri-calendar-line text-indigo-600"></i>
                    <div>
                      <span className="font-semibold text-gray-900 font-inter">Availability: </span>
                      <span className="text-gray-600 font-inter">{activeChannel.availability}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="ri-time-line text-indigo-600"></i>
                    <div>
                      <span className="font-semibold text-gray-900 font-inter">Response Time: </span>
                      <span className="text-gray-600 font-inter">{activeChannel.responseTime}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 font-inter">Features:</h4>
                  <ul className="space-y-1">
                    {activeChannel.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-gray-600">
                        <i className="ri-check-line text-green-600 text-sm"></i>
                        <span className="font-inter">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 font-inter">
                  Start {activeChannel.title}
                </h4>
                
                {selectedChannel === 'live-chat' && (
                  <div className="space-y-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-green-800 font-semibold font-inter">Support team is online</span>
                      </div>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold whitespace-nowrap cursor-pointer font-inter">
                      Start Live Chat
                    </button>
                  </div>
                )}
                
                {selectedChannel === 'email-support' && (
                  <div className="space-y-4">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 font-inter"
                    />
                    <textarea
                      placeholder="Describe your issue..."
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none font-inter"
                    />
                    <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-semibold whitespace-nowrap cursor-pointer font-inter">
                      Send Email
                    </button>
                  </div>
                )}
                
                {selectedChannel === 'phone-support' && (
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2 font-inter">
                        +447429919748
                      </div>
                      <p className="text-gray-600 font-inter">Direct line to our technical team</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <button className="bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors font-semibold whitespace-nowrap cursor-pointer font-inter">
                        Call Now
                      </button>
                      <button className="border border-purple-600 text-purple-600 py-3 px-4 rounded-lg hover:bg-purple-50 transition-colors font-semibold whitespace-nowrap cursor-pointer font-inter">
                        Callback
                      </button>
                    </div>
                  </div>
                )}
                
                {selectedChannel === 'video-call' && (
                  <div className="space-y-4">
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                      <p className="text-orange-800 text-sm font-inter">
                        Video support available for premium users
                      </p>
                    </div>
                    <input
                      type="text"
                      placeholder="Preferred time slot"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 font-inter"
                    />
                    <button className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg hover:bg-orange-700 transition-colors font-semibold whitespace-nowrap cursor-pointer font-inter">
                      Schedule Video Call
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportStats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className={`${stat.icon} text-indigo-600 text-xl`}></i>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2 font-inter">
                {stat.value}
              </div>
              <div className="text-gray-600 font-inter">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}