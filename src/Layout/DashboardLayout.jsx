import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Dashboard/Sidebar";

const DashboardLayout = () => {
  return (
    <>
      {/* Navbar */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Main layout */}
      <div className="relative md:flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Content */}
        <div className="flex-1 transition-all duration-300">
          <div className="p-3 sm:p-5 md:p-8 lg:p-10 backdrop-blur-md rounded-tl-2xl">
            <Outlet />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default DashboardLayout;
