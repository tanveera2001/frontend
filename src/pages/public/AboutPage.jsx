// src/pages/About.jsx

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WorkExperienceCard from "../../components/WorkExperienceCard";
import CertificationCard from "./../../components/CertificationCard";
import EducationCard from "../../components/EducationCard";
import api from "../../services/api";

const AboutPage = () => {
  const [tools, setTools] = useState([]);

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

  return (
    <div className="max-w-5xl mx-auto h-auto space-y-20 p-6 bg-gray-50 text-gray-900">
      
      {/* Resume */}
      <section>
        <h2 className="text-4xl font-bold mb-10">📋 Resume</h2>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 shadow-md"
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
            </>
          ]}
        />
      </section>

      {/* Education */}
      <section>
        <h2 className="text-4xl font-bold mb-6">🎓 Education</h2>
        <EducationCard
          date="2023 - Current"
          degree="Bachelors of Science in Computer Science and Engineering"
          university="North South University"
          location="Bashundhara, Dhaka, Bangladesh"
          logo="https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/North_South_University_Monogram.svg/1200px-North_South_University_Monogram.svg.png"
        />
        <EducationCard
          date="July 2019 - June 2022"
          degree="Higher Secondary Certificate (HSC)"
          university="Dhaka College"
          location="New Market, Dhaka, Bangladesh"
          logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZpu3RNS9oJ-m8JG5pRr446fj1Uny7eiyXeA&s"
        />
        <EducationCard
          date="Jan 2010 - June 2019"
          degree="Secondary School Certificate (SSC)"
          university="Ideal School and College"
          location="Motijheel, Dhaka, Bangladesh"
          logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaE0zJ7p6klagsqNwXejllWAHfBkWSp5xuKw&s"
        />
      </section>

      {/* Certifications */}
      <section>
        <h2 className="text-4xl font-bold mb-6">📜 Certifications</h2>
        <CertificationCard
          name="No certificate"
          issuer="N/A"
          logo="https://www.shutterstock.com/image-vector/circle-check-mark-shape-vector-600nw-2470360977.jpg"
        />
      </section>
    </div>
  );
};

export default AboutPage;
