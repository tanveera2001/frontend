import { NavLink } from "react-router-dom";

const navLinkClasses = ({ isActive }) =>
  `block py-3 pr-4 pl-3 text-lg duration-200 lg:border-0 lg:p-0 transform transition-transform hover:scale-105
  ${
    isActive
      ? "bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-500 to-red-600 font-semibold"
      : "text-gray-700 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-red-400 hover:via-red-500 hover:to-red-600"
  }`;

const AdminNavbar = () => {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav
        role="navigation"
        className="bg-white border-gray-200 px-6 lg:px-10 py-4" // increased vertical padding
      >
        <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl">
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink to="/admin-panel/projects" end className={navLinkClasses}>
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin-panel/tools-technologies" end className={navLinkClasses}>
                  Tools & Technologies
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin-panel/work-experience" end className={navLinkClasses}>
                  Work Experience
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin-panel/education" end className={navLinkClasses}>
                  Education
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin-panel/certifications" end className={navLinkClasses}>
                  Certifications
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};


export default AdminNavbar;
