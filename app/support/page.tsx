'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SupportHero from './SupportHero';
import KnowledgeBase from './KnowledgeBase';
import SupportChannels from './SupportChannels';
import TutorialSection from './TutorialSection';
import StatusDashboard from './StatusDashboard';

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
      <Header />
      <SupportHero />
      <KnowledgeBase />
      <SupportChannels />
      <TutorialSection />
      <StatusDashboard />
      <Footer />
    </div>
  );
}