// src/app/components/SuccessStories.tsx
import React, { useState } from "react";
import Image from "next/image";

interface SuccessStory {
  id: number;
  name: string;
  image: string;
  videoUrl?: string;
  university: string;
  year: string;
  testimony: string;
  achievement: string;
  mediaType: "image" | "video";
  location: string;
  rating: number;
}

interface StoryModalProps {
  story: SuccessStory;
  onClose: () => void;
}

const successStories: SuccessStory[] = [
  {
    id: 1,
    name: "Dr. Rahul Sharma",
    image: "/students/rahul.jpg",
    university: "Kazan State Medical University, Russia",
    year: "2023",
    testimony: "Successfully completed MBBS and now practicing in Delhi NCR",
    achievement: "Cleared FMGE in first attempt",
    mediaType: "image",
    location: "Delhi, India",
    rating: 5,
  },
  {
    id: 2,
    name: "Dr. Priya Patel",
    image: "/students/priya.jpg",
    videoUrl: "https://youtube.com/embed/xyz",
    university: "Tver State Medical University, Russia",
    year: "2022",
    testimony: "Got amazing exposure to international medical practices",
    achievement: "Currently doing residency in Mumbai",
    mediaType: "video",
    location: "Mumbai, India",
    rating: 5,
  },
];

const StoryModal: React.FC<StoryModalProps> = ({ story, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-4xl overflow-hidden">
        {story.mediaType === "video" && story.videoUrl ? (
          <div className="relative pt-[56.25%]">
            <iframe
              src={story.videoUrl}
              className="absolute inset-0 w-full h-full"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="relative h-[400px]">
            <Image
              src={story.image}
              alt={story.name}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">{story.name}</h3>
          <p className="text-[#2b2b2b]/70 mb-4">{story.university}</p>
          <p className="text-[#2b2b2b]">{story.testimony}</p>
          <button
            onClick={onClose}
            className="mt-6 px-6 py-2 bg-[#723bcf] text-white rounded-lg hover:bg-[#723bcf]/90"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const StoryCard: React.FC<{ story: SuccessStory; onClick: () => void }> = ({
  story,
  onClick,
}) => {
  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Media Section */}
      <div className="relative h-64">
        {story.mediaType === "video" ? (
          <div className="relative h-full">
            <Image
              src={story.image}
              alt={story.name}
              fill
              className="object-cover"
            />
            <button
              onClick={onClick}
              className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#723bcf] text-white">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          </div>
        ) : (
          <Image
            src={story.image}
            alt={story.name}
            fill
            className="object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-bold text-xl text-[#2b2b2b]">{story.name}</h3>
            <p className="text-[#2b2b2b]/70 text-sm">{story.location}</p>
          </div>
          <div className="flex">
            {[...Array(story.rating)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <p className="text-[#2b2b2b]/70 text-sm">University</p>
            <p className="font-medium text-[#2b2b2b]">{story.university}</p>
          </div>
          <div>
            <p className="text-[#2b2b2b]/70 text-sm">Achievement</p>
            <p className="font-medium text-[#2b2b2b]">{story.achievement}</p>
          </div>
          <div>
            <p className="text-[#2b2b2b]/70 text-sm">Testimony</p>
            <p className="text-[#2b2b2b]">{story.testimony}</p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100">
          <button
            onClick={onClick}
            className="w-full text-[#723bcf] border border-[#723bcf] rounded-lg py-2 hover:bg-[#723bcf] hover:text-white transition-colors"
          >
            Read Full Story
          </button>
        </div>
      </div>
    </div>
  );
};

const SuccessStoriesSection: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState<SuccessStory | null>(null);

  return (
    <section className="py-20 bg-[#fffdf9]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-[#2b2b2b] mb-4">
            Success Stories
          </h2>
          <p className="text-[#2b2b2b]/70">
            Hear from our alumni who have successfully achieved their medical
            dreams through our guidance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story) => (
            <StoryCard
              key={story.id}
              story={story}
              onClick={() => setSelectedStory(story)}
            />
          ))}
        </div>

        {selectedStory && (
          <StoryModal
            story={selectedStory}
            onClose={() => setSelectedStory(null)}
          />
        )}
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
