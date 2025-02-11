import React, { useState } from "react";
import { Play, X, ExternalLink, ThumbsUp, Share2 } from "lucide-react";
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
    id: 1,
    title:
      "Top 5 Medical Universities in Russia | Total Cost & Fee | Admission Process | MBBS IN RUSSIA",
    description:
      "In this comprehensive guide, we cover everything you need to know about pursuing MBBS in top international universities. From admission requirements to career prospects, get all your questions answered.",
    thumbnailUrl: "/top_5_thumnail.jpg",
    videoUrl: "https://www.youtube.com/watch?v=PAHmFigrtX4&t=134s",
    views: 15000,
    likes: 1200,
    duration: "12:45",
    category: "Education",
    uploadDate: "2024-01-15",
  },
  {
    id: 2,
    title: "Tour Of Orenburg City Russia | Orenburg State Medical University",
    description:
      "Get a glimpse of what life looks like for international medical students. Tour the campus facilities, see the accommodation, and learn about the vibrant student community.",
    thumbnailUrl: "/orenburg_thumbnail.jpg",
    videoUrl: "https://youtube.com/embed/video2",
    views: 8500,
    likes: 945,
    duration: "18:30",
    category: "Campus Life",
    uploadDate: "2024-02-01",
  },
  {
    id: 3,
    title: "Tver State Medical University | GLOBAL GRADS",
    description:
      "Leading medical educators discuss the future of medical education and how international exposure shapes better doctors. Learn about different medical education systems worldwide.",
    thumbnailUrl: "/tver_thumbnail.jpg",
    videoUrl: "https://www.youtube.com/watch?v=TnBwQiWtlug",
    views: 12000,
    likes: 1500,
    duration: "15:20",
    category: "Medical Education",
    uploadDate: "2024-02-10",
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

  const formatViews = (views: number): string => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M`;
    }
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`;
    }
    return views.toString();
  };

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
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <ThumbsUp className="w-4 h-4" />
                      {formatViews(video.likes)}
                    </span>
                    <span>{formatViews(video.views)} views</span>
                  </div>
                  <span>{video.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl w-full max-w-5xl">
              <div className="flex justify-between items-center p-4 border-b">
                <h3 className="text-xl font-bold text-gray-900">
                  {selectedVideo.title}
                </h3>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="relative pt-[56.25%]">
                <iframe
                  src={selectedVideo.videoUrl}
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                      <ThumbsUp className="w-5 h-5" />
                      Like
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                      <Share2 className="w-5 h-5" />
                      Share
                    </button>
                  </div>
                  <a
                    href={selectedVideo.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-600 hover:text-purple-700"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Watch on YouTube
                  </a>
                </div>

                <p className="text-gray-700 mb-4">
                  {selectedVideo.description}
                </p>

                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>{formatViews(selectedVideo.views)} views</span>
                  <span>{selectedVideo.uploadDate}</span>
                  <span>{selectedVideo.category}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default YouTubeSection;
