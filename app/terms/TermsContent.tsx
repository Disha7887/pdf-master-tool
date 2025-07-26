
'use client';

import { useState } from 'react';

export default function TermsContent() {
  const [activeSection, setActiveSection] = useState('');

  const sections = [
    { id: 'acceptance', title: 'Acceptance of Terms', icon: 'ri-checkbox-circle-line' },
    { id: 'definitions', title: 'Definitions', icon: 'ri-book-line' },
    { id: 'services', title: 'Description of Services', icon: 'ri-service-line' },
    { id: 'account', title: 'User Accounts', icon: 'ri-user-line' },
    { id: 'usage', title: 'Acceptable Use Policy', icon: 'ri-shield-check-line' },
    { id: 'content', title: 'User Content and Files', icon: 'ri-file-text-line' },
    { id: 'intellectual', title: 'Intellectual Property', icon: 'ri-copyright-line' },
    { id: 'payment', title: 'Payment Terms', icon: 'ri-money-dollar-circle-line' },
    { id: 'privacy', title: 'Privacy and Security', icon: 'ri-lock-line' },
    { id: 'termination', title: 'Termination', icon: 'ri-close-circle-line' },
    { id: 'warranty', title: 'Warranty Disclaimer', icon: 'ri-error-warning-line' },
    { id: 'liability', title: 'Limitation of Liability', icon: 'ri-shield-line' },
    { id: 'indemnification', title: 'Indemnification', icon: 'ri-scales-line' },
    { id: 'governing', title: 'Governing Law', icon: 'ri-government-line' },
    { id: 'dispute', title: 'Dispute Resolution', icon: 'ri-question-answer-line' },
    { id: 'modifications', title: 'Modifications', icon: 'ri-edit-line' },
    { id: 'contact', title: 'Contact Information', icon: 'ri-phone-line' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Terms of Service</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Please read these Terms of Service carefully before using PDF Convert Master services provided by Mizan Store Ltd.
          </p>
          <div className="mt-6 bg-white/70 backdrop-blur-sm rounded-lg p-4 max-w-2xl mx-auto border border-slate-200">
            <div className="flex items-center justify-center space-x-6 text-sm text-slate-600">
              <div className="flex items-center space-x-2">
                <i className="ri-calendar-line text-blue-600"></i>
                <span>Last Updated: January 15, 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-time-line text-green-600"></i>
                <span>Effective Date: January 15, 2024</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Table of Contents</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center space-x-3 cursor-pointer ${
                      activeSection === section.id
                        ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-800'
                    }`}
                  >
                    <i className={`${section.icon} text-lg w-5 h-5 flex items-center justify-center`}></i>
                    <span className="text-sm font-medium">{section.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-slate-200">
              <div className="prose prose-slate max-w-none">
                
                <section id="acceptance" className="mb-12">
                  <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center space-x-3">
                    <i className="ri-checkbox-circle-line text-blue-600"></i>
                    <span>1. Acceptance of Terms</span>
                  </h2>
                  <div className="space-y-4 text-slate-700">
                    <p>
                      By accessing and using PDF Convert Master (the "Service") provided by Mizan Store Ltd, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Service.
                    </p>
                    <p>
                      These Terms constitute a legally binding agreement between you and Mizan Store Ltd. Your use of the Service is also governed by our Privacy Policy, which is incorporated by reference into these Terms.
                    </p>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                      <p className="text-blue-800 font-medium">
                        Important: By using our Service, you represent that you are at least 18 years old and have the legal capacity to enter into this agreement.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="definitions" className="mb-12">
                  <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center space-x-3">
                    <i className="ri-book-line text-green-600"></i>
                    <span>2. Definitions</span>
                  </h2>
                  <div className="space-y-4 text-slate-700">
                    <p>For the purposes of these Terms, the following definitions apply:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-slate-800 mb-2">"Service"</h4>
                        <p className="text-sm">PDF Convert Master platform and all associated tools and features.</p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-slate-800 mb-2">"User" or "You"</h4>
                        <p className="text-sm">Any person or entity that accesses or uses our Service.</p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-slate-800 mb-2">"Content"</h4>
                        <p className="text-sm">Any files, documents, or data uploaded to or processed by our Service.</p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-slate-800 mb-2">"Company"</h4>
                        <p className="text-sm">Mizan Store Ltd, the provider of PDF Convert Master.</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="services" className="mb-12">
                  <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center space-x-3">
                    <i className="ri-service-line text-purple-600"></i>
                    <span>3. Description of Services</span>
                  </h2>
                  <div className="space-y-4 text-slate-700">
                    <p>
                      PDF Convert Master provides online document conversion, editing, and management tools. Our Service includes but is not limited to:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <i className="ri-exchange-line text-blue-600 mt-1"></i>
                          <div>
                            <h4 className="font-semibold">File Conversion</h4>
                            <p className="text-sm">Converting between PDF, Word, Excel, PowerPoint, and image formats.</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <i className="ri-edit-line text-green-600 mt-1"></i>
                          <div>
                            <h4 className="font-semibold">Document Editing</h4>
                            <p className="text-sm">Merging, splitting, compressing, and editing PDF documents.</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <i className="ri-shield-check-line text-red-600 mt-1"></i>
                          <div>
                            <h4 className="font-semibold">Security Features</h4>
                            <p className="text-sm">Password protection, unlocking, and watermarking services.</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <i className="ri-scan-line text-orange-600 mt-1"></i>
                          <div>
                            <h4 className="font-semibold">OCR Technology</h4>
                            <p className="text-sm">Optical Character Recognition for scanned documents.</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <i className="ri-cloud-line text-cyan-600 mt-1"></i>
                          <div>
                            <h4 className="font-semibold">Cloud Processing</h4>
                            <p className="text-sm">Secure cloud-based document processing and storage.</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <i className="ri-smartphone-line text-purple-600 mt-1"></i>
                          <div>
                            <h4 className="font-semibold">Mobile Access</h4>
                            <p className="text-sm">Cross-platform compatibility for all devices.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mt-6">
                      <p className="text-amber-800">
                        <strong>Service Availability:</strong> We strive to maintain 99.9% uptime, but we do not guarantee uninterrupted service. Maintenance windows will be announced in advance when possible.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="account" className="mb-12">
                  <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center space-x-3">
                    <i className="ri-user-line text-blue-600"></i>
                    <span>4. User Accounts</span>
                  </h2>
                  <div className="space-y-4 text-slate-700">
                    <p>
                      To access certain features of our Service, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                    </p>
                    <div className="bg-white border border-slate-200 rounded-lg p-6">
                      <h4 className="font-semibold text-slate-800 mb-4">Account Requirements:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-3">
                          <i className="ri-check-line text-green-600 mt-1"></i>
                          <span>Provide accurate and complete registration information</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <i className="ri-check-line text-green-600 mt-1"></i>
                          <span>Maintain the security of your password and account</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <i className="ri-check-line text-green-600 mt-1"></i>
                          <span>Notify us immediately of any unauthorized access</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <i className="ri-check-line text-green-600 mt-1"></i>
                          <span>Accept responsibility for all activities under your account</span>
                        </li>
                      </ul>
                    </div>
                    <p>
                      You may not create multiple accounts to circumvent limitations or restrictions, and you may not share your account with others. We reserve the right to suspend or terminate accounts that violate these Terms.
                    </p>
                  </div>
                </section>

                <section id="usage" className="mb-12">
                  <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center space-x-3">
                    <i className="ri-shield-check-line text-red-600"></i>
                    <span>5. Acceptable Use Policy</span>
                  </h2>
                  <div className="space-y-4 text-slate-700">
                    <p>
                      You agree to use our Service only for lawful purposes and in accordance with these Terms. You are prohibited from using our Service:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <h4 className="font-semibold text-red-800 mb-3">Prohibited Activities:</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start space-x-2">
                            <i className="ri-close-line text-red-600 mt-1"></i>
                            <span>Violating any applicable laws or regulations</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <i className="ri-close-line text-red-600 mt-1"></i>
                            <span>Infringing on intellectual property rights</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <i className="ri-close-line text-red-600 mt-1"></i>
                            <span>Uploading malicious or harmful content</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <i className="ri-close-line text-red-600 mt-1"></i>
                            <span>Attempting to reverse engineer our Service</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <i className="ri-close-line text-red-600 mt-1"></i>
                            <span>Excessive automated usage or scraping</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h4 className="font-semibold text-green-800 mb-3">Encouraged Usage:</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start space-x-2">
                            <i className="ri-check-line text-green-600 mt-1"></i>
                            <span>Personal and business document processing</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <i className="ri-check-line text-green-600 mt-1"></i>
                            <span>Educational and research purposes</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <i className="ri-check-line text-green-600 mt-1"></i>
                            <span>Legitimate commercial activities</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <i className="ri-check-line text-green-600 mt-1"></i>
                            <span>Collaborative document workflows</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <i className="ri-check-line text-green-600 mt-1"></i>
                            <span>Accessibility improvements</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="content" className="mb-12">
                  <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center space-x-3">
                    <i className="ri-file-text-line text-orange-600"></i>
                    <span>6. User Content and Files</span>
                  </h2>
                  <div className="space-y-4 text-slate-700">
                    <p>
                      You retain ownership of all content and files you upload to our Service. However, by uploading content, you grant us the necessary rights to process, convert, and deliver your files according to your instructions.
                    </p>
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                      <h4 className="font-semibold text-slate-800 mb-4">File Processing Policy:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-medium text-slate-700 mb-2">Automatic Deletion:</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Files deleted within 24 hours of processing</li>
                            <li>• No permanent storage of user content</li>
                            <li>• Secure deletion protocols implemented</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-slate-700 mb-2">Processing Rights:</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Temporary storage for conversion purposes</li>
                            <li>• Technical processing and optimization</li>
                            <li>• Quality assurance and error handling</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                      <p className="text-amber-800">
                        <strong>Important:</strong> You are solely responsible for ensuring you have the right to upload and process any content through our Service. We do not monitor or review content but reserve the right to remove any content that violates these Terms.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="intellectual" className="mb-12">
                  <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center space-x-3">
                    <i className="ri-copyright-line text-purple-600"></i>
                    <span>7. Intellectual Property</span>
                  </h2>
                  <div className="space-y-4 text-slate-700">
                    <p>
                      The Service, including all software, algorithms, user interfaces, and documentation, is the proprietary property of Mizan Store Ltd and is protected by intellectual property laws.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h4 className="font-semibold text-blue-800 mb-3">Our Rights:</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start space-x-2">
                            <i className="ri-copyright-line text-blue-600 mt-1"></i>
                            <span>Ownership of all Service components</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <i className="ri-copyright-line text-blue-600 mt-1"></i>
                            <span>Trademarks and brand elements</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <i className="ri-copyright-line text-blue-600 mt-1"></i>
                            <span>Algorithms and processing methods</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <i className="ri-copyright-line text-blue-600 mt-1"></i>
                            <span>User interface and design elements</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h4 className="font-semibold text-green-800 mb-3">Your Rights:</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start space-x-2">
                            <i className="ri-user-line text-green-600 mt-1"></i>
                            <span>Limited license to use the Service</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <i className="ri-user-line text-green-600 mt-1"></i>
                            <span>Ownership of your uploaded content</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <i className="ri-user-line text-green-600 mt-1"></i>
                            <span>Right to download processed files</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <i className="ri-user-line text-green-600 mt-1"></i>
                            <span>Access to customer support</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="payment" className="mb-12">
                  <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center space-x-3">
                    <i className="ri-money-dollar-circle-line text-green-600"></i>
                    <span>8. Payment Terms</span>
                  </h2>
                  <div className="space-y-4 text-slate-700">
                    <p>
                      While many of our services are free, premium features require payment. All payments are processed securely through our payment partners.
                    </p>
                    <div className="bg-white border border-slate-200 rounded-lg p-6">
                      <h4 className="font-semibold text-slate-800 mb-4">Payment Policies:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-medium text-slate-700 mb-2">Billing:</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Monthly and annual subscription options</li>
                            <li>• Automatic renewal unless cancelled</li>
                            <li>• Prorated charges for mid-cycle changes</li>
                            <li>• All prices include applicable taxes</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-slate-700 mb-2">Refunds:</h5>
                          <ul className="text-sm space-y-1">
                            <li>• 30-day money-back guarantee</li>
                            <li>• No refunds for usage-based charges</li>
                            <li>• Cancellation takes effect next billing cycle</li>
                            <li>• Refunds processed within 5-10 business days</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                      <p className="text-green-800">
                        <strong>Free Tier:</strong> Basic conversion tools remain free with daily usage limits. Premium features unlock unlimited usage, priority processing, and advanced tools.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="privacy" className="mb-12">
                  <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center space-x-3">
                    <i className="ri-lock-line text-blue-600"></i>
                    <span>9. Privacy and Security</span>
                  </h2>
                  <div className="space-y-4 text-slate-700">
                    <p>
                      Your privacy and data security are paramount. Our detailed Privacy Policy explains how we collect, use, and protect your information.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h4 className="font-semibold text-blue-800 mb-3">Security Measures:</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start space-x-2">
                            <i className="ri-shield-check-line text-blue-600 mt-1"></i>
                            <span>End-to-end encryption for all transfers</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <i className="ri-shield-check-line text-blue-600 mt-1"></i>
                            <span>Secure cloud infrastructure</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <i className="ri-shield-check-line text-blue-600 mt-1"></i>
                            <span>Regular security audits and updates</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <i className="ri-shield-check-line text-blue-600 mt-1"></i>
                            <span>GDPR and CCPA compliance</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h4 className="font-semibold text-green-800 mb-3">Data Protection:</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start space-x-2">
                            <i className="ri-delete-bin-line text-green-600 mt-1"></i>
                            <span>Automatic file deletion after 24 hours</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <i className="ri-delete-bin-line text-green-600 mt-1"></i>
                            <span>No permanent storage of user files</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <i className="ri-delete-bin-line text-green-600 mt-1"></i>
                            <span>Minimal data collection practices</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <i className="ri-delete-bin-line text-green-600 mt-1"></i>
                            <span>User control over personal data</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="termination" className="mb-12">
                  <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center space-x-3">
                    <i className="ri-close-circle-line text-red-600"></i>
                    <span>10. Termination</span>
                  </h2>
                  <div className="space-y-4 text-slate-700">
                    <p>
                      Either party may terminate this agreement at any time. We reserve the right to suspend or terminate your access to the Service for violations of these Terms.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <h4 className="font-semibold text-red-800 mb-3">Grounds for Termination:</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start space-x-2">
                            <i className="ri-error-warning-line text-red-600 mt-1"></i>
                            <span>Violation of Terms of Service</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <i className="ri-error-warning-line text-red-600 mt-1"></i>
                            <span>Fraudulent or illegal activity</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <i className="ri-error-warning-line text-red-600 mt-1"></i>
                            <span>Excessive resource usage</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <i className="ri-error-warning-line text-red-600 mt-1"></i>
                            <span>Non-payment of fees</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h4 className="font-semibold text-blue-800 mb-3">Effect of Termination:</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start space-x-2">
                            <i className="ri-close-line text-blue-600 mt-1"></i>
                            <span>Immediate access suspension</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <i className="ri-close-line text-blue-600 mt-1"></i>
                            <span>Account data deletion within 30 days</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <i className="ri-close-line text-blue-600 mt-1"></i>
                            <span>Prorated refunds where applicable</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <i className="ri-close-line text-blue-600 mt-1"></i>
                            <span>Survival of certain provisions</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="warranty" className="mb-12">
                  <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center space-x-3">
                    <i className="ri-error-warning-line text-amber-600"></i>
                    <span>11. Warranty Disclaimer</span>
                  </h2>
                  <div className="space-y-4 text-slate-700">
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                      <p className="text-amber-800 font-medium">
                        THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.
                      </p>
                    </div>
                    <p>
                      While we strive to provide high-quality service, we cannot guarantee that the Service will be error-free, secure, or continuously available. We disclaim all warranties including:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start space-x-2">
                        <i className="ri-close-line text-red-600 mt-1"></i>
                        <span>Merchantability and fitness for a particular purpose</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <i className="ri-close-line text-red-600 mt-1"></i>
                        <span>Non-infringement of third-party rights</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <i className="ri-close-line text-red-600 mt-1"></i>
                        <span>Accuracy or completeness of results</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <i className="ri-close-line text-red-600 mt-1"></i>
                        <span>Uninterrupted or error-free operation</span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section id="liability" className="mb-12">
                  <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center space-x-3">
                    <i className="ri-shield-line text-red-600"></i>
                    <span>12. Limitation of Liability</span>
                  </h2>
                  <div className="space-y-4 text-slate-700">
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                      <p className="text-red-800 font-medium">
                        TO THE MAXIMUM EXTENT PERMITTED BY LAW, MIZAN STORE LTD SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES.
                      </p>
                    </div>
                    <p>
                      Our total liability for any claim arising out of or relating to these Terms or the Service shall not exceed the amount you paid us in the 12 months preceding the claim.
                    </p>
                    <div className="bg-white border border-slate-200 rounded-lg p-6">
                      <h4 className="font-semibold text-slate-800 mb-4">Liability Limitations Include:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start space-x-2">
                            <i className="ri-close-line text-red-600 mt-1"></i>
                            <span>Lost profits or business opportunities</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <i className="ri-close-line text-red-600 mt-1"></i>
                            <span>Data loss or corruption</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <i className="ri-close-line text-red-600 mt-1"></i>
                            <span>Service interruptions</span>
                          </li>
                        </ul>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start space-x-2">
                            <i className="ri-close-line text-red-600 mt-1"></i>
                            <span>Third-party actions</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <i className="ri-close-line text-red-600 mt-1"></i>
                            <span>Security breaches</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <i className="ri-close-line text-red-600 mt-1"></i>
                            <span>System failures</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="indemnification" className="mb-12">
                  <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center space-x-3">
                    <i className="ri-scales-line text-purple-600"></i>
                    <span>13. Indemnification</span>
                  </h2>
                  <div className="space-y-4 text-slate-700">
                    <p>
                      You agree to indemnify, defend, and hold harmless Mizan Store Ltd, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses arising from:
                    </p>
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <i className="ri-arrow-right-line text-purple-600 mt-1"></i>
                          <span>Your use of the Service</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <i className="ri-arrow-right-line text-purple-600 mt-1"></i>
                          <span>Your violation of these Terms</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <i className="ri-arrow-right-line text-purple-600 mt-1"></i>
                          <span>Your infringement of third-party rights</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <i className="ri-arrow-right-line text-purple-600 mt-1"></i>
                          <span>Content you upload or process</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <i className="ri-arrow-right-line text-purple-600 mt-1"></i>
                          <span>Any negligent or wrongful act</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section id="governing" className="mb-12">
                  <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center space-x-3">
                    <i className="ri-government-line text-blue-600"></i>
                    <span>14. Governing Law</span>
                  </h2>
                  <div className="space-y-4 text-slate-700">
                    <p>
                      These Terms shall be governed by and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions.
                    </p>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h4 className="font-semibold text-blue-800 mb-4">Jurisdiction Details:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-medium text-blue-700 mb-2">Governing Law:</h5>
                          <p className="text-sm">Laws of England and Wales</p>
                        </div>
                        <div>
                          <h5 className="font-medium text-blue-700 mb-2">Jurisdiction:</h5>
                          <p className="text-sm">Courts of England and Wales</p>
                        </div>
                        <div>
                          <h5 className="font-medium text-blue-700 mb-2">Company Registration:</h5>
                          <p className="text-sm">Mizan Store Ltd (UK Company)</p>
                        </div>
                        <div>
                          <h5 className="font-medium text-blue-700 mb-2">Applicable Standards:</h5>
                          <p className="text-sm">GDPR, UK Data Protection Act</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="dispute" className="mb-12">
                  <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center space-x-3">
                    <i className="ri-question-answer-line text-green-600"></i>
                    <span>15. Dispute Resolution</span>
                  </h2>
                  <div className="space-y-4 text-slate-700">
                    <p>
                      We encourage users to contact us first to resolve any disputes. If informal resolution fails, disputes shall be resolved through binding arbitration.
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h4 className="font-semibold text-green-800 mb-4">Resolution Process:</h4>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm">1</div>
                          <div>
                            <h5 className="font-medium text-green-700">Direct Communication</h5>
                            <p className="text-sm">Contact our support team at +447429919748 or through our contact form</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm">2</div>
                          <div>
                            <h5 className="font-medium text-green-700">Mediation</h5>
                            <p className="text-sm">If direct resolution fails, we may suggest mediation through a neutral third party</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm">3</div>
                          <div>
                            <h5 className="font-medium text-green-700">Arbitration</h5>
                            <p className="text-sm">Final disputes resolved through binding arbitration under UK arbitration rules</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="modifications" className="mb-12">
                  <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center space-x-3">
                    <i className="ri-edit-line text-orange-600"></i>
                    <span>16. Modifications</span>
                  </h2>
                  <div className="space-y-4 text-slate-700">
                    <p>
                      We reserve the right to modify these Terms at any time. Material changes will be communicated to users through email or service notifications.
                    </p>
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                      <h4 className="font-semibold text-orange-800 mb-4">Modification Process:</h4>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <i className="ri-notification-line text-orange-600 mt-1"></i>
                          <div>
                            <h5 className="font-medium text-orange-700">Notification</h5>
                            <p className="text-sm">30-day advance notice for material changes</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <i className="ri-calendar-line text-orange-600 mt-1"></i>
                          <div>
                            <h5 className="font-medium text-orange-700">Effective Date</h5>
                            <p className="text-sm">Changes take effect after notification period</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <i className="ri-user-settings-line text-orange-600 mt-1"></i>
                          <div>
                            <h5 className="font-medium text-orange-700">User Options</h5>
                            <p className="text-sm">Continued use constitutes acceptance; users may terminate if they disagree</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="contact" className="mb-12">
                  <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center space-x-3">
                    <i className="ri-phone-line text-blue-600"></i>
                    <span>17. Contact Information</span>
                  </h2>
                  <div className="space-y-4 text-slate-700">
                    <p>
                      For questions about these Terms of Service, please contact us through any of the following methods:
                    </p>
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-slate-800 mb-4">Contact Details:</h4>
                          <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                              <i className="ri-building-line text-blue-600 mt-1"></i>
                              <div>
                                <h5 className="font-medium text-slate-700">Company</h5>
                                <p className="text-sm">Mizan Store Ltd</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <i className="ri-phone-line text-green-600 mt-1"></i>
                              <div>
                                <h5 className="font-medium text-slate-700">Phone</h5>
                                <p className="text-sm">+447429919748</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <i className="ri-global-line text-purple-600 mt-1"></i>
                              <div>
                                <h5 className="font-medium text-slate-700">Website</h5>
                                <p className="text-sm">pdfconvertmaster.com</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-800 mb-4">Response Times:</h4>
                          <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                              <i className="ri-time-line text-blue-600 mt-1"></i>
                              <div>
                                <h5 className="font-medium text-slate-700">General Inquiries</h5>
                                <p className="text-sm">24-48 hours</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <i className="ri-alarm-line text-red-600 mt-1"></i>
                              <div>
                                <h5 className="font-medium text-slate-700">Legal Matters</h5>
                                <p className="text-sm">3-5 business days</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <i className="ri-customer-service-line text-green-600 mt-1"></i>
                              <div>
                                <h5 className="font-medium text-slate-700">Support</h5>
                                <p className="text-sm">Within 24 hours</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <div className="text-center mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Thank You for Using PDF Convert Master</h3>
                  <p className="text-slate-600 mb-6">
                    We appreciate your trust in our services. These Terms ensure a fair and secure experience for all users.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                      <i className="ri-shield-check-line text-green-600"></i>
                      <span className="text-sm font-medium text-slate-700">Secure & Trusted</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                      <i className="ri-customer-service-line text-blue-600"></i>
                      <span className="text-sm font-medium text-slate-700">24/7 Support</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                      <i className="ri-global-line text-purple-600"></i>
                      <span className="text-sm font-medium text-slate-700">Global Service</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}