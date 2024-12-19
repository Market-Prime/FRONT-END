import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { MdOutlineManageAccounts } from "react-icons/md";
import { HiHashtag } from "react-icons/hi";
import { CiLogout } from "react-icons/ci";

const HeaderUserIconDropDown = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [mpxisSet, setMpxIsSet] = useState(false);

    useEffect(() => {
        const handleUpdate = () => {
            console.log("User Auth State: ", window.__mp_user_xhrse_isTrue);
            setIsLoggedIn(window.__mp_user_xhrse_isTrue);
            setMpxIsSet(true);
        };

        document.addEventListener("u_ath_st", handleUpdate);

        return () => {
            document.removeEventListener("u_ath_st", handleUpdate);
        };
    }, []);

    return (
        <div className="flex flex-col items-center p-3">
            {mpxisSet ? (
                isLoggedIn ? (
                    <div className="flex flex-col w-full gap-2">
                        <a href="" className="flex gap-2 items-center hover:shadow-md hover:text-gray-700 py-1 px-2">
                            <MdOutlineManageAccounts />
                            <span className="font-bold text-sm">
                                My account
                            </span>
                        </a>
                        <a href="" className="flex gap-2 items-center hover:shadow-md hover:text-gray-700 py-1 px-2">
                            <HiHashtag />
                            <span className="font-bold text-sm">My orders</span>
                        </a>
                        <a href="" className="flex gap-2 items-center hover:shadow-md hover:text-gray-700 py-1 px-2">
                            <CiLogout />
                            <span className="font-bold text-sm">Logout</span>
                        </a>
                    </div>
                ) : (
                    <div className="flex flex-col w-full gap-2">
                        <a
                            className="flex gap-2 items-center font-bold text-sm hover:shadow-md hover:text-gray-700 py-1 px-2"
                            href="/account/login"
                        >
                            Login
                        </a>
                        <a
                            className="flex gap-2 items-center font-bold text-sm hover:shadow-md hover:text-gray-700 py-1 px-2"
                            href="/account/register"
                        >
                            Sign up
                        </a>
                    </div>
                )
            ) : (
                <ReactLoading
                    width={30}
                    height={30}
                    type="spin"
                    color="#737373"
                    className="mx-auto my-4"
                />
            )}
        </div>
    );
};

export default HeaderUserIconDropDown;
