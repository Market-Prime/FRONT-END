import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo 1.png";
import { CiSearch } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {/* Main Navbar */}
      <div className="header bg-[#8FCEDD] absolute z-50 left-[12%] top-6 py-4 px-12 ml-6 flex items-center justify-between w-[75%] shadow-lg rounded-full">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="MarketPrime Logo" className="h-12" />
        </Link>

        {/* Search Icon and Hamburger Menu (only for screens < 768px) */}
        <div className="flex lg:hidden items-center justify-center gap-6">
          <Link to="/search">
            <div className="scon h-10 w-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-300 transition duration-300">
              <CiSearch className="text-2xl" />
            </div>
          </Link>
          <RxHamburgerMenu
            className="ham text-3xl cursor-pointer"
            onClick={toggleModal}
          />
        </div>

        {/* Navbar Links for larger screens */}
        <ul className="hidden lg:flex gap-12 text-[17px] ml-6 font-small text-gray-700">
          {["Home", "Men", "Women", "Collections"].map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-blue-800 transition duration-300"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Search Bar and Icons (visible on larger screens) */}
        <div className="hidden lg:flex items-center gap-8">
          {/* <div className="relative w-56">
            <input
              type="text"
              placeholder="Search Products"
              className="w-full pl-12 p-3 rounded-full bg-gray-100 focus:bg-gray-200 transition duration-300 outline-none"
            />
            <Link to="/search">
              <CiSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-2xl text-gray-500" />
            </Link>
          </div> */}
          <div className="flex items-center gap-4">
            <Link to="/login">
              <div className="h-12 w-12 flex items-center justify-center bg-gray-100 hover:bg-gray-300 rounded-full transition duration-300">
                <AiOutlineUser className="text-2xl text-gray-600" />
              </div>
            </Link>
            <Link to="/cart">
              <div className="h-12 w-12 flex items-center justify-center bg-gray-100 hover:bg-gray-300 rounded-full transition duration-300">
                <IoCartOutline className="text-2xl text-gray-600" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Dropdown Menu for small screens */}
      {showModal && (
        <div className="lg:hidden flex flex-col items-center bg-white py-6 shadow-md absolute top-[85px] w-full z-40">
          <ul className="flex flex-col gap-6 text-lg text-gray-700">
            {["Men", "Women", "Shoes", "Bags & Belt", "Jewelries"].map(
              (item) => (
                <li
                  key={item}
                  className="cursor-pointer hover:text-purple-600 transition duration-300"
                >
                  {item}
                </li>
              )
            )}
          </ul>
          <div className="flex items-center gap-4 mt-6">
            <Link to="/login">
              <div className="h-10 w-10 flex items-center justify-center bg-gray-100 hover:bg-gray-300 rounded-full transition duration-300">
                <AiOutlineUser className="text-2xl text-gray-600" />
              </div>
            </Link>
            <Link to="/cart">
              <div className="h-10 w-10 flex items-center justify-center bg-gray-100 hover:bg-gray-300 rounded-full transition duration-300">
                <IoCartOutline className="text-2xl text-gray-600" />
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
