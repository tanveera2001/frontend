import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import ProjectCard from "../../components/ProjectCard";
import axios from "axios";

const HomePage = () => {
  const [projects, setProjects] = useState([]);

  // Fetch projects from backend
useEffect(() => {
  const fetchProjects = async () => {
    try {
      const response = await axios.get("https://backend-k5w6.vercel.app/api/projects");
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  fetchProjects();
}, []);

  return (
    <div className="h-auto bg-gray-50 text-gray-900 p-6">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-start mb-12">
        <div>
          <h1 className="text-4xl font-bold">Tanveer Ahmed</h1>
          <p className="mt-4 text-lg text-gray-600">Full-Stack Web Developer</p>
          <p className="mt-4 max-w-2xl">
            I’m a determined, extroverted person full of enthusiasm. I enjoy
            working hard and collaborating with others. I am currently studying
            Computer Science and Engineering (CSE) at North South University.
            Additionally, I have three years of experience in web development.
            My goal is to continually improve my technical and communication
            skills.
          </p>

          {/* Social icons */}
          <div className="mt-6 flex items-center justify-between text-gray-500">
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/tanveera2001"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-900"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/md-tanveer-ahmed-23b06023b/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://stackoverflow.com/users/20884813/md-tanveer-ahmed"
                target="_blank"
                rel="noreferrer"
                className="hover:text-orange-700"
              >
                <FaStackOverflow className="w-6 h-6" />
              </a>
            </div>

            <div>
              <Link
                to="/about"
                className="px-6 py-3 border text-gray-700 font-semibold rounded-lg shadow hover:bg-gray-200"
              >
                More Info
              </Link>
            </div>
          </div>
        </div>

        {/* Profile image */}
        <div className="mt-6 md:mt-15 mr-6">
          <img
            src="/myphoto.jpeg"
            alt="profile"
            className="rounded-full w-48 h-48 object-cover"
          />
        </div>
      </header>

      {/* Projects Section */}
      <section>
        <h2 className="text-3xl font-bold mb-2">✨Projects</h2>
        <p className="text-gray-600 mb-6">
          From code to creativity: my project journey
        </p>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.length > 0 ? (
            projects.slice(0, 3).map((project) => (
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

        <div className="mt-5">
          <Link
            to="/projects"
            className="inline-block px-6 py-3 border text-gray-700 font-semibold rounded-lg shadow hover:bg-gray-200"
          >
            See More
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
