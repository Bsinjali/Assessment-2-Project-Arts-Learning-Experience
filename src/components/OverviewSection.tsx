import React from 'react';
import { overviewData } from '../data/overviewData';

export const OverviewSection: React.FC = () => {
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
    <section id="overview" className="py-16 sm:py-20 bg-stone-100/50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-800 border border-blue-200 mb-3">
            Pedagogical Toolkit &amp; Context
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            {overviewData.introTitle}
          </h2>
          <div className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed whitespace-pre-line">
            {overviewData.introText}
          </div>
        </div>

        {/* Cohort Snapshot Banner */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-100">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-stone-400 block">
                Community Profile
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                {overviewData.cohort.title}
              </h3>
            </div>
            <span className="inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-lg bg-stone-100 text-stone-700 border border-stone-200/60 w-fit">
              Footscray ELC &amp; Primary Context
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-6">
            {overviewData.cohort.stats.map((stat, idx) => (
              <div key={idx} className="bg-stone-50 rounded-xl p-4 border border-stone-200/80 flex flex-col justify-between shadow-2xs">
                <span className="text-2xl sm:text-3xl font-black text-blue-900">
                  {stat.value}
                </span>
                <span className="text-xs font-medium text-stone-600 mt-2 leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 3-Step Process Cards */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-bold uppercase tracking-widest text-stone-400 block mb-1">
              Methodology &amp; Framework
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-stone-900">
              How to Navigate This Resource
            </h3>
            <p className="text-stone-600 text-sm sm:text-base mt-2">
              Three intentional steps for educators integrating creative arts into classroom investigations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {overviewData.toolkitSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm relative hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white font-extrabold text-lg flex items-center justify-center mb-5 shadow-xs">
                  {step.step}
                </div>
                <h4 className="text-lg font-bold text-stone-900 mb-2">
                  {step.title}
                </h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 5 Strands Exploration Grid */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-stone-200">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-stone-400 block">
                Learning Domains
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                Explore the 5 Creative Arts Strands
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-500 mt-2 sm:mt-0 font-medium">
              Each strand includes 4 evaluated websites + 1 full spotlight lesson plan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {overviewData.domainsSummary.map((domain) => (
              <div
                key={domain.id}
                className="bg-white rounded-2xl border border-stone-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-200 hover:-translate-y-1 shadow-sm"
                style={{ borderTop: `4px solid ${domain.color}` }}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{
                        backgroundColor: domain.bgLight,
                        color: domain.color,
                        border: `1px solid ${domain.border}`
                      }}
                    >
                      {domain.tag}
                    </span>
                    <span className="text-xs font-extrabold text-stone-400 uppercase tracking-wider">
                      4 Websites + Plan
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-stone-900">
                    {domain.name}
                  </h4>
                  <p className="text-xs font-semibold text-stone-500 mt-1 italic">
                    Spotlight: {domain.lessonTitle}
                  </p>
                  <p className="text-stone-600 text-sm mt-3 leading-relaxed">
                    {domain.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <a
                    href={`#${domain.id}`}
                    onClick={(e) => scrollToSection(e, domain.id)}
                    className="inline-flex items-center gap-1.5 text-sm font-bold transition-colors group"
                    style={{ color: domain.color }}
                  >
                    <span>Explore {domain.name}</span>
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
