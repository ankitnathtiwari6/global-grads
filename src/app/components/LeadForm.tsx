import React, { useState } from "react";
import axios from "axios";

interface LeadFormData {
  name: string;
  location: string;
  phone: string;
  neetStatus: "qualified" | "not-qualified";
}

export const LeadForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Prevent multiple submissions
    if (isSubmitting) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);
    const data: LeadFormData = {
      name: formData.get("name") as string,
      location: formData.get("location") as string,
      phone: formData.get("phone") as string,
      neetStatus: formData.get("neetStatus") as "qualified" | "not-qualified",
    };

    try {
      // Transform the data to match your API requirements
      const apiData = {
        name: data.name,
        city: data.location,
        phoneNumber: data.phone,
        neetStatus: data.neetStatus === "qualified" ? "true" : "false",
      };

      console.log("Submitting data:", apiData);

      // Send the data to your API endpoint using axios
      const response = await axios.post(
        "https://api.globalgrads.in/api/leads",
        apiData
      );

      console.log("Form submission successful:", response.data);
      setSubmitSuccess(true);

      // Reset form
      e.currentTarget.reset();
    } catch (error) {
      console.error("Form submission error:", error);

      // Handle axios error response
      if (axios.isAxiosError(error) && error.response) {
        setErrorMessage(
          error.response.data.message || "Failed to submit the form"
        );
      } else {
        setErrorMessage(
          error instanceof Error ? error.message : "An unknown error occurred"
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center">
        <h3 className="text-xl font-bold mb-2">Thank You!</h3>
        <p>
          Your information has been submitted successfully. One of our
          counselors will contact you shortly.
        </p>
        <button
          onClick={() => setSubmitSuccess(false)}
          className="mt-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="">
      <h3 className="text-xl font-bold mb-4">Get Free Counseling</h3>
      {errorMessage && (
        <div className="bg-red-50 border border-red-200 text-red-800 p-3 rounded-lg mb-4">
          {errorMessage}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#723bcf]"
          />
        </div>
        <div>
          <input
            type="text"
            name="location"
            placeholder="Your City"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#723bcf]"
          />
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#723bcf]"
          />
        </div>
        <div>
          <select
            name="neetStatus"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#723bcf] bg-white"
          >
            <option value="">NEET Status</option>
            <option value="qualified">NEET Qualified</option>
            <option value="not-qualified">Not Qualified</option>
          </select>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full ${
            isSubmitting
              ? "bg-[#723bcf]/60"
              : "bg-[#723bcf] hover:bg-[#723bcf]/90"
          } text-white py-2 rounded-lg transition-colors flex justify-center items-center`}
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </>
          ) : (
            "Get Free Counseling"
          )}
        </button>
      </form>
    </div>
  );
};
