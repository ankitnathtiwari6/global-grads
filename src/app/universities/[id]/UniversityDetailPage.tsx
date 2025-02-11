// app/universities/[id]/UniversityDetailPage.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import Footer from "../../components/FooterSection";
import MobileBottomBar from "../../components/MobileBottomBarSection";
import {
  MapPin,
  Clock,
  DollarSign,
  CheckCircle,
  Globe,
  Award,
  BookOpen,
  ChevronRight,
  ClipboardList,
  School,
} from "lucide-react";
import type { University } from "../../types/universities";

interface UniversityDetailPageProps {
  university: University;
}

const UniversityDetailPage: React.FC<UniversityDetailPageProps> = ({
  university,
}) => {
  return (
    <main className="min-h-screen bg-[#fffdf9]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 mt-12">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
            <Link href="/" className="hover:text-[#dd1d2d]">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/universities" className="hover:text-[#dd1d2d]">
              Universities
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-[#dd1d2d]">{university.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Image and Quick Info */}
            <div className="space-y-8">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={university.imageUrl || "/api/placeholder/800/600"}
                  alt={university.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="w-full"
                />
              </div>

              {/* Quick Info Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <Clock className="h-6 w-6 text-[#dd1d2d] mb-2" />
                  <h3 className="font-semibold text-sm mb-1">Duration</h3>
                  <p className="text-gray-600">{university.courseLength}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <DollarSign className="h-6 w-6 text-[#dd1d2d] mb-2" />
                  <h3 className="font-semibold text-sm mb-1">Annual Fees</h3>
                  <p className="text-gray-600">{university.annualFees}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <Globe className="h-6 w-6 text-[#dd1d2d] mb-2" />
                  <h3 className="font-semibold text-sm mb-1">Language</h3>
                  <p className="text-gray-600">{university.language}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <MapPin className="h-6 w-6 text-[#dd1d2d] mb-2" />
                  <h3 className="font-semibold text-sm mb-1">Location</h3>
                  <p className="text-gray-600">
                    {university.city}, {university.country}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - University Details */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-[#2b2b2b] mb-4">
                  {university.name}
                </h1>
                <p className="text-gray-600">{university.description}</p>
              </div>

              {/* Key Features */}
              <div>
                <h2 className="text-2xl font-bold text-[#2b2b2b] mb-4 flex items-center gap-2">
                  <Award className="h-6 w-6 text-[#dd1d2d]" />
                  Key Features
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {university.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Accreditation */}
              <div>
                <h2 className="text-2xl font-bold text-[#2b2b2b] mb-4 flex items-center gap-2">
                  <School className="h-6 w-6 text-[#dd1d2d]" />
                  Accreditation
                </h2>
                <div className="flex flex-wrap gap-3">
                  {university.accreditation.map((item, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Admission Requirements */}
              <div>
                <h2 className="text-2xl font-bold text-[#2b2b2b] mb-4 flex items-center gap-2">
                  <ClipboardList className="h-6 w-6 text-[#dd1d2d]" />
                  Admission Requirements
                </h2>
                <ul className="space-y-3">
                  {university.admissionRequirements.map(
                    (requirement, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{requirement}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* CTA Button */}
              <button
                onClick={() =>
                  document
                    .getElementById("lead-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full bg-[#dd1d2d] text-white py-4 rounded-lg hover:bg-[#dd1d2d]/90 transition-colors flex items-center justify-center gap-2 font-semibold"
              >
                <BookOpen className="h-5 w-5" />
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Universities Section */}
      <section className="py-16 bg-gray-50 mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Similar Universities
          </h2>
          {/* Add similar universities grid here */}
        </div>
      </section>

      {/* Lead Form Section */}
      <section id="lead-form" className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-3xl font-bold text-center mb-8">
              Apply to {university.name}
            </h2>
            {/* Add your LeadForm component here */}
          </div>
        </div>
      </section>

      <MobileBottomBar />
      <Footer />
    </main>
  );
};

export default UniversityDetailPage;
