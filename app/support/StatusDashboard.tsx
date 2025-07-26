'use client';

import { useState } from 'react';

export default function StatusDashboard() {
  const [selectedTimeRange, setSelectedTimeRange] = useState('24h');

  const systemStatus = {
    overall: 'operational',
    uptime: '99.98%',
    lastIncident: '3 days ago'
  };

  const services = [
    {
      name: 'PDF Conversion API',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '285ms',
      description: 'Core PDF conversion service'
    },
    {
      name: 'File Upload Service',
      status: 'operational',
      uptime: '99.97%',
      responseTime: '142ms',
      description: 'File upload and processing'
    },
    {
      name: 'User Authentication',
      status: 'operational',
      uptime: '100%',
      responseTime: '95ms',
      description: 'Login and account management'
    },
    {
      name: 'Payment Processing',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '320ms',
      description: 'Billing and subscription management'
    },
    {
      name: 'CDN & Downloads',
      status: 'degraded',
      uptime: '99.89%',
      responseTime: '450ms',
      description: 'Content delivery network'
    },
    {
      name: 'Email Notifications',
      status: 'operational',
      uptime: '99.92%',
      responseTime: '1.2s',
      description: 'Email delivery system'
    }
  ];

  const incidents = [
    {
      id: 1,
      title: 'Intermittent Download Issues',
      status: 'resolved',
      severity: 'minor',
      date: '2024-01-15',
      duration: '45 minutes',
      description: 'Some users experienced slower download speeds due to CDN issues'
    },
    {
      id: 2,
      title: 'API Response Delays',
      status: 'resolved',
      severity: 'major',
      date: '2024-01-12',
      duration: '2 hours',
      description: 'Increased response times for conversion API endpoints'
    },
    {
      id: 3,
      title: 'Scheduled Maintenance',
      status: 'completed',
      severity: 'maintenance',
      date: '2024-01-10',
      duration: '30 minutes',
      description: 'Routine database maintenance and performance optimization'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'bg-green-100 text-green-800';
      case 'degraded': return 'bg-yellow-100 text-yellow-800';
      case 'outage': return 'bg-red-100 text-red-800';
      case 'maintenance': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational': return 'ri-check-line';
      case 'degraded': return 'ri-alert-line';
      case 'outage': return 'ri-close-line';
      case 'maintenance': return 'ri-settings-line';
      default: return 'ri-question-line';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'minor': return 'text-yellow-600';
      case 'major': return 'text-red-600';
      case 'critical': return 'text-red-800';
      case 'maintenance': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-inter">
            System Status & Performance
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-inter">
            Real-time monitoring of our services and infrastructure to ensure optimal performance
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <h3 className="text-lg font-bold text-green-900 font-inter">All Systems Operational</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-green-700 font-inter">Overall Uptime</span>
                  <span className="font-bold text-green-900 font-inter">{systemStatus.uptime}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-700 font-inter">Last Incident</span>
                  <span className="font-bold text-green-900 font-inter">{systemStatus.lastIncident}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900 font-inter">Service Status</h3>
                  <div className="flex space-x-2">
                    {['24h', '7d', '30d'].map((range) => (
                      <button
                        key={range}
                        onClick={() => setSelectedTimeRange(range)}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                          selectedTimeRange === range
                            ? 'bg-indigo-600 text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                          <i className={`${getStatusIcon(service.status)} ${
                            service.status === 'operational' ? 'text-green-600' : 
                            service.status === 'degraded' ? 'text-yellow-600' : 'text-red-600'
                          }`}></i>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 font-inter">
                            {service.name}
                          </h4>
                          <p className="text-sm text-gray-600 font-inter">
                            {service.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="text-center">
                          <div className="text-gray-500 font-inter">Uptime</div>
                          <div className="font-semibold text-gray-900 font-inter">{service.uptime}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-gray-500 font-inter">Response</div>
                          <div className="font-semibold text-gray-900 font-inter">{service.responseTime}</div>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>
                          {service.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 font-inter">Recent Incidents</h3>
          </div>
          
          <div className="p-6">
            <div className="space-y-4">
              {incidents.map((incident) => (
                <div key={incident.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <i className={`ri-alert-line ${getSeverityColor(incident.severity)}`}></i>
                      <div>
                        <h4 className="font-semibold text-gray-900 font-inter">
                          {incident.title}
                        </h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                          <span className="font-inter">{incident.date}</span>
                          <span className="font-inter">•</span>
                          <span className="font-inter">Duration: {incident.duration}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(incident.status)}`}>
                        {incident.status}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        incident.severity === 'minor' ? 'bg-yellow-100 text-yellow-800' :
                        incident.severity === 'major' ? 'bg-red-100 text-red-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {incident.severity}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm font-inter">
                    {incident.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-indigo-900 mb-2 font-inter">
              Subscribe to Status Updates
            </h3>
            <p className="text-indigo-700 mb-4 font-inter">
              Get notified about service updates and maintenance windows
            </p>
            <div className="flex justify-center space-x-3">
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-semibold whitespace-nowrap cursor-pointer font-inter">
                Email Notifications
              </button>
              <button className="border border-indigo-600 text-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-50 transition-colors font-semibold whitespace-nowrap cursor-pointer font-inter">
                RSS Feed
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}