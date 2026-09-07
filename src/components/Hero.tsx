import React, { useRef, useEffect } from 'react';

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was prevented; video poster remains visible
        });
      }
    }
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 72;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-[82vh] lg:min-h-[88vh] flex items-center justify-center overflow-hidden bg-stone-950">
      {/* Background Video Layer */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="./assets/hero-poster.jpg"
          className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.05]"
        >
          <source src="./assets/hero-video.mp4" type="video/mp4" />
          <img
            src="./assets/hero-poster.jpg"
            alt="Early childhood classroom setting with natural materials and artwork"
            className="w-full h-full object-cover"
          />
        </video>
        {/* Multilayer Accessible Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/80 to-stone-900/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 to-transparent z-10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Natural Tones Eyebrow */}
        <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-blue-400 mb-3 block">
          Free &amp; Accessible Education for All
        </span>

        {/* Pill Badges */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse" />
            Curriculum Aligned
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase bg-blue-600/30 text-blue-200 border border-blue-400/40 backdrop-blur-md">
            Creative Arts Strands
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-stone-900/80 text-stone-300 border border-stone-700/80 backdrop-blur-md">
            EYLF V2.0
          </span>
        </div>

        {/* Main Title & Subtitle styled with Natural Tones font pairings */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.1] max-w-4xl text-balance">
          Empowering Creativity <br className="hidden sm:inline" />
          <span className="font-bold italic text-blue-100 font-serif">in the Early Years</span>
        </h1>
        <p className="mt-3 sm:mt-4 text-xl sm:text-2xl md:text-3xl font-semibold text-stone-200 tracking-normal">
          Arts Learning Experience
        </p>

        {/* Framing Narrative */}
        <p className="mt-6 text-base sm:text-lg text-stone-300 max-w-3xl leading-relaxed text-balance font-normal">
          An authentic curriculum resource uniting the five Creative Arts strands —{' '}
          <span className="text-amber-300 font-medium">Music</span>,{' '}
          <span className="text-emerald-300 font-medium">Visual Arts</span>,{' '}
          <span className="text-orange-300 font-medium">Dance</span>,{' '}
          <span className="text-sky-300 font-medium">Media Arts</span>, and{' '}
          <span className="text-teal-300 font-medium">Drama</span>{' '}
          — grounded in evidence-based research, Bloom&apos;s Taxonomy, and the cultural richness of Australian early childhood learning communities.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#overview"
            onClick={(e) => scrollToSection(e, 'overview')}
            className="bg-white text-stone-900 hover:bg-stone-100 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>Start Learning Experience</span>
            <svg className="w-4 h-4 text-stone-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a
            href="#assignment-footer"
            onClick={(e) => scrollToSection(e, 'assignment-footer')}
            className="bg-blue-600 text-white hover:bg-blue-700 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-200 shadow-md shadow-blue-900/30"
          >
            Assignment Details
          </a>
        </div>

        {/* 5 Strands Quick Navigation Pills */}
        <div className="mt-12 pt-8 border-t border-stone-800/80 w-full max-w-4xl">
          <p className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-3">
            Quick Jump to Arts Strand
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              { id: 'music', name: 'Music', color: '#d97706', bg: 'hover:border-amber-400' },
              { id: 'visual-arts', name: 'Visual Arts', color: '#059669', bg: 'hover:border-emerald-400' },
              { id: 'dance', name: 'Dance', color: '#ea580c', bg: 'hover:border-orange-400' },
              { id: 'media-arts', name: 'Media Arts', color: '#0284c7', bg: 'hover:border-sky-400' },
              { id: 'drama', name: 'Drama', color: '#0d9488', bg: 'hover:border-teal-400' },
            ].map((strand) => (
              <a
                key={strand.id}
                href={`#${strand.id}`}
                onClick={(e) => scrollToSection(e, strand.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold text-stone-200 bg-stone-900/90 border border-stone-700/80 ${strand.bg} transition-all duration-150 hover:text-white hover:scale-105 flex items-center gap-2`}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: strand.color }} />
                {strand.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
