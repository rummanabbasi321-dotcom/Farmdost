import React from 'react';
import { LanguageProvider, useLanguage } from './i18n.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Stats from './components/Stats.jsx';
import Solution from './components/Solution.jsx';
import Gallery from './components/Gallery.jsx';
import Crops from './components/Crops.jsx';
import Comparison from './components/Comparison.jsx';
import Testimonials from './components/Testimonials.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function Page() {
  const { lang } = useLanguage();
  return (
    <div data-lang={lang}>
      <Navbar />
      <Hero />
      <Stats />
      <Solution />
      <Gallery />
      <Crops />
      <Comparison />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Page />
    </LanguageProvider>
  );
}
