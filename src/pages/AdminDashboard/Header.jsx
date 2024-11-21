import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import profile from "../../assets/Filtered-Images/profile-pic.png";
const Header = () =>{
    return(
    <div className="flex  items-center justify-end bg-white p-3">
        <div className="flex items-center justify-start w-2/6 mx-auto bg-white border border-gray-500 rounded-xl px-2">
          <input
            type="text"
            className=" outline-none w-full border-gray-500 px-4 py-3 rounded-lg bg-white"
          />
          <CiSearch className="text-2xl" />
        </div>
        <div className="flex items-center justify-end  w-2/12 ">
          <img src={profile} alt="" className="w-12 h-12" />
          <div className="flex flex-col ml-5">
            <p className="flex text-xl">
            Akpan David <FaAngleDown className="mt-1 ml-1" />
            </p>
            <p className="text-xl text-blue-600">Super Admin </p>
          </div>
        </div>
    </div>
    )
}
export default Header;