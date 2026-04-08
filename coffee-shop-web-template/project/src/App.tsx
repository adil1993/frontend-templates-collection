import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import FeaturedProducts from './components/FeaturedProducts';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const handleNavigate = (section: string) => {
    setCurrentSection(section);
    // Smooth scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Add scroll effect to header
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (header) {
        if (window.scrollY > 50) {
          header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        } else {
          header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'home':
        return (
          <>
            <Hero />
            <Gallery />
            <FeaturedProducts />
          </>
        );
      case 'menu':
        return <Menu />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <>
            <Hero />
            <Gallery />
            <FeaturedProducts />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentSection={currentSection} onNavigate={handleNavigate} />
      <main className="pt-16">
        {renderCurrentSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;