// // import React from "react";
// // import { Link } from "react-router-dom";
// // import { IoIosArrowRoundBack } from "react-icons/io";
// // const Signup = () => {
// //     return (
// //         <div>
// //             <IoIosArrowRoundBack className="text-3xl block ml-3" />
// //             <div className="2xl:w-1/3 xl:w-1/3 lg:w-1/2 md:w-2/3 sm:w-full mx-auto border-2 lg:my-2 md:mt-40 xl:my-2 2xl:mt-32 sm:mt-32 px-5 sm:mx-3 md:mx-auto lg:mx-auto xl:mx-auto 2xl:mx-auto">
// //                 <h3 className="text-cartbg text-2xl font-bold mx-auto text-center mt-8">Create Account</h3>
// //                 <form className="mt-10">
// //                     <label  className='block text-cartbg font-medium text-base'>Your Name</label>
// //                     <input type="text" placeholder="Enter your full name" className='py-1 outline-none px-3 border-2 rounded-xl w-full mt-2' required />
// //                     <label className='block text-cartbg font-medium text-base mt-2'>Email</label>
// //                     <input type="email" placeholder="Enter your Email Address"  className='py-1 outline-none px-3 border-2 rounded-xl w-full mt-2' required />
// //                     <label className='block text-cartbg font-medium text-base mt-2'>Password</label>
// //                     <div>
// //                     <input type="password" className='py-1 outline-none px-3 border-2 rounded-xl w-full mt-2' required />
// //                     <span>!Password must be more than 8 characters</span>
// //                     </div>
// //                     <label className='block text-cartbg font-medium text-base mt-2'>Re-Enter Password</label> 
// //                     <input type="password" className='py-1 outline-none px-3 border-2 rounded-xl w-full mt-2' required />
// //                 </form>
// //                 <Link to="/EmailVerification" className="block bg-aboutbg py-2 text-center text-white mt-5 w-1/2 mx-auto rounded-full">Create Account</Link>
// //                 <p className="mt-3 text-xs">Already have an account? <Link to="/" className="text-base text-cartbg">Sign In</Link></p>
// //             </div>
// //             <div className="flex items-center justify-between xl:w-1/3 2xl:w-1/3 lg:w-1/3 md:w-2/3 sm:w-full sm:px-3 md:px-0 lg:px-0 xl:px-0 2xl:px-0 mx-auto mt-3">
// //                 <a href="#" className="text-sm text-cartbg">Terms of Use</a>
// //                 <a href="#" className="text-sm text-cartbg">Privacy Policy</a>
// //                 <a href="#" className="text-sm text-cartbg">Cuatomer Service</a>
// //             </div>
// //         </div>
// //     )
// // }
// // export default Signup;

// import React from "react";
// import { Link } from "react-router-dom";
// import { IoIosArrowRoundBack } from "react-icons/io";
// import axios from "axios";
// const Signup = () =>{

//     const submitRegister = () =>{
//         try{
//             api.post(`https://backend-server-0ddt.onrender.com/api/account/register/` , {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 }
//             })
//             .catch((error) =>{
//                 console.log(error);
//             })
//         }catch(error) {
//             console.log(error);
//         }
//     }
//     return(
//         <div>
//             <IoIosArrowRoundBack className="text-3xl block ml-3" />
//             <div className="w-1/4  mx-auto my-10">
//                 <h3 className="text-cartbg text-4xl font-bold mx-auto text-center mt-8">Create account</h3>
//                 <form className="px-5 py-8 border border-black mt-2">
//                     <label  className='block text-cartbg font-medium text-sm'>First Name</label>
//                     <input type="text" placeholder="Enter first name" className='py-1 outline-none px-3 border-2 rounded-lg mb-5 placeholder:text-sm w-full mt-1' required />

//                     <label  className='block text-cartbg font-medium text-sm'>Last Name</label>
//                     <input type="text" placeholder="Enter last name" className='py-1 outline-none px-3 border-2 rounded-lg mb-5 placeholder:text-sm w-full mt-0' required />

//                     <label  className='block text-cartbg font-medium text-sm'>Email</label>
//                     <input type="text" placeholder="Enter Email Address" className='py-1 outline-none px-3 border-2 rounded-lg mb-5 placeholder:text-sm w-full mt-0' required />

//                     <label  className='block text-cartbg font-medium text-sm'>Phone Number</label>
//                     <input type="text" placeholder="Enter Phone Number" className='py-1 outline-none px-3 border-2 rounded-lg mb-5 placeholder:text-sm w-full mt-0' required />

//                     <label  className='block text-cartbg font-medium text-sm'>Password</label>
//                     <input type="text" placeholder="" className='py-1 outline-none px-3 border-2 rounded-lg mb-5 placeholder:text-sm w-full mt-0' required />

//                     <label  className='block text-cartbg font-medium text-sm'>Re-Enter Password</label>
//                     <input type="text" placeholder="" className='py-1 outline-none px-3 border-2 rounded-lg mb-5 placeholder:text-sm w-full mt-0' required />

//                     <div className="mx-auto w-full">
//                         <p className="text-center">Reward Code</p>
//                         <div className="flex items-center justify-center w-full bg-topdealbg rounded-lg py-0">
//                             <input type="number" placeholder="Enter code" className="bg-topdealbg w-2/3 rounded-lg py-1 text-center outline-none" />
//                             <button className="block w-1/3 bg-shopcolor text-white rounded-lg py-1">Apply</button>
//                         </div>
//                     </div>

