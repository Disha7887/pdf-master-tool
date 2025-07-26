
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function AuthFormContent() {
  const searchParams = useSearchParams();
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 8;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));

    let error = '';
    if (field === 'email' && value && !validateEmail(value)) {
      error = 'Please enter a valid email address';
    } else if (field === 'password' && value && !validatePassword(value)) {
      error = 'Password must be at least 8 characters long';
    } else if (field === 'confirmPassword' && value && value !== formData.password) {
      error = 'Passwords do not match';
    } else if (field === 'name' && value.trim().length < 2) {
      error = 'Name must be at least 2 characters long';
    }

    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: isSignUp && formData.name.trim().length < 2 ? 'Name is required' : '',
      email: !validateEmail(formData.email) ? 'Please enter a valid email address' : '',
      password: !validatePassword(formData.password) ? 'Password must be at least 8 characters long' : '',
      confirmPassword: isSignUp && formData.password !== formData.confirmPassword ? 'Passwords do not match' : ''
    };

    setErrors(newErrors);

    const isValid = Object.values(newErrors).every(error => error === '');

    if (isValid) {
      console.log('Form submitted:', formData);
      alert(`${isSignUp ? 'Sign up' : 'Sign in'} successful!`);
    }
  };

  const switchMode = () => {
    setIsSignUp(!isSignUp);
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    setErrors({ name: '', email: '', password: '', confirmPassword: '' });
  };

  const socialLogin = (provider: string) => {
    console.log(`${provider} login clicked`);
    alert(`${provider} login feature will be implemented soon!`);
  };

  useEffect(() => {
    const mode = searchParams.get('mode');
    if (mode === 'signin') {
      setIsSignUp(false);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:shadow-2xl">
          {/* Logo and Branding */}
          <div className="text-center mb-8">
            <div className="inline-block p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-4">
              <i className="ri-user-line text-white text-2xl"></i>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2" style={{ fontFamily: 'Pacifico, serif' }}>
              PDF Convert Master
            </h1>
            <p className="text-gray-600 text-sm">
              {isSignUp ? 'Create your account to get started' : 'Welcome back! Please sign in to your account'}
            </p>
          </div>

          {/* Form Container with Slide Animation */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${isSignUp ? '0%' : '0%'})` }}
            >
              <div className="w-full flex-shrink-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field - Only for Sign Up */}
                  {isSignUp && (
                    <div className="transform transition-all duration-300">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className={`w-full px-4 py-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                            errors.name ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Enter your full name"
                        />
                        <i className="ri-user-line absolute left-3 top-3.5 text-gray-400"></i>
                      </div>
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                  )}

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`w-full px-4 py-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter your email"
                      />
                      <i className="ri-mail-line absolute left-3 top-3.5 text-gray-400"></i>
                    </div>
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  {/* Password Field */}
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        className={`w-full px-4 py-3 pl-10 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                          errors.password ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter your password"
                      />
                      <i className="ri-lock-line absolute left-3 top-3.5 text-gray-400"></i>
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600 transition-colors duration-200 cursor-pointer"
                      >
                        <i className={`ri-eye${showPassword ? '-off' : ''}-line`}></i>
                      </button>
                    </div>
                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                  </div>

                  {/* Confirm Password Field - Only for Sign Up */}
                  {isSignUp && (
                    <div className="transform transition-all duration-300">
                      <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          id="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                          className={`w-full px-4 py-3 pl-10 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                            errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Confirm your password"
                        />
                        <i className="ri-lock-2-line absolute left-3 top-3.5 text-gray-400"></i>
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600 transition-colors duration-200 cursor-pointer"
                        >
                          <i className={`ri-eye${showConfirmPassword ? '-off' : ''}-line`}></i>
                        </button>
                      </div>
                      {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
                    </div>
                  )}

                  {/* Forgot Password Link - Only for Sign In */}
                  {!isSignUp && (
                    <div className="text-right">
                      <button
                        type="button"
                        onClick={() => alert('Password reset functionality will be implemented soon!')}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200 cursor-pointer"
                      >
                        Forgot Password?
                      </button>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
                  >
                    {isSignUp ? 'Create Account' : 'Sign In'}
                  </button>

                  {/* Social Login Buttons */}
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="bg-white px-2 text-gray-500">Or continue with</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => socialLogin('Google')}
                      className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 cursor-pointer"
                    >
                      <i className="ri-google-fill text-red-500 mr-2"></i>
                      <span className="text-sm font-medium text-gray-700">Google</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => socialLogin('GitHub')}
                      className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 cursor-pointer"
                    >
                      <i className="ri-github-fill text-gray-800 mr-2"></i>
                      <span className="text-sm font-medium text-gray-700">GitHub</span>
                    </button>
                  </div>

                  {/* Switch Mode */}
                  <div className="text-center pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-600">
                      {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                      <button
                        type="button"
                        onClick={switchMode}
                        className="ml-1 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 cursor-pointer"
                      >
                        {isSignUp ? 'Sign In' : 'Sign Up'}
                      </button>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home Link */}
        <div className="text-center mt-6">
          <Link href="/" className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200">
            <i className="ri-arrow-left-line mr-1"></i>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function AuthForm() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
          <div className="text-center">Loading...</div>
        </div>
      }
    >
      <AuthFormContent />
    </Suspense>
  );
}
