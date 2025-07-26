// Utility function to download files from URLs
export async function downloadFile(url: string, filename?: string) {
  try {
    // Fetch the file
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Failed to download file: ${response.statusText}`);
    }

    // Get the file blob
    const blob = await response.blob();
    
    // Create a download link
    const downloadUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    
    // Set filename
    if (filename) {
      link.download = filename;
    } else {
      // Extract filename from URL or use default
      const urlParts = url.split('/');
      const urlFilename = urlParts[urlParts.length - 1];
      link.download = urlFilename || 'converted-file.pdf';
    }
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    
    // Cleanup
    document.body.removeChild(link);
    window.URL.revokeObjectURL(downloadUrl);
    
    return true;
  } catch (error) {
    console.error('Download failed:', error);
    throw error;
  }
}

// Function to get appropriate filename based on tool type
export function getDownloadFilename(originalFilename: string, toolType: string): string {
  const nameWithoutExt = originalFilename.replace(/\.[^/.]+$/, '');
  
  switch (toolType) {
    case 'pdf-to-word':
      return `${nameWithoutExt}.docx`;
    case 'word-to-pdf':
      return `${nameWithoutExt}.pdf`;
    case 'pdf-merger':
      return `merged-${nameWithoutExt}.pdf`;
    case 'pdf-splitter':
      return `split-${nameWithoutExt}.pdf`;
    case 'pdf-compressor':
      return `compressed-${nameWithoutExt}.pdf`;
    case 'pdf-protector':
      return `protected-${nameWithoutExt}.pdf`;
    case 'pdf-to-excel':
      return `${nameWithoutExt}.xlsx`;
    case 'excel-to-pdf':
      return `${nameWithoutExt}.pdf`;
    case 'pdf-to-images':
      return `${nameWithoutExt}.zip`;
    case 'images-to-pdf':
      return `${nameWithoutExt}.pdf`;
    default:
      return `${nameWithoutExt}-converted.pdf`;
  }
} 