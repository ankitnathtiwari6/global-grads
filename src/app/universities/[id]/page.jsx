// app/universities/[id]/page.jsx
import { Metadata } from "next";
import UniversityDetailPage from "./UniversityDetailPage";
import universities from "../../data/universitiesData";
// Generate metadata for each university page
export async function generateMetadata({ params }) {
  // In a real app, you would fetch this data from your database or CMS
  const university = universities.find((u) => u.id === params.id);

  if (!university) {
    return {
      title: "University Not Found",
    };
  }

  return {
    title: `${university.name} - MBBS Admission Details and Requirements`,
    description: `Study MBBS at ${university.name}. Learn about admission process, fees structure, facilities, and more. Top medical education in ${university.country}.`,
    keywords: `${university.name}, MBBS in ${university.country}, medical university, study medicine, ${university.city} medical school`,
    openGraph: {
      title: `${university.name} - MBBS Admission Details`,
      description: `Study MBBS at ${university.name}. Complete information about admission, fees, and facilities.`,
      images: [
        {
          url: university.imageUrl,
          width: 1200,
          height: 630,
          alt: university.name,
        },
      ],
    },
  };
}

// Generate static paths for all universities
export async function generateStaticParams() {
  return universities.map((university) => ({
    id: university.id,
  }));
}

export default function Page({ params }) {
  const university = universities.find((u) => u.id === params.id);

  if (!university) {
    return <div>University not found</div>;
  }

  return <UniversityDetailPage university={university} />;
}
