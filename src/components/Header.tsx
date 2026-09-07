import React, { useState, useEffect } from 'react';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Overview', href: '#overview' },
    { label: 'Music', href: '#music', color: '#d97706' },
    { label: 'Visual Arts', href: '#visual-arts', color: '#059669' },
    { label: 'Dance', href: '#dance', color: '#ea580c' },
    { label: 'Media Arts', href: '#media-arts', color: '#0284c7' },
    { label: 'Drama', href: '#drama', color: '#0d9488' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 72;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <a href="#overview" className="skip-link">
        Skip to main content
      </a>

      <header
        id="main-header"
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-2.5 border-b border-stone-200'
            : 'bg-white/90 backdrop-blur-sm py-3.5 border-b border-stone-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Branding */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group text-left focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-lg p-1"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white shadow-xs border border-stone-200 p-1 flex items-center justify-center overflow-hidden transition-transform duration-200 group-hover:scale-105">
              <img
                src="./assets/logo.svg"
                alt="Arts Learning Experience Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = './assets/logo.png';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-base tracking-tight text-blue-900 group-hover:text-blue-700 transition-colors uppercase leading-none">
                Arts Learning Experience
              </span>
              <span className="text-[10px] sm:text-xs text-stone-500 uppercase tracking-widest leading-tight mt-1">
                Early Childhood Education
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2" aria-label="Main Navigation">
            <div className="flex items-center gap-1 sm:gap-2 text-xs font-semibold uppercase tracking-wider text-stone-600">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-150 ${
                      isActive
                        ? 'text-blue-600 bg-blue-50/80 border-b-2 border-blue-600 font-extrabold shadow-2xs'
                        : 'text-stone-600 hover:text-blue-600 hover:bg-stone-100/80'
                    }`}
                    style={isActive && item.color ? { color: item.color } : {}}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>

            <div className="h-4 w-px bg-stone-200 mx-2" />

            <a
              href="#assignment-footer"
              onClick={(e) => handleNavClick(e, '#assignment-footer')}
              className="bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide hover:bg-blue-700 transition-all shadow-xs"
            >
              EEC1113 Hub
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-700 hover:text-stone-900 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-stone-900/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white border-l border-stone-200 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-stone-200">
                <div className="flex items-center gap-2.5">
                  <img src="./assets/logo.svg" alt="Logo" className="w-8 h-8 object-contain" />
                  <span className="font-bold text-stone-900 text-sm">Arts Learning Menu</span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-md text-stone-500 hover:text-stone-800 hover:bg-stone-100"
                  aria-label="Close menu"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mt-6 flex flex-col gap-1.5">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.replace('#', '');
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between ${
                        isActive
                          ? 'bg-blue-50 text-blue-700 font-bold border-l-4 border-blue-600'
                          : 'text-stone-700 hover:bg-stone-50'
                      }`}
                    >
                      <span>{item.label}</span>
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: item.color || '#2563eb' }}
                      />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-stone-200">
              <a
                href="#assignment-footer"
                onClick={(e) => handleNavClick(e, '#assignment-footer')}
                className="block w-full py-2.5 px-4 text-center rounded-full bg-blue-600 text-white font-bold text-xs uppercase tracking-wide hover:bg-blue-700 transition-colors shadow-sm"
              >
                View Assessment Info
              </a>
              <p className="text-[10px] text-stone-400 text-center mt-3 uppercase tracking-wider">
                Victoria University • Early Childhood Education
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
