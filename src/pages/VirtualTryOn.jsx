import React from "react";
import Navbar from '../components/Navbar/navbar'
import { IoIosArrowRoundBack } from "react-icons/io";
import { MdCancel } from "react-icons/md";
const VirtualTryOn = () =>{
    return(
        <div>
            <Navbar /> 
            <div>
                <div className="flex items-center justify-start px-20 pt-2">
                    <IoIosArrowRoundBack className="text-4xl" />
                    <p className="pl-2">Back</p>
                </div>
                <div className="flex items-start justify-between mt-12 w-full">
                    {/* First half */}
                    <div className="pl-24 flex items-center justify-start w-1/2">
                        <img src="/images/Rectangle 365.png" />
                        <div className="pl-10">
                            <p className="text-3xl font-extralight">Lady's sweat <br />top</p>
                            <p className="uppercase mt-10 font-bold">color: <span className="lowercase font-extralight">blue</span></p>
                            <p className="uppercase mt-5">Select size:</p>
                            <div className="flex items-center justify-start mt-10">
                                <img src="/images/IMAGE ICON.png" className="w-9"/>
                                <p className="pl-2">Upload Full photograph.</p>
                            </div>
                        </div>
                    </div>

                    {/* Second half */}
                    <div className="flex flex-col w-1/2 items-end justify-center mt-0">
                        <div className="bg-cartbg w-2/5 rounded-lg">
                            <MdCancel className="p-0 text-3xl block text-white bg-transparent" />
                            <h5 className="text-center text-white text-3xl font-medium">My Look</h5>
                            <img src="/images/Rectangle 367.png" className="px-12 my-10 mx-auto" />
                            <button className="w-1/2 text-white text-center block bg-cartcolor py-2 rounded-xl text-2xl mx-auto mb-2">Add to cart</button>
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>
    )
}
export default VirtualTryOn;