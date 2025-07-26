
'use client';

import { useState } from 'react';

export default function PrivacyContent() {
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'information-collection', title: 'Information We Collect' },
    { id: 'usage', title: 'How We Use Your Information' },
    { id: 'file-processing', title: 'File Processing & Storage' },
    { id: 'sharing', title: 'Information Sharing' },
    { id: 'cookies', title: 'Cookies & Tracking' },
    { id: 'security', title: 'Data Security' },
    { id: 'retention', title: 'Data Retention' },
    { id: 'rights', title: 'Your Rights' },
    { id: 'international', title: 'International Transfers' },
    { id: 'children', title: 'Children\'s Privacy' },
    { id: 'changes', title: 'Policy Changes' },
    { id: 'contact', title: 'Contact Information' }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how PDF Convert Master collects, uses, and protects your information.
          </p>
          <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <i className="ri-calendar-line w-4 h-4 flex items-center justify-center"></i>
              <span>Last Updated: January 15, 2024</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="ri-shield-check-line w-4 h-4 flex items-center justify-center"></i>
              <span>GDPR Compliant</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      activeSection === section.id
                        ? 'bg-orange-100 text-orange-600 font-medium'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg p-8">
              
              {/* Introduction */}
              <section id="introduction" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-700 mb-4">
                  Welcome to PDF Convert Master, operated by Mizan Store Ltd. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website pdfconvertmaster.com or use our PDF conversion and editing services.
                </p>
                <p className="text-gray-700 mb-4">
                  By accessing or using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this Privacy Policy, please do not use our services.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <p className="text-blue-800">
                    <strong>Quick Summary:</strong> We prioritize your privacy and security. Files are processed locally in your browser when possible, and any server processing is temporary with automatic deletion within 24 hours.
                  </p>
                </div>
              </section>

              {/* Information Collection */}
              <section id="information-collection" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
                
                <h3 className="text-xl font-medium text-gray-800 mb-3">2.1 Personal Information</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Email address (when you contact us or subscribe to updates)</li>
                  <li>Name (when provided through contact forms)</li>
                  <li>Phone number (when you contact our support)</li>
                  <li>IP address and device information</li>
                </ul>

                <h3 className="text-xl font-medium text-gray-800 mb-3">2.2 File Information</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Files you upload for conversion or editing</li>
                  <li>File metadata (size, format, creation date)</li>
                  <li>Processing preferences and settings</li>
                </ul>

                <h3 className="text-xl font-medium text-gray-800 mb-3">2.3 Usage Data</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Pages visited and features used</li>
                  <li>Time spent on our website</li>
                  <li>Browser type and version</li>
                  <li>Operating system and device information</li>
                  <li>Referral sources</li>
                </ul>
              </section>

              {/* Usage */}
              <section id="usage" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium text-green-800 mb-2">Service Provision</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Process and convert your files</li>
                      <li>• Provide customer support</li>
                      <li>• Improve service quality</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">Communication</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Respond to inquiries</li>
                      <li>• Send service updates</li>
                      <li>• Provide technical support</li>
                    </ul>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">
                  We use your information solely for providing and improving our PDF conversion services. We do not sell, rent, or share your personal information with third parties for marketing purposes.
                </p>
              </section>

              {/* File Processing */}
              <section id="file-processing" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. File Processing & Storage</h2>
                
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-medium text-orange-800 mb-3">Our File Processing Promise</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <i className="ri-time-line text-orange-600 w-6 h-6 flex items-center justify-center"></i>
                      </div>
                      <h4 className="font-medium text-orange-800">Temporary Processing</h4>
                      <p className="text-sm text-orange-700">Files processed only as needed</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <i className="ri-delete-bin-line text-orange-600 w-6 h-6 flex items-center justify-center"></i>
                      </div>
                      <h4 className="font-medium text-orange-800">Auto-Deletion</h4>
                      <p className="text-sm text-orange-700">Files deleted within 24 hours</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <i className="ri-shield-check-line text-orange-600 w-6 h-6 flex items-center justify-center"></i>
                      </div>
                      <h4 className="font-medium text-orange-800">Secure Processing</h4>
                      <p className="text-sm text-orange-700">SSL encryption throughout</p>
                    </div>
                  </div>
                </div>

                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Files are processed using secure, encrypted connections</li>
                  <li>Most conversions happen in your browser when possible</li>
                  <li>Server-side processing is temporary and files are automatically deleted</li>
                  <li>We do not store, analyze, or use your file content for any other purpose</li>
                  <li>File processing logs are anonymized and used only for service improvement</li>
                </ul>
              </section>

              {/* Sharing */}
              <section id="sharing" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Information Sharing</h2>
                
                <p className="text-gray-700 mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:
                </p>

                <div className="space-y-4">
                  <div className="border-l-4 border-gray-300 pl-4">
                    <h4 className="font-medium text-gray-800">Service Providers</h4>
                    <p className="text-gray-600 text-sm">Trusted third-party services that help us operate our platform (hosting, analytics, customer support)</p>
                  </div>
                  <div className="border-l-4 border-gray-300 pl-4">
                    <h4 className="font-medium text-gray-800">Legal Requirements</h4>
                    <p className="text-gray-600 text-sm">When required by law, regulation, or legal process</p>
                  </div>
                  <div className="border-l-4 border-gray-300 pl-4">
                    <h4 className="font-medium text-gray-800">Business Transfer</h4>
                    <p className="text-gray-600 text-sm">In connection with a merger, acquisition, or sale of assets</p>
                  </div>
                </div>
              </section>

              {/* Cookies */}
              <section id="cookies" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookies & Tracking Technologies</h2>
                
                <p className="text-gray-700 mb-4">
                  We use cookies and similar tracking technologies to enhance your experience on our website:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-2">Essential Cookies</h4>
                    <p className="text-sm text-gray-600">Required for basic website functionality and security</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-2">Analytics Cookies</h4>
                    <p className="text-sm text-gray-600">Help us understand how visitors use our website</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-2">Functional Cookies</h4>
                    <p className="text-sm text-gray-600">Remember your preferences and settings</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-2">Performance Cookies</h4>
                    <p className="text-sm text-gray-600">Monitor website performance and user experience</p>
                  </div>
                </div>

                <p className="text-gray-700">
                  You can control cookie preferences through your browser settings. Note that disabling certain cookies may affect website functionality.
                </p>
              </section>

              {/* Security */}
              <section id="security" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Data Security</h2>
                
                <p className="text-gray-700 mb-6">
                  We implement comprehensive security measures to protect your information:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <i className="ri-lock-line text-green-600 w-6 h-6 flex items-center justify-center"></i>
                    </div>
                    <h4 className="font-medium text-green-800 mb-2">SSL Encryption</h4>
                    <p className="text-sm text-green-700">All data transmissions encrypted</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <i className="ri-server-line text-blue-600 w-6 h-6 flex items-center justify-center"></i>
                    </div>
                    <h4 className="font-medium text-blue-800 mb-2">Secure Servers</h4>
                    <p className="text-sm text-blue-700">Protected hosting infrastructure</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <i className="ri-shield-check-line text-purple-600 w-6 h-6 flex items-center justify-center"></i>
                    </div>
                    <h4 className="font-medium text-purple-800 mb-2">Regular Audits</h4>
                    <p className="text-sm text-purple-700">Continuous security monitoring</p>
                  </div>
                </div>
              </section>

              {/* Retention */}
              <section id="retention" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Data Retention</h2>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                  <h4 className="font-medium text-yellow-800 mb-2">File Retention Policy</h4>
                  <p className="text-yellow-700 text-sm">
                    Uploaded files are automatically deleted from our servers within 24 hours of processing. This ensures your documents remain private and secure.
                  </p>
                </div>

                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Personal information: Retained only as long as necessary for service provision</li>
                  <li>Usage data: Anonymized and retained for up to 2 years for analytics</li>
                  <li>Contact information: Kept until you request deletion or unsubscribe</li>
                  <li>Legal data: Retained as required by applicable laws and regulations</li>
                </ul>
              </section>

              {/* Rights */}
              <section id="rights" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Your Rights</h2>
                
                <p className="text-gray-700 mb-4">
                  Under applicable privacy laws (including GDPR), you have the following rights:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <i className="ri-eye-line text-blue-500 w-5 h-5 flex items-center justify-center mt-0.5"></i>
                      <div>
                        <h4 className="font-medium text-gray-800">Access</h4>
                        <p className="text-sm text-gray-600">Request information about your data</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-edit-line text-green-500 w-5 h-5 flex items-center justify-center mt-0.5"></i>
                      <div>
                        <h4 className="font-medium text-gray-800">Correction</h4>
                        <p className="text-sm text-gray-600">Update or correct your information</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-delete-bin-line text-red-500 w-5 h-5 flex items-center justify-center mt-0.5"></i>
                      <div>
                        <h4 className="font-medium text-gray-800">Deletion</h4>
                        <p className="text-sm text-gray-600">Request deletion of your data</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <i className="ri-download-line text-purple-500 w-5 h-5 flex items-center justify-center mt-0.5"></i>
                      <div>
                        <h4 className="font-medium text-gray-800">Portability</h4>
                        <p className="text-sm text-gray-600">Export your data in portable format</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-stop-line text-orange-500 w-5 h-5 flex items-center justify-center mt-0.5"></i>
                      <div>
                        <h4 className="font-medium text-gray-800">Restriction</h4>
                        <p className="text-sm text-gray-600">Limit how we process your data</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-hand-heart-line text-pink-500 w-5 h-5 flex items-center justify-center mt-0.5"></i>
                      <div>
                        <h4 className="font-medium text-gray-800">Objection</h4>
                        <p className="text-sm text-gray-600">Object to certain processing activities</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    To exercise any of these rights, please contact us at <a href="mailto:privacy@pdfconvertmaster.com" className="font-medium underline">privacy@pdfconvertmaster.com</a> or call <a href="tel:+447429919748" className="font-medium underline">+44 7429 919748</a>.
                  </p>
                </div>
              </section>

              {/* International */}
              <section id="international" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. International Transfers</h2>
                
                <p className="text-gray-700 mb-4">
                  Your information may be transferred to and processed in countries other than your country of residence. We ensure that:
                </p>

                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>All transfers comply with applicable data protection laws</li>
                  <li>Adequate safeguards are in place to protect your information</li>
                  <li>We use standard contractual clauses approved by regulatory authorities</li>
                  <li>Service providers meet our strict security and privacy standards</li>
                </ul>
              </section>

              {/* Children */}
              <section id="children" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Children's Privacy</h2>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800">
                    Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
                  </p>
                </div>
              </section>

              {/* Changes */}
              <section id="changes" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Changes to This Privacy Policy</h2>
                
                <p className="text-gray-700 mb-4">
                  We may update this Privacy Policy from time to time. When we make changes, we will:
                </p>

                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>Post the updated policy on this page</li>
                  <li>Update the "Last Updated" date</li>
                  <li>Notify you of significant changes via email or website notice</li>
                  <li>Provide a summary of key changes</li>
                </ul>

                <p className="text-gray-700">
                  Your continued use of our services after any changes indicates your acceptance of the updated Privacy Policy.
                </p>
              </section>

              {/* Contact */}
              <section id="contact" className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Contact Information</h2>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Data Protection Officer</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Mizan Store Ltd</h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <i className="ri-global-line w-4 h-4 flex items-center justify-center"></i>
                          <span>pdfconvertmaster.com</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-mail-line w-4 h-4 flex items-center justify-center"></i>
                          <a href="mailto:privacy@pdfconvertmaster.com" className="text-blue-600 hover:underline">privacy@pdfconvertmaster.com</a>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-phone-line w-4 h-4 flex items-center justify-center"></i>
                          <a href="tel:+447429919748" className="text-blue-600 hover:underline">+44 7429 919748</a>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Quick Response</h4>
                      <p className="text-sm text-gray-600 mb-3">
                        For privacy-related inquiries, we typically respond within 48 hours.
                      </p>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <i className="ri-time-line w-4 h-4 flex items-center justify-center"></i>
                          <span>Response Time: 24-48 hours</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="ri-customer-service-line w-4 h-4 flex items-center justify-center"></i>
                          <span>Support: Monday - Friday, 9 AM - 6 PM GMT</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
