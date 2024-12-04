import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FiPlusCircle } from "react-icons/fi";
import { ProductsData } from "./ProductsData";
import { CiMenuKebab } from "react-icons/ci";
import Layout from "../../../layout/AdminDashboardLayout";

const Product = () => {
  const TableData = ProductsData.map((item, i) => (
    <tr key={i} className="hover:bg-gray-100">
      <td className="py-3 px-4 border-b text-left">{item.id}</td>
      <td className="py-3 px-4 border-b text-left">
        <img
          src={item.Image}
          alt={item.Name}
          className="w-10 h-10 rounded-full object-cover"
        />
      </td>
      <td className="py-3 px-4 border-b text-left">{item.Name}</td>
      <td className="py-3 px-4 border-b text-left">{item.Category}</td>
      <td className="py-3 px-4 border-b text-left">{item.Price}</td>
      <td className="py-3 px-4 border-b text-left">{item.Stock}</td>
      <td className="py-3 px-4 border-b text-left">{item.Sold}</td>
      <td className="py-3 px-4 border-b text-left">{item.Vendor}</td>
      <td className="py-3 px-4 border-b text-left">
        <CiMenuKebab className="cursor-pointer" />
      </td>
    </tr>
  ));

  return (
    <Layout>
      <div className="h-screen w-screen">
        <div className="flex justify-between h-full w-full relative">
          {/* Removed DashNav */}
          <div className="bg-[#E6F7FF] w-full">
            {" "}
            {/* Changed width to full */}
            {/* Removed Header */}
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
                <FiPlusCircle className="mr-2 text-xl" /> Add Product
              </button>
            </div>
            <div className="bg-white mx-10 py-5">
              <p className="px-10 text-lg mb-2">Products</p>
              <div>
                <table className="min-w-full">
                  <thead className="bg-productcolor rounded-b-3xl">
                    <tr>
                      <th className="py-5 px-4 text-white font-light text-left">
                        ProductId
                      </th>
                      <th className="py-5 px-4 text-white font-light text-left">
                        Image
                      </th>
                      <th className="py-5 px-4 text-white font-light text-left">
                        Name
                      </th>
                      <th className="py-5 px-4 text-white font-light text-left">
                        Category
                      </th>
                      <th className="py-5 px-4 text-white font-light text-left">
                        Price
                      </th>
                      <th className="py-5 px-4 text-white font-light text-left">
                        Stock
                      </th>
                      <th className="py-5 px-4 text-white font-light text-left">
                        Sold
                      </th>
                      <th className="py-5 px-4 text-white font-light text-left">
                        Vendor
                      </th>
                      <th className="py-5 px-4 text-white font-light text-left">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>{TableData}</tbody>
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
    </Layout>
  );
};

export default Product;
