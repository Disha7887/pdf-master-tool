
'use client';

import Link from 'next/link';

interface ToolCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
  iconBgColor: string;
  iconColor: string;
}

export default function ToolCard({ icon, title, description, href, iconBgColor, iconColor }: ToolCardProps) {

  return (
    <Link href={href} className="block h-full group w-full">
      <div className={`bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out p-6 sm:p-8 group-hover:scale-105 h-full cursor-pointer border border-gray-100 hover:ring-4 hover:ring-opacity-50 hover:ring-gray-300 w-full`}>
        <div className="text-center h-full flex flex-col w-full">
          <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 ${iconBgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ease-in-out border animate-pulse flex-shrink-0`}>
            <i className={`${icon} text-3xl sm:text-4xl ${iconColor}`}></i>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-gray-800 transition-colors duration-300 break-words">{title}</h3>
          <p className="text-gray-600 text-sm mb-6 sm:mb-8 leading-relaxed flex-grow font-medium break-words">{description}</p>
          <div className="w-full py-3 sm:py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-semibold group-hover:from-red-600 group-hover:to-red-700 transition-all duration-300 ease-in-out cursor-pointer whitespace-nowrap shadow-lg hover:shadow-xl transform hover:scale-105 flex-shrink-0">
            <i className="ri-upload-line mr-2"></i>
            Select Files
          </div>
        </div>
      </div>
    </Link>
  );
}
