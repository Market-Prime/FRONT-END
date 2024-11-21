import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaBoxes } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";
import { HiUsers } from "react-icons/hi";
import { FiMenu } from "react-icons/fi"; // Icon for menu toggle
import logo from "../../assets/Logo 1.png";

const Sidebar = () => {
  const location = useLocation();
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
        <FiMenu className="text-2xl" />
      </button>

      {/* Sidebar container */}
      <aside
        className={`fixed top-0 left-0 w-64 bg-white h-full p-6 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:relative lg:w-72 lg:h-screen z-10`}
      >
        {/* Logo Section */}
        <div className="flex items-center justify-center mt-8 relative">
          <img src={logo} alt="Market Prime Logo" className="w-12" />
          <h1 className="text-xl font-bold text-blue-900 ml-2">
            MARKET <br /> PRIME
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-4 mt-10 text-[#002366] text-lg">
          <Link
            to="/VendorDashboard"
            className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-colors ${
              location.pathname === "/VendorDashboard"
                ? "bg-blue-700 text-white"
                : "hover:bg-blue-100"
            }`}
            onClick={() => setIsOpen(false)} // Close sidebar after navigating
          >
            <LuLayoutDashboard className="text-xl" />
            Dashboard
          </Link>

          <Link
            to="/VendorDashboard/Product"
            className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-colors ${
              location.pathname === "/VendorDashboard/Product"
                ? "bg-blue-700 text-white"
                : "hover:bg-blue-100"
            }`}
            onClick={() => setIsOpen(false)} // Close sidebar after navigating
          >
            <FaBoxes className="text-xl" />
            Product
          </Link>

          <Link
            to="/VendorDashboard/Orders"
            className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-colors ${
              location.pathname === "/VendorDashboard/Orders"
                ? "bg-blue-700 text-white"
                : "hover:bg-blue-100"
            }`}
            onClick={() => setIsOpen(false)} // Close sidebar after navigating
          >
            <FaBoxes className="text-xl" />
            Orders
          </Link>

          <Link
            to="/VendorDashboard/Customers"
            className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-blue-100 transition-colors"
            onClick={() => setIsOpen(false)} // Close sidebar after navigating
          >
            <HiUsers className="text-xl" />
            Customers
          </Link>
        </nav>

        {/* Bottom Links */}
        <div className="mt-auto flex flex-col gap-4 border-t pt-4">
          <Link
            to="/settings"
            className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-blue-100 transition-colors"
            onClick={() => setIsOpen(false)} // Close sidebar after navigating
          >
            <IoSettingsOutline className="text-xl" />
            Settings
          </Link>
          <Link
            to="/logout"
            className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-blue-100 transition-colors"
            onClick={() => setIsOpen(false)} // Close sidebar after navigating
          >
            <RiLogoutCircleLine className="text-xl" />
            Log Out
          </Link>
        </div>
      </aside>

      {/* Overlay for small screens when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50  lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
