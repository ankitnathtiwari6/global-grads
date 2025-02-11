// src/app/colleges/[id]/page.tsx
import CollegeDetails from "./CollegeDetails";

interface PageProps {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function CollegeDetailPage({ params }: PageProps) {
  return <CollegeDetails id={params.id} />;
}
