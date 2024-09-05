import React from 'react';
import "./Checkout.css";
import "./Login.css";
import { FaRegEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Login = ({ toggleModal }) => {
  return (
    // <div className="modal-backdrop">
    //   <div className="modal-content">
    //     <button className="close-modal" onClick={toggleModal}>X</button>
    //     <h2>Login</h2>
    //     <form>
    //        className='block'Email:</label>
    //       <input type="email" placeholder="Enter your email" />
    //       <label>Password:</label>
    //       <input type="password" placeholder="Enter your password" />
    //       <button type="submit">Login</button>
    //     </form>
    //   </div>
    // </div>
    <div className="modal-backdrop bg-homebgshadow sm:px-5 md:px-0 lg:px-0 xl:px-0 2xl:px-0">
        <div className="bg-white rounded-xl relative px-5 py-5 2xl:w-1/3 xl:w-1/3 lg:w-1/2 md:w-2/3 sm:w-full">
            <button className="close-modal" onClick={toggleModal}>X</button>
            <h4 className="text-cartbg text-2xl font-medium">Welcome</h4>
            <p className='text-xl text-cartbg font-medium mt-6'>Type your email and password to Log in</p>
            <form className="mt-10">
                <label className='block text-cartbg font-medium text-base'>Your Email</label>
                <input type='email' required className='py-2 outline-none px-3 border-2 rounded-xl w-full mt-2' />
                <label className='block text-cartbg font-medium text-base mt-10' htmlFor="password">Password</label>
                <div className='flex items-center justify-between border-2 rounded-xl w-full py-2 px-3 mt-2'>
                    <input type='password' required className='outline-none' />
                    <FaRegEye />
                </div>
                <label htmlFor="" className='mt-5 block flex items-center justify-start'>
                    <input type="checkbox" className='inputCheckBox' />
                    <span className='block ml-2 text-sm'>Remember Me</span>
                </label>
                <a href='#' className='block mt-1 text-sm text-cartbg font-medium'>Forgot Password?</a>
            </form>
            <Link to="/" className='w-full bg-aboutbg block py-3 rounded-lg text-white uppercase text-center font-bold mt-10'>Login</Link>

            <p className='mt-5 text-xs'>Don't have an account? 
                {/* <a href='#' className='inline text-base text-cartbg font-medium'>Register</a> */}
                <Link to="Register" className='inline text-sm text-cartbg font-medium ml-1'>Register</Link>
            </p>
        </div>
    </div>
  );
};


export default Login;