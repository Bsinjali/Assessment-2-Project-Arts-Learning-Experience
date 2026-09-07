import React, { useState } from 'react';
import { DomainContent } from '../types';
import { WebsitesSection } from './WebsitesSection';

interface LessonPlanSectionProps {
  domain: DomainContent;
}

export const LessonPlanSection: React.FC<LessonPlanSectionProps> = ({ domain }) => {
  const [openSteps, setOpenSteps] = useState<Record<string, boolean>>({
    '0': true, // Keep first step open by default
  });

  const toggleStep = (index: number) => {
    setOpenSteps((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleAllSteps = () => {
    const allOpen = domain.lessonPlan.activityDescription.steps.every((_, idx) => openSteps[idx]);
    const newState: Record<string, boolean> = {};
    domain.lessonPlan.activityDescription.steps.forEach((_, idx) => {
      newState[idx] = !allOpen;
    });
    setOpenSteps(newState);
  };

  const allStepsOpen = domain.lessonPlan.activityDescription.steps.every((_, idx) => openSteps[idx]);

  return (
    <section
      id={domain.id}
      className="py-16 sm:py-20 border-b border-stone-200 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Domain Section Header & Branding */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span
              className="px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest text-white shadow-2xs"
              style={{ backgroundColor: domain.strandColor }}
            >
              Creative Arts Strand
            </span>
            <span
              className="px-3 py-1 rounded-full text-xs font-bold"
              style={{
                backgroundColor: domain.badgeBg,
                color: domain.badgeText,
                border: `1px solid ${domain.badgeBorder}`,
              }}
            >
              Early Childhood Education
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight">
            {domain.name}
          </h2>

          {domain.quote && (
            <div className="mt-4 p-4 rounded-xl bg-stone-50 border-l-4 border-stone-300 text-stone-700 italic text-sm sm:text-base leading-relaxed">
              {domain.quote}
            </div>
          )}
        </div>

        {/* 1. Websites Section (4 Evaluated Cards) */}
        <WebsitesSection
          strandName={domain.name}
          strandColor={domain.strandColor}
          websites={domain.websites}
        />

        {/* 2. Spotlight Lesson Plan Header */}
        <div className="pt-8 border-t border-stone-200">
          <div className="mb-6">
            <span className="text-[11px] font-bold uppercase tracking-widest text-blue-900 block">
              Curriculum In Practice
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
              {domain.lessonPlan.title}
            </h3>
          </div>

          {/* Pedagogical Metadata Table */}
          <div className="bg-stone-50 rounded-xl border border-stone-200 overflow-hidden mb-10 shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <tbody>
                  <tr className="border-b border-stone-200">
                    <th className="py-3 px-4 font-bold text-stone-800 bg-stone-100/80 w-1/4">Age Group</th>
                    <td className="py-3 px-4 text-stone-700 w-1/4">{domain.lessonPlan.table.ageGroup}</td>
                    <th className="py-3 px-4 font-bold text-stone-800 bg-stone-100/80 w-1/4">Duration</th>
                    <td className="py-3 px-4 text-stone-700 w-1/4">{domain.lessonPlan.table.duration}</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <th className="py-3 px-4 font-bold text-stone-800 bg-stone-100/80">Number of Children</th>
                    <td className="py-3 px-4 text-stone-700">{domain.lessonPlan.table.numberOfChildren}</td>
                    <th className="py-3 px-4 font-bold text-stone-800 bg-stone-100/80">Staff Required</th>
                    <td className="py-3 px-4 text-stone-700">{domain.lessonPlan.table.staffRequired}</td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <th className="py-3 px-4 font-bold text-stone-800 bg-stone-100/80">Learning Area</th>
                    <td className="py-3 px-4 text-stone-700 font-semibold" colSpan={3}>
                      {domain.lessonPlan.table.learningArea}
                    </td>
                  </tr>
                  <tr className="border-b border-stone-200">
                    <th className="py-3 px-4 font-bold text-stone-800 bg-stone-100/80">Pedagogical Approach</th>
                    <td className="py-3 px-4 text-stone-700" colSpan={3}>
                      {domain.lessonPlan.table.pedagogicalApproach}
                    </td>
                  </tr>
                  <tr>
                    <th className="py-3 px-4 font-bold text-stone-800 bg-stone-100/80">Classroom Setting</th>
                    <td className="py-3 px-4 text-stone-700" colSpan={3}>
                      {domain.lessonPlan.table.classroomSetting}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Rationale */}
          <div className="mb-10 bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
            <h4 className="text-lg font-bold text-stone-900 mb-3 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: domain.strandColor }} />
              Rationale &amp; Pedagogical Intent
            </h4>
            <div className="text-stone-700 text-sm sm:text-base leading-relaxed whitespace-pre-line">
              {domain.lessonPlan.rationale}
            </div>
          </div>

          {/* EYLF Outcomes */}
          <div className="mb-10">
            <h4 className="text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: domain.strandColor }} />
              Early Years Learning Framework (EYLF V2.0) Connections
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {domain.lessonPlan.eylfOutcomes.map((eylf, idx) => (
                <div key={idx} className="bg-stone-50 border border-stone-200 rounded-xl p-5 shadow-xs">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-blue-800 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-md inline-block mb-3">
                    {eylf.outcomeTitle}
                  </span>
                  <p className="text-stone-700 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                    {eylf.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Materials Required */}
          <div className="mb-10 bg-stone-50 rounded-xl border border-stone-200 p-6 shadow-xs">
            <h4 className="text-lg font-bold text-stone-900 mb-3 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: domain.strandColor }} />
              Materials Required
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-sm text-stone-700">
              {domain.lessonPlan.materialsRequired.map((mat, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-white px-3 py-2 rounded-lg border border-stone-200/80">
                  <svg className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="leading-tight">{typeof mat === 'string' ? mat : JSON.stringify(mat)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Activity Description & Step-by-Step Instructions */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: domain.strandColor }} />
                Detailed Description of Activity (Step-by-Step)
              </h4>
              <button
                type="button"
                onClick={toggleAllSteps}
                className="text-xs font-bold text-blue-700 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 border border-blue-100 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1"
              >
                {allStepsOpen ? 'Collapse All Steps' : 'Expand All Steps'}
              </button>
            </div>

            {/* Introduction Card */}
            <div className="bg-blue-50/60 border border-blue-200/80 rounded-xl p-5 mb-4 shadow-xs">
              <span className="text-xs font-bold text-blue-900 uppercase tracking-wider block mb-1">
                {domain.lessonPlan.activityDescription.introductionTitle}
              </span>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {domain.lessonPlan.activityDescription.introductionText}
              </p>
            </div>

            {/* Steps Accordion */}
            <div className="space-y-3">
              {domain.lessonPlan.activityDescription.steps.map((step, idx) => {
                const isOpen = !!openSteps[idx];
                return (
                  <div
                    key={idx}
                    className={`border rounded-xl transition-all duration-200 overflow-hidden ${
                      isOpen ? 'border-blue-300 bg-stone-50/60 shadow-xs' : 'border-stone-200 bg-white hover:border-stone-300'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleStep(idx)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none focus:bg-stone-50"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="w-8 h-8 rounded-lg text-xs font-bold flex items-center justify-center text-white shrink-0 shadow-2xs"
                          style={{ backgroundColor: domain.strandColor }}
                        >
                          {step.stepNumber.replace('Step ', '')}
                        </span>
                        <span className="font-bold text-stone-900 text-sm sm:text-base">
                          {step.stepNumber}: {step.title}
                        </span>
                      </div>
                      <svg
                        className={`w-5 h-5 text-stone-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-600' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 border-t border-stone-100 text-sm text-stone-700 leading-relaxed">
                        <div className="space-y-2 mb-3">
                          {step.instructions.map((inst, iIdx) => (
                            <p key={iIdx} className="whitespace-pre-line">
                              {inst}
                            </p>
                          ))}
                        </div>

                        {step.dialogue && step.dialogue.length > 0 && (
                          <div className="mt-4 pt-3 border-t border-stone-200/60 space-y-2">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-1">
                              Instructional Dialogue &amp; Inquiries:
                            </span>
                            {step.dialogue.map((dlg, dIdx) => (
                              <div
                                key={dIdx}
                                className={`p-3 rounded-lg text-xs sm:text-sm border-l-4 ${
                                  dlg.speaker === 'educator'
                                    ? 'bg-blue-50/80 border-blue-600 text-stone-900'
                                    : 'bg-emerald-50/80 border-emerald-600 text-emerald-950 font-medium'
                                }`}
                              >
                                <span className="font-bold uppercase tracking-wider text-[10px] block mb-0.5 text-stone-500">
                                  {dlg.speaker === 'educator' ? 'Educator Prompt:' : 'Children Expected Response:'}
                                </span>
                                {dlg.text}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bloom's Taxonomy Matrix */}
          <div className="mb-12">
            <h4 className="text-lg font-bold text-stone-900 mb-3 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: domain.strandColor }} />
              Children&apos;s Learning Assessment through Bloom&apos;s Taxonomy
            </h4>
            <div className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-stone-100 text-stone-900 font-bold border-b border-stone-200">
                      <th className="py-3 px-4 w-1/5">Cognitive Level</th>
                      <th className="py-3 px-4 w-2/5">What the Educator Looks/Listens For</th>
                      <th className="py-3 px-4 w-2/5">Question &amp; Expected Children&apos;s Response</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    {domain.lessonPlan.bloomsTaxonomy.items.map((item, idx) => {
                      const levelColors: Record<string, string> = {
                        Remember: 'bg-blue-100 text-blue-800',
                        Understand: 'bg-emerald-100 text-emerald-800',
                        Apply: 'bg-amber-100 text-amber-800',
                        Analyse: 'bg-pink-100 text-pink-800',
                        Evaluate: 'bg-purple-100 text-purple-800',
                        Create: 'bg-orange-100 text-orange-800',
                      };

                      return (
                        <tr key={idx} className="hover:bg-stone-50/80 transition-colors">
                          <td className="py-3 px-4 font-bold align-top">
                            <span className={`px-2.5 py-1 rounded-md text-[11px] font-extrabold uppercase tracking-wide inline-block ${levelColors[item.level] || 'bg-stone-100 text-stone-800'}`}>
                              {item.level}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-stone-700 align-top leading-relaxed">
                            {item.lookListenFor}
                          </td>
                          <td className="py-3 px-4 text-stone-800 align-top leading-relaxed">
                            {item.questionAndResponse}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="p-3 bg-stone-50 border-t border-stone-200 text-xs text-stone-500">
                <span>Taxonomy Framework Citation: </span>
                <span className="font-medium text-stone-700">{domain.lessonPlan.bloomsTaxonomy.source}</span>
                {domain.lessonPlan.bloomsTaxonomy.sourceUrl && (
                  <a
                    href={domain.lessonPlan.bloomsTaxonomy.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 text-blue-600 hover:underline font-semibold"
                  >
                    [View Academic Source]
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Future Plan / Future Planning */}
          <div className="mb-10 bg-stone-50 rounded-xl border border-stone-200 p-6 shadow-xs">
            <h4 className="text-lg font-bold text-stone-900 mb-2 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: domain.strandColor }} />
              {domain.lessonPlan.futurePlanTitle}
            </h4>
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              {domain.lessonPlan.futurePlanText}
            </p>
          </div>

          {/* References */}
          <div className="p-6 bg-white rounded-xl border border-stone-200 shadow-xs">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-stone-500 mb-3">
              References &amp; Academic Citations
            </h4>
            <ul className="space-y-2 text-xs text-stone-600 leading-relaxed divide-y divide-stone-100">
              {domain.lessonPlan.references.map((ref, idx) => (
                <li key={idx} className="pt-2 first:pt-0">
                  <span>{ref.citation} </span>
                  {ref.url && (
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline break-all"
                    >
                      {ref.url}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
