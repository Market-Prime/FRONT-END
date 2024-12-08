import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/Logo 1.png";
import { CiSearch } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useAuth } from "../pages/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleSearchBox = () => {
    setShowSearchBox(!showSearchBox);
  };

  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    navigate("/search");
  };

  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const { isLoggedIn, logout } = useAuth();

  const toggleUserDropdown = () => {
    setShowUserDropdown(!showUserDropdown);
  };

  // Add scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <div
        className={`header ${
          isScrolled ? "bg-topdealbg shadow-2xl text-black" : "bg-transparent"
        } fixed z-50 top-0 py-2 px-12 ml-0 flex items-center justify-between w-full transition-all duration-300`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="MarketPrime Logo" className="h-14 rounded-xl" />
        </Link>
  
        {/* Navbar Links for larger screens */}
        <ul className="hidden lg:flex gap-12 text-2xl ml-10 font-bold font-small">
          {["Home", "Men", "Women", "Collections"].map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-blue-800 transition duration-300"
            >
              {item}
            </li>
          ))}
        </ul>
  
        {/* Icons Section */}
        <div className="flex items-center gap-3">
          {/* Search Icon and Box */}
          <div className="relative flex items-center">
            <div
              className="h-12 w-12 flex items-center justify-center hover:bg-gray-300 rounded-full transition duration-300 cursor-pointer"
              onClick={toggleSearchBox}
            >
              <CiSearch className="text-3xl text-black font-bold" />
            </div>
  
            {/* Search Box */}
            {showSearchBox && (
              <div className="ml-4 flex items-center bg-white shadow-md rounded-full pl-4 pr-2 py-2 w-[400px] transition-all duration-300">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchInput}
                  className="flex-grow p-2 border-none outline-none text-gray-600"
                />
                <button
                  onClick={handleSearch}
                  className="bg-blue-500 text-white py-1 px-4 rounded-full hover:bg-blue-600 transition duration-300"
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
                  {isLoggedIn ? (
                    <>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <Link to="/account">My Account</Link>
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={logout}
                      >
                        Logout
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <Link to="/login">Login</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <Link to="/signup">Register</Link>
                      </li>
                    </>
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
      </div>
  
      {/* Dropdown Menu for small screens */}
      {showModal && (
        <div className="lg:hidden flex flex-col items-center bg-white py-6 shadow-md absolute top-[85px] w-full z-40">
          <ul className="flex flex-col gap-6 text-lg text-gray-700">
            {["Men", "Women", "Shoes", "Bags & Belt", "Jewelries"].map((item) => (
              <li
                key={item}
                className="cursor-pointer hover:text-purple-600 transition duration-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}  
export default Navbar;
