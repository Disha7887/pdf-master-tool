
'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ToolCard from '../../components/ToolCard';

const tools = [
  {
    name: 'PDF to Word',
    description: 'Convert PDF documents to editable Word files',
    icon: 'ri-file-word-line',
    color: 'blue',
    slug: 'pdf-to-word',
    category: 'convert'
  },
  {
    name: 'Word to PDF',
    description: 'Convert Word documents to PDF format',
    icon: 'ri-file-pdf-line',
    color: 'red',
    slug: 'word-to-pdf',
    category: 'convert'
  },
  {
    name: 'PDF Merger',
    description: 'Combine multiple PDF files into one',
    icon: 'ri-file-copy-line',
    color: 'green',
    slug: 'pdf-merger',
    category: 'organize'
  },
  {
    name: 'PDF Splitter',
    description: 'Split PDF into separate pages or sections',
    icon: 'ri-scissors-line',
    color: 'purple',
    slug: 'pdf-splitter',
    category: 'organize'
  },
  {
    name: 'PDF Compressor',
    description: 'Reduce PDF file size without quality loss',
    icon: 'ri-file-zip-line',
    color: 'orange',
    slug: 'pdf-compressor',
    category: 'edit'
  },
  {
    name: 'PDF Protector',
    description: 'Add password protection to PDF files',
    icon: 'ri-lock-line',
    color: 'indigo',
    slug: 'pdf-protector',
    category: 'security'
  },
  {
    name: 'PDF to Excel',
    description: 'Extract data from PDF to Excel spreadsheets',
    icon: 'ri-file-excel-line',
    color: 'emerald',
    slug: 'pdf-to-excel',
    category: 'convert'
  },
  {
    name: 'Excel to PDF',
    description: 'Convert Excel files to PDF format',
    icon: 'ri-file-line',
    color: 'cyan',
    slug: 'excel-to-pdf',
    category: 'convert'
  },
  {
    name: 'PDF to Images',
    description: 'Convert PDF pages to image files',
    icon: 'ri-image-line',
    color: 'pink',
    slug: 'pdf-to-images',
    category: 'convert'
  },
  {
    name: 'Images to PDF',
    description: 'Create PDF from multiple image files',
    icon: 'ri-file-image-line',
    color: 'yellow',
    slug: 'images-to-pdf',
    category: 'convert'
  },
  {
    name: 'PDF Editor',
    description: 'Edit text and images in PDF documents',
    icon: 'ri-edit-line',
    color: 'violet',
    slug: 'pdf-editor',
    category: 'edit'
  },
  {
    name: 'PDF Organizer',
    description: 'Reorder and organize PDF pages',
    icon: 'ri-file-list-line',
    color: 'teal',
    slug: 'pdf-organizer',
    category: 'organize'
  },
  {
    name: 'Sign PDF',
    description: 'Add yourself or request electronic signatures from others',
    icon: 'ri-edit-box-line',
    color: 'blue',
    slug: 'sign-pdf',
    category: 'edit'
  },
  {
    name: 'Watermark',
    description: 'Stamp an image or text over your PDF in seconds',
    icon: 'ri-drop-line',
    color: 'purple',
    slug: 'watermark',
    category: 'edit'
  },
  {
    name: 'Rotate PDF',
    description: 'Rotate your PDFs the way you need them',
    icon: 'ri-refresh-line',
    color: 'green',
    slug: 'rotate-pdf',
    category: 'edit'
  },
  {
    name: 'HTML to PDF',
    description: 'Convert webpages in HTML to PDF with a click',
    icon: 'ri-code-box-line',
    color: 'yellow',
    slug: 'html-to-pdf',
    category: 'convert'
  },
  {
    name: 'Unlock PDF',
    description: 'Remove PDF password security, giving you freedom to use your PDFs',
    icon: 'ri-lock-unlock-line',
    color: 'blue',
    slug: 'unlock-pdf',
    category: 'security'
  },
  {
    name: 'Protect PDF',
    description: 'Protect PDF files with a password to prevent unauthorized access',
    icon: 'ri-shield-check-line',
    color: 'indigo',
    slug: 'protect-pdf',
    category: 'security'
  },
  {
    name: 'Organize PDF',
    description: 'Sort pages of your PDF file however you like',
    icon: 'ri-file-list-3-line',
    color: 'orange',
    slug: 'organize-pdf',
    category: 'organize'
  },
  {
    name: 'PDF to PDF/A',
    description: 'Transform your PDF to PDF/A, the ISO-standardized version',
    icon: 'ri-file-transfer-line',
    color: 'teal',
    slug: 'pdf-to-pdfa',
    category: 'convert'
  },
  {
    name: 'Repair PDF',
    description: 'Repair a damaged PDF and recover data from corrupt PDF',
    icon: 'ri-tools-line',
    color: 'red',
    slug: 'repair-pdf',
    category: 'edit'
  },
  {
    name: 'Page Numbers',
    description: 'Add page numbers into PDFs with ease',
    icon: 'ri-hashtag',
    color: 'purple',
    slug: 'page-numbers',
    category: 'edit'
  },
  {
    name: 'Scan to PDF',
    description: 'Capture document scans from your mobile device',
    icon: 'ri-scan-line',
    color: 'orange',
    slug: 'scan-to-pdf',
    category: 'convert'
  },
  {
    name: 'OCR PDF',
    description: 'Easily convert scanned PDF into searchable and selectable documents',
    icon: 'ri-eye-line',
    color: 'green',
    slug: 'ocr-pdf',
    category: 'edit'
  },
  {
    name: 'Compare PDF',
    description: 'Show a side-by-side document comparison and easily spot changes',
    icon: 'ri-file-copy-2-line',
    color: 'blue',
    slug: 'compare-pdf',
    category: 'edit'
  },
  {
    name: 'Redact PDF',
    description: 'Redact text and graphics to permanently remove sensitive information',
    icon: 'ri-eraser-line',
    color: 'red',
    slug: 'redact-pdf',
    category: 'security'
  },
  {
    name: 'Crop PDF',
    description: 'Crop margins of PDF documents or select specific areas',
    icon: 'ri-crop-line',
    color: 'purple',
    slug: 'crop-pdf',
    category: 'edit'
  },
  {
    name: 'Merge PDF',
    description: 'Combine PDFs in the order you want with the easiest PDF merger available',
    icon: 'ri-file-copy-fill',
    color: 'red',
    slug: 'merge-pdf',
    category: 'organize'
  },
  {
    name: 'Split PDF',
    description: 'Separate one page or a whole set for easy conversion into independent PDF files',
    icon: 'ri-scissors-cut-line',
    color: 'red',
    slug: 'split-pdf',
    category: 'organize'
  },
  {
    name: 'Compress PDF',
    description: 'Reduce file size while optimizing for maximal PDF quality',
    icon: 'ri-file-reduce-line',
    color: 'green',
    slug: 'compress-pdf',
    category: 'edit'
  },
  {
    name: 'PDF to PowerPoint',
    description: 'Turn your PDF files into editable PowerPoint PPT and PPTX files',
    icon: 'ri-slideshow-line',
    color: 'orange',
    slug: 'pdf-to-powerpoint',
    category: 'convert'
  },
  {
    name: 'PowerPoint to PDF',
    description: 'Make PPT and PPTX slideshows easy to view by converting them to PDF',
    icon: 'ri-slideshow-line',
    color: 'orange',
    slug: 'powerpoint-to-pdf',
    category: 'convert'
  },
  {
    name: 'Edit PDF',
    description: 'Add text, images, shapes or freehand annotations to PDF files',
    icon: 'ri-edit-box-line',
    color: 'purple',
    slug: 'edit-pdf',
    category: 'edit'
  },
  {
    name: 'PDF to JPG',
    description: 'Convert each PDF page into a JPG or extract all images contained in a PDF',
    icon: 'ri-image-line',
    color: 'yellow',
    slug: 'pdf-to-jpg',
    category: 'convert'
  },
  {
    name: 'JPG to PDF',
    description: 'Convert JPG images to PDF in seconds. Easily adjust orientation and margins',
    icon: 'ri-image-line',
    color: 'yellow',
    slug: 'jpg-to-pdf',
    category: 'convert'
  }
];

const categories = [
  { name: 'All Tools', value: 'all' },
  { name: 'Convert', value: 'convert' },
  { name: 'Edit', value: 'edit' },
  { name: 'Organize', value: 'organize' },
  { name: 'Security', value: 'security' }
];

export default function ToolsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredTools = tools.filter(tool => {
    if (activeCategory === 'all') return true;
    return tool.category === activeCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-20">
        {/* Category Filter */}
        <div className="py-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setActiveCategory(category.value)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                    activeCategory === category.value
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="pb-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTools.map((tool, index) => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
