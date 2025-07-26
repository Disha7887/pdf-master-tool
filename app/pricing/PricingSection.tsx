'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingCard from './PricingCard';

export default function PricingSection() {
  const pricingPlans = [
    {
      name: 'Basic',
      price: 10,
      period: 'month',
      description: 'Perfect for individual users with basic PDF needs',
      features: [
        'Process up to 50 files per month',
        'Basic PDF conversion tools',
        'Standard file size limit (10MB)',
        'Email support',
        'Basic compression quality',
        'Standard processing speed',
        'Access to core features'
      ],
      buttonText: 'Get Started',
      popular: false,
      iconBgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      name: 'Pro',
      price: 20,
      period: 'month',
      description: 'Ideal for professionals and small teams',
      features: [
        'Process up to 200 files per month',
        'All PDF tools & advanced features',
        'Large file size limit (50MB)',
        'Priority email & chat support',
        'High-quality compression',
        'Faster processing speed',
        'Batch processing capabilities',
        'Advanced OCR technology',
        'Custom watermark options'
      ],
      buttonText: 'Start Free Trial',
      popular: true,
      iconBgColor: 'bg-red-100',
      iconColor: 'text-red-600'
    },
    {
      name: 'Enterprise',
      price: 40,
      period: 'month',
      description: 'For businesses with high-volume requirements',
      features: [
        'Unlimited file processing',
        'All premium features included',
        'No file size restrictions',
        '24/7 dedicated support',
        'Maximum compression quality',
        'Lightning-fast processing',
        'Advanced batch operations',
        'API access & integrations',
        'Custom branding options',
        'Priority server allocation',
        'Advanced security features',
        'Team collaboration tools'
      ],
      buttonText: 'Contact Sales',
      popular: false,
      iconBgColor: 'bg-purple-100',
      iconColor: 'text-purple-600'
    }
  ];

  return (
    <>
      <Header />
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Perfect Plan
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Unlock the full potential of our PDF tools with flexible pricing designed for every need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                name={plan.name}
                price={plan.price}
                period={plan.period}
                description={plan.description}
                features={plan.features}
                buttonText={plan.buttonText}
                popular={plan.popular}
                iconBgColor={plan.iconBgColor}
                iconColor={plan.iconColor}
              />
            ))}
          </div>

          <div className="text-center bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h2>
            <p className="text-gray-600 mb-6">
              Our team is here to help you find the perfect solution for your needs
            </p>
            <button className="bg-red-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-600 transition-colors whitespace-nowrap cursor-pointer">
              Contact Support
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}