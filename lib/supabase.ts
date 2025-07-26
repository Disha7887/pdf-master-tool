import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface User {
  id: string
  email: string
  created_at: string
  updated_at: string
}

export interface ConversionJob {
  id: string
  user_id: string
  tool_type: string
  status: 'pending' | 'processing' | 'completed' | 'failed'
  input_file_url: string
  output_file_url?: string
  created_at: string
  updated_at: string
  error_message?: string
}

export interface FileUpload {
  id: string
  user_id: string
  file_name: string
  file_url: string
  file_size: number
  mime_type: string
  created_at: string
} 