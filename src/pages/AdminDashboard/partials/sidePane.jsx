import React, { useState } from "react";
import logo from "../../../assets/Logo 1.png";
import { BsGraphUpArrow } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { FaRegMessage } from "react-icons/fa6";
import { FaBoxes } from "react-icons/fa";
import { LuBox, LuLayoutDashboard } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const SidePane = () => {
    const location = useLocation();
    const [activeItem, setActiveItem] = useState(location.pathname);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleItemClick = (path) => {
        setActiveItem(path);
    };


    return (
        <div
            className={`h-screen bg-[#E6F7FF] z-20 shadow-xl fixed flex flex-col justify-between transition-all duration-300 side-pane`}
        >
            {/* Logo and Toggle Section */}
            <div className="p-4">
                <div
                    className={`flex items-center ${
                        isCollapsed ? "justify-center" : "justify-start"
                    } gap-2`}
                >
                    <img src={logo} alt="Market Prime Logo" className="w-10" />
                    <h1 className="text-xl font-bold text-blue-900 label">
                        MARKET PRIME
                    </h1>
                </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-5 text-[#002366] px-4">
                <SidebarItem
                    path="/admin"
                    label="Dashboard"
                    icon={<LuLayoutDashboard />}
                    activeItem={activeItem}
                    handleClick={handleItemClick}
                />
                <SidebarItem
                    path="/admin/products"
                    label="Product Management"
                    icon={<LuBox />}
                    activeItem={activeItem}
                    handleClick={handleItemClick}
                />
                <SidebarItem
                    path="/admin/orders"
                    label="Order Management"
                    icon={<FaBoxes />}
                    activeItem={activeItem}
                    handleClick={handleItemClick}
                />
                <SidebarItem
                    path="/admin/analytics"
                    label="Analytics"
                    icon={<BsGraphUpArrow />}
                    activeItem={activeItem}
                    handleClick={handleItemClick}
                />
                <SidebarItem
                    path="/admin/user-management"
                    label="User Management"
                    icon={<HiUsers />}
                    activeItem={activeItem}
                    handleClick={handleItemClick}
                />
                <SidebarItem
                    path="/admin/vendor-management"
                    label="Vendor Management"
                    icon={<HiUsers />}
                    activeItem={activeItem}
                    handleClick={handleItemClick}
                />
                <SidebarItem
                    path="/admin/managers"
                    label="Admins"
                    icon={<HiUsers />}
                    activeItem={activeItem}
                    handleClick={handleItemClick}
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
                />
                <SidebarItem
                    path="/logout"
                    label="Logout"
                    icon={<RiLogoutCircleLine />}
                    activeItem={activeItem}
                    handleClick={handleItemClick}
                />
            </div>
        </div>
    );
};

const SidebarItem = ({ path, label, icon, activeItem, handleClick }) => (
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
        <span className="label">{label}</span>
    </Link>
);

export default SidePane;
