import { Outlet } from "react-router-dom";
import Sidebar from "../src/pages/AdminDashboard/DashNav";
import Navbar from "../src/pages/AdminDashboard/Header";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar - Responsive Width */}
      <div className="lg:w-64 w-20 transition-all duration-300 bg-white z-10 lg:static fixed">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <Navbar />

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto bg-gray-100 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
