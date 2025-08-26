import TimelineCard from "./TimelineCard";

const EducationCard = ({ date, degree, university, location, logo }) => {
  return (
    <TimelineCard>
      <div className="flex items-center justify-between gap-6">
        {/* Left side: text */}
        <div className="flex-1">
          {date && <p className="text-sm text-gray-500">{date}</p>}
          {degree && <h3 className="text-lg font-semibold">{degree}</h3>}
          {university && <p className="text-gray-700">{university}</p>}
          {location && <p className="text-sm text-gray-500">{location}</p>}
        </div>

        {/* Right side: logo */}
        {logo && (
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt={university || "logo"}
              className="h-30 mr-12 w-auto object-contain"
            />
          </div>
        )}
      </div>
    </TimelineCard>
  );
};

export default EducationCard;
