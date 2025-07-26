'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What file formats do you support for conversion?',
      answer: 'We support a wide range of file formats including PDF, Word (DOC/DOCX), Excel (XLS/XLSX), PowerPoint (PPT/PPTX), JPG, PNG, HTML, and many more. Our tools can handle most common document and image formats.'
    },
    {
      question: 'Is there a file size limit for uploads?',
      answer: 'For free users, the maximum file size is 50MB per file. Premium users can upload files up to 500MB. We also support batch processing for multiple files simultaneously.'
    },
    {
      question: 'How secure is my data during conversion?',
      answer: 'We take data security very seriously. All files are encrypted during upload and processing. Files are automatically deleted from our servers after 24 hours. We never store or share your documents.'
    },
    {
      question: 'Can I use your tools offline?',
      answer: 'Currently, our tools require an internet connection as all processing is done on our secure servers. However, we\'re working on offline capabilities for premium users.'
    },
    {
      question: 'Do you offer API access for developers?',
      answer: 'Yes! We offer comprehensive API access for developers and businesses. Our API supports all conversion tools and includes detailed documentation, SDKs, and 24/7 technical support.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely through our encrypted payment system.'
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Absolutely! You can cancel your subscription at any time from your account settings. Your access will continue until the end of your current billing period.'
    },
    {
      question: 'Do you provide technical support?',
      answer: 'Yes, we offer 24/7 technical support via phone, email, and live chat. Premium users get priority support with guaranteed response times under 1 hour.'
    },
    {
      question: 'Are there any usage limits?',
      answer: 'Free users have a daily limit of 10 conversions. Premium users get unlimited conversions, batch processing, and priority queue access for faster processing.'
    },
    {
      question: 'How can I get a refund?',
      answer: 'We offer a 30-day money-back guarantee for all premium subscriptions. If you\'re not satisfied, contact our support team and we\'ll process your refund within 2-3 business days.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-inter">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 font-inter">
            Quick answers to common questions about our PDF tools and services
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <span className="text-lg font-semibold text-gray-900 font-inter">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 ml-4">
                  <i className={`ri-${openFAQ === index ? 'subtract' : 'add'}-line text-xl text-red-600 transition-transform duration-300`}></i>
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <div className="border-l-4 border-red-600 pl-4">
                    <p className="text-gray-700 leading-relaxed font-inter">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-red-800 mb-2 font-inter">
              Still Have Questions?
            </h3>
            <p className="text-red-700 mb-4 font-inter">
              Can't find the answer you're looking for? Our support team is here to help!
            </p>
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold whitespace-nowrap cursor-pointer font-inter">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}