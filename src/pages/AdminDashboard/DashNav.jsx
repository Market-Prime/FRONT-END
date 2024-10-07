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

  const handleItemClick = (path) => {
    setActiveItem(path);
  };

  return (
    <div className="w-1/6 h-screen border border-gray-400 bg-white shadow-xl flex flex-col justify-between">
      {/* Logo Section */}
      <div>
        <div className="flex items-center justify-center mt-9">
          <img src={logo} alt="Market Prime Logo" className="w-14" />
          <h1 className="text-xl font-bold text-blue-900 ml-2">MARKET PRIME</h1>
        </div>

        <div className="flex flex-col gap-5 items-start px-4 mt-10 list-none text-[#002366] text-lg tracking-wide">
          {/* Dashboard Link */}
          <Link
            to="/AdminDashboard"
            className={`cursor-pointer flex gap-4 items-center px-4 py-2 rounded-md ${
              activeItem === "/AdminDashboard" ? "bg-shopcolor text-white" : ""
            }`}
            onClick={() => handleItemClick("/AdminDashboard")}
          >
            <LuLayoutDashboard
              className={`${
                activeItem === "/AdminDashboard"
                  ? "text-white"
                  : "text-[#002366]"
              }`}
            />
            Dashboard
          </Link>

          {/* Analytics Section */}
          <li className="cursor-pointer flex gap-4 px-4 py-2">
            <BsGraphUpArrow className="text-xl mt-1" /> Analytics
          </li>

          {/* Product Management Link */}
          <Link
            to="/AdminDashboard/Product"
            className={`cursor-pointer flex gap-4 items-center px-4 py-2 rounded-md ${
              activeItem === "/Product" ? "bg-shopcolor text-white" : ""
            }`}
            onClick={() => handleItemClick("/Product")}
          >
            <LuBox
              className={`${
                activeItem === "/Product" ? "text-white" : "text-[#002366]"
              }`}
            />
            Product Management
          </Link>

          {/* Product Listing Section */}
          <li className="cursor-pointer flex gap-4 px-4 py-2">
            <FaBoxes className="text-xl mt-1" /> Product Listing
          </li>

          {/* Order Management Link */}
          <Link
            to="/AdminDashboard/Orders"
            className={`cursor-pointer flex gap-4 items-center px-4 py-2 rounded-md ${
              activeItem === "/AdminDashboard/Orders"
                ? "bg-shopcolor text-white"
                : ""
            }`}
            onClick={() => handleItemClick("/AdminDashboard/Orders")}
          >
            <FaBoxes
              className={`${
                activeItem === "/AdminDashboard/Orders"
                  ? "text-white"
                  : "text-[#002366]"
              }`}
            />
            Order Management
          </Link>

          {/* User Management Section */}
          <li className="cursor-pointer flex gap-4 px-4 py-2">
            <HiUsers className="text-xl mt-1" /> User Management
          </li>

          {/* Vendor Management Section */}
          <li className="cursor-pointer flex gap-4 px-4 py-2">
            <HiUsers className="text-xl mt-1" /> Vendor Management
          </li>

          {/* Messages Section */}
          <li className="cursor-pointer flex gap-4 px-4 py-2">
            <FaRegMessage className="text-xl mt-1" /> Messages
          </li>
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-grow"></div>

      {/* Fixed section for Settings and Logout */}
      <div className="pb-4">
        {/* Settings Section */}
        <li className="cursor-pointer flex gap-2 px-4 py-2">
          <IoSettingsOutline className="text-xl mt-1" /> Settings
        </li>

        {/* Logout Section */}
        <li className="cursor-pointer flex gap-2 px-4 py-2">
          <RiLogoutCircleLine className="text-xl mt-1" /> Logout
        </li>
      </div>
    </div>
  );
};

export default DashNav;
