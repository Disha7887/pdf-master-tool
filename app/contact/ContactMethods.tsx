'use client';

import { useState } from 'react';

export default function ContactMethods() {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyToClipboard = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const contactMethods = [
    {
      icon: 'ri-phone-fill',
      title: 'Phone Support',
      description: 'Call us directly for immediate assistance',
      value: '+447429919748',
      action: 'Call Now',
      actionHref: 'tel:+447429919748',
      availability: '24/7 Available',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: 'ri-mail-fill',
      title: 'Email Support',
      description: 'Send us an email for detailed inquiries',
      value: 'support@pdfconvertmaster.com',
      action: 'Send Email',
      actionHref: 'mailto:support@pdfconvertmaster.com',
      availability: 'Response within 1 hour',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: 'ri-message-3-fill',
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      value: 'Available on website',
      action: 'Start Chat',
      actionHref: '#',
      availability: 'Mon-Fri 9AM-6PM GMT',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: 'ri-whatsapp-fill',
      title: 'WhatsApp',
      description: 'Quick support via WhatsApp messaging',
      value: '+447429919748',
      action: 'Message Us',
      actionHref: 'https://wa.me/447429919748',
      availability: 'Quick response',
      color: 'from-green-600 to-green-700'
    }
  ];

  const socialLinks = [
    { icon: 'ri-twitter-fill', name: 'Twitter', url: 'https://twitter.com/pdfconvertmaster' },
    { icon: 'ri-facebook-fill', name: 'Facebook', url: 'https://facebook.com/pdfconvertmaster' },
    { icon: 'ri-linkedin-fill', name: 'LinkedIn', url: 'https://linkedin.com/company/pdfconvertmaster' },
    { icon: 'ri-instagram-line', name: 'Instagram', url: 'https://instagram.com/pdfconvertmaster' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-inter">
            Choose Your Preferred Contact Method
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-inter">
            We offer multiple ways to reach our support team. Pick the method that works best for you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className={`bg-gradient-to-r ${method.color} p-6 text-white`}>
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <i className={`${method.icon} text-2xl`}></i>
                </div>
                <h3 className="text-lg font-bold mb-2 font-inter">{method.title}</h3>
                <p className="text-sm text-white/90 font-inter">{method.description}</p>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600 font-inter">Contact Info:</span>
                    {(method.title === 'Phone Support' || method.title === 'WhatsApp') && (
                      <button
                        onClick={() => copyToClipboard(method.value, 'phone')}
                        className="text-xs text-blue-600 hover:text-blue-800 cursor-pointer font-inter"
                      >
                        {copiedPhone ? 'Copied!' : 'Copy'}
                      </button>
                    )}
                    {method.title === 'Email Support' && (
                      <button
                        onClick={() => copyToClipboard(method.value, 'email')}
                        className="text-xs text-blue-600 hover:text-blue-800 cursor-pointer font-inter"
                      >
                        {copiedEmail ? 'Copied!' : 'Copy'}
                      </button>
                    )}
                  </div>
                  <p className="text-sm font-medium text-gray-900 font-inter">{method.value}</p>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <i className="ri-time-line"></i>
                    <span className="font-inter">{method.availability}</span>
                  </div>
                </div>
                
                <a
                  href={method.actionHref}
                  className={`w-full bg-gradient-to-r ${method.color} text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity text-center block font-semibold whitespace-nowrap cursor-pointer font-inter`}
                >
                  {method.action}
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 font-inter">
            Follow Us on Social Media
          </h3>
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors cursor-pointer group"
              >
                <i className={`${social.icon} text-xl text-gray-600 group-hover:text-white`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}