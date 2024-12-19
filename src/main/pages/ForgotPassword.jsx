import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {

    const [email, setEmail] = useState("")

    const forgotEmail = async () => {
        try{
            const response = await axios.post(`https://backend-server-0ddt.onrender.com/api/account/forgot-password/`, {email});
            toast.success(response.data.message || "Check your email to reset your password", {
                position: "top-right",
                autoClose:5000,
                hideProgressBar:true,
                closeOnClick:true,
                pauseOnHover:true,
                draggable:true,
                theme:"colored",
                style:{backgroundColor: "green"},
            });
            setTimeout(() => {
                navigate("/email-confirmation/:token");
              }, 5000);
        } catch(error) {
            const errorMessage = error.response && error.response.message && error.response.message.error 
            ? error.response.message.error
            : error.message;

            console.log("The error message", errorMessage);

            toast.error(errorMessage , {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
                style: { backgroundColor: "red" }, // Red background for errors
            });
        }
    }


    return (
        <div className="forgot-password h-screen w-full flex justify-center items-center">
            <ToastContainer />
            <div className="2xl:w-1/3 xl:w-1/3 lg:w-1/2 md:w-1/2 sm:w-full bg-transparent border-2 border-white p-12 rounded-lg shadow-lg text-center">
                <h4 className="text-xl font-bold mb-4">Forgot Password</h4>
                <p className="mb-6">Enter your email address to receive the link to reset your password</p>
                <input 
                    type="email" 
                    placeholder="Enter your Email" 
                    required 
                    className="w-full px-4 py-2 border rounded mb-6 outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Link 
                    className="2xl:w-2/3 xl:w-2/3 lg:w-1/2 md:w-1/2 sm:w-full bg-aboutbg block py-3 rounded-lg text-white uppercase font-bold mx-auto"
                    to="#" onClick={forgotEmail}
                >
                    Send Email
                </Link>
            </div>
        </div>
    );
}

export default ForgotPassword;
