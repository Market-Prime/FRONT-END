import { IoIosArrowDown } from "react-icons/io";
import { FiPlusCircle } from "react-icons/fi";
import { OrderData } from "../AdminDashboard/ProductsData";
import { CiMenuKebab } from "react-icons/ci";

const Orders = () => {
  const TableData = OrderData.map((item, i) => (
    <div
      key={i}
      className="bg-white p-4 rounded-lg shadow-md mb-4 border-l-4 border-blue-400"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-bold text-gray-700">#{item.id}</span>
        <span
          className={`px-2 py-1 text-sm rounded-lg ${
            item.Status === "Delivered"
              ? "bg-blue-100 text-blue-600"
              : item.Status === "Pending"
              ? "bg-yellow-100 text-yellow-600"
              : item.Status === "Canceled"
              ? "bg-red-100 text-red-600"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {item.Status}
        </span>
      </div>
      <div className="flex items-center mb-2">
        <img
          src={item.image}
          className="w-10 h-10 rounded-full object-cover mr-2"
          alt="product"
        />
        <div>
          <p className="font-semibold">{item.ProductName}</p>
          <p className="text-gray-500">{item.CustomerName}</p>
        </div>
      </div>
      <p className="text-gray-700 mb-1">Price: {item.Price}</p>
      <p className="text-gray-700 mb-1">Address: {item.Address}</p>
    </div>
  ));

  return (
    <div className="h-screen w-full flex flex-col">
      {/* Main content */}
      <div className="bg-[#E6F7FF] w-full flex-grow p-4">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 w-full sm:w-auto">
          {["Category", "Status", "Price", "Date"].map((label, index) => (
            <button
              key={index}
              className="flex items-center py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-all duration-200"
            >
              {label} <IoIosArrowDown className="ml-1 text-gray-500" />
            </button>
          ))}
        </div>

        {/* Date Range Button */}
        <button className="flex items-center py-2 px-4 w-full sm:w-auto mt-2 sm:mt-0 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-md">
          <FiPlusCircle className="mr-2 text-lg" />
          <span className="whitespace-nowrap">15th Nov - 23rd Nov 24</span>
        </button>

        {/* Orders List for Mobile */}
        <div className="sm:hidden">
          <p className="text-lg font-semibold mb-4">Orders</p>
          {TableData}
        </div>

        {/* Orders Table for Desktop */}
        <div className="hidden sm:block bg-white py-5">
          <p className="px-10 text-lg mb-2">Orders</p>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-productcolor text-white">
                <tr>
                  <th className="py-5 px-4 text-left">OrderId</th>
                  <th className="py-5 px-4 text-left">Product Name</th>
                  <th className="py-5 px-4 text-left">Price</th>
                  <th className="py-5 px-4 text-left">Customer's Name</th>
                  <th className="py-5 px-4 text-left">Address</th>
                  <th className="py-5 px-4 text-left">Email</th>
                  <th className="py-5 px-4 text-left">Date</th>
                  <th className="py-5 px-4 text-left">Status</th>
                  <th className="py-5 px-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {OrderData.map((item, i) => (
                  <tr key={i} className="hover:bg-gray-100">
                    <td className="py-3 px-4 border-b text-left">{item.id}</td>
                    <td className="py-3 px-4 border-b flex items-center">
                      <img
                        src={item.image}
                        className="w-10 h-10 rounded-full object-cover mr-2"
                        alt="product"
                      />
                      {item.ProductName}
                    </td>
                    <td className="py-3 px-4 border-b text-left">
                      {item.Price}
                    </td>
                    <td className="py-3 px-4 border-b text-left">
                      {item.CustomerName}
                    </td>
                    <td className="py-3 px-4 border-b text-left">
                      {item.Address}
                    </td>
                    <td className="py-3 px-4 border-b text-left">
                      {item.Email}
                    </td>
                    <td className="py-3 px-4 border-b text-left">
                      {item.Date}
                    </td>
                    <td className="py-3 px-4 border-b text-left text-productcolor text-sm">
                      {item.Status}
                    </td>
                    <td className="py-3 px-4 border-b text-left">
                      <CiMenuKebab className="cursor-pointer" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-end px-10 mt-5 space-x-2">
            <button className="border px-2">1</button>
            <button className="border px-2">2</button>
            <button className="border px-2">3</button>
            <button className="border px-2">4</button>
            <button className="border px-2">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
