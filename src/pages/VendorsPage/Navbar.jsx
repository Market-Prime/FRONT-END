import React from "react";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="flex flex-row items-center justify-end gap-96">
        <div className="flex items-center justify-start">
          <input
            type="text"
            placeholder=""
            className="py-2 px-20 border-2 border-white rounded-xl relative"
          />
          <CiSearch className="absolute text-blue-600 text-2xl ml-3" />
        </div>
        <div className="flex gap-2">
          <div className="h-14 w-14 rounded-full bg-white"></div>
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-bold">SB EMPIRE</h1>
            <p>MarketPrime/sbempire.io</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
