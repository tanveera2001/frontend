import { useState } from "react";
import { NavLink } from "react-router-dom";

const navLinkClasses = ({ isActive }) =>
  `block py-3 pr-4 pl-3 text-lg duration-200 ${isActive ? "text-orange-700" : "text-gray-700"
  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-6 lg:px-10 py-4">
        <div className="flex flex-wrap justify-between lg:justify-center items-center mx-auto max-w-screen-xl">

          {/* Hamburger button only on mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Toggle navigation</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Links */}
          <div className={`w-full lg:flex lg:w-auto ${isOpen ? "block" : "hidden"}`} id="mobile-menu">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink to="/" end className={navLinkClasses}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" end className={navLinkClasses}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" end className={navLinkClasses}>
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" end className={navLinkClasses}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
