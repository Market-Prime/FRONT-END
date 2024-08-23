import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
const Signup = () => {
    return (
        <div>
            <IoIosArrowRoundBack className="text-3xl block ml-3" />
            <div className="w-1/3 mx-auto border-2 my-2 px-5">
                <h3 className="text-cartbg text-2xl font-bold mx-auto text-center mt-8">Create Account</h3>
                <form className="mt-10">
                    <label  className='block text-cartbg font-medium text-base'>Your Name</label>
                    <input type="text" placeholder="Enter your full name" className='py-1 outline-none px-3 border-2 rounded-xl w-full mt-2' required />
                    <label className='block text-cartbg font-medium text-base mt-2'>Email</label>
                    <input type="email" placeholder="Enter your Email Address"  className='py-1 outline-none px-3 border-2 rounded-xl w-full mt-2' required />
                    <label className='block text-cartbg font-medium text-base mt-2'>Password</label>
                    <div>
                    <input type="password" className='py-1 outline-none px-3 border-2 rounded-xl w-full mt-2' required />
                    <span>!Password must be more than 8 characters</span>
                    </div>
                    <label className='block text-cartbg font-medium text-base mt-2'>Re-Enter Password</label> 
                    <input type="password" className='py-1 outline-none px-3 border-2 rounded-xl w-full mt-2' required />
                </form>
                <a href="#" className="block bg-aboutbg py-2 text-center text-white mt-5 w-1/2 mx-auto rounded-full">Create Account</a>
                <p className="mt-3 text-xs">Already have an account? <Link to="/" className="text-base text-cartbg">Sign In</Link></p>
            </div>
            <div className="flex items-center justify-between w-1/3 mx-auto mt-3">
                <a href="#" className="text-sm text-cartbg">Terms of Use</a>
                <a href="#" className="text-sm text-cartbg">Privacy Policy</a>
                <a href="#" className="text-sm text-cartbg">Cuatomer Service</a>
            </div>
        </div>
    )
}
export default Signup;