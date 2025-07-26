
'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface ToolPageProps {
  slug: string;
}

const toolConfig: { [key: string]: { title: string; description: string; icon: string; acceptedFiles: string; dropText: string; category: string; color: string; } } = {
  'pdf-to-word': {
    title: 'PDF to Word',
    description: 'Convert PDF documents to editable Word files',
    icon: 'ri-file-word-line',
    acceptedFiles: '.pdf',
    dropText: 'Drop your PDF here',
    category: 'convert',
    color: 'blue'
  },
  'word-to-pdf': {
    title: 'Word to PDF',
    description: 'Convert Word documents to PDF format',
    icon: 'ri-file-pdf-line',
    acceptedFiles: '.doc,.docx',
    dropText: 'Drop your Word file here',
    category: 'convert',
    color: 'red'
  },
  'excel-to-pdf': {
    title: 'Excel to PDF',
    description: 'Convert Excel spreadsheets to PDF',
    icon: 'ri-file-excel-line',
    acceptedFiles: '.xls,.xlsx',
    dropText: 'Drop your Excel file here',
    category: 'convert',
    color: 'emerald'
  },
  'jpg-to-pdf': {
    title: 'JPG to PDF',
    description: 'Convert JPG images to PDF',
    icon: 'ri-image-line',
    acceptedFiles: '.jpg,.jpeg',
    dropText: 'Drop your JPG image here',
    category: 'convert',
    color: 'yellow'
  },
  'merge-pdf': {
    title: 'Merge PDF',
    description: 'Combine PDFs in the order you want with the easiest PDF merger available',
    icon: 'ri-file-copy-fill',
    acceptedFiles: '.pdf',
    dropText: 'Drop your PDF files here',
    category: 'organize',
    color: 'red'
  },
  'split-pdf': {
    title: 'Split PDF',
    description: 'Separate one page or a whole set for easy conversion into independent PDF files',
    icon: 'ri-scissors-cut-line',
    acceptedFiles: '.pdf',
    dropText: 'Drop your PDF here',
    category: 'organize',
    color: 'red'
  },
  'compress-pdf': {
    title: 'Compress PDF',
    description: 'Reduce file size while optimizing for maximal PDF quality',
    icon: 'ri-file-reduce-line',
    acceptedFiles: '.pdf',
    dropText: 'Drop your PDF here',
    category: 'edit',
    color: 'green'
  },
  'pdf-to-powerpoint': {
    title: 'PDF to PowerPoint',
    description: 'Turn your PDF files into editable PowerPoint PPT and PPTX files',
    icon: 'ri-slideshow-line',
    acceptedFiles: '.pdf',
    dropText: 'Drop your PDF here',
    category: 'convert',
    color: 'orange'
  },
  'pdf-to-excel': {
    title: 'PDF to Excel',
    description: 'Extract data from PDF to Excel spreadsheets',
    icon: 'ri-file-excel-line',
    acceptedFiles: '.pdf',
    dropText: 'Drop your PDF here',
    category: 'convert',
    color: 'emerald'
  },
  'powerpoint-to-pdf': {
    title: 'PowerPoint to PDF',
    description: 'Make PPT and PPTX slideshows easy to view by converting them to PDF',
    icon: 'ri-slideshow-line',
    acceptedFiles: '.ppt,.pptx',
    dropText: 'Drop your PowerPoint file here',
    category: 'convert',
    color: 'orange'
  },
  'edit-pdf': {
    title: 'Edit PDF',
    description: 'Add text, images, shapes or freehand annotations to PDF files',
    icon: 'ri-edit-box-line',
    acceptedFiles: '.pdf',
    dropText: 'Drop your PDF here',
    category: 'edit',
    color: 'purple'
  },
  'pdf-to-jpg': {
    title: 'PDF to JPG',
    description: 'Convert each PDF page into a JPG or extract all images contained in a PDF',
    icon: 'ri-image-line',
    acceptedFiles: '.pdf',
    dropText: 'Drop your PDF here',
    category: 'convert',
    color: 'yellow'
  },
  'sign-pdf': {
    title: 'Sign PDF',
    description: 'Add yourself or request electronic signatures from others',
    icon: 'ri-edit-box-line',
    acceptedFiles: '.pdf',
    dropText: 'Drop your PDF here',
    category: 'edit',
    color: 'blue'
  },
  'watermark': {
    title: 'Watermark PDF',
    description: 'Stamp an image or text over your PDF in seconds',
    icon: 'ri-drop-line',
    acceptedFiles: '.pdf',
    dropText: 'Drop your PDF here',
    category: 'edit',
    color: 'purple'
  },
  'rotate-pdf': {
    title: 'Rotate PDF',
    description: 'Rotate your PDFs the way you need them',
    icon: 'ri-refresh-line',
    acceptedFiles: '.pdf',
    dropText: 'Drop your PDF here',
    category: 'edit',
    color: 'green'
  },
  'html-to-pdf': {
    title: 'HTML to PDF',
    description: 'Convert webpages in HTML to PDF with a click',
    icon: 'ri-code-box-line',
    acceptedFiles: '.html',
    dropText: 'Drop your HTML file here',
    category: 'convert',
    color: 'yellow'
  },
  'unlock-pdf': {
    title: 'Unlock PDF',
    description: 'Remove PDF password security, giving you freedom to use your PDFs',
    icon: 'ri-lock-unlock-line',
    acceptedFiles: '.pdf',
    dropText: 'Drop your protected PDF here',
    category: 'security',
    color: 'blue'
  },
  'protect-pdf': {
    title: 'Protect PDF',
    description: 'Protect PDF files with a password to prevent unauthorized access',
    icon: 'ri-shield-check-line',
    acceptedFiles: '.pdf',
    dropText: 'Drop your PDF here',
    category: 'security',
    color: 'indigo'
  },
  'organize-pdf': {
    title: 'Organize PDF',
    description: 'Sort pages of your PDF file however you like',
    icon: 'ri-file-list-3-line',
    acceptedFiles: '.pdf',
    dropText: 'Drop your PDF here',
    category: 'organize',
    color: 'orange'
  },
  'pdf-to-pdfa': {
    title: 'PDF to PDF/A',
    description: 'Transform your PDF to PDF/A, the ISO-standardized version',
    icon: 'ri-file-transfer-line',
    acceptedFiles: '.pdf',
    dropText: 'Drop your PDF here',
    category: 'convert',
    color: 'teal'
  },
  'repair-pdf': {
    title: 'Repair PDF',
    description: 'Repair a damaged PDF and recover data from corrupt PDF',
    icon: 'ri-tools-line',
    acceptedFiles: '.pdf',
    dropText: 'Drop your corrupted PDF here',
    category: 'edit',
    color: 'red'
  },
  'page-numbers': {
    title: 'Add Page Numbers',
    description: 'Add page numbers into PDFs with ease',
    icon: 'ri-hashtag',
    acceptedFiles: '.pdf',
    dropText: 'Drop your PDF here',
    category: 'edit',
    color: 'purple'
  },
  'scan-to-pdf': {
    title: 'Scan to PDF',
    description: 'Capture document scans from your mobile device',
    icon: 'ri-scan-line',
    acceptedFiles: '.jpg,.jpeg,.png',
    dropText: 'Drop your scanned images here',
    category: 'convert',
    color: 'orange'
  },
  'ocr-pdf': {
    title: 'OCR PDF',
    description: 'Easily convert scanned PDF into searchable and selectable documents',
    icon: 'ri-eye-line',
    acceptedFiles: '.pdf',
    dropText: 'Drop your scanned PDF here',
    category: 'edit',
    color: 'green'
  },
  'compare-pdf': {
    title: 'Compare PDF',
    description: 'Show a side-by-side document comparison and easily spot changes',
    icon: 'ri-file-copy-2-line',
    acceptedFiles: '.pdf',
    dropText: 'Drop your PDF files here',
    category: 'edit',
    color: 'blue'
  },
  'redact-pdf': {
    title: 'Redact PDF',
    description: 'Redact text and graphics to permanently remove sensitive information',
    icon: 'ri-eraser-line',
    acceptedFiles: '.pdf',
    dropText: 'Drop your PDF here',
    category: 'security',
    color: 'red'
  },
  'crop-pdf': {
    title: 'Crop PDF',
    description: 'Crop margins of PDF documents or select specific areas',
    icon: 'ri-crop-line',
    acceptedFiles: '.pdf',
    dropText: 'Drop your PDF here',
    category: 'edit',
    color: 'purple'
  }
};

