import React from 'react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <footer id="assignment-footer" className="bg-stone-900 text-white pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Brand & Project Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center shadow-xs">
                <img src="./assets/logo.svg" alt="Arts Learning Experience Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-extrabold text-lg text-white block uppercase tracking-tight">
                  Arts Learning Experience
                </span>
                <span className="text-xs font-semibold text-stone-400">
                  Early Childhood Education Curriculum Hub
                </span>
              </div>
            </div>

            <p className="text-sm text-stone-400 leading-relaxed max-w-md">
              A comprehensive educational resource developed for early childhood educators, integrating five Creative Arts strands with English, Science, Mathematics, Humanities, and Health curricula in alignment with the Early Years Learning Framework (EYLF V2.0).
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 transition-colors"
              >
                <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                <span>Print / Save as PDF</span>
              </button>

              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 transition-colors"
              >
                <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span>Back to Top</span>
              </button>
            </div>
          </div>

          {/* Quick Curriculum Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-stone-400">
              Creative Arts Strands
            </h4>
            <ul className="space-y-2 text-sm text-stone-300">
              <li>
                <a href="#overview" className="hover:text-white transition-colors">
                  Overview &amp; Pedagogical Rationale
                </a>
              </li>
              <li>
                <a href="#music" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  Music (The Three Billy Goats Gruff)
                </a>
              </li>
              <li>
                <a href="#visual-arts" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Visual Arts (Leaf Scientists)
                </a>
              </li>
              <li>
                <a href="#dance" className="hover:text-orange-400 transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-500" />
                  Dance (Direction &amp; Movement)
                </a>
              </li>
              <li>
                <a href="#media-arts" className="hover:text-sky-400 transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-500" />
                  Media Arts (Digital Storybook)
                </a>
              </li>
              <li>
                <a href="#drama" className="hover:text-teal-400 transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-500" />
                  Drama (Exploring Emotions)
                </a>
              </li>
            </ul>
          </div>

          {/* Official Assessment & Submission Card (Mandatory exact text) */}
          <div className="md:col-span-4 bg-stone-800/80 border border-stone-700/80 rounded-2xl p-6 shadow-md">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30 mb-3">
              Academic Assessment Record
            </div>

            <div className="space-y-2 text-sm">
              <p className="font-extrabold text-white text-base leading-snug">
                Assessment 2: Project Arts Learning Experience
              </p>
              <div className="pt-2 text-xs space-y-1 text-stone-300">
                <p>
                  <strong className="text-stone-100">Submitted By:</strong> Sajani Lama Jimba (S8218647)
                </p>
                <p>
                  <strong className="text-stone-100">Degree:</strong> Bachelor of Early Childhood Education
                </p>
                <p>
                  <strong className="text-stone-100">Institution:</strong> Victoria University, Brisbane, QLD
                </p>
                <p>
                  <strong className="text-stone-100">Unit:</strong> EEC1113: Creativity and the Arts in Education
                </p>
                <p>
                  <strong className="text-stone-100">To:</strong> Sunam Pradhan
                </p>
                <p>
                  <strong className="text-stone-100">Date:</strong> September 7, 2026
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-footer Copyright & Framework Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>&copy; 2026 Arts Learning Experience &bull; Victoria University &bull; Early Childhood Education</p>
          <p className="text-center sm:text-right">
            Curriculum frameworks: Australian Curriculum (ACARA) &amp; EYLF V2.0 (AGDE, 2022)
          </p>
        </div>
      </div>
    </footer>
  );
};
