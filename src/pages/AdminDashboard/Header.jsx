import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import profile from "../../assets/admin-avatar.png";

const Header = ({staffId, name, image, type}) => {
  return (
    <div className="flex items-center justify-between bg-white p-3 shadow-md">
      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full max-w-lg md:w-2/5">
        <CiSearch className="text-2xl text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="flex-grow outline-none bg-transparent px-2 text-gray-700 placeholder-gray-400 hidden sm:block"
        />
      </div>

      {/* Profile Section */}
      <div className="flex items-center space-x-3">
        {/* Profile Icon */}
        <img
          src={image || profile}
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover sm:w-12 sm:h-12"
        />

        {/* Profile Details (hidden on small screens) */}
        <div className="hidden md:flex flex-col">
          <p className="flex text-lg font-medium items-center">
            {name} <FaAngleDown className="ml-1 text-gray-600" />
          </p>
          <p className="text-sm text-blue-600 font-semibold">{type}</p>
          <p className="text-sm text-blue-600 font-semibold">{staffId}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
