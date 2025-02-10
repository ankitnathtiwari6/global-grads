export interface College {
  id: number;
  name: string;
  country: string;
  city: string;
  totalExpenseUSD: number;
  totalExpenseINR: number;
  messDetails?: string;
  livingExpenses?: string;
  route?: string;
  partner?: string;
  totalSeats: number;
  availableSeats?: number;
  eligibilityCriteria: string;
  otc?: string;
  consultancyFees: string;
  admissionStartDate: string;
  classStartDate: string;
  winterIntake: boolean;
  distanceFromCapital?: string;
  comments?: string;
}

export type CountryFilter = "All" | "Russia" | "Bangladesh" | "Uzbekistan";
export type SortOption = "name" | "fees" | "country";
