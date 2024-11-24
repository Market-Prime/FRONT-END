import React, { useState } from "react";
import logo from "../../assets/Logo 1.png";
import { BsGraphUpArrow } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { FaRegMessage } from "react-icons/fa6";
import { FaBoxes } from "react-icons/fa";
import { LuBox, LuLayoutDashboard } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const DashNav = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleItemClick = (path) => {
    setActiveItem(path);
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`${
        isCollapsed ? "w-20" : "w-64"
      } h-screen bg-[#E6F7FF] z-20 shadow-xl fixed flex flex-col justify-between transition-all duration-300`}
    >
      {/* Logo and Toggle Section */}
      <div className="p-4">
        <div
          className={`flex items-center ${
            isCollapsed ? "justify-center" : "justify-start"
          } gap-2`}
        >
          <img src={logo} alt="Market Prime Logo" className="w-10" />
          {!isCollapsed && (
            <h1 className="text-xl font-bold text-blue-900">MARKET PRIME</h1>
          )}
        </div>
        <button
          className="mt-6 block lg:hidden bg-blue-500 text-white rounded p-2 w-full"
          onClick={toggleSidebar}
        >
          {isCollapsed ? "Expand" : "Collapse"}
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-5 text-[#002366] px-4">
        <SidebarItem
          path="/AdminDashboard"
          label="Dashboard"
          icon={<LuLayoutDashboard />}
          activeItem={activeItem}
          handleClick={handleItemClick}
          isCollapsed={isCollapsed}
        />
        <SidebarItem
          path="/AdminDashboard/Product"
          label="Product Management"
          icon={<LuBox />}
          activeItem={activeItem}
          handleClick={handleItemClick}
          isCollapsed={isCollapsed}
        />
        <SidebarItem
          path="/AdminDashboard/Orders"
          label="Order Management"
          icon={<FaBoxes />}
          activeItem={activeItem}
          handleClick={handleItemClick}
          isCollapsed={isCollapsed}
        />
        <SidebarItem
          path="/analytics"
          label="Analytics"
          icon={<BsGraphUpArrow />}
          activeItem={activeItem}
          handleClick={handleItemClick}
          isCollapsed={isCollapsed}
        />
        <SidebarItem
          path="/user-management"
          label="User Management"
          icon={<HiUsers />}
          activeItem={activeItem}
          handleClick={handleItemClick}
          isCollapsed={isCollapsed}
        />
        <SidebarItem
          path="/vendor-management"
          label="Vendor Management"
          icon={<HiUsers />}
          activeItem={activeItem}
          handleClick={handleItemClick}
          isCollapsed={isCollapsed}
        />
        <SidebarItem
          path="/messages"
          label="Messages"
          icon={<FaRegMessage />}
          activeItem={activeItem}
          handleClick={handleItemClick}
          isCollapsed={isCollapsed}
        />
      </nav>

      {/* Footer Section */}
      <div className="p-4">
        <SidebarItem
          path="/settings"
          label="Settings"
          icon={<IoSettingsOutline />}
          activeItem={activeItem}
          handleClick={handleItemClick}
          isCollapsed={isCollapsed}
        />
        <SidebarItem
          path="/logout"
          label="Logout"
          icon={<RiLogoutCircleLine />}
          activeItem={activeItem}
          handleClick={handleItemClick}
          isCollapsed={isCollapsed}
        />
      </div>
    </div>
  );
};

const SidebarItem = ({
  path,
  label,
  icon,
  activeItem,
  handleClick,
  isCollapsed,
}) => (
  <Link
    to={path}
    onClick={() => handleClick(path)}
    className={`flex items-center gap-4 px-4 py-2 rounded-md transition-all ${
      activeItem === path ? "bg-blue-500 text-white" : "hover:bg-gray-100"
    }`}
  >
    <span
      className={`text-xl ${
        activeItem === path ? "text-white" : "text-[#002366]"
      }`}
    >
      {icon}
    </span>
    {!isCollapsed && <span>{label}</span>}
  </Link>
);

export default DashNav;
