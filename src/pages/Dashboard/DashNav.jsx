import React, { useState } from "react";
import logo from "../../assets/Logo 1.png";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import profile from "../../assets/Filtered-Images/profile-pic.png";
import { BsGraphUpArrow } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { FaBoxes } from "react-icons/fa";
import { LuBox } from "react-icons/lu";
import { FaRegMessage } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";
import { LuLayoutDashboard } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";

const DashNav = () => {
    const location = useLocation();
    const [activeItem, setActiveItem] = useState(location.pathname);

    // Update active item when a link is clicked
    const handleItemClick = (path) => {
        setActiveItem(path);
    };

    return (
        <div className="w-1/6 h-screen border border-gray-400 bg-white shadow-xl relative">
            <div className="flex items-center justify-center mt-9">
                <img src={logo} alt="" className="w-14" />
                <h1 className="text-xl font-bold text-blue-900 ml-2">
                    MARKET PRIME
                </h1>
            </div>

            <div className="flex flex-col gap-5 items-start px-4 mt-10 list-none text-[#002366] text-lg tracking-wide ">
                <Link
                    to="/AdminDashboard"
                    className={`cursor-pointer flex gap-4 items-center px-4 py-2 rounded-md ${activeItem === "/AdminDashboard" ? 'bg-shopcolor text-white' : ''}`}
                    onClick={() => handleItemClick("/AdminDashboard")}
                >
                    <LuLayoutDashboard className={`${activeItem === "/AdminDashboard" ? 'text-white' : 'text-[#002366]'}`} /> Dashboard
                </Link>
                <li className="cursor-pointer flex gap-4 px-4 py-2">
                    <BsGraphUpArrow className="text-xl mt-1" /> Analytics
                </li>
                <Link
                    to="/Product"
                    className={`cursor-pointer flex gap-4 items-center px-4 py-2 rounded-md ${activeItem === "/Product" ? 'bg-shopcolor text-white' : ''}`}
                    onClick={() => handleItemClick("/Product")}
                >
                    <LuBox className={`${activeItem === "/Product" ? 'text-white' : 'text-[#002366]'}`} /> Product Management
                </Link>
                <li className="cursor-pointer flex gap-4 px-4 py-2">
                    <FaBoxes className="text-xl mt-1" /> Product Listing
                </li>
                <Link
                    to="/Orders"
                    className={`cursor-pointer flex gap-4 items-center px-4 py-2 rounded-md ${activeItem === "/Orders" ? 'bg-shopcolor text-white' : ''}`}
                    onClick={() => handleItemClick("/Orders")}
                >
                    <FaBoxes className={`${activeItem === "/Orders" ? 'text-white' : 'text-[#002366]'}`} /> Order Management
                </Link>
                <li className="cursor-pointer flex gap-4 px-4 py-2">
                    <HiUsers className="text-xl mt-1" /> User Management
                </li>
                <li className="cursor-pointer flex gap-4 px-4 py-2">
                    <HiUsers className="text-xl mt-1" /> Vendor Management
                </li>
                <li className="cursor-pointer flex gap-4 px-4 py-2">
                    <FaRegMessage className="text-xl mt-1" /> Messages
                </li>
            </div>

            <div className="flex flex-col items-start list-none mt-56 px-4 text-[#002366] text-lg tracking-wide gap-5">
                <li className="cursor-pointer flex gap-2">
                    <IoSettingsOutline className="text-xl mt-1" /> Settings
                </li>
                <li className="cursor-pointer flex gap-2">
                    <RiLogoutCircleLine className="text-xl mt-1" /> Logout
                </li>
            </div>
        </div>
    );
}

export default DashNav;
