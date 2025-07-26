
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AboutHero from './AboutHero';
import CompanyStory from './CompanyStory';
import TeamSection from './TeamSection';
import ValuesSection from './ValuesSection';
import ContactSection from './ContactSection';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      <Header />
      <AboutHero />
      <CompanyStory />
      <ValuesSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
