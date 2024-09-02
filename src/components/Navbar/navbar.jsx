import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo 1.png";
import profile from "../../assets/user-solid.svg";
import dropdown from "../../assets/chevron-down-solid.svg";
import cart from "../../assets/cart-shopping-solid.svg";
import Login from "../../pages/Login";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="flex items-center p-4 bg-[#E6F7FF]">
      <div>
        <h1 className="flex items-center gap-4 text-lg font-medium font-verdana cursor-pointer">
          <img src={logo} alt="Logo" className="w-18 h-18" />
          <Link to="/Home" className="text-xl">
            MARKET <br />
            <span className="block text-lg">PRIME</span>
          </Link>
        </h1>
      </div>

      <div className="flex flex-1 justify-center">
        <form className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search products, brands and categories"
            className="px-4 py-2 rounded-lg border-none outline-none w-96 bg-white"
          />
          <button className="bg-blue-800 text-white px-4 py-2 rounded-lg text-lg">
            Search
          </button>
        </form>
      </div>

      <div className="flex items-center gap-8">
        <ul className="flex items-center gap-8">
          <li
            className="flex items-center gap-2 cursor-pointer"
            onClick={toggleModal}
          >
            <img src={profile} alt="Profile" className="w-5 h-5 bg-white" />
            <Link to="#">Account</Link>
            <img src={dropdown} alt="Dropdown" className="w-4 h-4 mt-1" />
          </li>
          <li className="flex items-center gap-2">
            <Link to="/cart">Cart</Link>
            <img src={cart} alt="Cart" className="w-5 h-5" />
          </li>
        </ul>
      </div>

      {showModal && <Login toggleModal={toggleModal} />}
    </div>
  );
};

export default Navbar;
