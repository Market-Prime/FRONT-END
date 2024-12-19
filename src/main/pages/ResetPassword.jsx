import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import logo from "../../assets/Logo 1.png";
import axios from 'axios';
const ResetPassword = () =>{
    const {token} = useParams();

    const [new_password, setnew_password] = useState("");

    console.log("The token", token)


    const confirmEmail = async () =>{
        try{
            const response = await axios.post(`https://backend-server-0ddt.onrender.com/api/account/reset-password/${token}/`, {
            
                new_password
            });
            console.log("Response", response);
            toast.success(response.data.message || "You have change your password successfully, Please proceed to login with your details", {
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
                navigate("/Login");
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
        <div className="forgot-password h-screen w-full flex justify-center items-center">
            <ToastContainer />
            <div className="2xl:w-1/3 xl:w-1/3 lg:w-1/2 md:w-1/2 sm:w-full bg-transparent border-2 border-white p-12 rounded-lg shadow-lg text-center">
                <h4 className="text-xl font-bold mb-4">Reset Password</h4>
                <p className="mb-6">Enter your new password</p>
                <input 
                type="password" 
                placeholder="Enter your New Password" 
                required 
                className="w-full px-4 py-2 border rounded mb-6 outline-none"
                value={new_password}
                onChange={(e) => setnew_password(e.target.value)}
                />
                <Link 
                className="2xl:w-2/3 xl:w-2/3 lg:w-1/2 md:w-1/2 sm:w-full bg-aboutbg block py-3 rounded-lg text-white uppercase font-bold mx-auto"
                to="#" onClick={confirmEmail}
                >
                Reset Password
                </Link>
            </div>
        </div>
    )
}
export default ResetPassword;