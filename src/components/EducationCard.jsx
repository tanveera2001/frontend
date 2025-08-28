const EducationCard = ({ date, degree, university, location, logo }) => {
  return (
    <div className="relative bg-white rounded-2xl shadow p-4">
      {/* Circle on timeline */}
      <div className="absolute -left-10 top-5 w-4 h-4 rounded-full bg-blue-500 border-2 border-white"></div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
        {/* Left side: text */}
        <div className="flex-1">
          {date && <p className="text-sm text-gray-500">{date}</p>}
          {degree && <h3 className="text-lg font-semibold">{degree}</h3>}
          {university && <p className="text-gray-700">{university}</p>}
          {location && <p className="text-sm text-gray-500">{location}</p>}
        </div>

        {/* Bottom on mobile / right on desktop: logo */}
        {logo && (
          <div className="flex-shrink-0 w-full sm:w-auto mt-4 sm:mt-0">
            <img
              src={logo}
              alt={university || "logo"}
              className="w-full sm:w-auto h-32 sm:mr-12 object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationCard;
