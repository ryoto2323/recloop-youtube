import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Mission } from './components/Mission';
import { Achievements } from './components/Achievements';
import { Benefits } from './components/Benefits';
import { Target } from './components/Target';
import { Package } from './components/Package';
import { Price } from './components/Price';
import { Safety } from './components/Safety';
import { Flow } from './components/Flow';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { MobileStickyCTA } from './components/MobileStickyCTA';

const App: React.FC = () => {
  return (
    <div className="font-sans text-navy-900 bg-paper min-h-screen selection:bg-persimmon selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Mission />
        <Achievements />
        <Benefits />
        <Target />
        <Package />
        <Price />
        <Safety />
        <Flow />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
};

export default App;