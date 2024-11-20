import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../assets/Logo 1.png";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 
import { FaBars, FaTimes } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
 // Font Awesome icons for hamburger and close button

const Accountmanagement = () => {
    // State to manage sidebar visibility
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Toggle sidebar visibility
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const [userData, setUserData] = useState({});
    const [editMode, setEditMode] = useState({
      first_name: false,
      last_name: false,
      email: false,
      phone_number: false,
      rewardCode: false
    });

    

    useEffect(() => {
        const fetchUserData = async () => {
          const token = localStorage.getItem("authToken"); // Retrieve token
          if (!token) {
            toast.error("No authentication token found. Please log in again.");
            return;
          }
          try {
            const response = await axios.get(
              `https://backend-server-0ddt.onrender.com/api/account/user-details/`,
              {
                headers: { Authorization: `Bearer ${token}` }
              }
            );
            setUserData(response.data);
            toast.success(response.data.message || "Update Successful", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
                style: { backgroundColor: "green" }, // Green background for success
              });
          } catch (error) {
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
            console.error("Error fetching user data:", error);
          }
        };
        fetchUserData();
      }, []);
      

      const toggleEditMode = (field) => {
        setEditMode((prevState) => ({
          ...prevState,
          [field]: !prevState[field]
        }));
      };
    
      // Handle input changes
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
    
      // Save updates to the server
      const saveChanges = async () => {
        const token = localStorage.getItem("authToken");
        if (!token) {
          toast.error("No authentication token found. Please log in again.");
          return;
        }
        try {
          await axios.put(
            `https://backend-server-0ddt.onrender.com/api/account/user-details/`,
            userData,
            { headers: { Authorization: `Bearer ${token}` } }
          );
          toast.success(response.data.message || "User details updated successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
            style: { backgroundColor: "green" }, // Green background for success
          });
          setEditMode({
            first_name: false,
            last_name: false,
            email: false,
            phone_number: false,
            rewardCode: false
          });
        } catch (error) {
            toast.error(errorMessage || "Failed to update fields, please try again later", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
                style: { backgroundColor: "red" }, // Red background for errors
              });          console.error("Error updating user data:", error);
        }
      };
    
    return (
        <div className="flex flex-col md:flex-row items-start justify-start  w-full h-screen">
            <ToastContainer />
            {/* Navbar - Show on small screens */}
            <div className="md:hidden p-4 flex justify-between items-center w-full bg-[#8FCEDD]">
                <h1 className="text-white font-bold">Account Management</h1>
                <button onClick={toggleSidebar} className="text-white">
                    {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`fixed md:relative top-0 left-0 h-screen 2xl:w-1/6 xl:w-1/6 lg:w-1/4 md:w-1/4 sm:w-3/4 bg-[#8FCEDD] p-4 transform ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                } md:translate-x-0 transition-transform duration-300 ease-in-out z-50 md:z-auto`}
            >
                <ul className="space-y-4">
                    <Link to="/" className="flex items-center gap-2">
                        <img src={logo} alt="MarketPrime Logo" className="h-12" />
                    </Link>

                    <li><a href="#" className="text-white my-12 block text-xl">Account details</a></li>
                    <li><a href="#" className="text-white my-12 block text-xl">Shipping details</a></li>
                    <li><a href="#" className="text-white my-12 block text-xl">Account details</a></li>
                    <li><a href="#" className="text-white my-12 block text-xl">Support</a></li>
                    <li><a href="#" className="text-white my-12 block text-xl">Order Summary</a></li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="sm:w-full md:w-3/4 lg:w-3/4 xl:5/6 2xl:w-5/6  p-6 ml-auto flex items-start justify-between  flex-wrap">
                <div className="w-1/2">
                    <h5 className="text-xl font-bold mb-4">Account</h5>
                    {/* Form */}
                    <form className="space-y-4">
        {/* First Name */}
        <div className="flex items-center">
          <label className="text-lg w-32">First Name:</label>
          <input
            type="text"
            name="first_name"
            value={userData.first_name || ""}
            onChange={handleInputChange}
            readOnly={!editMode.first_name}
            className={`border w-2/3 px-2 py-1 rounded ${editMode.first_name ? "bg-white" : "bg-gray-100"}`}
          />
          <button type="button" onClick={() => toggleEditMode("first_name")}>
            <FaPencilAlt className="ml-2 text-gray-500" />
          </button>
        </div>

        {/* Last Name */}
        <div className="flex items-center">
          <label className="text-lg w-32">Last Name:</label>
          <input
            type="text"
            name="last_name"
            value={userData.last_name || ""}
            onChange={handleInputChange}
            readOnly={!editMode.last_name}
            className={`border w-2/3 px-2 py-1 rounded ${editMode.last_name ? "bg-white" : "bg-gray-100"}`}
          />
          <button type="button" onClick={() => toggleEditMode("last_name")}>
            <FaPencilAlt className="ml-2 text-gray-500" />
          </button>
        </div>

        {/* Email */}
        <div className="flex items-center">
          <label className="text-lg w-32">Email:</label>
          <input
            type="email"
            name="email"
            value={userData.email || ""}
            onChange={handleInputChange}
            readOnly={!editMode.email}
            className={`border w-2/3 px-2 py-1 rounded ${editMode.email ? "bg-white" : "bg-gray-100"}`}
          />
          <button type="button" onClick={() => toggleEditMode("email")}>
            <FaPencilAlt className="ml-2 text-gray-500" />
          </button>
        </div>

        {/* Phone Number */}
        <div className="flex items-center">
          <label className="text-lg w-32">Phone Number:</label>
          <input
            type="text"
            name="phone_number"
            value={userData.phone_number || ""}
            onChange={handleInputChange}
            readOnly={!editMode.phone_number}
            className={`border w-2/3 px-2 py-1 rounded ${editMode.phone_number ? "bg-white" : "bg-gray-100"}`}
          />
          <button type="button" onClick={() => toggleEditMode("phone_number")}>
            <FaPencilAlt className="ml-2 text-gray-500" />
          </button>
        </div>

        {/* Reward Code */}
        <div className="flex items-center">
          <label className="text-lg w-32">Reward Code:</label>
          <input
            type="text"
            name="rewardCode"
            value={userData.rewardCode || ""}
            onChange={handleInputChange}
            readOnly={!editMode.rewardCode}
            className={`border w-2/3 px-2 py-1 rounded ${editMode.rewardCode ? "bg-white" : "bg-gray-100"}`}
          />
          <button type="button" onClick={() => toggleEditMode("rewardCode")}>
            <FaPencilAlt className="ml-2 text-gray-500" />
          </button>
        </div>

        {/* Save Button */}
        <button
          type="button"
          onClick={saveChanges}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4 mx-auto text-center w-1/3"
        >
          Save Changes
        </button>
      </form>
      {/* End of Form */}
    </div>

                <div className="w-1/2">
                    <h5 className="text-xl font-bold mb-4">Shipping Address</h5>
                    {/* Shipping address content here */}
                </div>

                <div className="mt-10 w-1/2">
                    <h5 className="text-xl font-bold mb-4">Order Summary</h5>
                    {/* Order summary content here */}
                </div>

                <div className="mt-10 w-1/2">
                    <h5 className="text-xl font-bold mb-4">Delivered Items</h5>
                    {/* Delivered items content here */}
                </div>
            </div>
        </div>
    );
};

export default Accountmanagement;
