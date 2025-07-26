
import ToolPage from './ToolPage';

export async function generateStaticParams() {
  return [
    { slug: 'pdf-to-word' },
    { slug: 'word-to-pdf' },
    { slug: 'pdf-merger' },
    { slug: 'pdf-splitter' },
    { slug: 'pdf-compressor' },
    { slug: 'pdf-protector' },
    { slug: 'pdf-to-excel' },
    { slug: 'excel-to-pdf' },
    { slug: 'pdf-to-images' },
    { slug: 'images-to-pdf' },
    { slug: 'pdf-editor' },
    { slug: 'pdf-organizer' },
    { slug: 'sign-pdf' },
    { slug: 'watermark' },
    { slug: 'rotate-pdf' },
    { slug: 'html-to-pdf' },
    { slug: 'unlock-pdf' },
    { slug: 'protect-pdf' },
    { slug: 'organize-pdf' },
    { slug: 'pdf-to-pdfa' },
    { slug: 'repair-pdf' },
    { slug: 'page-numbers' },
    { slug: 'scan-to-pdf' },
    { slug: 'ocr-pdf' },
    { slug: 'compare-pdf' },
    { slug: 'redact-pdf' },
    { slug: 'crop-pdf' },
    { slug: 'merge-pdf' },
    { slug: 'split-pdf' },
    { slug: 'compress-pdf' },
    { slug: 'pdf-to-powerpoint' },
    { slug: 'powerpoint-to-pdf' },
    { slug: 'edit-pdf' },
    { slug: 'pdf-to-jpg' },
    { slug: 'jpg-to-pdf' },
  ];
}

export default function Page({ params }: { params: { slug: string } }) {
  return <ToolPage slug={params.slug} />;
}
