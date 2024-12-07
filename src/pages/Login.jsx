import React, {useState} from "react";
import "./Login.css";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RiCloseLargeLine } from "react-icons/ri";
import { Input } from "../components/ui/Input";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast
import { useAuth } from "./AuthContext";



const Login = ({ toggleModal }) => {

  const navigate = useNavigate();
  const {login} = useAuth();


  const [data, setData] = useState({
    email:'',
    password:''
  })

  const handleInputChange = (e) =>{
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const submitLogin = async () =>{
    login();

    try{
      const response = await axios.post(
      `https://backend-server-0ddt.onrender.com/api/account/login`,
      {
        email:data.email,
        password:data.password
      },
      );

      const token= response.data.access;
      localStorage.setItem("authToken", token);
      console.log("My token", token);
      toast.success(`Login Successful: ${response.data.message || 'Welcome' , {
        position:"top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick:true,
        pauseOnHover: true,
        draggable:true,
        progress: undefined,
        theme: "colored",
        style: {backgroundColor: "green"}
      }}`);
      setTimeout(() => {
        navigate("/")
      },5000);
      console.log("Login Successful", response.data);
    } catch (error) {
      const errorMessage = error.response && error.response.data && error.response.data.detail
        ? error.response.data.detail
        : error.message;  

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
      console.error('Login failed:', errorMessage);
    }
  }
  return (
    // <div className="modal-backdrop bg-homebgshadow sm:px-5 md:px-0 lg:px-0 xl:px-0 2xl:px-0 ">
    //   <ToastContainer />
    //   <div className="bg-white rounded-xl relative px-5 py-5 2xl:w-1/3 xl:w-1/3 lg:w-1/2 md:w-2/3 sm:w-full">
    //     <button className="close-modal" onClick={toggleModal}>
    //       <RiCloseLargeLine />
    //     </button>
    //     <h4 className="text-cartbg text-2xl font-medium">Welcome</h4>
    //     <p className="text-xl text-cartbg font-medium mt-6">
    //       Type your email and password to Log in
    //     </p>
    //     <form className="mt-10">
    //       <label className="block text-cartbg font-medium text-base">
    //         Your Email
    //       </label>
    //       <Input
    //         type="email"
    //         name="email"
    //         onChange={handleInputChange}
    //         required
    //         className="py-2 outline-none px-3 border-2 rounded-xl w-full mt-2"
    //       />
    //       <label
    //         className="block text-cartbg font-medium text-base mt-10"
    //         htmlFor="password"
    //       >
    //         Password
    //       </label>
    //       <div className="flex items-center justify-between  py-2 px-3 mt-2">
    //         <Input
    //           type="password"
    //           name="password"
    //           required
    //           onChange={handleInputChange}
    //           className="py-2 outline-none px-3 border-2 rounded-xl w-full mt-2"
    //         />
    //         <FaRegEye />
    //       </div>
    //       <label
    //         htmlFor=""
    //         className="mt-5 block flex items-center justify-start"
    //       >
    //         <input type="checkbox" className="inputCheckBox" />
    //         <span className="block ml-2 text-sm">Remember Me</span>
    //       </label>
    //       <a href="#" className="block mt-1 text-sm text-cartbg font-medium">
    //         Forgot Password?
    //       </a>
    //     </form>
    //     <Link
    //       to=""
    //       onClick={submitLogin}
    //       className="w-full bg-aboutbg block py-3 rounded-lg text-white uppercase text-center font-bold mt-10"
    //     >
    //       Login
    //     </Link>

    //     <p className="mt-5 text-xs">
    //       Don't have an account?
    //       {/* <a href='#' className='inline text-base text-cartbg font-medium'>Register</a> */}
    //       <Link
    //         to="/Signup"
    //         className="inline text-sm text-cartbg font-medium ml-1"
    //       >
    //         Register
    //       </Link>
    //     </p>
    //   </div>
    // </div>

    <div className="w-full  h-screen">
      <ToastContainer />
      <div className="w-full flex 2xl:flex-row-reverse xl:flex-row-reverse lg:flex-row-reverse md:flex-col-reverse sm:flex-col items-center justify-center  h-screen">
        <div className="2xl:w-2/3 xl:w-2/3 lg:w-1/2 md:w-full sm:w-full h-screen flex items-start justify-center" data-aos="fade-down" data-aos-durationn="2000">
          <img src="/images/IMG-20241126-WA0067.jpg" className="object-cover w-full h-full" />
        </div>

        {/* Form */}
        <div className="2xl:w-1/3 xl:w-2/3 lg:w-1/2 md:w-full sm:w-full  bg-white h-screen px-10 2xl:py-52 xl:py-52 lg:py-40 md:py-20 sm:py-10">
        <div>
        {/* <button className="close-modal" onClick={toggleModal}>
          <RiCloseLargeLine />
        </button> */}
        <h4 className="text-black text-3xl font-medium">Welcome</h4>
        <p className="2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-base text-black font-medium mt-6">
          Type your email and password to Log in
        </p>
        <form className="mt-10">
          <label className="block text-black font-medium text-lg">
            Your Email
          </label>
          <Input
            type="email"
            name="email"
            onChange={handleInputChange}
            required
            className="py-2 outline-none px-3 border-2 rounded-xl 2xl:w-2/3 xl:w-2/3 lg:w-1/2 md:w-1/2 sm:w-full  mt-2"
          />
          <label
            className="block text-black font-medium text-lg mt-8"
            htmlFor="password"
          >
            Password
          </label>
          <Input
            type="password"
            name="password"
            onChange={handleInputChange}
            required
            className="py-2 outline-none px-3 border-2 rounded-xl 2xl:w-2/3 xl:w-2/3 lg:w-1/2 md:w-1/2 sm:w-full mt-2"
          />
          <label
            htmlFor=""
            className="mt-5 block flex items-center justify-start"
          >
            <input type="checkbox" className="inputCheckBox" />
            <span className="block ml-2 text-sm">Remember Me</span>
          </label>
          {/* <a href="#" className="block mt-5 text-sm text-black font-medium">
            Forgot Password?
          </a> */}
          <Link to="/ForgotPassword" className="block mt-5 text-sm text-black font-medium">Forgot Password?</Link>
        </form>
        <Link
          to=""
          onClick={submitLogin}
          className="2xl:w-2/3 xl:w-2/3 lg:w-1/2 md:w-1/2 sm:w-full bg-aboutbg block py-3 rounded-lg text-white uppercase text-center font-bold mt-10"
        >
          Login
        </Link>

        <p className="mt-10 text-xs">
          Don't have an account?
          {/* <a href='#' className='inline text-base text-cartbg font-medium'>Register</a> */}
          <Link
            to="/Signup"
            className="inline text-sm text-cartbg font-medium ml-1"
          >
            Register
          </Link>
        </p>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
