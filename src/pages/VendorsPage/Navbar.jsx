import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State for toggling search bar

  // Toggle search bar visibility
  const toggleSearchBar = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="flex items-center justify-between">
        {/* Profile Section */}
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 md:h-14 md:w-14 rounded-full bg-white"></div>
          <div className="flex flex-col">
            <h1 className="text-sm md:text-xl font-bold">SB EMPIRE</h1>
            <p className="text-xs md:text-sm">MarketPrime/sbempire.io</p>
          </div>
        </div>

        {/* Search Section */}
        <div className="relative">
          {/* Search Icon for small screens */}
          <button
            className={`block md:hidden ${isSearchOpen ? "hidden" : ""}`}
            onClick={toggleSearchBar}
          >
            <CiSearch className="text-2xl" />
          </button>

          {/* Search Bar (Responsive) */}
          <div
            className={`absolute top-0 right-0 w-full bg-blue-600 p-4 rounded-md transition-all duration-300 ${
              isSearchOpen ? "block" : "hidden"
            } md:block md:static md:w-auto md:bg-transparent md:p-0`}
          >
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Search..."
                className="w-full md:w-80 py-2 px-4 border-2 border-white rounded-md focus:outline-none"
              />
              <button className="block md:hidden" onClick={toggleSearchBar}>
                <AiOutlineClose className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
