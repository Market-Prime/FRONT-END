import React from "react";
import Header from "./Header";
import DashNav from "./DashNav";
import { IoIosArrowDown } from "react-icons/io";
import { FiPlusCircle } from "react-icons/fi";
import { OrderData } from "./ProductsData";
import { CiMenuKebab } from "react-icons/ci";

const Orders = () => {
    const TableData = OrderData.map((item, i) => (
        <tr key={i} className="hover:bg-gray-100">
            <td className="py-3 px-4 border-b text-left">{item.id}</td>
            <div className="flex items-center justify-center flex-row-reverse">
                <td className="py-6 px-1 border-b text-left">
                {item.ProductName}
                </td>
                <td>
                    <img src={item.image} className="w-10 h-10 rounded-full object-cover" />
                </td>
            </div>
          
            <td className="py-3 px-4 border-b text-left">{item.Price}</td>
            <td className="py-3 px-4 border-b text-left">{item.CustomerName}</td>
            <td className="py-3 px-4 border-b text-left">{item.Address}</td>
            <td className="py-3 px-4 border-b text-left">{item.Email}</td>
            <td className="py-3 px-4 border-b text-left">{item.Date}</td>
            <td className="py-3 px-4 border-b text-left text-productcolor text-sm">{item.Status}</td>
            <td className="py-3 px-4 border-b text-left">
                <CiMenuKebab className="cursor-pointer" />
            </td>
        </tr>
    ));

    return (
        <div className="h-screen w-screen">
            <div className="flex justify-between h-full w-full relative">
                <DashNav />
                <div className="bg-[#E6F7FF] w-5/6">
                    <Header />
                    <div className="bg-white my-4 px-10 flex items-center justify-between w-full py-2">
                        <div className="flex items-center justify-between">
                            <button className="flex items-center py-3 bg-topdealbg mr-2 px-7 rounded-lg">
                                Category <IoIosArrowDown className="ml-3" />
                            </button>
                            <button className="flex items-center py-3 bg-topdealbg mr-2 px-7 rounded-lg">
                                Status <IoIosArrowDown className="ml-3" />
                            </button>
                            <button className="flex items-center py-3 bg-topdealbg mr-2 px-7 rounded-lg">
                                Price <IoIosArrowDown className="ml-3" />
                            </button>
                            <button className="flex items-center py-3 bg-topdealbg mr-2 px-7 rounded-lg">
                                Date <IoIosArrowDown className="ml-3" />
                            </button>
                        </div>
                        <button className="flex items-center justify-center py-3 px-7 bg-productcolor text-white rounded-xl">
                            <FiPlusCircle className="mr-2 text-xl" /> 15th Nov-23rd Nov 24
                        </button>
                    </div>

                    <div className="bg-white mx-10 py-5">
                        <p className="px-10 text-lg mb-2">Orders</p>
                        <div>
                            <table className="min-w-full">
                                <thead className="bg-productcolor rounded-b-3xl">
                                    <tr>
                                        <th className="py-5 px-4 text-white font-light text-left">OrderId</th>
                                        <th className="py-5 px-4 text-white font-light text-left">Product Name</th>
                                        <th className="py-5 px-4 text-white font-light text-left">Price</th>
                                        <th className="py-5 px-4 text-white font-light text-left">Customer's Name</th>
                                        <th className="py-5 px-4 text-white font-light text-left">Address</th>
                                        <th className="py-5 px-4 text-white font-light text-left">Email</th>
                                        <th className="py-5 px-4 text-white font-light text-left">Date</th>
                                        <th className="py-5 px-4 text-white font-light text-left">Status</th>
                                        <th className="py-5 px-4 text-white font-light text-left">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {TableData}
                                </tbody>
                            </table>
                            <div className="flex items-end justify-end px-10 mt-5">
                                <p className="ml-3 border border-black px-2">1</p>
                                <p className="ml-3 border border-black px-2">2</p>
                                <p className="ml-3 border border-black px-2">3</p>
                                <p className="ml-3 border border-black px-2">4</p>
                                <p className="ml-3 border border-black px-2">Next</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;
