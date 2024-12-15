import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/Logo 1.png";
import { CiSearch } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useAuth } from "../pages/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();

  const [isScrolled, setIsScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const navLinks = ["Home", "Men", "Women", "Collections"];
  const dropdownLinks = isLoggedIn
    ? [
        { name: "My Account", path: "/account" },
        { name: "Logout", action: logout },
      ]
    : [
        { name: "Login", path: "/login" },
        { name: "Register", path: "/signup" },
      ];

  // Toggle search box visibility
  const toggleSearchBox = () => setShowSearchBox((prev) => !prev);

  // Toggle modal for small screens
  const toggleModal = () => setShowModal((prev) => !prev);

  // Toggle user dropdown menu
  const toggleUserDropdown = () => setShowUserDropdown((prev) => !prev);

  // Handle search input and navigation
  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    navigate("/search");
  };

  // Listen for scroll events to toggle sticky navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <div
        className={`header ${
          isScrolled ? "bg-topdealbg shadow-2xl text-black" : "bg-transparent"
        } fixed z-50 top-0 py-2 px-12 flex items-center justify-between w-full transition-all duration-300`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="MarketPrime Logo" className="h-14 rounded-xl" />
        </Link>
  
        {/* Navbar Links (Desktop View) */}
        <ul className="hidden lg:flex gap-12 text-2xl ml-10 font-bold">
          {navLinks.map((link) => (
            <li
              key={link}
              className="cursor-pointer hover:text-blue-800 transition duration-300"
            >
              {link}
            </li>
          ))}
        </ul>
  
        {/* Icons Section */}
        <div className="flex items-center gap-3">
          {/* Search Box */}
          <div className="relative">
            <div
              className="h-12 w-12 flex items-center justify-center hover:bg-gray-300 rounded-full transition duration-300 cursor-pointer"
              onClick={toggleSearchBox}
            >
              <CiSearch className="text-3xl text-black" />
            </div>
            {showSearchBox && (
              <div className="absolute top-14 right-0 bg-white shadow-md rounded-full pl-4 pr-2 py-2 w-[400px]">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-grow p-2 outline-none text-gray-600"
                />
                <button
                  onClick={handleSearch}
                  className="bg-blue-500 text-white py-1 px-4 rounded-full hover:bg-blue-600"
                >
                  Go
                </button>
              </div>
            )}
          </div>

          {/* User Dropdown */}
          <div className="relative">
            <div
              className="h-12 w-12 flex items-center justify-center bg-gray-100 hover:bg-gray-300 rounded-full transition duration-300 cursor-pointer"
              onClick={toggleUserDropdown}
            >
              <AiOutlineUser className="text-2xl text-gray-600" />
            </div>
            {showUserDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                <ul className="text-gray-700">
                  {dropdownLinks.map((link) =>
                    link.path ? (
                      <li
                        key={link.name}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        <Link to={link.path}>{link.name}</Link>
                      </li>
                    ) : (
                      <li
                        key={link.name}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={link.action}
                      >
                        {link.name}
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>

          {/* Cart Icon */}
          <Link to="/cart">
            <div className="h-12 w-12 flex items-center justify-center bg-gray-100 hover:bg-gray-300 rounded-full transition duration-300">
              <IoCartOutline className="text-2xl text-gray-600" />
            </div>
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div
          className="lg:hidden flex items-center justify-center h-12 w-12 hover:bg-gray-300 rounded-full transition duration-300 cursor-pointer"
          onClick={toggleModal}
        >
          <RxHamburgerMenu className="text-2xl text-black" />
        </div>
      </div>

      {/* Dropdown Menu for Small Screens */}
      {showModal && (
        <div className="lg:hidden flex flex-col items-center bg-white py-6 shadow-md absolute top-[85px] w-full z-40">
          <ul className="flex flex-col gap-6 text-lg text-gray-700">
            {navLinks.map((link) => (
              <li
                key={link}
                className="cursor-pointer hover:text-purple-600 transition duration-300"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}  
export default Navbar;
