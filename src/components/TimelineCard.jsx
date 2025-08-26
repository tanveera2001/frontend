const TimelineCard = ({ children }) => {
  return (
    <div className="relative pl-6 border-l-2 border-gray-300 mb-6">
    {/* Circle on timeline */}
    <div className="absolute -left-2 top-4 w-4 h-4 rounded-full bg-blue-500 border-2 border-white"></div>
    <div className="bg-white rounded-2xl shadow p-4">{children}</div>
  </div>
  );
};

export default TimelineCard;
