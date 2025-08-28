const CertificationCard = ({ name, issuer, logo }) => {
  return (
    <div className="relative bg-white rounded-2xl shadow p-4">
      {/* Circle on the timeline */}
      <div className="absolute -left-10 top-5 w-4 h-4 rounded-full bg-blue-500 border-2 border-white"></div>

      <div className="flex items-center justify-between gap-6">
        {/* Left side: text */}
        <div className="flex-1">
          {name && <h3 className="text-lg font-semibold">{name}</h3>}
          {issuer && <p className="text-gray-700">{issuer}</p>}
        </div>

        {/* Right side: logo */}
        {logo && (
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt={issuer || "logo"}
              className="h-30 mr-12 w-auto object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificationCard;
