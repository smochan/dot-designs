import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Process } from './components/Process';
import { Gallery } from './components/Gallery';
import { AIAdvisor } from './components/AIAdvisor';
import { ContactFooter } from './components/ContactFooter';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-studio-900 text-gray-900 dark:text-white font-sans selection:bg-gold-500 selection:text-black transition-colors duration-300">
      <Navbar scrolled={scrolled} theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <section id="home">
          <Hero theme={theme} />
        </section>

        <section id="process" className="py-20 relative z-10 bg-gray-50 dark:bg-studio-900 transition-colors duration-300">
          <Process />
        </section>

        <section id="gallery" className="py-20 bg-white dark:bg-studio-800 transition-colors duration-300">
          <Gallery />
        </section>

        <section id="advisor" className="py-20 bg-gray-50 dark:bg-studio-900 relative overflow-hidden transition-colors duration-300">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/10 dark:from-purple-900/20 to-transparent pointer-events-none" />
          <AIAdvisor />
        </section>

        <section id="contact">
          <ContactFooter />
        </section>
      </main>
    </div>
  );
};

export default App;