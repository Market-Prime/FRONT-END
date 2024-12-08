import React, { useState } from "react";
import Header from "../src/pages/VendorsPage/Navbar";
import Sidebar from "../src/pages/VendorsPage/Sidebar";

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* Main Content Area */}
      <div
        className={`flex flex-col flex-1 overflow-hidden transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-0 w-[70%]"
        }`}
      >
        <Header onToggleSidebar={toggleSidebar} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