//                     <Link to="/EmailVerification" className="block bg-aboutbg py-2 text-center text-white mt-10 w-1/2 mx-auto rounded-full" onClick={submitRegister}>Create Account</Link>

//                     <p className="mt-3 text-xs text-center">Already have an account? <Link to="/" className="text-base text-cartbg">Sign In</Link></p>


//                     <div className="flex items-center justify-between xl:w-1/3 2xl:w-full lg:w-1/3 md:w-2/3 sm:w-full sm:px-3 md:px-0 lg:px-0 xl:px-0 2xl:px-0 mx-auto mt-3">
//                         <a href="#" className="text-sm text-cartbg">Terms of Use</a>
//                         <a href="#" className="text-sm text-cartbg">Privacy Policy</a>
//                         <a href="#" className="text-sm text-cartbg">Cuatomer Service</a>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }
// export default Signup;



import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import axios from "axios"; // Import axios
import { ToastContainer, toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast
import { useNavigate } from "react-router-dom";

const Signup = () => {
  // State to hold form values
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    password: '',
    confirm_password:'',
    rewardCode: ''
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value // Update the respective field value
    });
  };

  const navigate = useNavigate();

  // Submit the registration form
  const submitRegister = async () => {
    try {
      const response = await axios.post(
        `https://backend-server-0ddt.onrender.com/api/account/user/`, formData,
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
        navigate("/email-confirmation/:token");
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
  

  return (

    <div className="h-screen bg-signupcolor flex items-start justify-center overflow-hidden">
      <ToastContainer />
      {/* <IoIosArrowRoundBack className="text-3xl block ml-3" /> */}
      <div className="w-2/3">
        <img src="/images/e0ba56b59c7.png" className="object-cover w-full h-full" />
      </div>
      <div className="w-1/3 mx-14 my-10 bg-transparent rounded-xl" data-aos="fade-left" data-aos-duration="2000">
        <h3 className="text-cartbg text-3xl font-bold mx-auto text-center mt-0">Sign Up With Us</h3>
        <form className="px-5 py-8 bg-white rounded-xl mt-5">
          {/* First Name */}
          <label className='block text-cartbg font-medium text-lg'>First Name</label>
          <input
            type="text"
            name="first_name"
            placeholder="Enter first name"
            className='py-1 outline-none px-3 border-2 rounded-lg mb-5 placeholder:text-sm w-full mt-1'
            value={formData.first_name}
            onChange={handleInputChange}
            required
          />

          {/* Last Name */}
          <label className='block text-cartbg font-medium text-lg'>Last Name</label>
          <input
            type="text"
            name="last_name"
            placeholder="Enter last name"
            className='py-1 outline-none px-3 border-2 rounded-lg mb-5 placeholder:text-sm w-full mt-1'
            value={formData.last_name}
            onChange={handleInputChange}
            required
          />

          {/* Email */}
          <label className='block text-cartbg font-medium text-lg'>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email Address"
            className='py-1 outline-none px-3 border-2 rounded-lg mb-5 placeholder:text-sm w-full mt-1'
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          {/* Phone Number */}
          <label className='block text-cartbg font-medium text-lg'>Phone Number</label>
          <input
            type="text"
            name="phone_number"
            placeholder="Enter Phone Number"
            className='py-1 outline-none px-3 border-2 rounded-lg mb-5 placeholder:text-sm w-full mt-1'
            value={formData.phone_number}
            onChange={handleInputChange}
            required
          />

          {/* Password */}
          <label className='block text-cartbg font-medium text-lg'>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className='py-1 outline-none px-3 border-2 rounded-lg mb-5 placeholder:text-sm w-full mt-1'
            value={formData.password}
            onChange={handleInputChange}
            required
          />

          {/* Re-enter Password */}
          <label className='block text-cartbg font-medium text-sm'>Re-Enter Password</label>
          <input
            type="password"
            value={formData.confirm_password}
            onChange={handleInputChange}
            name="confirm_password"
            placeholder="Confirm Password"
            className='py-1 outline-none px-3 border-2 rounded-lg mb-5 placeholder:text-sm w-full mt-1'
            required
          />

          {/* Reward Code */}
          <div className="mx-auto w-full">
            <p className="text-center">Reward Code</p>
            <div className="flex items-center justify-center w-full bg-topdealbg rounded-lg py-0">
              <input
                type="text"
                name="rewardCode"
                placeholder="Enter code"
                className="bg-topdealbg w-2/3 rounded-lg py-1 text-center outline-none"
                value={formData.rewardCode}
                onChange={handleInputChange}
              />
              <button className="block w-1/3 bg-shopcolor text-white rounded-lg py-1">Apply</button>
            </div>
          </div>

          {/* Submit Button */}
          <Link to="" className="block bg-aboutbg py-2 text-center text-white mt-10 w-1/2 mx-auto rounded-full" onClick={submitRegister}>
            Create Account
          </Link>

          <p className="mt-3 text-xs text-center">
            Already have an account? <Link to="/Login" className="text-base text-cartbg">Sign In</Link>
          </p>

          <div className="flex items-center justify-between xl:w-1/3 2xl:w-full lg:w-1/3 md:w-2/3 sm:w-full sm:px-3 md:px-0 lg:px-0 xl:px-0 2xl:px-0 mx-auto mt-3">
            <a href="#" className="text-sm text-cartbg">Terms of Use</a>
            <a href="#" className="text-sm text-cartbg">Privacy Policy</a>
            <a href="#" className="text-sm text-cartbg">Customer Service</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
