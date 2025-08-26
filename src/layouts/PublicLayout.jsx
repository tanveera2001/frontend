import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PublicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <div className="max-w-screen-xl mx-auto w-full px-6 sm:px-12 md:px-16 lg:px-28 xl:px-36">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="flex-grow mb-10 w-full">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-12 md:px-16 lg:px-28 xl:px-36">
          <Outlet />
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-screen-xl mx-auto w-full px-6 sm:px-12 md:px-16 lg:px-28 xl:px-36">
        <Footer />
      </div>
    </div>
  );
};

export default PublicLayout;
