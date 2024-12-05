import React from "react";
import { CiSearch } from "react-icons/ci";

const Header = ({ name, role, profileImg }) => {
    return (
        <div className="flex items-center justify-end bg-white p-3 border fixed admin-header">
            <div className="flex items-center justify-start w-2/6 mx-auto bg-white border border-gray-500 rounded-xl px-2">
                <input
                    type="text"
                    className=" outline-none w-full border-gray-500 px-4 py-3 rounded-lg bg-white"
                />
                <CiSearch className="text-2xl" />
            </div>
            <div className="flex items-center justify-end w-2/12">
                <img
                    src={profileImg}
                    alt=""
                    className="w-12 h-12 rounded-full"
                />
                <div className="flex-col ml-2 items-center hidden lg:block">
                    <p className="flex text-lg font-semibold">{name}</p>
                    <p className="text-sm txt-2">{role}</p>
                </div>
            </div>
        </div>
    );
};
export default Header;
