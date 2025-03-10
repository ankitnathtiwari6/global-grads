// app/universities/page.jsx
import UniversitiesPage from "./UniversitiesPage";
import universities from "../data/universitiesData";

// Static metadata for SEO
export const metadata = {
  title: "Top Medical Universities Worldwide | Study MBBS Abroad",
  description:
    "Explore our partner medical universities across the globe. Find detailed information about MBBS programs, fees, and admission requirements at top medical schools.",
  keywords:
    "MBBS abroad, medical universities, study medicine, international medical schools, medical education",
  openGraph: {
    title: "Top Medical Universities Worldwide | Study MBBS Abroad",
    description:
      "Explore our partner medical universities across the globe. Find detailed information about MBBS programs, fees, and admission requirements at top medical schools.",
    images: [
      {
        url: "/images/universities-og.jpg",
        width: 1200,
        height: 630,
        alt: "Medical Universities Worldwide",
      },
    ],
  },
  alternates: {
    canonical: "https://yourdomain.com/universities",
  },
};

export default function Page() {
  return <UniversitiesPage universities={universities} />;
}
