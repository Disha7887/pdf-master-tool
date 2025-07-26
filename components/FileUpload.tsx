'use client';

import { useState, useRef } from 'react';
import { supabase } from '../lib/supabase';
import { downloadFile, getDownloadFilename } from '../lib/download';

interface FileUploadProps {
  toolType: string;
  onConversionComplete?: (downloadUrl: string) => void;
  onError?: (error: string) => void;
}

export default function FileUpload({ toolType, onConversionComplete, onError }: FileUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [isConverting, setIsConverting] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [originalFilename, setOriginalFilename] = useState<string>('');
  const [progress, setProgress] = useState(0);
  const [jobId, setJobId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type based on tool
    const allowedTypes = getAllowedFileTypes(toolType);
    if (!allowedTypes.includes(file.type)) {
      onError?.(`Please select a valid file type. Allowed: ${allowedTypes.join(', ')}`);
      return;
    }

    // Validate file size (max 50MB)
    if (file.size > 50 * 1024 * 1024) {
      onError?.('File size must be less than 50MB');
      return;
    }

    setOriginalFilename(file.name);
    await uploadAndConvert(file);
  };

  const getAllowedFileTypes = (tool: string): string[] => {
    switch (tool) {
      case 'pdf-to-word':
        return ['application/pdf'];
      case 'word-to-pdf':
        return ['application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/msword'];
      case 'pdf-merger':
      case 'pdf-splitter':
      case 'pdf-compressor':
      case 'pdf-protector':
        return ['application/pdf'];
      case 'pdf-to-excel':
        return ['application/pdf'];
      case 'excel-to-pdf':
        return ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'];
      case 'pdf-to-images':
        return ['application/pdf'];
      case 'images-to-pdf':
        return ['image/jpeg', 'image/png', 'image/gif', 'image/bmp'];
      default:
        return ['application/pdf'];
    }
  };

  const uploadAndConvert = async (file: File) => {
    setIsUploading(true);
    setProgress(0);

    try {
      // Get current user (you'll need to implement authentication)
      const { data: { user } } = await supabase.auth.getUser();
      const userId = user?.id || 'anonymous';

      const formData = new FormData();
      formData.append('file', file);
      formData.append('toolType', toolType);
      formData.append('userId', userId);

      // Start conversion
      const response = await fetch('/api/convert', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Conversion failed');
      }

      const result = await response.json();
      setJobId(result.jobId);
      setIsUploading(false);
      setIsConverting(true);

      // Poll for completion
      await pollConversionStatus(result.jobId);

    } catch (error) {
      setIsUploading(false);
      setIsConverting(false);
      onError?.(error instanceof Error ? error.message : 'Upload failed');
    }
  };

  const pollConversionStatus = async (jobId: string) => {
    const maxAttempts = 60; // 5 minutes with 5-second intervals
    let attempts = 0;

    const poll = async () => {
      try {
        const response = await fetch(`/api/convert?jobId=${jobId}`);
        const { job } = await response.json();

        if (job.status === 'completed') {
          setIsConverting(false);
          setProgress(100);
          setDownloadUrl(job.output_file_url);
          onConversionComplete?.(job.output_file_url);
          return;
        } else if (job.status === 'failed') {
          setIsConverting(false);
          onError?.(job.error_message || 'Conversion failed');
          return;
        }

        attempts++;
        if (attempts < maxAttempts) {
          setProgress((attempts / maxAttempts) * 100);
          setTimeout(poll, 5000); // Poll every 5 seconds
        } else {
          setIsConverting(false);
          onError?.('Conversion timed out');
        }
      } catch (error) {
        setIsConverting(false);
        onError?.('Failed to check conversion status');
      }
    };

    poll();
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      const input = fileInputRef.current;
      if (input) {
        input.files = files;
        input.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  const handleDownload = async () => {
    if (!downloadUrl) return;
    
    setIsDownloading(true);
    try {
      const filename = getDownloadFilename(originalFilename, toolType);
      await downloadFile(downloadUrl, filename);
    } catch (error) {
      onError?.(error instanceof Error ? error.message : 'Download failed');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 ${
          isUploading || isConverting
            ? 'border-blue-500 bg-blue-50'
            : 'border-gray-300 hover:border-red-400 hover:bg-gray-50'
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileSelect}
          accept={getAllowedFileTypes(toolType).join(',')}
          className="hidden"
          disabled={isUploading || isConverting}
        />

        {!isUploading && !isConverting && (
          <div>
            <i className="ri-upload-cloud-line text-4xl text-gray-400 mb-4"></i>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Drop your file here or click to browse
            </h3>
            <p className="text-gray-600 mb-4">
              Supported formats: {getAllowedFileTypes(toolType).map(type => type.split('/')[1]).join(', ')}
            </p>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Select File
            </button>
          </div>
        )}

        {isUploading && (
          <div>
            <i className="ri-upload-cloud-line text-4xl text-blue-500 mb-4 animate-pulse"></i>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Uploading file...
            </h3>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div className="bg-blue-600 h-2 rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="text-gray-600">{Math.round(progress)}%</p>
          </div>
        )}

        {isConverting && (
          <div>
            <i className="ri-loader-4-line text-4xl text-blue-500 mb-4 animate-spin"></i>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Converting your file...
            </h3>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div className="bg-green-600 h-2 rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="text-gray-600">Processing... {Math.round(progress)}%</p>
            {jobId && (
              <p className="text-sm text-gray-500 mt-2">Job ID: {jobId}</p>
            )}
          </div>
        )}

        {downloadUrl && !isConverting && !isUploading && (
          <div>
            <i className="ri-check-line text-4xl text-green-500 mb-4"></i>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Processing completed successfully!
            </h3>
            <p className="text-gray-600 mb-6">Your file has been converted and is ready for download.</p>
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isDownloading ? (
                <>
                  <i className="ri-download-line mr-2 animate-pulse"></i>
                  Downloading...
                </>
              ) : (
                <>
                  <i className="ri-download-line mr-2"></i>
                  Download Result
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 