
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert('Thank you for subscribing!');
      setEmail('');
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-700 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          <div className="space-y-4 w-full">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-white transition-all duration-200 ease-in-out hover:scale-105 whitespace-nowrap" style={{ fontFamily: 'Pacifico, serif' }}>
                PDF Convert Master
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner for professional PDF conversion and document management solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-red-400 transition-colors duration-200 ease-in-out transform hover:scale-110 cursor-pointer">
                <i className="ri-facebook-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-red-400 transition-colors duration-200 ease-in-out transform hover:scale-110 cursor-pointer">
                <i className="ri-twitter-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-red-400 transition-colors duration-200 ease-in-out transform hover:scale-110 cursor-pointer">
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-red-400 transition-colors duration-200 ease-in-out transform hover:scale-110 cursor-pointer">
                <i className="ri-instagram-fill text-xl"></i>
              </a>
            </div>
          </div>

          <div className="w-full">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 w-full">
              <li>
                <Link href="/tools" className="text-gray-400 hover:text-red-400 transition-colors duration-200 ease-in-out text-sm cursor-pointer flex items-center">
                  <i className="ri-tools-line mr-2 flex-shrink-0"></i>
                  <span>PDF Tools</span>
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-red-400 transition-colors duration-200 ease-in-out text-sm cursor-pointer flex items-center">
                  <i className="ri-price-tag-3-line mr-2 flex-shrink-0"></i>
                  <span>Pricing</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-red-400 transition-colors duration-200 ease-in-out text-sm cursor-pointer flex items-center">
                  <i className="ri-information-line mr-2 flex-shrink-0"></i>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-400 hover:text-red-400 transition-colors duration-200 ease-in-out text-sm cursor-pointer flex items-center">
                  <i className="ri-customer-service-line mr-2 flex-shrink-0"></i>
                  <span>Support</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-red-400 transition-colors duration-200 ease-in-out text-sm cursor-pointer flex items-center">
                  <i className="ri-contact-book-line mr-2 flex-shrink-0"></i>
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full">
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 w-full">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-red-400 transition-colors duration-200 ease-in-out text-sm flex items-center">
                  <i className="ri-shield-check-line mr-2 flex-shrink-0"></i>
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-red-400 transition-colors duration-200 ease-in-out text-sm flex items-center">
                  <i className="ri-file-text-line mr-2 flex-shrink-0"></i>
                  <span>Terms of Service</span>
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200 ease-in-out text-sm cursor-pointer flex items-center">
                  <i className="ri-customer-service-line mr-2 flex-shrink-0"></i>
                  <span>Support</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200 ease-in-out text-sm cursor-pointer flex items-center">
                  <i className="ri-bug-line mr-2 flex-shrink-0"></i>
                  <span>Report Bug</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full">
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Stay updated with our latest features and news.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3 w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm text-white placeholder-gray-400 transition-all duration-200 ease-in-out"
                required
              />
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium text-sm whitespace-nowrap cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 w-full">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 w-full">
            <div className="text-gray-400 text-sm text-center lg:text-left">
              2024 PDF Convert Master by Mizan Store Ltd. All rights reserved.
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <i className="ri-phone-line text-orange-400 flex-shrink-0"></i>
                <span>+447429919748</span>
              </div>
              <div className="flex flex-wrap items-center justify-center space-x-4 gap-y-1">
                <div className="flex items-center space-x-1">
                  <i className="ri-shield-check-line text-green-400 flex-shrink-0"></i>
                  <span className="whitespace-nowrap">SSL Secured</span>
                </div>
                <div className="flex items-center space-x-1">
                  <i className="ri-cloud-line text-blue-400 flex-shrink-0"></i>
                  <span className="whitespace-nowrap">Cloud Processing</span>
                </div>
                <div className="flex items-center space-x-1">
                  <i className="ri-lock-line text-red-400 flex-shrink-0"></i>
                  <span className="whitespace-nowrap">Privacy Protected</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
