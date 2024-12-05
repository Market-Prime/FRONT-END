import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FiPlusCircle } from "react-icons/fi";
import { OrderData } from "./ProductsData";
import { CiMenuKebab } from "react-icons/ci";

const Orders = () => {
  const TableData = OrderData.map((item, i) => (
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
      <td className="py-3 px-4 border-b text-left">{item.Price}</td>
      <td className="py-3 px-4 border-b text-left">{item.CustomerName}</td>
      <td className="py-3 px-4 border-b text-left">{item.Address}</td>
      <td className="py-3 px-4 border-b text-left">{item.Email}</td>
      <td className="py-3 px-4 border-b text-left">{item.Date}</td>
      <td className="py-3 px-4 border-b text-left text-productcolor text-sm">
        {item.Status}
      </td>
      <td className="py-3 px-4 border-b text-left">
        <CiMenuKebab className="cursor-pointer" />
      </td>
    </tr>
  ));

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="h-screen w-full flex">

        {/* Main content */}
        <div className="bg-[#E6F7FF] w-6/6">
          {/* Filters */}
          <div className="bg-white my-4 px-10 flex items-center justify-between w-full py-2">
            <div className="flex items-center space-x-2">
              <button className="flex items-center py-3 bg-topdealbg px-7 rounded-lg">
                Category <IoIosArrowDown className="ml-3" />
              </button>
              <button className="flex items-center py-3 bg-topdealbg px-7 rounded-lg">
                Status <IoIosArrowDown className="ml-3" />
              </button>
              <button className="flex items-center py-3 bg-topdealbg px-7 rounded-lg">
                Price <IoIosArrowDown className="ml-3" />
              </button>
              <button className="flex items-center py-3 bg-topdealbg px-7 rounded-lg">
                Date <IoIosArrowDown className="ml-3" />
              </button>
            </div>
            <button className="flex items-center py-3 px-7 bg-productcolor text-white rounded-xl">
              <FiPlusCircle className="mr-2 text-xl" /> 15th Nov-23rd Nov 24
            </button>
          </div>

          {/* Orders Table */}
          <div className="bg-white mx-10 py-5">
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
                <tbody>{TableData}</tbody>
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
    </Layout>
  );
};

export default Orders;
