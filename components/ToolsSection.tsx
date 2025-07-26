
'use client';

import ToolCard from './ToolCard';

export default function ToolsSection() {
  const popularTools = [
    {
      icon: 'ri-file-word-fill',
      title: 'PDF to Word',
      description: 'Easily convert your PDF files into easy to edit DOC and DOCX documents.',
      href: '/tools/pdf-to-word',
      iconBgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: 'ri-file-word-fill',
      title: 'Word to PDF',
      description: 'Make DOC and DOCX files easy to read by converting them to PDF.',
      href: '/tools/word-to-pdf',
      iconBgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: 'ri-file-excel-fill',
      title: 'Excel to PDF',
      description: 'Make EXCEL spreadsheets easy to read by converting them to PDF.',
      href: '/tools/excel-to-pdf',
      iconBgColor: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      icon: 'ri-image-fill',
      title: 'JPG to PDF',
      description: 'Convert JPG images to PDF in seconds. Easily adjust orientation and margins.',
      href: '/tools/jpg-to-pdf',
      iconBgColor: 'bg-yellow-100',
      iconColor: 'text-yellow-600'
    }
  ];

  const allTools = [
    {
      icon: 'ri-file-copy-fill',
      title: 'Merge PDF',
      description: 'Combine PDFs in the order you want with the easiest PDF merger available.',
      href: '/tools/merge-pdf',
      iconBgColor: 'bg-red-100',
      iconColor: 'text-red-600'
    },
    {
      icon: 'ri-scissors-cut-fill',
      title: 'Split PDF',
      description: 'Separate one page or a whole set for easy conversion into independent PDF files.',
      href: '/tools/split-pdf',
      iconBgColor: 'bg-red-100',
      iconColor: 'text-red-600'
    },
    {
      icon: 'ri-file-reduce-fill',
      title: 'Compress PDF',
      description: 'Reduce file size while optimizing for maximal PDF quality.',
      href: '/tools/compress-pdf',
      iconBgColor: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      icon: 'ri-slideshow-fill',
      title: 'PDF to PowerPoint',
      description: 'Turn your PDF files into editable PowerPoint PPT and PPTX files.',
      href: '/tools/pdf-to-powerpoint',
      iconBgColor: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      icon: 'ri-file-excel-fill',
      title: 'PDF to Excel',
      description: 'Pull data straight from PDF into Excel spreadsheets in a few short seconds.',
      href: '/tools/pdf-to-excel',
      iconBgColor: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      icon: 'ri-slideshow-fill',
      title: 'PowerPoint to PDF',
      description: 'Make PPT and PPTX slideshows easy to view by converting them to PDF.',
      href: '/tools/powerpoint-to-pdf',
      iconBgColor: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      icon: 'ri-edit-box-fill',
      title: 'Edit PDF',
      description: 'Add text, images, shapes or freehand annotations to PDF files.',
      href: '/tools/edit-pdf',
      iconBgColor: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      icon: 'ri-image-fill',
      title: 'PDF to JPG',
      description: 'Convert each PDF page into a JPG or extract all images contained in a PDF.',
      href: '/tools/pdf-to-jpg',
      iconBgColor: 'bg-yellow-100',
      iconColor: 'text-yellow-600'
    },
    {
      icon: 'ri-contrast-drop-fill',
      title: 'Watermark',
      description: 'Stamp an image or text over your PDF in seconds. Choose the typography, transparency and position.',
      href: '/tools/watermark',
      iconBgColor: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      icon: 'ri-refresh-fill',
      title: 'Rotate PDF',
      description: 'Rotate your PDFs the way you need them. You can even rotate multiple PDFs at once!',
      href: '/tools/rotate-pdf',
      iconBgColor: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      icon: 'ri-code-box-fill',
      title: 'HTML to PDF',
      description: 'Convert webpages in HTML to PDF. Copy and paste the URL of the page you want and convert it to PDF with a click.',
      href: '/tools/html-to-pdf',
      iconBgColor: 'bg-yellow-100',
      iconColor: 'text-yellow-600'
    },
    {
      icon: 'ri-lock-unlock-fill',
      title: 'Unlock PDF',
      description: 'Remove PDF password security, giving you the freedom to use your PDFs as you want.',
      href: '/tools/unlock-pdf',
      iconBgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: 'ri-shield-check-fill',
      title: 'Protect PDF',
      description: 'Protect PDF files with a password. Encrypt PDF documents to prevent unauthorized access.',
      href: '/tools/protect-pdf',
      iconBgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: 'ri-file-transfer-fill',
      title: 'PDF to PDF/A',
      description: 'Transform your PDF to PDF/A, the ISO-standardized version of PDF for long-term archiving. Your PDF will preserve formatting when accessed in the future.',
      href: '/tools/pdf-to-pdfa',
      iconBgColor: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      icon: 'ri-tools-fill',
      title: 'Repair PDF',
      description: 'Repair a damaged PDF and recover data from corrupt PDF. Fix PDF files with our Repair tool.',
      href: '/tools/repair-pdf',
      iconBgColor: 'bg-red-100',
      iconColor: 'text-red-600'
    },
    {
      icon: 'ri-file-list-fill',
      title: 'Page numbers',
      description: 'Add page numbers into PDFs with ease. Choose your positions, dimensions, typography.',
      href: '/tools/page-numbers',
      iconBgColor: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      icon: 'ri-scan-fill',
      title: 'OCR PDF',
      description: 'Easily convert scanned PDF into searchable and selectable documents.',
      href: '/tools/ocr-pdf',
      iconBgColor: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      icon: 'ri-checkbox-circle-fill',
      title: 'Validate PDF/A',
      description: 'Verify that your documents meet PDF/A standards for long-term archiving.',
      href: '/tools/validate-pdfa',
      iconBgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: 'ri-file-zip-fill',
      title: 'Extract PDF',
      description: 'Extract images, text and other elements from your PDF documents.',
      href: '/tools/extract-pdf',
      iconBgColor: 'bg-orange-100',
      iconColor: 'text-orange-600'
    }
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Popular Conversion Tools
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {popularTools.map((tool, index) => (
            <ToolCard
              key={index}
              icon={tool.icon}
              title={tool.title}
              description={tool.description}
              href={tool.href}
              iconBgColor={tool.iconBgColor}
              iconColor={tool.iconColor}
            />
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            All PDF Tools
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allTools.map((tool, index) => (
            <ToolCard
              key={index}
              icon={tool.icon}
              title={tool.title}
              description={tool.description}
              href={tool.href}
              iconBgColor={tool.iconBgColor}
              iconColor={tool.iconColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
