// src/pages/About.jsx

import { Link } from "react-router-dom";
import WorkExperienceCard from "../../components/WorkExperienceCard";
import CertificationCard from "./../../components/CertificationCard";
import EducationCard from "../../components/EducationCard";

const tools = [
  // Languages
  {
    name: "JavaScript",
    exp: "3 years",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    name: "C",
    exp: "2 years",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
  },
  {
    name: "C++",
    exp: "2 years",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
  },
  {
    name: "Java",
    exp: "2 years",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
  },
  {
    name: "PHP",
    exp: "2 years",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
  },

  // Frontend
  {
    name: "React",
    exp: "3 years",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "HTML5",
    exp: "3 years",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  },
  {
    name: "CSS3",
    exp: "3 years",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
  },
  {
    name: "Tailwind CSS",
    exp: "2 years",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    name: "Bootstrap CSS",
    exp: "2 years",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
  },

  // Backend
  {
    name: "Express.js",
    exp: "2 years",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
  },
  {
    name: "Node.js",
    exp: "2 years",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  },

  // Databases
  {
    name: "MongoDB",
    exp: "2 years",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
  },
  {
    name: "MySQL",
    exp: "2 years",
    logo: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg",
  },

  // Editors & Tools
  {
    name: "VS Code",
    exp: "3 years",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
  },
  {
    name: "Code::Blocks",
    exp: "2 years",
    logo: "https://commons.wikimedia.org/wiki/Special:FilePath/Codeblocks_logo.png",
  },
  {
    name: "NetBeans",
    exp: "2 years",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/98/Apache_NetBeans_Logo.svg",
  },
  {
    name: "phpMyAdmin",
    exp: "2 years",
    logo: "https://www.phpmyadmin.net/static/images/logo-og.png",
  },

  // Version Control
  {
    name: "Git",
    exp: "2 years",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg",
  },
  {
    name: "GitHub",
    exp: "2 years",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
  },
];

const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto h-auto space-y-20 p-6 bg-gray-50 text-gray-900">
      {/* Resume */}
      <section>
        <h2 className="text-4xl font-bold mb-10">📋Resume</h2>
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
              <img src={tool.logo} alt={tool.name} className="w-8 h-8 mr-3" />
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
