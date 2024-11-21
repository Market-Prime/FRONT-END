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
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle sidebar on mobile screens
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex relative">
      {/* Toggle button for small screens */}
      <button
        className="lg:hidden p-3 text-blue-900 bg-white rounded-md md:fixed fixed top-4 left-4 z-20 shadow-md"
        onClick={toggleSidebar}
      >
        {isOpen ? "Close Sidebar" : "Open Sidebar"}
      </button>

      {/* Sidebar container */}
      <aside
        className={`fixed top-0 left-0 w-72 bg-white h-screen p-4 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:relative lg:flex lg:flex-col`}
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
                : ""
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
                : ""
            }`}
          >
            <FaBoxes className="text-xl mt-1" /> Product
          </Link>

          <Link
            to="/VendorDashboard/Orders" // Updated path
            className={`cursor-pointer flex gap-4 items-center px-4 py-2 rounded-md ${
              location.pathname === "/VendorDashboard/Orders"
                ? "bg-shopcolor text-white"
                : ""
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

          <li className="cursor-pointer flex gap-4 px-4 py-2">
            <HiUsers className="text-xl mt-1" /> Customers
          </li>
        </div>
        <div className="fixed bottom-0 left-0 flex flex-col">
          <li className="cursor-pointer flex gap-4 text-xl px-2 py-2">
            <IoSettingsOutline className="text-2xl mt-1" /> Settings
          </li>
          <li className="cursor-pointer flex gap-4 text-xl px-2 py-2">
            <RiLogoutCircleLine className="text-2xl mt-1" />
            Log Out
          </li>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
