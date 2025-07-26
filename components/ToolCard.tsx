
'use client';

import Link from 'next/link';

interface Tool {
  name: string;
  description: string;
  icon: string;
  slug: string;
  category: string;
  color: string;
}

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  // Define colorful icon styles based on tool color
  const getIconStyle = (color: string) => {
    switch (color) {
      case 'blue':
        return 'text-blue-500';
      case 'red':
        return 'text-red-500';
      case 'green':
        return 'text-green-500';
      case 'purple':
        return 'text-purple-500';
      case 'orange':
        return 'text-orange-500';
      case 'indigo':
        return 'text-indigo-500';
      case 'emerald':
        return 'text-emerald-500';
      case 'cyan':
        return 'text-cyan-500';
      case 'pink':
        return 'text-pink-500';
      case 'yellow':
        return 'text-yellow-500';
      case 'violet':
        return 'text-violet-500';
      case 'teal':
        return 'text-teal-500';
      default:
        return 'text-gray-500';
    }
  };

  const getBackgroundStyle = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-blue-50 border-blue-100';
      case 'red':
        return 'bg-red-50 border-red-100';
      case 'green':
        return 'bg-green-50 border-green-100';
      case 'purple':
        return 'bg-purple-50 border-purple-100';
      case 'orange':
        return 'bg-orange-50 border-orange-100';
      case 'indigo':
        return 'bg-indigo-50 border-indigo-100';
      case 'emerald':
        return 'bg-emerald-50 border-emerald-100';
      case 'cyan':
        return 'bg-cyan-50 border-cyan-100';
      case 'pink':
        return 'bg-pink-50 border-pink-100';
      case 'yellow':
        return 'bg-yellow-50 border-yellow-100';
      case 'violet':
        return 'bg-violet-50 border-violet-100';
      case 'teal':
        return 'bg-teal-50 border-teal-100';
      default:
        return 'bg-gray-50 border-gray-100';
    }
  };

  const getHoverRingStyle = (color: string) => {
    switch (color) {
      case 'blue':
        return 'hover:ring-blue-300';
      case 'red':
        return 'hover:ring-red-300';
      case 'green':
        return 'hover:ring-green-300';
      case 'purple':
        return 'hover:ring-purple-300';
      case 'orange':
        return 'hover:ring-orange-300';
      case 'indigo':
        return 'hover:ring-indigo-300';
      case 'emerald':
        return 'hover:ring-emerald-300';
      case 'cyan':
        return 'hover:ring-cyan-300';
      case 'pink':
        return 'hover:ring-pink-300';
      case 'yellow':
        return 'hover:ring-yellow-300';
      case 'violet':
        return 'hover:ring-violet-300';
      case 'teal':
        return 'hover:ring-teal-300';
      default:
        return 'hover:ring-gray-300';
    }
  };

  return (
    <Link href={`/tools/${tool.slug}`} className="block h-full group w-full">
      <div className={`bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out p-6 sm:p-8 group-hover:scale-105 h-full cursor-pointer border border-gray-100 hover:ring-4 hover:ring-opacity-50 ${getHoverRingStyle(tool.color)} w-full`}>
        <div className="text-center h-full flex flex-col w-full">
          <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 ${getBackgroundStyle(tool.color)} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ease-in-out border animate-pulse flex-shrink-0`}>
            <i className={`${tool.icon} text-3xl sm:text-4xl ${getIconStyle(tool.color)}`}></i>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-gray-800 transition-colors duration-300 break-words">{tool.name}</h3>
          <p className="text-gray-600 text-sm mb-6 sm:mb-8 leading-relaxed flex-grow font-medium break-words">{tool.description}</p>
          <div className="w-full py-3 sm:py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-semibold group-hover:from-red-600 group-hover:to-red-700 transition-all duration-300 ease-in-out cursor-pointer whitespace-nowrap shadow-lg hover:shadow-xl transform hover:scale-105 flex-shrink-0">
            <i className="ri-upload-line mr-2"></i>
            Select Files
          </div>
        </div>
      </div>
    </Link>
  );
}
