
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 shadow-lg border-b border-gray-700 sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 w-full">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-white transition-all duration-200 ease-in-out hover:scale-105 whitespace-nowrap" style={{ fontFamily: 'Pacifico, serif' }}>
                PDF Convert Master
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            <Link href="/" className="text-gray-300 hover:text-red-400 transition-colors duration-200 ease-in-out font-medium whitespace-nowrap">
              Home
            </Link>
            <Link href="/tools" className="text-gray-300 hover:text-red-400 transition-colors duration-200 ease-in-out font-medium whitespace-nowrap">
              Tools
            </Link>
            <Link href="/pricing" className="text-gray-300 hover:text-red-400 transition-colors duration-200 ease-in-out font-medium whitespace-nowrap">
              Pricing
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-red-400 transition-colors duration-200 ease-in-out font-medium whitespace-nowrap">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-red-400 transition-colors duration-200 ease-in-out font-medium whitespace-nowrap">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-3 flex-shrink-0">
            <Link href="/auth?mode=signin" className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 ease-in-out font-medium whitespace-nowrap cursor-pointer border border-gray-600 rounded-lg hover:border-gray-500">
              Log In
            </Link>
            <Link href="/auth" className="px-6 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium whitespace-nowrap cursor-pointer shadow-lg">
              Get Started
            </Link>
          </div>

          <button
            className="md:hidden text-gray-300 hover:text-red-400 transition-colors duration-200 ease-in-out cursor-pointer flex-shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-700 py-4 w-full">
            <nav className="flex flex-col space-y-4 w-full">
              <Link href="/" className="text-gray-300 hover:text-red-400 transition-colors duration-200 ease-in-out font-medium px-2 py-1">
                Home
              </Link>
              <Link href="/tools" className="text-gray-300 hover:text-red-400 transition-colors duration-200 ease-in-out font-medium px-2 py-1">
                Tools
              </Link>
              <Link href="/pricing" className="text-gray-300 hover:text-red-400 transition-colors duration-200 ease-in-out font-medium px-2 py-1">
                Pricing
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-red-400 transition-colors duration-200 ease-in-out font-medium px-2 py-1">
                About
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-red-400 transition-colors duration-200 ease-in-out font-medium px-2 py-1">
                Contact
              </Link>
              <div className="pt-4 border-t border-gray-700 space-y-3 w-full">
                <Link href="/auth?mode=signin" className="block w-full text-center px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 ease-in-out font-medium border border-gray-600 rounded-lg hover:border-gray-500">
                  Log In
                </Link>
                <Link href="/auth" className="block w-full text-center px-6 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-200 ease-in-out transform hover:scale-105 font-medium shadow-lg">
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
