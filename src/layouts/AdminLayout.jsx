import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";


const AdminLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <div className="max-w-screen-xl mx-auto w-full px-6 sm:px-12 md:px-16 lg:px-28 xl:px-36">
        <AdminNavbar />
      </div>


      {/* Main Content */}
      <div className="flex-grow mb-10 w-full">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-12 md:px-16 lg:px-28 xl:px-36">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
