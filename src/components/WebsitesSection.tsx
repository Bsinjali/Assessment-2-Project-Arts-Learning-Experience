import React from 'react';
import { WebsiteResource } from '../types';

interface WebsitesSectionProps {
  strandName: string;
  strandColor: string;
  websites: WebsiteResource[];
}

export const WebsitesSection: React.FC<WebsitesSectionProps> = ({
  strandName,
  strandColor,
  websites,
}) => {
  return (
    <div className="mb-14">
      {/* Websites Subheader */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-3 border-b border-stone-200">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-widest text-stone-400 block">
            Recommended Digital Resources: {strandName}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2.5 mt-0.5">
            <span>Evaluated Websites</span>
            <span
              className="text-xs font-bold px-2.5 py-0.5 rounded-full text-white shadow-2xs"
              style={{ backgroundColor: strandColor }}
            >
              4 Resources
            </span>
          </h3>
        </div>
        <p className="text-xs text-stone-500 max-w-sm sm:text-right font-medium">
          Critiqued for curriculum alignment, Australian ELC context, and cost accessibility.
        </p>
      </div>

      {/* 4 Cards Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {websites.map((site) => {
          let hostname = '';
          try {
            hostname = new URL(site.url).hostname.replace(/^www\./, '');
          } catch {
            hostname = site.url;
          }

          return (
            <div
              key={site.number}
              className="bg-white rounded-xl border border-stone-200 p-5 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Header: Number & Category Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className="w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center text-white shadow-2xs"
                    style={{ backgroundColor: strandColor }}
                  >
                    {site.number}
                  </span>
                  <span className="text-[11px] font-semibold text-stone-600 bg-stone-100 px-2.5 py-0.5 rounded-md truncate max-w-[190px] border border-stone-200/50">
                    {site.category}
                  </span>
                </div>

                {/* Website Name */}
                <h4 className="text-base font-bold text-stone-900 leading-snug hover:text-blue-700 transition-colors">
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus:outline-none focus:underline"
                  >
                    {site.name}
                  </a>
                </h4>

                {/* Domain Pill (Natural Tones feature) */}
                <div className="mt-1.5 mb-2">
                  <span className="text-[10px] font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 inline-block font-semibold">
                    {hostname}
                  </span>
                </div>

                {/* Short Description */}
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  {site.description}
                </p>

                {/* Useful For Callout */}
                <div className="mt-3.5 pt-3 border-t border-stone-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-1">
                    Useful For:
                  </span>
                  <p className="text-xs text-stone-700 font-medium leading-normal">
                    {site.usefulFor}
                  </p>
                </div>

                {/* Strength & Weakness Critiques */}
                <div className="mt-3.5 space-y-2">
                  <div className="bg-emerald-50/80 border border-emerald-200/90 rounded-lg p-2.5">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-800 uppercase tracking-wide">
                      <svg className="w-3.5 h-3.5 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Strength:</span>
                    </div>
                    <p className="text-[11px] text-emerald-950 mt-1 leading-normal font-medium">
                      {site.strength}
                    </p>
                  </div>

                  <div className="bg-amber-50/80 border border-amber-200/90 rounded-lg p-2.5">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-800 uppercase tracking-wide">
                      <svg className="w-3.5 h-3.5 text-amber-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>Limitation / Weakness:</span>
                    </div>
                    <p className="text-[11px] text-amber-950 mt-1 leading-normal font-medium">
                      {site.weakness}
                    </p>
                  </div>
                </div>
              </div>

              {/* External Link Action Button */}
              <div className="mt-5 pt-3 border-t border-stone-100">
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-lg text-xs font-bold text-stone-700 bg-stone-50 hover:bg-stone-100 hover:text-blue-700 border border-stone-200 flex items-center justify-center gap-1.5 transition-colors group"
                >
                  <span>Visit Resource</span>
                  <svg
                    className="w-3.5 h-3.5 text-stone-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
