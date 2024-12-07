import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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

  // Navigation items
  const navItems = [
    {
      path: "/VendorDashboard",
      label: "Dashboard",
      icon: LuLayoutDashboard,
    },
    {
      path: "/VendorDashboard/Product",
      label: "Product",
      icon: FaBoxes,
    },
    {
      path: "/VendorDashboard/Orders",
      label: "Orders",
      icon: FaBoxes,
    },
    {
      path: null, // Placeholder for non-link items
      label: "Customers",
      icon: HiUsers,
    },
  ];

  return (
    <div className="flex relative">
      {/* Toggle button for small screens */}
      <button
        className="lg:hidden p-3 text-blue-900 bg-white rounded-md fixed top-4 left-4 z-20 shadow-md"
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
        <div className="flex items-center justify-center mt-9">
          <img src={logo} alt="Market Prime Logo" className="w-14" />
          <h1 className="text-xl font-bold text-blue-900 ml-2">
            MARKET <br /> PRIME
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-5 items-start px-4 mt-10 text-[#002366] text-lg tracking-wide">
          {navItems.map(({ path, label, icon: Icon }, index) => (
            <Link
              key={index}
              to={path || "#"}
              className={`flex w-full gap-4 items-center px-4 py-2 rounded-md cursor-pointer ${
                location.pathname === path ? "bg-shopcolor text-white" : ""
              }`}
              onClick={path ? toggleSidebar : null} // Close sidebar on link click
            >
              <Icon
                className={`text-xl ${
                  location.pathname === path ? "text-white" : "text-[#002366]"
                }`}
              />
              <span>{label}</span>
            </Link>
          ))}
        </div>

        {/* Footer Links */}
        <div className="mt-auto flex flex-col px-4 gap-3">
          <div className="flex gap-4 items-center px-2 py-2 cursor-pointer text-[#002366] hover:bg-gray-100 rounded-md">
            <IoSettingsOutline className="text-2xl" />
            <span>Settings</span>
          </div>
          <div className="flex gap-4 items-center px-2 py-2 cursor-pointer text-red-500 hover:bg-gray-100 rounded-md">
            <RiLogoutCircleLine className="text-2xl" />
            <span>Log Out</span>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;