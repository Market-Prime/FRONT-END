import { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Use useLocation to get current path
import { LuLayoutDashboard } from "react-icons/lu";
import { FaBoxes } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";
import { HiUsers } from "react-icons/hi";
import logo from "../../assets/Logo 1.png";

const Sidebar = () => {
  const location = useLocation(); // Get current location
  const [isOpen, setIsOpen] = useState(false); // State to toggle sidebar

  // Function to toggle sidebar on mobile screens
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger button for small screens */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleSidebar}
          className="p-2 text-white bg-blue-600 rounded-lg focus:outline-none shadow-md"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Sidebar container */}
      <aside
        className={`fixed top-0 left-0 w-64 bg-white h-screen p-4 shadow-md transition-transform transform z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:relative lg:transform-none`}
      >
        {/* Logo Section */}
        <div className="flex items-center justify-center mt-9 relative">
          <img src={logo} alt="Market Prime Logo" className="w-14" />
          <h1 className="text-xl font-bold text-blue-900 ml-2">
            MARKET <br /> PRIME
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-5 items-start px-4 mt-10 list-none text-[#002366] text-lg tracking-wide">
          <Link
            to="/VendorDashboard" // Updated path
            className={`cursor-pointer flex w-full gap-4 items-center px-4 py-2 rounded-md ${
              location.pathname === "/VendorDashboard"
                ? "bg-shopcolor text-white"
                : "hover:bg-gray-100"
            }`}
          >
            <LuLayoutDashboard
              className={`${
                location.pathname === "/VendorDashboard"
                  ? "text-white"
                  : "text-[#002366]"
              }`}
            />
            Dashboard
          </Link>

          <Link
            to="/VendorDashboard/Product" // Updated path
            className={`cursor-pointer flex w-full gap-4 items-center px-4 py-2 rounded-md ${
              location.pathname === "/VendorDashboard/Product"
                ? "bg-shopcolor text-white"
                : "hover:bg-gray-100"
            }`}
          >
            <FaBoxes className="text-xl mt-1" />
            Product
          </Link>

          <Link
            to="/VendorDashboard/Orders" // Updated path
            className={`cursor-pointer flex gap-4 items-center px-4 py-2 rounded-md ${
              location.pathname === "/VendorDashboard/Orders"
                ? "bg-shopcolor text-white"
                : "hover:bg-gray-100"
            }`}
          >
            <FaBoxes
              className={`${
                location.pathname === "/AdminDashboard/Orders"
                  ? "text-white"
                  : "text-[#002366]"
              }`}
            />
            Orders
          </Link>

          <li className="cursor-pointer flex gap-4 px-4 py-2 hover:bg-gray-100 rounded-md">
            <HiUsers className="text-xl mt-1" /> Customers
          </li>
        </div>

        {/* Footer Links */}
        <div className="absolute bottom-4 left-4">
          <li className="cursor-pointer flex gap-4 text-lg px-4 py-2 rounded-md hover:bg-gray-100">
            <IoSettingsOutline className="text-2xl mt-1" /> Settings
          </li>
          <li className="cursor-pointer flex gap-4 text-lg px-4 py-2 rounded-md hover:bg-gray-100 text-red-500">
            <RiLogoutCircleLine className="text-2xl mt-1" />
            Log Out
          </li>
        </div>
      </aside>

      {/* Overlay for mobile sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-30"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
