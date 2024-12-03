import React from "react";
import { BsImages } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoCloudUploadOutline } from "react-icons/io5";
import DropdownWithAddOption from "./DropdownWithAddOption";
import shirt1 from "../../../public/images/T-shirt 1.png";
import shirt2 from "../../../public/images/T-shirt 2.png";
import shirt3 from "../../../public/images/T-shirt 3.png";
import shirt4 from "../../../public/images/T-shirt 4.png";
import shirt5 from "../../../public/images/T-shirt 5.png";

const Product2 = () => {
  return (
    <main className="flex-1 bg-[#C1CFE3]">
      <div className="flex flex-col px-4 md:px-8 my-5 max-w-7xl mx-auto h-full gap-6">
        <h1 className="text-blue-800 text-xl md:text-2xl font-bold">Add Products</h1>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column */}
          <div className="flex flex-col w-full md:w-1/2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-[#004AAD] font-medium">Product Name</label>
              <input
                type="text"
                defaultValue="Quality Fashion T-Shirt"
                className="font-semibold border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => console.log(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium">Description</label>
              <textarea
                defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vero aliquid unde soluta consequuntur culpa laboriosam possimus est officiis corrupti minima cum quia illo impedit, tempore totam, nam dolore ex."
                className="text-center px-2 font-semibold border border-gray-300 rounded-md w-full p-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={5}
                onChange={(e) => console.log(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium">Category</label>
              <DropdownWithAddOption initialOptions={["Women", "Men", "Kids"]} />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium">Sub-Category</label>
              <DropdownWithAddOption initialOptions={["Cloth", "Skirt", "Trouser"]} />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium">Price</label>
              <input
                type="text"
                defaultValue="₦25,000"
                className="font-semibold border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => console.log(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium">Tags</label>
              <input
                type="text"
                defaultValue="T-Shirt, Fashion, Casual"
                className="font-semibold border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => console.log(e.target.value)}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col w-full md:w-1/2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-[#004AAD] font-medium">Add Image</label>
              <div className="bg-white h-[30vh] flex flex-col items-center justify-center gap-4 border border-dashed border-gray-300 rounded-md">
                <BsImages className="text-8xl text-blue-600" />
                <div className="text-center">
                  <IoCloudUploadOutline className="text-4xl mx-auto" />
                  <p className="text-lg">
                    Drag & Drop image or{" "}
                    <a href="#" className="text-blue-600 underline">
                      Browse
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {[shirt1, shirt2, shirt3, shirt4, shirt5].map((shirt, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-white border border-gray-300 rounded-md p-4"
                >
                  <div className="flex items-center gap-4">
                    <img src={shirt} alt={`Shirt ${index + 1}`} className="h-12 w-12 object-cover" />
                    <div className="flex flex-col">
                      <p className="font-semibold text-sm">Quality Fashion T-Shirt Green.png</p>
                      <p className="text-xs text-gray-500">500kb</p>
                    </div>
                  </div>
                  <button>
                    <RiDeleteBin6Line className="text-2xl text-red-500" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Product2;
