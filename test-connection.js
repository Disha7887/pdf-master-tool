// Test script to verify Supabase connection
// Run this with: node test-connection.js

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://zhsmaiwfupppfnecbjit.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpoc21haXdmdXBwcGZuZWNiaml0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM1NTc5NzAsImV4cCI6MjA2OTEzMzk3MH0.YPu5ZSaTtc6CpwnDz0wAI_CdhQihHO4-r1T-tH4XGD0';

const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
  try {
    console.log('Testing Supabase connection...');
    
    // Test basic connection
    const { data, error } = await supabase
      .from('users')
      .select('count')
      .limit(1);
    
    if (error) {
      console.error('❌ Connection failed:', error.message);
    } else {
      console.log('✅ Supabase connection successful!');
      console.log('✅ Database tables are accessible');
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

testConnection(); 