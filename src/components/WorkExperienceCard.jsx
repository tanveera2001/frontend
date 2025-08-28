const WorkExperienceCard = ({ date, role, company, location, points, logo }) => {
  return (
    <div className="relative bg-white rounded-2xl shadow p-4">
      {/* Circle on the timeline */}
      <div className="absolute -left-10 top-5 w-4 h-4 rounded-full bg-blue-500 border-2 border-white"></div>

      {/* First div: Info + Logo */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Info Section */}
        <div className="flex-1">
          {date && <p className="text-sm text-gray-500">{date}</p>}
          {role && <h3 className="text-lg font-semibold">{role}</h3>}
          {company && <p className="text-gray-700">{company}</p>}
          {location && <p className="text-sm text-gray-500">{location}</p>}
        </div>

        {/* Logo Section */}
        {logo && (
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt={company || "logo"}
              className="h-28 w-auto object-contain mx-auto md:mx-0"
            />
          </div>
        )}
      </div>

      {/* Second div: Points */}
      {points && (
        <div className="mt-4">
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WorkExperienceCard;
