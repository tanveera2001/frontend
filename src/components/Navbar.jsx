import { NavLink } from "react-router-dom";

const navLinkClasses = ({ isActive }) =>
  `block py-3 pr-4 pl-3 text-lg duration-200 ${
    isActive ? "text-orange-700" : "text-gray-700"
  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`;

const Navbar = () => {
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
