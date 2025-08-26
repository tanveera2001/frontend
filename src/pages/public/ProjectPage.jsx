import { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "../../components/ProjectCard";

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);

  // Fetch projects from backend
useEffect(() => {
  const fetchProjects = async () => {
    try {
      const response = await axios.get("https://backend-nu-snowy-70.vercel.app/api/projects");
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  fetchProjects();
}, []);

  return (
    <div className="h-auto bg-gray-50 text-gray-900 p-6">
      {/* Projects Section */}
      <section>
        <h2 className="text-3xl font-bold mb-2">✨Projects</h2>
        <p className="text-gray-600 mb-6">
          From code to creativity: my project journey
        </p>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.length > 0 ? (
            projects.map((project) => (
              <ProjectCard
                key={project._id}
                title={project.title}
                description={project.description}
                link={project.url}
              />
            ))
          ) : (
            <p>No projects found.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
