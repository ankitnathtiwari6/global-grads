import React, { useState } from "react";
import { Play, X } from "lucide-react";
import Image from "next/image";

interface VideoData {
  id: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  views: number;
  likes: number;
  duration: string;
  category: string;
  uploadDate: string;
}
const videoData: VideoData[] = [
  {
    id: 3,
    title: "Tver State Medical University | GLOBAL GRADS",
    description:
      "Leading medical educators discuss the future of medical education and how international exposure shapes better doctors. Learn about different medical education systems worldwide.",
    thumbnailUrl: "/yt_thumbnails/Tver Thumbnail (3).png",
    videoUrl: "https://www.youtube.com/watch?v=TnBwQiWtlug",
    views: 12000,
    likes: 1500,
    duration: "15:20",
    category: "Medical Education",
    uploadDate: "2024-02-10",
  },
  {
    id: 4,
    title:
      "DISADVANTAGES OF MBBS IN RUSSIA | MUST WATCH | MBBS ABROAD | PROS AND CON | GLOBAL GRADS",
    description:
      "Discover the key disadvantages of pursuing MBBS in Russia, including language barriers, climate challenges, and clinical exposure limitations. Global Grads breaks down the pros and cons to help you make an informed decision before studying MBBS abroad.",
    thumbnailUrl: "/yt_thumbnails/MBBS-a mistake.png",
    videoUrl: "https://www.youtube.com/watch?v=xO4tWpbrGZs&t=39s",
    views: 9800,
    likes: 1050,
    duration: "16:35",
    category: "University Review",
    uploadDate: "2024-03-05",
  },
  {
    id: 8,
    title:
      "Altai State Medical University | Review | Fee, Hostel, Food & Everything | Total Cost 2025",
    description:
      "Comprehensive review of Altai State Medical University with updated 2025 cost estimates, detailed fee structure, hostel facilities, food options, and academic environment. Essential information for students planning to join in the upcoming academic year.",
    thumbnailUrl: "/yt_thumbnails/altai.png",
    videoUrl: "https://www.youtube.com/watch?v=altai_review_2025",
    views: 8200,
    likes: 970,
    duration: "19:10",
    category: "University Review",
    uploadDate: "2024-04-05",
  },

  {
    id: 6,
    title: "Supreme Court Latest Judgement on MBBS Abroad | Must Watch",
    description:
      "Analysis of the recent Supreme Court ruling affecting students pursuing MBBS abroad. Essential information for current and prospective international medical students about recognition, licensing, and legal implications.",
    thumbnailUrl: "/yt_thumbnails/mbbs_in_danger.png",
    videoUrl: "https://www.youtube.com/watch?v=Mq3Fhu5S3PI",
    views: 25000,
    likes: 2300,
    duration: "10:15",
    category: "Legal Updates",
    uploadDate: "2024-03-15",
  },
  {
    id: 7,
    title:
      "Kazan State Medical University | 2025 | Fees, Cost, Hostel & Reviews | MBBS in Russia | Global Grads",
    description:
      "Kazan State Medical University is a top-ranked Russian medical university offering affordable MBBS programs for international students. Global Grads provides complete admission support, including fees, hostel details, and student reviews for 2025 intake.",
    thumbnailUrl: "/yt_thumbnails/Kazan Thumbnail (1).png",
    videoUrl: "https://www.youtube.com/watch?v=R-ZJZZktKTk",
    views: 11200,
    likes: 1350,
    duration: "17:40",
    category: "Medical Education",
    uploadDate: "2024-03-22",
  },
  {
    id: 5,
    title:
      "Ulyanovsk State Medical University | MBBS in Russia | Fees, Hostel, Eligibility | Global Grads",
    description:
      "Complete guide to Ulyanovsk State Medical University's MBBS program including admission eligibility criteria, fee structure, hostel facilities, and student life. Learn why this university is a popular choice for international medical students.",
    thumbnailUrl: "/yt_thumbnails/ulyanosk.png",
    videoUrl: "https://www.youtube.com/watch?v=bswYQ6o-wNI",
    views: 7500,
    likes: 890,
    duration: "14:22",
    category: "University Guide",
    uploadDate: "2024-02-25",
  },
];

const YouTubeSection: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    ...new Set(videoData.map((video) => video.category)),
  ];

  const filteredVideos =
    activeCategory === "All"
      ? videoData
      : videoData.filter((video) => video.category === activeCategory);

  return (
    <section className="py-16 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Videos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of educational videos about medical
            education, student experiences, and expert insights
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                ${
                  activeCategory === category
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-purple-50"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video">
                <Image
                  src={`.${video.thumbnailUrl}`}
                  alt={video.title}
                  width={480}
                  height={270}
                  className="w-full rounded-lg"
                />

                <button
                  onClick={() => setSelectedVideo(video)}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <div className="transform scale-90 group-hover:scale-100 transition-transform">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple-600 text-white shadow-lg">
                      <Play className="w-8 h-8" />
                    </div>
                  </div>
                </button>
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 text-white text-sm rounded">
                  {video.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="font-bold text-xl text-gray-900 mb-2 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {video.description}
                  </p>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4"></div>
                  {/* <span>{video.category}</span> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-[90%] max-w-4xl relative overflow-hidden rounded-2xl bg-black"
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-3 right-3 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative pt-[56.25%]">
                <iframe
                  src={`${selectedVideo.videoUrl.replace(
                    "watch?v=",
                    "embed/"
                  )}?autoplay=1`}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default YouTubeSection;
