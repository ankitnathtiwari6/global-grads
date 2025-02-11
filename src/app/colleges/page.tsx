"use client";

import React, { useState, useMemo } from "react";
import { Search } from "lucide-react";
import Link from "next/link";
import { collegesData } from "../data/colleges";

const CollegesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [countryFilter, setCountryFilter] = useState("All");

  const filteredColleges = useMemo(() => {
    return collegesData.filter((college) => {
      const matchesSearch =
        college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        college.city.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCountry =
        countryFilter === "All" || college.country === countryFilter;
      return matchesSearch && matchesCountry;
    });
  }, [searchTerm, countryFilter]);

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Filters Section */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text/50"
                size={20}
              />
              <input
                type="text"
                placeholder="Search colleges..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary bg-background text-text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filters */}
            <select
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary bg-background text-text"
              value={countryFilter}
              onChange={(e) => setCountryFilter(e.target.value)}
            >
              <option value="All">All Countries</option>
              <option value="Russia">Russia</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Uzbekistan">Uzbekistan</option>
            </select>
          </div>
        </div>
      </div>

      {/* Colleges Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredColleges.map((college) => (
            <div
              key={college.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-text">
                  {college.name}
                </h3>
                <div className="text-text/70 mb-4">
                  <p>
                    {college.city}, {college.country}
                  </p>
                </div>
                <div className="space-y-2 text-sm text-text/80">
                  <div className="flex justify-between">
                    <span>Total Expense:</span>
                    <span className="font-semibold">
                      $
                      {college.totalExpenseUSD?.toLocaleString() ??
                        "Contact us"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Available Seats:</span>
                    <span className="font-semibold">
                      {college.availableSeats ??
                        college.totalSeats ??
                        "Contact us"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Start Date:</span>
                    <span className="font-semibold">
                      {college.classStartDate || "Contact us"}
                    </span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-text/10">
                  <Link
                    href={`/colleges/${college.id}`}
                    className="block text-center bg-primary text-background py-2 rounded-lg hover:bg-primary-hover transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredColleges.length === 0 && (
          <div className="text-center py-12">
            <p className="text-text/70">
              No colleges found matching your criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CollegesPage;
