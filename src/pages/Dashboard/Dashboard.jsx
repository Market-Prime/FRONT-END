import React from "react";
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

const Dashboard = () => {
  return (
    <div className="h-screen w-screen ">
      {/* Navigation Bar */}
      <div className="h-[60px] w-[85%] absolute right-0 flex justify-between items-center px-52 border border-gray-400 bg-slate-100 ">
        <div className="flex relative">
          <input
            type="text"
            className="border-2 outline-none border-gray-500 px-4 py-2 rounded-lg w-[300px] h-10"
          />
          <CiSearch className="text-2xl mt-2 mr-2 right-0 absolute" />
        </div>
        <div className="flex">
          <img src={profile} alt="" className="w-12 h-12" />
          <div className="flex flex-col gap-1">
            <p className="flex text-">
              Akpan David <FaAngleDown />
            </p>
            <p>Super Admin </p>
          </div>
        </div>
      </div>

      {/* Side-bar */}
      <div className="flex h-screen">
        <div className="w-[25%] border border-gray-400 bg-white shadow-xl relative">
          <div className="flex items-center justify-center mt-9">
            <img src={logo} alt="" className="w-14" />
            <h1 className="text-xl font-bold text-blue-900">
              MARKET <br /> PRIME
            </h1>
          </div>

          <div className="flex flex-col gap-5 items-center mt-10 list-none text-[#002366] text-lg tracking-wide ">
            <li className="bg-[#002366] rounded-md py-4 w-full text-center text-white text-2xl cursor-pointer">
              Dashboard
            </li>
            <li className="cursor-pointer flex gap-4">
              <BsGraphUpArrow className="text-xl mt-1" /> Analytics
            </li>
            <li className="cursor-pointer flex gap-4">
              {" "}
              <LuBox className="text-xl mt-1" /> Product Management
            </li>
            <li className="cursor-pointer flex gap-4">
              {" "}
              <FaBoxes className="text-xl mt-1" /> Product Listing
            </li>
            <li className="cursor-pointer">Order Management</li>
            <li className="cursor-pointer flex gap-4">
              {" "}
              <HiUsers className="text-xl mt-1" />
              User Management
            </li>
            <li className="cursor-pointer flex gap-4">
              {" "}
              <HiUsers className="text-xl mt-1" /> Vendor Management
            </li>
            <li className="cursor-pointer flex gap-4">
              {" "}
              <FaRegMessage className="text-xl mt-1" /> Messages
            </li>
          </div>

          <div className="flex flex-col items-start list-none mt-14 ml-5  text-[#002366] text-lg tracking-wide gap-5">
            <li className="cursor-pointer flex gap-2">
              <IoSettingsOutline className="text-xl mt-1" />
              Settings
            </li>
            <li className="cursor-pointer flex gap-2">
              {" "}
              <RiLogoutCircleLine className="text-xl mt-1" />
              Logout
            </li>
          </div>
        </div>
        {/* Inner content */}
        <div className="w-[80%] h-full bg-[#E6F7FF]">
          {/* Analytics Card */}
          <div className="flex bg-herocolor pt-4 justify-evenly items-center px-3 h-[30%] w-full ">
            <div className="h-[70%] w-[20%] mt-12 bg-shopcolor rounded-3xl"></div>
            <div className="h-[70%] w-[20%] mt-12 rounded-3xl bg-shopcolor"></div>
            <div className="h-[70%] w-[20%] mt-12 rounded-3xl bg-shopcolor"></div>
            <div className="h-[70%] w-[20%] mt-12 rounded-3xl bg-shopcolor"></div>
          </div>

          {/* Charts */}
          <div className="h-[40%] bg-emerald-400"></div>

          {/* Recent Orders */}
          <div className="h-[30%] bg-seamlessbg"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
