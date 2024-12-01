import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import logo from "/src/assets/Logo 1.png";
// import logo 1 from "src/assets/Logo 1.png"
import axios from 'axios';

const SuperadminAccount = () =>{
    const navigate = useNavigate();


    const [formdata, setformdata] = useState({
      psk:"",
      email:"",
      password:"",
      confirm_password:"",
      first_name:"",
      last_name:"",
      phone_number:""
    })
  
    const handleInputChange = (e) => {
      setformdata({
        ...formdata,
        [e.target.name]: e.target.value // Update the respective field value
      });
    };

    const submitAdmin = async () => {
        try {
          const response = await axios.post(
            `https://backend-server-0ddt.onrender.com/api/account/register/?type=super-admin`, formdata,
            // Uncomment and replace `token` if needed
            // {
            //   headers: {
            //     Authorization: `Bearer ${token}`, // Replace with actual token if needed
            //     // 'Content-Type': 'application/json'
            //   }
            // }
          );
      
          // Display a success toast with a green background
          toast.success(response.data.message || "Registration Successful, check your email to confirm your account", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
            style: { backgroundColor: "green" }, // Green background for success
          });
      
          // Redirect to Email Verification page after a delay
          setTimeout(() => {
            navigate("/admin-confirm-account/:token");
          }, 5000);
      
          console.log("Registration successful:", response.data);
        } catch (error) {
          // Get error message from response or use generic error message
          const errorMessage = error.response && error.response.data && error.response.data.error
          ? error.response.data.error
          : error.message;
      
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
      
          console.error("Error registering user:", errorMessage);
        }
      };
    return(
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <ToastContainer />
      <div className="w-full max-w-lg p-3 bg-white rounded-lg shadow-md">
        <div className="text-center mb-8">
          <img
            src={logo}
            alt="Market Prime Logo"
            className="w-14 mx-auto mb-4 rounded-xl"
          />{" "}
          {/* Add your logo source */}
          <h2 className="text-2xl font-semibold">Setup your account</h2>
          {/* <p className="text-gray-600 mt-2">
            Enter your business details to create a Vendor's account
          </p> */}
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">
              PassKey
            </label>
            <input
              type="text"
              name="psk"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your PassKey"
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">
              First name
            </label>
            <input
              type="text"
              name="first_name"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter first name"
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">
              Last name
            </label>
            <input
              type="text"
              name="last_name"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter last name"
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter email address"
              onChange={handleInputChange}
            />
          </div>

          {/* <div>
            <label className="block text-gray-700">Business Address</label>
            <input
              type="text"
              name="business_name"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter business address"
              onChange={handleInputChange}
            />
          </div> */}

          <div>
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="text"
              name="phone_number"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter phone number"
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter password"
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              name="confirm_password"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Confirm password"
              onChange={handleInputChange}
            />
          </div>

          {/* <button
            type="submit"
            onClick={submitVendor}
            className="w-full py-3 mt-6 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Create Account
          </button> */}
          <Link onClick={submitAdmin} to="" className="w-full py-3 mt-6 block text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">Create account</Link>

          <p className="text-center mt-4 text-gray-600">
            Already have an account?{" "}
            <Link>
              <a href="#" className="text-blue-600 hover:underline">
                Sign in
              </a>
            </Link>
          </p>
        </form>
      </div>
    </div>
    )
}
export default SuperadminAccount;