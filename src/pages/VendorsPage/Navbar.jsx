import React from "react";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="flex flex-row items-center justify-between">
        {/* Hamburger Icon - Visible on Mobile */}
        <div className="lg:hidden">
          <GiHamburgerMenu className="text-2xl" />
        </div>

        {/* Search Input - Hidden on Mobile */}
        <div className="hidden lg:flex items-center">
          <input
            type="text"
            placeholder=""
            className="py-2 px-20 border-2 border-white rounded-xl"
          />
          <CiSearch className="absolute text-blue-600 text-2xl ml-3" />
        </div>

        {/* Profile Section */}
        <div className="flex items-center gap-2">
          {/* Profile Circle */}
          <div className="h-14 w-14 rounded-full bg-white"></div>

          {/* Text Details - Hidden on Mobile */}
          <div className="hidden lg:flex flex-col gap-1">
            <h1 className="text-xl font-bold">SB EMPIRE</h1>
            <p>MarketPrime/sbempire.io</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
