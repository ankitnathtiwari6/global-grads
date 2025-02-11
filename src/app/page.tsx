"use client";

import React from "react";
import Link from "next/link";
import { Phone, ClipboardEdit } from "lucide-react";
import { Navbar } from "./components/Navbar";
import { LeadForm } from "./components/LeadForm";
import { AchievementCard } from "./components/AchievementCard";
import Image from "next/image";
import CountrySection from "./components/CountrySection";
import YouTubeSection from "./components/YoutubeSection";
import Footer from "./components/FooterSection";
import MobileBottomBar from "./components/MobileBottomBarSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffdf9]">
      <Navbar />
      {/* Hero Section */}
      <section id="home" className="pt-20 mt-12">
        <div className="bg-[#fffdf9] text-[#2b2b2b]">
          <div className="container mx-auto px-4">
            {/* Mobile Image - Only visible on mobile */}
            <div className="md:hidden w-full h-64 relative flex justify-start mb-8 pl-8">
              <Image
                src="./Purple and Pink Modern Language Course Home Page Desktop Prototype (4).png"
                alt="Medical Student"
                fill
                style={{ objectFit: "contain", objectPosition: "left center" }}
                priority
                className="w-full"
              />
            </div>

            <div className="flex flex-col md:flex-row items-center">
              {/* Left Content */}
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#2b2b2b]">
                  Study MBBS Abroad
                  <span className="block mt-2 text-[#dd1d2d]">
                    Your Dream, Our Mission
                  </span>
                </h1>
                <p className="text-lg mb-8 text-[#2b2b2b]">
                  Get expert guidance for MBBS admission in top medical
                  universities worldwide
                </p>
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:space-x-4">
                  <button
                    className="bg-[#dd1d2d] text-[#fffdf9] px-6 py-3 rounded-lg font-medium hover:bg-[#dd1d2d]/90 transition-all flex items-center"
                    onClick={() =>
                      document
                        .getElementById("lead-form")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    <ClipboardEdit className="h-5 w-5 mr-2" />
                    Register Now
                  </button>
                  <Link
                    href="tel:+1234567890"
                    className="border-2 border-[#dd1d2d] text-[#dd1d2d] px-6 py-2.5 rounded-lg font-medium hover:bg-[#dd1d2d] hover:text-[#fffdf9] transition-all flex items-center"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Link>
                </div>
              </div>

              {/* Right Side Image - Hidden on mobile */}
              <div className="hidden md:block md:w-1/2 relative h-[500px]">
                <Image
                  src="./Purple and Pink Modern Language Course Home Page Desktop Prototype (4).png"
                  alt="Medical Student"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Lead Form Section */}
      <section id="lead-form" className="py-8 md:py-20 bg-[#fffdf9]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start justify-between gap-12">
            {/* Left Side Content */}
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-4xl font-bold text-[#2b2b2b]">
                Get Free Counseling
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-[#2b2b2b]/80">
                  Take the first step towards your medical career. Our expert
                  counselors will guide you through:
                </p>
                <ul className="space-y-3">
                  {[
                    "University Selection",
                    "Admission Process",
                    "Visa Guidance",
                    "Financial Planning",
                    "Career Opportunities",
                  ].map((item) => (
                    <li key={item} className="flex items-center space-x-3">
                      <svg
                        className="h-5 w-5 text-[#723bcf]"
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
                      <span className="text-[#2b2b2b]/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Side Form */}
            <div className="md:w-1/2 w-full">
              <div className="bg-[#fffdf9] p-8 rounded-lg shadow-lg border border-gray-200">
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Countries Section */}
      <CountrySection />
      {/* youtube videos Section */}
      <YouTubeSection />
      {/* Success Stories Section */}
      {/* <SuccessStoriesSection /> */}
      {/* Achievements Section */}{" "}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <AchievementCard count="1000" title="Students Placed" />
            <AchievementCard count="50" title="Partner Universities" />
            <AchievementCard count="15" title="Countries" />
            <AchievementCard count="10" title="Years Experience" />
          </div>
        </div>
      </section>
      <MobileBottomBar />
      {/* Contact Section */}
      <Footer />
    </main>
  );
}