export default function ToolPage({ slug }: ToolPageProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const tool = toolConfig[slug];

  if (!tool) {
    return <div>Tool not found</div>;
  }

  const getIconColor = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'text-blue-500',
      red: 'text-red-500',
      green: 'text-green-500',
      purple: 'text-purple-500',
      orange: 'text-orange-500',
      indigo: 'text-indigo-500',
      emerald: 'text-emerald-500',
      cyan: 'text-cyan-500',
      pink: 'text-pink-500',
      yellow: 'text-yellow-500',
      violet: 'text-violet-500',
      teal: 'text-teal-500'
    };
    return colorMap[color] || 'text-gray-500';
  };

  const getIconBackground = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'bg-blue-50 border-blue-100',
      red: 'bg-red-50 border-red-100',
      green: 'bg-green-50 border-green-100',
      purple: 'bg-purple-50 border-purple-100',
      orange: 'bg-orange-50 border-orange-100',
      indigo: 'bg-indigo-50 border-indigo-100',
      emerald: 'bg-emerald-50 border-emerald-100',
      cyan: 'bg-cyan-50 border-cyan-100',
      pink: 'bg-pink-50 border-pink-100',
      yellow: 'bg-yellow-50 border-yellow-100',
      violet: 'bg-violet-50 border-violet-100',
      teal: 'bg-teal-50 border-teal-100'
    };
    return colorMap[color] || 'bg-gray-50 border-gray-100';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileUpload = (file: File) => {
    setIsUploading(true);
    setUploadProgress(0);
    setIsCompleted(false);

    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          setIsCompleted(true);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />

      <div className="pt-24 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className={`w-24 h-24 mx-auto mb-8 ${getIconBackground(tool.color)} rounded-3xl flex items-center justify-center border-2 shadow-lg`}>
              <i className={`${tool.icon} ${getIconColor(tool.color)} text-4xl`}></i>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {tool.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {tool.description}
            </p>
          </div>

          {/* Upload Section */}
          <div className="max-w-3xl mx-auto">
            <div 
              className={`relative border-2 border-dashed rounded-3xl p-16 text-center transition-all duration-300 shadow-xl ${
                isDragging 
                  ? 'border-red-400 bg-red-50 ring-4 ring-red-100' 
                  : 'border-gray-300 bg-white hover:border-red-300 hover:bg-red-50/30'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {/* Upload Icon */}
              <div className="w-20 h-20 mx-auto mb-8 bg-red-100 rounded-full flex items-center justify-center">
                <i className="ri-upload-cloud-2-line text-red-500 text-3xl"></i>
              </div>

              {/* Drop Text */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {tool.dropText}
              </h3>
              <p className="text-gray-500 mb-8 text-lg">
                or click to browse files
              </p>

              {/* File Input */}
              <input
                type="file"
                accept={tool.acceptedFiles}
                onChange={handleFileSelect}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="inline-block px-10 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 cursor-pointer whitespace-nowrap shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Select PDF File
              </label>

              {/* Progress Bar */}
              {isUploading && (
                <div className="mt-8">
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                    <div 
                      className="bg-gradient-to-r from-red-500 to-red-600 h-3 rounded-full transition-all duration-300"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                  <p className="text-gray-600 font-medium">
                    Processing... {uploadProgress}%
                  </p>
                </div>
              )}

              {/* Success Message */}
              {isCompleted && (
                <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-2xl">
                  <div className="flex items-center justify-center mb-4">
                    <i className="ri-check-line text-green-500 text-3xl"></i>
                  </div>
                  <p className="text-green-800 font-semibold text-lg">
                    Processing completed successfully!
                  </p>
                  <button className="mt-4 px-8 py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors whitespace-nowrap">
                    Download Result
                  </button>
                </div>
              )}
            </div>

            {/* Features Section */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="ri-shield-check-line text-blue-500 text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Processing</h3>
                <p className="text-gray-600 text-sm">Your files are processed securely and deleted after conversion</p>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <i className="ri-speed-line text-green-500 text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Conversion</h3>
                <p className="text-gray-600 text-sm">Lightning-fast processing with high-quality results</p>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                  <i className="ri-download-cloud-line text-purple-500 text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy Download</h3>
                <p className="text-gray-600 text-sm">Download your converted files instantly after processing</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
