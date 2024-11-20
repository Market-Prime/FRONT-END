import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi"; // Import hamburger icon
import profile from "../../assets/Filtered-Images/profile-pic.png";
import DashNav from "./DashNav"; // Import DashNav to conditionally render it

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar visibility state

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 shadow-md relative">
      {/* Hamburger Icon for Mobile */}
      <div className="flex items-center sm:hidden">
        <button onClick={toggleSidebar} className="text-2xl text-gray-600 mr-4">
          <FiMenu />
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex items-center w-full max-w-sm sm:max-w-md bg-white border border-gray-300 rounded-full px-3 mb-3 sm:mb-0 sm:mx-auto">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 text-sm md:text-base focus:outline-none rounded-full"
        />
        <CiSearch className="text-xl md:text-2xl text-gray-500 cursor-pointer" />
      </div>

      {/* Profile Section */}
      <div className="flex items-center ml-auto sm:ml-0">
        <img
          src={profile}
          alt="Profile"
          className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
        />
        <div className="hidden sm:flex flex-col ml-3">
          <p className="flex items-center text-sm md:text-lg font-semibold text-gray-800">
            Akpan David <FaAngleDown className="ml-1 text-gray-500" />
          </p>
          <p className="text-xs md:text-sm text-blue-600">Super Admin</p>
        </div>
      </div>

      {/* Conditional Sidebar Rendering */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-40 flex">
          <DashNav onClose={toggleSidebar} />{" "}
          {/* Pass onClose to close sidebar */}
          <div
            className="flex-1 bg-black opacity-25"
            onClick={toggleSidebar}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Header;
