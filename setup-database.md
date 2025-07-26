# Supabase Database Setup Instructions

## 🚀 Quick Setup Steps

### 1. Open Your Supabase Dashboard
Go to: https://zhsmaiwfupppfnecbjit.supabase.co

### 2. Run the Database Setup Script
1. Click on **SQL Editor** in the left sidebar
2. Click **New Query**
3. Copy the entire contents of the `supabase-setup.sql` file
4. Paste it into the SQL editor
5. Click **Run** to execute the script

### 3. Verify the Setup
After running the script, you should see:

**Tables Created:**
- ✅ `users` - User profiles
- ✅ `conversion_jobs` - File conversion tracking  
- ✅ `file_uploads` - File metadata

**Storage Buckets Created:**
- ✅ `uploads` - Original uploaded files
- ✅ `converted` - Converted output files

### 4. Test the Connection
Run the test script:
```bash
node test-integration.js
```

## 📋 What the Script Does

The `supabase-setup.sql` script:
- Creates all necessary database tables
- Sets up Row Level Security (RLS) policies
- Creates storage buckets for file uploads
- Configures user authentication triggers
- Sets up proper indexes for performance

## 🔒 Security Features

- **Row Level Security**: Users can only access their own data
- **Secure File Storage**: Files are stored with proper permissions
- **API Key Protection**: All sensitive keys are stored in environment variables

## 🎯 Next Steps

Once the database is set up:
1. Create your `.env.local` file with the environment variables
2. Test the integration with `node test-integration.js`
3. Deploy to Vercel with the environment variables
4. Start using your PDF conversion tools!

## 🆘 Troubleshooting

If you encounter issues:
1. **"relation does not exist"** - Make sure you ran the SQL script
2. **"permission denied"** - Check that RLS policies are properly set up
3. **"storage bucket not found"** - Verify storage buckets were created

Need help? Check the Supabase documentation or contact support. 