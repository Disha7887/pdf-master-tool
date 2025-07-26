import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '../../../lib/supabase'
import { ilovepdf } from '../../../lib/ilovepdf'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    const toolType = formData.get('toolType') as string
    const userId = formData.get('userId') as string

    if (!file || !toolType || !userId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create conversion job in Supabase
    const { data: job, error: jobError } = await supabase
      .from('conversion_jobs')
      .insert({
        user_id: userId,
        tool_type: toolType,
        status: 'pending',
        input_file_url: '', // Will be updated after upload
        created_at: new Date().toISOString()
      })
      .select()
      .single()

    if (jobError) {
      return NextResponse.json(
        { error: 'Failed to create conversion job' },
        { status: 500 }
      )
    }

    // Upload file to Supabase Storage
    const fileName = `${userId}/${Date.now()}-${file.name}`
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('uploads')
      .upload(fileName, file)

    if (uploadError) {
      return NextResponse.json(
        { error: 'Failed to upload file' },
        { status: 500 }
      )
    }

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('uploads')
      .getPublicUrl(fileName)

    // Update job with file URL
    await supabase
      .from('conversion_jobs')
      .update({ input_file_url: publicUrl, status: 'processing' })
      .eq('id', job.id)

    // Process conversion based on tool type
    let conversionResult
    switch (toolType) {
      case 'pdf-to-word':
        conversionResult = await ilovepdf.pdfToWord(publicUrl)
        break
      case 'word-to-pdf':
        conversionResult = await ilovepdf.wordToPdf(publicUrl)
        break
      case 'pdf-merger':
        conversionResult = await ilovepdf.mergePdfs([publicUrl])
        break
      case 'pdf-compressor':
        conversionResult = await ilovepdf.compressPdf(publicUrl)
        break
      case 'pdf-protector':
        const password = formData.get('password') as string
        conversionResult = await ilovepdf.protectPdf(publicUrl, password)
        break
      case 'pdf-to-excel':
        conversionResult = await ilovepdf.pdfToExcel(publicUrl)
        break
      case 'excel-to-pdf':
        conversionResult = await ilovepdf.excelToPdf(publicUrl)
        break
      case 'pdf-to-images':
        conversionResult = await ilovepdf.pdfToImages(publicUrl)
        break
      default:
        return NextResponse.json(
          { error: 'Unsupported tool type' },
          { status: 400 }
        )
    }

    if (!conversionResult.success) {
      await supabase
        .from('conversion_jobs')
        .update({ 
          status: 'failed', 
          error_message: conversionResult.error 
        })
        .eq('id', job.id)

      return NextResponse.json(
        { error: conversionResult.error },
        { status: 500 }
      )
    }

    // Download and store converted file
    const convertedBlob = await ilovepdf.downloadFile(conversionResult.data!.task_id)
    const convertedFileName = `${userId}/${Date.now()}-converted-${file.name.replace(/\.[^/.]+$/, '')}.pdf`
    
    const { data: convertedUploadData, error: convertedUploadError } = await supabase.storage
      .from('converted')
      .upload(convertedFileName, convertedBlob)

    if (convertedUploadError) {
      await supabase
        .from('conversion_jobs')
        .update({ 
          status: 'failed', 
          error_message: 'Failed to store converted file' 
        })
        .eq('id', job.id)

      return NextResponse.json(
        { error: 'Failed to store converted file' },
        { status: 500 }
      )
    }

    // Get converted file URL
    const { data: { publicUrl: convertedUrl } } = supabase.storage
      .from('converted')
      .getPublicUrl(convertedFileName)

    // Update job as completed
    await supabase
      .from('conversion_jobs')
      .update({ 
        status: 'completed', 
        output_file_url: convertedUrl 
      })
      .eq('id', job.id)

    return NextResponse.json({
      success: true,
      jobId: job.id,
      downloadUrl: convertedUrl
    })

  } catch (error) {
    console.error('Conversion error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const jobId = searchParams.get('jobId')

  if (!jobId) {
    return NextResponse.json(
      { error: 'Job ID required' },
      { status: 400 }
    )
  }

  const { data: job, error } = await supabase
    .from('conversion_jobs')
    .select('*')
    .eq('id', jobId)
    .single()

  if (error || !job) {
    return NextResponse.json(
      { error: 'Job not found' },
      { status: 404 }
    )
  }

  return NextResponse.json({ job })
} 