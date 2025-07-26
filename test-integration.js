// Test script to verify both Supabase and iLovePDF integrations
// Run this with: node test-integration.js

const { createClient } = require('@supabase/supabase-js');

// Supabase configuration
const supabaseUrl = 'https://zhsmaiwfupppfnecbjit.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpoc21haXdmdXBwcGZuZWNiaml0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM1NTc5NzAsImV4cCI6MjA2OTEzMzk3MH0.YPu5ZSaTtc6CpwnDz0wAI_CdhQihHO4-r1T-tH4XGD0';

// iLovePDF configuration
const ilovepdfKey = 'project_public_b0ed274d64b0b5f198afe045bb02dbe8_XvxFu614c37c8e303c982d3aa7fa26ff7e33b';

const supabase = createClient(supabaseUrl, supabaseKey);

async function testSupabase() {
  try {
    console.log('🔍 Testing Supabase connection...');
    
    // Test basic connection
    const { data, error } = await supabase
      .from('users')
      .select('count')
      .limit(1);
    
    if (error) {
      console.error('❌ Supabase connection failed:', error.message);
      return false;
    } else {
      console.log('✅ Supabase connection successful!');
      console.log('✅ Database tables are accessible');
      return true;
    }
    
  } catch (error) {
    console.error('❌ Supabase test failed:', error.message);
    return false;
  }
}

async function testILovePDF() {
  try {
    console.log('🔍 Testing iLovePDF API connection...');
    
    // Test API connection by checking available tools
    const response = await fetch('https://api.ilovepdf.com/tools', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${ilovepdfKey}`,
        'Content-Type': 'application/json'
      }
    });
    
    if (response.ok) {
      console.log('✅ iLovePDF API connection successful!');
      return true;
    } else {
      const errorData = await response.json();
      console.error('❌ iLovePDF API test failed:', errorData);
      return false;
    }
    
  } catch (error) {
    console.error('❌ iLovePDF test failed:', error.message);
    return false;
  }
}

async function runTests() {
  console.log('🚀 Starting integration tests...\n');
  
  const supabaseResult = await testSupabase();
  console.log('');
  
  const ilovepdfResult = await testILovePDF();
  console.log('');
  
  if (supabaseResult && ilovepdfResult) {
    console.log('🎉 All tests passed! Your integration is ready.');
    console.log('✅ Supabase: Connected');
    console.log('✅ iLovePDF: Connected');
  } else {
    console.log('⚠️  Some tests failed. Please check your configuration.');
    if (!supabaseResult) console.log('❌ Supabase: Failed');
    if (!ilovepdfResult) console.log('❌ iLovePDF: Failed');
  }
}

runTests(); 