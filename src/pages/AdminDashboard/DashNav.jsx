import React, { useState } from "react";
import logo from "../../assets/Logo 1.png";
import { BsGraphUpArrow } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { FaBoxes } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { LuBox, LuLayoutDashboard } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const DashNav = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleItemClick = (path) => {
    setActiveItem(path);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative h-screen">
      {/* Hamburger Icon */}
      <button
        onClick={toggleSidebar}
        className="absolute top-4 left-4 z-50 text-2xl bg-blue-900 text-white p-2 rounded-md shadow-lg md:hidden"
      >
        {isSidebarOpen ? "✖" : "☰"}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg border-r border-gray-200 flex flex-col justify-between transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-40 w-64`}
      >
        {/* Logo Section */}
        <div className="flex flex-col items-center mt-6">
          <img src={logo} alt="Market Prime Logo" className="w-12 md:w-14" />
          <h1 className="text-lg md:text-xl font-semibold text-blue-900 mt-2">
            MARKET PRIME
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-4 mt-8 px-4">
          {[
            {
              path: "/AdminDashboard",
              label: "Dashboard",
              icon: LuLayoutDashboard,
            },
            {
              path: "/AdminDashboard/Product",
              label: "Product Management",
              icon: LuBox,
            },
            {
              path: "/AdminDashboard/Orders",
              label: "Order Management",
              icon: FaBoxes,
            },
          ].map(({ path, label, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ease-in-out ${
                activeItem === path
                  ? "bg-blue-900 text-white shadow-md"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => handleItemClick(path)}
            >
              <Icon className="text-lg" />
              <span>{label}</span>
            </Link>
          ))}

          {/* Non-Link Items */}
          {[
            { label: "Analytics", icon: BsGraphUpArrow },
            { label: "Product Listing", icon: FaBoxes },
            { label: "User Management", icon: HiUsers },
            { label: "Vendor Management", icon: HiUsers },
            { label: "Messages", icon: FaRegMessage },
          ].map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-blue-900 hover:bg-gray-100 cursor-pointer transition-all duration-200 ease-in-out"
            >
              <Icon className="text-lg" />
              <span>{label}</span>
            </div>
          ))}
        </div>

        {/* Footer Links */}
        <div className="pb-6 px-4">
          <div className="flex items-center gap-3 py-3 text-blue-900 hover:bg-gray-100 rounded-lg cursor-pointer transition-all duration-200 ease-in-out">
            <IoSettingsOutline className="text-lg" />
            <span>Settings</span>
          </div>
          <div className="flex items-center gap-3 py-3 text-red-500 hover:bg-gray-100 rounded-lg cursor-pointer transition-all duration-200 ease-in-out">
            <RiLogoutCircleLine className="text-lg" />
            <span>Logout</span>
          </div>
        </div>
      </div>

      {/* Overlay for Mobile Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default DashNav;
