"use client";

import React from "react";
import { DollarSign, ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/FooterSection";

import { countries, Country } from "../data/countries";

interface CountryCardProps {
  country: Country;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => (
  <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    {/* Background Pattern */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#723bcf]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

    {/* Country Flag and Name */}
    <div className="relative p-6 border-b border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <span className="text-4xl">{country.flag}</span>
        <span className="text-sm font-medium text-[#723bcf] bg-[#723bcf]/10 px-3 py-1 rounded-full">
          {country.universities} Universities
        </span>
      </div>
      <h3 className="text-2xl font-bold text-gray-800">{country.name}</h3>
    </div>

    {/* Budget Information */}
    <div className="p-6 border-b border-gray-100 bg-gray-50">
      <div className="flex items-start">
        <DollarSign className="w-5 h-5 text-[#723bcf] mt-1" />
        <div className="ml-3">
          <p className="text-xl font-bold text-gray-800">
            {country.budgetRange}
          </p>
          <p className="text-sm text-gray-600">{country.budgetNote}</p>
        </div>
      </div>
    </div>

    {/* Highlights */}
    <div className="p-6">
      <h4 className="font-semibold text-gray-800 mb-4">Key Highlights</h4>
      <ul className="space-y-3">
        {country.highlights.map((highlight, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="w-2 h-2 bg-[#723bcf] rounded-full mr-3"></span>
            {highlight}
          </li>
        ))}
      </ul>
    </div>

    {/* Call to Action */}
    <div className="p-6 pt-0">
      <Link
        href={`/countries/${country.name.toLowerCase()}`}
        className="w-full bg-white text-[#723bcf] border-2 border-[#723bcf] rounded-xl py-3 flex items-center justify-center group-hover:bg-[#723bcf] group-hover:text-white transition-all duration-300"
      >
        <span>Learn More</span>
        <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  </div>
);

const CountriesPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <div className="relative bg-[#723bcf] text-white py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#723bcf] via-[#723bcf] to-[#8651d4]"></div>

          <div className="relative container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                MBBS Destinations
              </h1>
              <p className="text-xl text-purple-100 mb-8">
                Explore our partner countries where we provide comprehensive
                admission support and guidance for your medical education
                journey
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="container mx-auto px-4 -mt-16 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:-translate-y-1 transition-transform">
              <div className="text-3xl font-bold text-[#723bcf] mb-2">
                {countries.length}+
              </div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:-translate-y-1 transition-transform">
              <div className="text-3xl font-bold text-[#723bcf] mb-2">
                {countries.reduce(
                  (sum, country) => sum + country.universities,
                  0
                )}
                +
              </div>
              <div className="text-gray-600">Universities</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:-translate-y-1 transition-transform">
              <div className="text-3xl font-bold text-[#723bcf] mb-2">
                5000+
              </div>
              <div className="text-gray-600">Students Placed</div>
            </div>
          </div>
        </div>

        {/* Countries Grid */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Choose Your Destination
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Compare medical universities across different countries and find
              the best option that matches your aspirations and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {countries.map((country) => (
              <CountryCard key={country.name} country={country} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-br from-[#723bcf] to-[#8651d4] rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
              Get in touch with our counselors for personalized guidance on
              choosing the right country and university for your MBBS studies
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-white text-[#723bcf] hover:bg-opacity-90 transition-colors"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="inline-flex items-center px-6 py-3 rounded-xl bg-[#8651d4] text-white hover:bg-opacity-90 transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CountriesPage;
