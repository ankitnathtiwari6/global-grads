"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Loader2,
  ArrowRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/FooterSection";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface StatItem {
  count: string;
  label: string;
}

const stats: StatItem[] = [
  { count: "1000+", label: "Students Placed" },
  { count: "50+", label: "Partner Universities" },
  { count: "15+", label: "Countries" },
];

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Reset form
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Let's Start Your
                <span className="text-blue-200"> Global Education</span> Journey
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Get personalized guidance from our expert counselors and take
                the first step towards your international education dreams.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://wa.me/919696902475"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp Now
                </a>
                <a
                  href="tel:+919696902475"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-[#723bcf] hover:bg-[#8651d4] text-white transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="container mx-auto px-4 -mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:-translate-y-1 transition-transform"
              >
                <div className="text-3xl font-bold text-[#723bcf] mb-2">
                  {stat.count}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">
                  Ways to Connect
                </h2>
                <div className="space-y-2">
                  <div className="flex items-start p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Call Us</h3>
                      <p className="text-gray-600 mt-1">+91 9696902475</p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Email Us</h3>
                      <p className="text-gray-600">
                        admissions@globalgrads.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Visit Us</h3>
                      <p className="text-gray-600 mt-1">
                        123 Education Street
                        <br />
                        New Delhi, 110001
                        <br />
                        India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-lg p-8 text-white">
                <div className="flex items-center mb-4">
                  <MessageCircle className="h-8 w-8 mr-3" />
                  <h2 className="text-2xl font-bold">WhatsApp Support</h2>
                </div>
                <p className="mb-6 text-green-100">
                  Get instant responses to your queries through WhatsApp
                </p>
                <a
                  href="https://wa.me/919696902475"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-green-600 hover:bg-green-50 transition-colors"
                >
                  Chat Now
                  <ArrowRight className="h-5 w-5 ml-2" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  Send us a Message
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and our team will get back to you
                  within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Your phone number"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2 font-medium">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#723bcf] focus:border-transparent transition-all h-36"
                      placeholder="Tell us about your study abroad plans..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#723bcf] text-white py-4 rounded-lg hover:bg-[#8651d4] transition-colors flex items-center justify-center space-x-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
