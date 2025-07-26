'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    category: 'support',
    priority: 'medium',
    message: '',
    attachments: null as FileList | null
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const categories = [
    { value: 'support', label: 'Technical Support', icon: 'ri-customer-service-2-line' },
    { value: 'business', label: 'Business Inquiry', icon: 'ri-briefcase-line' },
    { value: 'feedback', label: 'Feedback', icon: 'ri-feedback-line' },
    { value: 'partnership', label: 'Partnership', icon: 'ri-handshake-line' },
    { value: 'billing', label: 'Billing', icon: 'ri-money-dollar-circle-line' },
    { value: 'other', label: 'Other', icon: 'ri-question-line' }
  ];

  const priorities = [
    { value: 'low', label: 'Low', color: 'bg-green-100 text-green-800' },
    { value: 'medium', label: 'Medium', color: 'bg-yellow-100 text-yellow-800' },
    { value: 'high', label: 'High', color: 'bg-orange-100 text-orange-800' },
    { value: 'urgent', label: 'Urgent', color: 'bg-red-100 text-red-800' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, attachments: e.target.files }));
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.length > 500) newErrors.message = 'Message cannot exceed 500 characters';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'attachments' && value) {
          Array.from(value).forEach(file => {
            formDataToSend.append('attachments', file);
          });
        } else if (key !== 'attachments') {
          formDataToSend.append(key, value as string);
        }
      });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({
        name: '', email: '', phone: '', company: '', subject: '', 
        category: 'support', priority: 'medium', message: '', attachments: null
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-inter">
            Send Us a Message
          </h2>
          <p className="text-lg text-gray-600 font-inter">
            Fill out the form below and we'll get back to you as soon as possible
          </p>
        </div>
        
        <form id="contact-form" onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
          {submitStatus === 'success' && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <div className="flex items-center space-x-2">
                <i className="ri-check-circle-line text-green-600 text-lg"></i>
                <span className="text-green-800 font-semibold font-inter">Message sent successfully!</span>
              </div>
              <p className="text-green-700 text-sm mt-1 font-inter">We'll respond to your inquiry within 24 hours.</p>
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <div className="flex items-center space-x-2">
                <i className="ri-error-warning-line text-red-600 text-lg"></i>
                <span className="text-red-800 font-semibold font-inter">Error sending message</span>
              </div>
              <p className="text-red-700 text-sm mt-1 font-inter">Please try again or contact us directly.</p>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 font-inter">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-colors font-inter ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your full name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1 font-inter">{errors.name}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 font-inter">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-colors font-inter ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="your@email.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1 font-inter">{errors.email}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 font-inter">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-colors font-inter"
                placeholder="+1 (555) 123-4567"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 font-inter">
                Company/Organization
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-colors font-inter"
                placeholder="Your company name"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 font-inter">
                Category *
              </label>
              <div className="relative">
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-colors font-inter appearance-none pr-8"
                >
                  {categories.map(cat => (
                    <option key={cat.value} value={cat.value}>{cat.label}</option>
                  ))}
                </select>
                <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 font-inter">
                Priority Level
              </label>
              <div className="flex flex-wrap gap-2">
                {priorities.map(priority => (
                  <button
                    key={priority.value}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, priority: priority.value }))}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                      formData.priority === priority.value
                        ? priority.color
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {priority.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 font-inter">
              Subject *
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-colors font-inter ${
                errors.subject ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Brief description of your inquiry"
            />
            {errors.subject && <p className="text-red-500 text-sm mt-1 font-inter">{errors.subject}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 font-inter">
              Message * 
              <span className="text-gray-500 font-normal">({formData.message.length}/500)</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={6}
              maxLength={500}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-colors font-inter resize-none ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Please provide detailed information about your inquiry..."
            />
            {errors.message && <p className="text-red-500 text-sm mt-1 font-inter">{errors.message}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 font-inter">
              Attachments
              <span className="text-gray-500 font-normal"> (Optional - Max 5MB per file)</span>
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-red-400 transition-colors">
              <input
                type="file"
                onChange={handleFileChange}
                multiple
                accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <i className="ri-upload-2-line text-3xl text-gray-400 mb-2"></i>
                <p className="text-gray-600 font-inter">
                  Click to upload files or drag and drop
                </p>
                <p className="text-sm text-gray-500 mt-1 font-inter">
                  Supported formats: PDF, DOC, DOCX, TXT, JPG, PNG
                </p>
              </label>
              {formData.attachments && (
                <div className="mt-3 space-y-1">
                  {Array.from(formData.attachments).map((file, index) => (
                    <div key={index} className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                      <i className="ri-file-line"></i>
                      <span className="font-inter">{file.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className="flex items-center justify-between pt-6">
            <div className="flex items-center space-x-2">
              <i className="ri-shield-check-line text-green-600"></i>
              <span className="text-sm text-gray-600 font-inter">Your information is secure and confidential</span>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer font-inter shadow-lg"
            >
              {isSubmitting ? (
                <span className="flex items-center space-x-2">
                  <i className="ri-loader-4-line animate-spin"></i>
                  <span>Sending...</span>
                </span>
              ) : (
                'Send Message'
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}