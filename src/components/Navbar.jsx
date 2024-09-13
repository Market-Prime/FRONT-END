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
      <div className="header bg-white py-5 px-3 flex items-center justify-between w-full">
        {/* Logo */}
        <div className="logo-sec flex items-center gap-2">
          <Link to="/">
            <img src={logo} alt="MarketPrime Logo" className="h-10" />
          </Link>
        </div>

        {/* Search Icon and Hamburger Menu (only for screens < 768px) */}
        <div className="flex md:hidden items-center justify-center gap-4">
          <Link to="/search">
            <div className="scon h-10 w-10 rounded-full flex items-center justify-center bg-transparent hover:bg-gray-400">
              <CiSearch className="text-2xl" />
            </div>
          </Link>
          <RxHamburgerMenu
            className="ham text-2xl cursor-pointer"
            onClick={toggleModal}
          />
        </div>

        {/* Categories and Other Icons (hidden for screens < 768px) */}
        <ul className="hidden md:flex gap-10 text-lg">
          <li className="cursor-pointer ">Men</li>
          <li className="cursor-pointer">Women</li>
          <li className="cursor-pointer">Shoes</li>
          <li className="cursor-pointer">Bags & Belt</li>
          <li className="cursor-pointer">Jewelries</li>
        </ul>

        <div className="search-bar hidden md:flex items-center relative">
          <div className="relative w-64">
            <input
              type="text"
              placeholder="Search Products"
              className="bar w-full pl-10 p-2 rounded-full bg-white focus:bg-gray-200"
            />
            <Link to="/search">
              <CiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-2xl" />
            </Link>
          </div>
          <div className="others flex items-center gap-4 ml-4">
            <Link to="/login">
              <div className="account h-10 w-10 flex items-center justify-center transition ease-in-out duration-400 rounded-full hover:bg-gray-300">
                <AiOutlineUser className="text-2xl" />
              </div>
            </Link>

            <Link to="/cart">
              <div className="cart h-10 w-10 flex items-center justify-center transition ease-in-out duration-400 rounded-full hover:bg-gray-300">
                <IoCartOutline className="text-2xl" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Dropdown Menu for small screens */}
      {showModal && (
        <div className="md:hidden flex flex-col items-center bg-white py-5">
          <ul className="flex flex-col gap-4 text-lg">
            <li className="cursor-pointer">Men</li>
            <li className="cursor-pointer">Women</li>
            <li className="cursor-pointer">Shoes</li>
            <li className="cursor-pointer">Bags & Belt</li>
            <li className="cursor-pointer">Jewelries</li>
          </ul>

          <div className="flex items-center gap-4 mt-5">
            <Link to="/login">
              <div className="account h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-300">
                <AiOutlineUser className="text-2xl" />
              </div>
            </Link>

            <Link to="/cart">
              <div className="cart h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-300">
                <IoCartOutline className="text-2xl" />
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
