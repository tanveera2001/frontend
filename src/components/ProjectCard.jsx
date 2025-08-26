const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="rounded-xl p-[2px] bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600">
      <div className="bg-white rounded-xl p-6 h-[320px] flex flex-col justify-between">
        
        {/* Title + Description (fixed height) */}
        <div className="h-[220px] overflow-hidden">
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>

        {/* View Project link (fixed height) */}
        <div className="h-[40px] flex items-center">
          <a
            href={link}
            className="text-blue-600 font-semibold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project ➡️
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
