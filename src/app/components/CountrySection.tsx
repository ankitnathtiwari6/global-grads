import Link from "next/link";

const countries = [
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

const CountrySection = () => {
  return (
    <section className="py-20 bg-[#fffdf9]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#2b2b2b]">
          Study MBBS in Popular Countries
        </h2>
        <p className="text-center text-[#2b2b2b]/70 mb-12 max-w-2xl mx-auto">
          Choose from top medical universities with affordable fee structure
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {countries.map((country) => (
            <div
              key={country.name}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Header */}
              <div className="p-6 bg-gradient-to-br from-[#723bcf]/10 to-[#723bcf]/5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{country.flag}</span>
                  <span className="text-sm text-[#2b2b2b]/60 font-medium">
                    {country.universities}+ Universities
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#2b2b2b]">
                  {country.name}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Budget Info */}
                <div className="mb-6">
                  <div className="text-[#2b2b2b]/70 text-sm mb-1">
                    Yearly Budget (Approx.)
                  </div>
                  <div className="text-2xl font-bold text-[#723bcf]">
                    ₹{country.budgetRange}
                  </div>
                  <div className="text-sm text-[#2b2b2b]/60">
                    {country.budgetNote}
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2">
                  {country.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center">
                      <svg
                        className="h-4 w-4 text-[#723bcf] mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-[#2b2b2b]/70">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}

                <Link href="/universities">
                  <button className="w-full mt-6 bg-[#fffdf9] text-[#723bcf] border border-[#723bcf] py-2 rounded-lg hover:bg-[#723bcf] hover:text-white transition-colors">
                    View Universities
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountrySection;
