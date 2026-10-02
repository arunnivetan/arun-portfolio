export type SignalPath = 'power' | 'control' | 'renewable' | 'all';

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'IoT & AI' | 'AI Product' | 'Enterprise CRM' | 'Concept';
  description: string;
  fullDetails: string;
  technologies: string[];
  achievements?: string[];
  flowNodes: {
    id: string;
    label: string;
    sublabel?: string;
    type: 'input' | 'process' | 'cloud' | 'output';
  }[];
  signalType: 'power' | 'control' | 'renewable';
}

export interface Internship {
  id: string;
  company: string;
  role: string;
  period: string;
  duration: string;
  voltageLevels?: string[];
  keyHighlights: string[];
  detailedDescription: string;
  type: 'industrial' | 'solar' | 'software' | 'embedded';
  icon: string;
}

export interface SkillCategory {
  title: string;
  code: string;
  color: 'red' | 'blue' | 'green' | 'amber';
  skills: {
    name: string;
    level: string; // e.g., "Practical Exposure", "Certified", "Project Applied"
    tooltip: string;
  }[];
}

export interface Achievement {
  id: string;
  number: string;
  title: string;
  organization: string;
  details: string;
  badge?: string;
  type: 'award' | 'publication' | 'ipr' | 'competition';
}
