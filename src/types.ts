export interface WebsiteResource {
  number: number;
  name: string;
  url: string;
  isPlaceholder?: boolean;
  description: string;
  usefulFor: string;
  category: string;
  strength: string;
  weakness: string;
}

export interface BloomTaxonomyItem {
  level: 'Remember' | 'Understand' | 'Apply' | 'Analyse' | 'Evaluate' | 'Create';
  lookListenFor: string;
  questionAndResponse: string;
}

export interface ActivityStep {
  stepNumber: string;
  title: string;
  instructions: string[];
  dialogue?: { speaker: 'educator' | 'children'; text: string }[];
}

export interface DomainContent {
  id: string;
  name: string;
  strandColor: string;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
  quote?: string;
  websites: WebsiteResource[];
  lessonPlan: {
    title: string;
    table: {
      ageGroup: string;
      duration: string;
      numberOfChildren: string;
      learningArea: string;
      staffRequired: string;
      pedagogicalApproach: string;
      classroomSetting: string;
    };
    rationale: string;
    rudolfLabanNote?: string;
    eylfOutcomes: {
      outcomeTitle: string;
      text: string;
    }[];
    materialsRequired: string[] | { category: string; items: string[] }[];
    activityDescription: {
      introductionTitle: string;
      introductionText: string;
      steps: ActivityStep[];
    };
    bloomsTaxonomy: {
      items: BloomTaxonomyItem[];
      source: string;
      sourceUrl: string;
    };
    futurePlanTitle: string;
    futurePlanText: string;
    references: {
      citation: string;
      url?: string;
    }[];
  };
}
