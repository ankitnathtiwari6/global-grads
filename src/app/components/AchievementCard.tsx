import { type FC } from "react";

interface AchievementCardProps {
  count: string;
  title: string;
  icon?: "trophy" | "users" | "graduation" | "globe";
  description?: string;
}

export const AchievementCard: FC<AchievementCardProps> = ({
  count,
  title,
  icon = "trophy",
  description,
}) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex flex-col items-center">
        {/* Icon */}
        {/* <div className="mb-4">
          <IconComponent className="w-10 h-10 text-red-600" />
        </div> */}

        {/* Count */}
        <div className="text-4xl font-bold text-red-600 mb-2">
          {count}
          <span className="text-2xl ml-1">+</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 mb-1 text-center">
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-gray-600 text-sm text-center">{description}</p>
        )}
      </div>
    </div>
  );
};

// Example Usage Section
const AchievementSection: FC = () => {
  const achievements = [
    {
      count: "15,000",
      title: "Success Stories",
      icon: "trophy",
      description: "Students placed worldwide",
    },
    {
      count: "50",
      title: "Universities",
      icon: "globe",
      description: "Partner institutions",
    },
    {
      count: "98",
      title: "Success Rate",
      icon: "graduation",
      description: "In admissions",
    },
    {
      count: "25",
      title: "Experience",
      icon: "users",
      description: "Years of excellence",
    },
  ];

  return (
    <div className="p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              count={achievement.count}
              title={achievement.title}
              icon={
                achievement.icon as "trophy" | "users" | "graduation" | "globe"
              }
              description={achievement.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementSection;
