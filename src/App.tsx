import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { OverviewSection } from './components/OverviewSection';
import { LessonPlanSection } from './components/LessonPlanSection';
import { Footer } from './components/Footer';

import { musicData } from './data/musicData';
import { visualArtsData } from './data/visualArtsData';
import { danceData } from './data/danceData';
import { mediaArtsData } from './data/mediaArtsData';
import { dramaData } from './data/dramaData';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 450);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['hero', 'overview', 'music', 'visual-arts', 'dance', 'media-arts', 'drama', 'assignment-footer'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if ('IntersectionObserver' in window && sections.length > 0) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        {
          rootMargin: '-20% 0px -55% 0px',
          threshold: 0,
        }
      );

      sections.forEach((sec) => observer.observe(sec));
      return () => observer.disconnect();
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-sans selection:bg-stone-200 selection:text-stone-900">
      {/* Sticky Header */}
      <Header activeSection={activeSection} />

      {/* Main Content Areas */}
      <main id="main-content" className="flex-grow">
        <Hero />
        <OverviewSection />
        <LessonPlanSection domain={musicData} />
        <LessonPlanSection domain={visualArtsData} />
        <LessonPlanSection domain={danceData} />
        <LessonPlanSection domain={mediaArtsData} />
        <LessonPlanSection domain={dramaData} />
      </main>

      {/* Global Assessment Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <button
        type="button"
        id="back-to-top"
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 p-3 rounded-full bg-stone-900 text-white shadow-xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-stone-800 transition-all duration-300 hover:scale-110 ${
          showBackToTop ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll back to top"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default App;
