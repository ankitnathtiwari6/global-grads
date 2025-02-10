// src/app/components/types.ts
export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
}

export interface AchievementCardProps {
  count: string;
  title: string;
}

export interface Country {
  name: string;
  flag: string;
  universities: number;
  avgFees: string;
}

export interface SuccessStory {
  name: string;
  university: string;
  year: number;
  image: string;
  testimony: string;
}
