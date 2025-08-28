

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WorkExperienceCard from "../../components/WorkExperienceCard";
import CertificationCard from "./../../components/CertificationCard";
import EducationCard from "../../components/EducationCard";
import api from "../../services/api";
import TimelineCard from "../../components/TimelineCard";

const AboutPage = () => {
  const [tools, setTools] = useState([]);
  const [education, setEducation] = useState([]);

  // Fetch tools/technologies from backend
  useEffect(() => {
    const fetchTools = async () => {
      try {
        const response = await api.get("/api/tools-technologies");
        setTools(response.data); // backend returns array directly
      } catch (error) {
        console.error("Error fetching tools:", error);
      }
    };
    fetchTools();
  }, []);


  // Fetch education from backend
  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const response = await api.get("/api/education");
        setEducation(response.data);
      } catch (error) {
        console.error("Error fetching education:", error);
      }
    };
    fetchEducation();
  }, []);

  return (
    <div className="max-w-5xl mx-auto h-auto space-y-20 p-6 bg-gray-50 text-gray-900">

      {/* Resume */}
      <section>
        <h2 className="text-4xl font-bold mb-8">📋 Resume</h2>
        <a
          href={`${import.meta.env.VITE_API_URL}/pdfs/1753468137231-tanveer-resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="block mx-27 sm:inline-block sm:mx-0 font-bold px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 shadow-md"
        >
          ↗️ View Resume
        </a>
      </section>

      {/* Tools/Technology */}
      <section>
        <h2 className="text-4xl font-bold mb-6">🛠 Tools/Technology</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {tools.map((tool, i) => (
            <div
              key={i}
              className="flex items-center bg-gray-300 rounded-xl shadow p-3"
            >
              <img
                src={`${import.meta.env.VITE_API_URL}/${tool.image}`}
                alt={tool.name}
                className="w-8 h-8 mr-3"
              />
              <div>
                <p className="font-medium">{tool.name}</p>
                <p className="text-sm text-gray-500">{tool.exp}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Work Experience */}

      <section>
        <h2 className="text-4xl font-bold mb-6">💻 Work Experience</h2>
        <TimelineCard>
          <WorkExperienceCard
            logo="https://hospitalcareers.com/files/pictures/72e79be9a39fa64dd3e44512e0039c18.jpg"
            points={[
              <>
                I don’t have formal work experience yet, but I have been learning
                web development for the past 3 years. As a Computer Science and
                Engineering (CSE) student, I’ve gained strong technical skills and
                built several projects. If you’d like to explore them, please{" "}
                <Link to="/projects" className="text-blue-600 hover:underline">
                  click here
                </Link>
                .
              </>,
            ]}
          />
          {/* Add more WorkExperienceCard here if needed */}
        </TimelineCard>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-4xl font-bold mb-6">🎓 Education</h2>
        <TimelineCard>
          {education.map((edu) => (
            <EducationCard
              key={edu._id}
              date={`${edu.startDate} - ${edu.endDate}`}
              degree={edu.degree}
              university={edu.institution}
              location={edu.location}
              logo={`${import.meta.env.VITE_API_URL}/${edu.image}`}
            />
          ))}
        </TimelineCard>
      </section>

      {/* Certifications */}
      <section>
        <h2 className="text-4xl font-bold mb-6">📜 Certifications</h2>
        <TimelineCard>
          <CertificationCard
            name="No certificate"
            issuer="N/A"
            logo="https://www.shutterstock.com/image-vector/circle-check-mark-shape-vector-600nw-2470360977.jpg"
          />
          {/* Add more CertificationCard here if needed */}
        </TimelineCard>
      </section>
    </div>
  );
};

export default AboutPage;
