export interface Country {
  name: string;
  flag: string;
  universities: number;
  budgetRange: string;
  budgetNote: string;
  highlights: string[];
}

export const countries: Country[] = [
  {
    name: "Russia",
    flag: "🇷🇺",
    universities: 25,
    budgetRange: "15-40 Lakhs",
    budgetNote: "Approx. yearly fee",
    highlights: [
      "Affordable MBBS Programs",
      "MCI Approved Universities",
      "English Medium",
    ],
  },
  {
    name: "Georgia",
    flag: "🇬🇪",
    universities: 6,
    budgetRange: "20-30 Lakhs",
    budgetNote: "Approx. yearly fee",
    highlights: [
      "European Standards",
      "Quality Education",
      "Globally Recognized",
    ],
  },
  {
    name: "Kazakhstan",
    flag: "🇰🇿",
    universities: 12,
    budgetRange: "20-30 Lakhs",
    budgetNote: "Approx. yearly fee",
    highlights: [
      "Modern Infrastructure",
      "Safe Environment",
      "Growing Medical Hub",
    ],
  },
  {
    name: "Uzbekistan",
    flag: "🇺🇿",
    universities: 8,
    budgetRange: "20-30 Lakhs",
    budgetNote: "Approx. yearly fee",
    highlights: [
      "Advanced Facilities",
      "Affordable Living Cost",
      "Rich Medical Heritage",
    ],
  },
  {
    name: "China",
    flag: "🇨🇳",
    universities: 30,
    budgetRange: "30-40 Lakhs",
    budgetNote: "Approx. yearly fee",
    highlights: [
      "World-Class Facilities",
      "Advanced Technology",
      "International Exposure",
    ],
  },
  {
    name: "Bangladesh",
    flag: "🇧🇩",
    universities: 15,
    budgetRange: "30-40 Lakhs",
    budgetNote: "Approx. yearly fee",
    highlights: [
      "Quality Medical Education",
      "Similar Culture & Food",
      "No Language Barrier",
    ],
  },
  {
    name: "Nepal",
    flag: "🇳🇵",
    universities: 10,
    budgetRange: "30-40 Lakhs",
    budgetNote: "Approx. yearly fee",
    highlights: [
      "Close to India",
      "Cultural Familiarity",
      "Recognized Institutions",
    ],
  },
];
