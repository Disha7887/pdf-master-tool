'use client';

interface PricingCardProps {
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  popular: boolean;
  iconBgColor: string;
  iconColor: string;
}

export default function PricingCard({
  name,
  price,
  period,
  description,
  features,
  buttonText,
  popular,
  iconBgColor,
  iconColor
}: PricingCardProps) {
  return (
    <div className={`bg-white rounded-2xl shadow-lg p-8 relative ${popular ? 'ring-2 ring-red-500 transform scale-105' : ''}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-8">
        <div className={`w-16 h-16 mx-auto mb-4 ${iconBgColor} rounded-xl flex items-center justify-center`}>
          <i className={`ri-star-fill ${iconColor} text-2xl`}></i>
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        
        <div className="mb-6">
          <span className="text-4xl font-bold text-gray-900">${price}</span>
          <span className="text-gray-600 ml-2">/{period}</span>
        </div>
      </div>
      
      <div className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center">
            <div className="w-5 h-5 flex items-center justify-center mr-3">
              <i className="ri-check-line text-green-500 text-lg"></i>
            </div>
            <span className="text-gray-700 text-sm">{feature}</span>
          </div>
        ))}
      </div>
      
      <button className={`w-full py-3 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer ${
        popular 
          ? 'bg-red-500 text-white hover:bg-red-600' 
          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
      }`}>
        {buttonText}
      </button>
    </div>
  );
}