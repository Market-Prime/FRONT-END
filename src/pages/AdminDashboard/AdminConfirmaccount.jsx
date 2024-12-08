import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "/src/assets/Logo 1.png";
import axios from "axios";
import ReactLoading from "react-loading";

import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const AdminConfirmaccount = () => {
    const [actionOnView, setActionOnView] = useState(0);

    const actionOnViewMap = {
        0: (
            <ReactLoading
                type="spin"
                color="#002366"
                className="mx-auto my-4"
            />
        ),
        1: <IoIosCheckmarkCircleOutline className="mx-auto my-4 size-14 text-green-500"/>,
        2: <div className="items-center justify-center flex"><button className="hover:shadow-md rounded-md py-1 px-4 mx-auto my-4">Resend verification link</button></div>
    };

    const textOnViewMap = {
        0: "Verifying your email.",
        1: "Verification Success",
        2: "Verification Failed"
    }

    const { token } = useParams();

    useEffect(() => {
        const confirmEmail = async (token) => {
            try {
                const response = await axios.post(
                    `https://backend-server-0ddt.onrender.com/api/account/confirm/`,
                    { token }
                );
                console.log("Response", response);
                toast.success(
                    response.data.message || "Email Verified, Please wait",
                    {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "colored",
                        style: { backgroundColor: "green" },
                    }
                );
                setActionOnView(1)
                setTimeout(() => {
                    navigate("/admin/login");
                }, 5000);
            } catch (error) {
                const errorMessage =
                    error?.response?.data?.message || error.message;

                console.log("The error message", errorMessage);

                toast.error(errorMessage, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "colored",
                    style: { backgroundColor: "red" },
                });
                setActionOnView(2)
            }
        };
        token && confirmEmail(token);
    }, [token]);
    return (
        <div className="flex flex-col items-center justify-center confirm-em">
            <ToastContainer />
            <div className="2xl:w-1/3 xl:w-1/3 lg:w-1/2 md:w-1/2 sm:w-full bg-white rounded-3xl shadow-2xl m-auto py-10">
                <img
                    src={logo}
                    alt="MarketPrime Logo"
                    className="text-center mx-auto rounded-xl"
                />
                <h5 className="text-2xl text-center mt-5 font-semibold">
                    {textOnViewMap[actionOnView]}
                </h5>
                {actionOnView == 0 && <p className="mt-3 text-center w-2/3 mx-auto">Please wait</p>}
                {actionOnViewMap[actionOnView]}
            </div>
        </div>
    );
};
export default AdminConfirmaccount;
