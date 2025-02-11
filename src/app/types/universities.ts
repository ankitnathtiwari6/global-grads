// types/universities.ts
export interface University {
  id: string;
  name: string;
  country: string;
  city: string;
  courseLength: string;
  annualFees: string;
  language: string;
  imageUrl: string;
  features: string[];
  description: string;
  accreditation: string[];
  ranking: string;
  admissionRequirements: string[];
}

export interface FAQ {
  q: string;
  a: string;
}
