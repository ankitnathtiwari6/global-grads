// src/app/colleges/[id]/page.tsx
"use client";

import React, { FormEvent } from "react";
import { useSelector } from "react-redux";
import {
  Building,
  Users,
  Map,
  Award,
  CheckCircle,
  DollarSign,
  Clock,
} from "lucide-react";
import Image from "next/image";

// Basic type for our college data
interface College {
  id: string;
  name: string;
  country: string;
  annualFees: number;
  duration: string;
  facilities: string[];
  images: string[];
  ranking: string;
  totalSeats: number;
  admissionCriteria: string;
  established: string;
}

interface RootState {
  colleges: {
    colleges: College[];
  };
}
// interface CollegePageProps {
//   params: {
//     id: string;
//   };
// }

interface CollegeDetailsProps {
  id: string;
}
const CollegeDetails: React.FC<CollegeDetailsProps> = ({ id }) => {
  const college = useSelector((state: RootState) =>
    state.colleges.colleges.find((c) => c.id === id)
  );

  const handleEnquirySubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
    });
    // Add your form submission logic here
  };

  if (!college) {
    return <div>College not found</div>;
  }

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* College Header */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="relative h-96">
            <Image
              src={college.images[0]}
              alt={college.name}
              fill
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white text-center">
                {college.name}
              </h1>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Overview */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Overview</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Building className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <div className="text-sm text-gray-600">Established</div>
                    <div className="font-semibold">{college.established}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <div className="text-sm text-gray-600">Total Students</div>
                    <div className="font-semibold">{college.totalSeats}+</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Map className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <div className="text-sm text-gray-600">Location</div>
                    <div className="font-semibold">{college.country}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <div className="text-sm text-gray-600">Ranking</div>
                    <div className="font-semibold">{college.ranking}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Facilities */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Facilities</h2>
              <div className="grid grid-cols-2 gap-4">
                {college.facilities.map((facility, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>{facility}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Admission Criteria */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Admission Criteria</h2>
              <div className="prose max-w-none">
                {college.admissionCriteria}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Info */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Annual Fees</span>
                  </div>
                  <span className="font-bold">
                    ${college.annualFees.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Duration</span>
                  </div>
                  <span className="font-bold">{college.duration}</span>
                </div>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Enquire Now</h3>
              <form onSubmit={handleEnquirySubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetails;
