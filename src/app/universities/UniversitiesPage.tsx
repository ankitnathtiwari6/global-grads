// app/universities/UniversitiesPage.tsx
"use client";

import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import Footer from "../components/FooterSection";
import MobileBottomBar from "../components/MobileBottomBarSection";
import { Search, MapPin, Clock, DollarSign, CheckCircle } from "lucide-react";
import type { University, FAQ } from "../types/universities";
import universities from "../data/universitiesData";
interface UniversitiesPageProps {
  universities: University[];
}

const faqs: FAQ[] = [
  {
    q: "How are these universities selected?",
    a: "Our partner universities are carefully chosen based on their accreditation, teaching quality, infrastructure, and graduate success rates.",
  },
  {
    q: "Are these universities recognized worldwide?",
    a: "Yes, all our partner universities are recognized by major medical councils worldwide, including WHO and other relevant medical authorities.",
  },
];

const UniversitiesPage: React.FC<UniversitiesPageProps> = ({
  universities,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  // Get unique countries for filter
  const countries: string[] = Array.from(
    new Set(universities.map((uni) => uni.country))
  );

  // Filter universities based on search and country
  const filteredUniversities: University[] = universities.filter((uni) => {
    const matchesSearch: boolean =
      uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.country.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry: boolean =
      selectedCountry === "" || uni.country === selectedCountry;
    return matchesSearch && matchesCountry;
  });

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };

  const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setSelectedCountry(e.target.value);
  };

  return (
    <main className="min-h-screen bg-[#fffdf9]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 mt-12 bg-gradient-to-b from-[#fffdf9] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#2b2b2b]">
              World-Class Medical Universities
              <span className="block mt-2 text-[#dd1d2d] text-2xl md:text-3xl">
                Your Gateway to Medical Education
              </span>
            </h1>
            <p className="text-lg text-[#2b2b2b]/80">
              Explore our network of prestigious medical universities offering
              MBBS programs worldwide. Each university is carefully selected to
              ensure quality education and bright career prospects.
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search universities..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#dd1d2d]"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <select
              className="py-3 px-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#dd1d2d]"
              value={selectedCountry}
              onChange={handleCountryChange}
            >
              <option value="">All Countries</option>
              {countries.map((country: string) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          {/* Universities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredUniversities.map((university: University) => (
              <article
                key={university.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={university.imageUrl || "/api/placeholder/400/300"}
                    alt={university.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="w-full"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-[#2b2b2b] mb-4">
                    {university.name}
                  </h2>
                  <div className="space-y-3 text-[#2b2b2b]/80">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-[#dd1d2d]" />
                      <span>
                        {university.city}, {university.country}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-[#dd1d2d]" />
                      <span>{university.courseLength}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-[#dd1d2d]" />
                      <span>{university.annualFees}/year</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-semibold mb-2">Key Features:</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {university.features.map(
                        (feature: string, index: number) => (
                          <li
                            key={index}
                            className="flex items-center gap-1 text-sm"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>{feature}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <Link
                    href={`/universities/${university.id}`}
                    className="mt-6 w-full bg-[#dd1d2d] text-white py-3 rounded-lg hover:bg-[#dd1d2d]/90 transition-colors flex items-center justify-center gap-2"
                  >
                    View Details
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq: FAQ, index: number) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                <p className="text-[#2b2b2b]/80">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MobileBottomBar />
      <Footer />
    </main>
  );
};

export default UniversitiesPage;
