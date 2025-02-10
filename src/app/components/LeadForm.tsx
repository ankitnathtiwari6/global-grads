interface LeadFormData {
  name: string;
  location: string;
  phone: string;
  neetStatus: "qualified" | "not-qualified";
}

export const LeadForm: React.FC = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: LeadFormData = {
      name: formData.get("name") as string,
      location: formData.get("location") as string,
      phone: formData.get("phone") as string,
      neetStatus: formData.get("neetStatus") as "qualified" | "not-qualified",
    };
    console.log("Form submitted:", data);
    // Add your form submission logic here
  };

  return (
    <div className="">
      <h3 className="text-xl font-bold mb-4">Get Free Counseling</h3>
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
          className="w-full bg-[#723bcf] text-white py-2 rounded-lg hover:bg-[#723bcf]/90 transition-colors"
        >
          Get Free Counseling
        </button>
      </form>
    </div>
  );
};
