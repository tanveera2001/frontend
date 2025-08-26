import TimelineCard from "./TimelineCard";

const WorkExperienceCard = ({ date, title, company, location, points, logo }) => {
  return (
    <TimelineCard>
      <div className="flex items-center justify-between gap-6">
        {/* Left side: text */}
        <div className="flex-1">
          {date && <p className="text-sm text-gray-500">{date}</p>}
          {title && <h3 className="text-lg font-semibold">{title}</h3>}
          {company && <p className="text-gray-700">{company}</p>}
          {location && <p className="text-sm text-gray-500 mb-3">{location}</p>}
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>

        {/* Right side: logo */}
        {logo && (
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt={company || "logo"}
              className="h-30 w-auto object-contain"
            />
          </div>
        )}
      </div>
    </TimelineCard>
  );
};

export default WorkExperienceCard;
