import React from "react";
import logo from "../../assets/Logo 1.png";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import profile from "../../assets/Filtered-Images/profile-pic.png";
import { BsGraphUpArrow } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { FaBoxes } from "react-icons/fa";
import { LuBox } from "react-icons/lu";
import { FaRegMessage } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";
import order_icon from "../../assets/Filtered-Images/tder.png";
import vendors_icon from "../../assets/Filtered-Images/vendors.png";
import users from "../../assets/Filtered-Images/users.png";
import sales_icon from "../../assets/Filtered-Images/sales.png";

const Dashboard = () => {
  const orders = [
    {
      id: "MP1010",
      item: "Women Classy Top",
      date: "13/09/24",
      price: "#20,000",
      category: "Women",
      seller: "SB Empire",
      status: "Delivered",
    },
    {
      id: "MP1012",
      item: "Men Classy Set",
      date: "12/09/24",
      price: "#150,000",
      category: "Men",
      seller: "Market Prime",
      status: "Delivered",
    },
    {
      id: "MP1014",
      item: "Custom-made Ring Set",
      date: "12/09/24",
      price: "#200,000",
      category: "Unisex",
      seller: "FashionLot",
      status: "Pending",
    },
    {
      id: "MP1016",
      item: "WomenBaggy Jean",
      date: "11/09/24",
      price: "#20,000",
      category: "Women",
      seller: "Ola Boutique",
      status: "Delivered",
    },
  ];
  return (
    <div className="h-screen w-screen ">
      {/* Navigation Bar */}
      <div className="h-[60px] w-[79.8%] absolute right-0 flex items-center justify-end gap-80 px-4 border border-gray-400 bg-slate-100 ">
        <div className="flex relative">
          <input
            type="text"
            className="border-2 outline-none border-gray-500 px-4 py-2 rounded-lg w-[300px] h-10"
          />
          <CiSearch className="text-2xl mt-2 mr-2 right-0 absolute" />
        </div>
        <div className="flex">
          <img src={profile} alt="" className="w-12 h-12" />
          <div className="flex flex-col">
            <p className="flex text-md">
              Akpan David <FaAngleDown className="mt-1" />
            </p>
            <p className="text- text-blue-600">Super Admin </p>
          </div>
        </div>
      </div>

      {/* Side-bar */}
      <div className="flex justify-between h-screen w-full relative">
        <div className="min-w-[310px] h-full border border-gray-400 bg-white shadow-xl relative">
          <div className="flex items-center justify-center mt-9">
            <img src={logo} alt="" className="w-14" />
            <h1 className="text-xl font-bold text-blue-900">
              MARKET <br /> PRIME
            </h1>
          </div>

          <div className="flex flex-col gap-5 items-center mt-10 list-none text-[#002366] text-lg tracking-wide ">
            <li className="bg-[#002366] rounded-md py-4 w-full text-center text-white text-2xl cursor-pointer">
              Dashboard
            </li>
            <li className="cursor-pointer flex gap-4">
              <BsGraphUpArrow className="text-xl mt-1" /> Analytics
            </li>
            <li className="cursor-pointer flex gap-4">
              {" "}
              <LuBox className="text-xl mt-1" /> Product Management
            </li>
            <li className="cursor-pointer flex gap-4">
              {" "}
              <FaBoxes className="text-xl mt-1" /> Product Listing
            </li>
            <li className="cursor-pointer">Order Management</li>
            <li className="cursor-pointer flex gap-4">
              {" "}
              <HiUsers className="text-xl mt-1" />
              User Management
            </li>
            <li className="cursor-pointer flex gap-4">
              {" "}
              <HiUsers className="text-xl mt-1" /> Vendor Management
            </li>
            <li className="cursor-pointer flex gap-4">
              {" "}
              <FaRegMessage className="text-xl mt-1" /> Messages
            </li>
          </div>

          <div className="flex flex-col items-start list-none mt-14 ml-5  text-[#002366] text-lg tracking-wide gap-5">
            <li className="cursor-pointer flex gap-2">
              <IoSettingsOutline className="text-xl mt-1" />
              Settings
            </li>
            <li className="cursor-pointer flex gap-2">
              {" "}
              <RiLogoutCircleLine className="text-xl mt-1" />
              Logout
            </li>
          </div>
        </div>
        {/* Inner content  #E6F7FF*/}
        <div className="w-[80%] h-[91.7%] mt-[60px] bg-[#E6F7FF]">
          {/* Analytics Card */}
          <div className="flex justify-around items-center  h-[25%]  min-w-full ">
            <div className="h-[70%] w-[20%] shadow-gray-400 shadow-xl border border-slate-300 bg-white rounded-3xl flex flex-col items-start justify-center">
              <div className="ml-7  flex flex-col items-start justify-center w-full ">
                <p className="text-xl">Total Orders</p>
                <div className="flex w-[85%] justify-between">
                  <h1 className="text-xl font-bold">10720</h1>
                  <img src={order_icon} alt="" />
                </div>
                <p>From yesterday</p>
              </div>
            </div>
            <div className="h-[70%] w-[20%] shadow-gray-400 shadow-xl border bg-white  border-slate-300 rounded-3xl flex flex-col items-start justify-center">
              <div className="ml-7  flex flex-col items-start justify-center w-full ">
                <p className="text-xl">Total Sales</p>
                <div className="flex w-[85%] justify-between">
                  <h1 className="text-xl font-bold">N1,800,309</h1>
                  <img src={sales_icon} alt="" />
                </div>
                <p>From yesterday</p>
              </div>
            </div>
            <div className="h-[70%] w-[20%] shadow-gray-400 shadow-xl border bg-white  border-slate-300 rounded-3xl flex flex-col items-start justify-center">
              <div className="ml-7  flex flex-col items-start justify-center w-full">
                <p className="text-xl">Active Vendors</p>
                <div className="flex w-[85%] justify-between">
                  <h1 className="text-xl font-bold">10720</h1>
                  <img src={vendors_icon} alt="" />
                </div>
                <p>From yesterday</p>
              </div>
            </div>
            <div className="h-[70%] w-[20%] shadow-gray-400 shadow-xl border bg-white  border-slate-300 rounded-3xl flex flex-col items-start justify-center">
              <div className="ml-7  mx-2 flex flex-col items-start justify-center w-full">
                <p className="text-xl">Total Users</p>
                <div className="flex w-[85%] justify-between">
                  <h1 className="text-xl font-bold">10720</h1>
                  <img src={users} alt="" />
                </div>
                <p>From yesterday</p>
              </div>
            </div>
          </div>

          {/* Charts */}
          <div className="h-[40%] rounded-3xl"></div>

          {/* Recent Orders */}
          <div className="h-[34%] flex justify-around items-center min-w-full">
            <div className="w-[70%] h-full border-2 rounded-md bg-white">
              <div className="flex justify-between mb-2 px-5">
                <div className="flex items-center space-x-2 ">
                  <span className="text-gray-700 text-xls">Recent Orders</span>
                  {/* <button className="bg-blue-100 text-blue-600 py-1 px-2 rounded-lg flex items-center">
                    <i className="fas fa-filter mr-1"></i> Filters
                  </button> */}
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-500">Sort By:</span>
                  <select className="bg-blue-100 py-1 px-2 rounded-lg">
                    <option>Recent Orders</option>
                    <option>Pending Orders</option>
                    <option>Out of Stock</option>
                    <option>Recently added producsts</option>
                    <option>Delivered Items</option>
                  </select>
                </div>
              </div>
              <div className="overflow-y-hidden">
                <table className="min-w-full table-auto border-collapse border border-gray-200">
                  <thead>
                    <tr className="">
                      <th className="px-4 py-1  text-left">Order ID</th>
                      <th className="px-4 py-1 text-left">Item</th>
                      <th className="px-4 py-1  text-left">Date</th>
                      <th className="px-4 py-1 text-left">Price</th>
                      <th className="px-4 py-1  text-left">Category</th>
                      <th className="px-4 py-1  text-left">Seller</th>
                      <th className="px-4 py-1  text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order, index) => (
                      <tr key={index} className="bg-white">
                        <td className="px-4 py-[8px] ">{order.id}</td>
                        <td className="px-4 py-[8px]">{order.item}</td>
                        <td className="px-4 py-[8px] ">{order.date}</td>
                        <td className="px-4 py-[8px] ">{order.price}</td>
                        <td className="px-4 py-[8px]">{order.category}</td>
                        <td className="px-4 py-[8px]">{order.seller}</td>
                        <td
                          className={`px-4 py-1  ${
                            order.status === "Pending"
                              ? "text-yellow-500"
                              : "text-blue-800"
                          }`}
                        >
                          {order.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="w-[20%] h-full border-2 rounded-md bg-white">
              <p className="text-center">Customers</p>
              <p>Overall ratings of 200 customer's reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
