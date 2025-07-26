'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactHero from './ContactHero';
import ContactForm from './ContactForm';
import ContactMethods from './ContactMethods';
import FAQSection from './FAQSection';
import LocationSection from './LocationSection';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      <Header />
      <ContactHero />
      <ContactMethods />
      <ContactForm />
      <FAQSection />
      <LocationSection />
      <Footer />
    </div>
  );
}