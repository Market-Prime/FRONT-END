import React from "react";
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import logo from "/src/assets/Logo 1.png";
import axios from 'axios';
const AdminConfirmaccount = () =>{
    const { token } = useParams();

  console.log('Token:', token); // Log the token to confirm it's being captured
  const confirmEmail = async () =>{
    try{
        const response = await axios.post(`https://backend-server-0ddt.onrender.com/api/account/confirm/`, {token})
        console.log("Response", response);
        toast.success(response.data.message || "Account Confirmed, Please proceed to login with your details", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
            style: { backgroundColor: "green" }, // Green background for success
          });
          setTimeout(() => {
            navigate("/finalsection");
          }, 5000);
    } catch (error) {
        const errorMessage = error.response && error.response.data && error.response.data.error
        ? error.response.data.error
        : error.message;

        console.log("The error message", errorMessage);
    
        // Display an error toast with a red background
        toast.error(errorMessage, {
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
    return(
    <div className="flex flex-col items-center justify-center confirm-em">
      <ToastContainer />
      <div className='2xl:w-1/3 xl:w-1/3 lg:w-1/2 md:w-1/2 sm:w-full bg-white rounded-3xl shadow-2xl m-auto py-10'>
        <img src={logo} alt="MarketPrime Logo" className="text-center mx-auto rounded-xl" />
        <h5 className='text-3xl text-center mt-5'>Confirm your Account</h5>
        <p  className='mt-3 text-center w-2/3 mx-auto'>Please click on the button below to confirm your account and continue shopping at MARKETPRIME</p>
        <Link onClick={confirmEmail} 
        className="2xl:w-1/3 xl:w-1/3 lg:w-1/2 md:w-1/2 sm:w-1/2 mx-auto bg-aboutbg block py-3 rounded-lg text-white uppercase text-center font-bold mt-10" to="/admin-login">Confirm Account</Link>
      </div>
    </div>
    )
}
export default AdminConfirmaccount;