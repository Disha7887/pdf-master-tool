// iLovePDF API integration
export interface ILovePDFResponse {
  success: boolean
  data?: {
    download_url: string
    task_id: string
  }
  error?: string
}

export class ILovePDFAPI {
  private apiKey: string
  private baseUrl = 'https://api.ilovepdf.com/v1'

  constructor(apiKey: string) {
    this.apiKey = apiKey
  }

  // Upload file to iLovePDF
  async uploadFile(file: File): Promise<string> {
    const formData = new FormData()
    formData.append('file', file)

    const response = await fetch(`${this.baseUrl}/upload`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`
      },
      body: formData
    })

    if (!response.ok) {
      throw new Error('Failed to upload file')
    }

    const data = await response.json()
    return data.server_filename
  }

  // Convert PDF to Word
  async pdfToWord(fileUrl: string): Promise<ILovePDFResponse> {
    return this.processConversion('pdftodocx', fileUrl)
  }

  // Convert Word to PDF
  async wordToPdf(fileUrl: string): Promise<ILovePDFResponse> {
    return this.processConversion('doctopdf', fileUrl)
  }

  // Merge PDFs
  async mergePdfs(fileUrls: string[]): Promise<ILovePDFResponse> {
    return this.processConversion('merge', fileUrls)
  }

  // Split PDF
  async splitPdf(fileUrl: string, ranges: string): Promise<ILovePDFResponse> {
    return this.processConversion('split', fileUrl, { ranges })
  }

  // Compress PDF
  async compressPdf(fileUrl: string): Promise<ILovePDFResponse> {
    return this.processConversion('compress', fileUrl)
  }

  // Add password protection
  async protectPdf(fileUrl: string, password: string): Promise<ILovePDFResponse> {
    return this.processConversion('protect', fileUrl, { password })
  }

  // Convert PDF to Excel
  async pdfToExcel(fileUrl: string): Promise<ILovePDFResponse> {
    return this.processConversion('pdftoexcel', fileUrl)
  }

  // Convert Excel to PDF
  async excelToPdf(fileUrl: string): Promise<ILovePDFResponse> {
    return this.processConversion('excelto', fileUrl)
  }

  // Convert PDF to Images
  async pdfToImages(fileUrl: string): Promise<ILovePDFResponse> {
    return this.processConversion('pdftoimage', fileUrl)
  }

  // Convert Images to PDF
  async imagesToPdf(fileUrls: string[]): Promise<ILovePDFResponse> {
    return this.processConversion('imagestopdf', fileUrls)
  }

  // Generic conversion method
  private async processConversion(
    tool: string, 
    fileUrl: string | string[], 
    options: Record<string, any> = {}
  ): Promise<ILovePDFResponse> {
    try {
      const payload = {
        tool,
        files: Array.isArray(fileUrl) ? fileUrl : [fileUrl],
        ...options
      }

      const response = await fetch(`${this.baseUrl}/process`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      if (!response.ok) {
        throw new Error(`Conversion failed: ${response.statusText}`)
      }

      const data = await response.json()
      return {
        success: true,
        data: {
          download_url: data.download_url,
          task_id: data.task_id
        }
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    }
  }

  // Download converted file
  async downloadFile(taskId: string): Promise<Blob> {
    const response = await fetch(`${this.baseUrl}/download/${taskId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`
      }
    })

    if (!response.ok) {
      throw new Error('Failed to download file')
    }

    return response.blob()
  }
}

// Create singleton instance
export const ilovepdf = new ILovePDFAPI(process.env.ILOVEPDF_API_KEY || '') 