import React from "react";
import { BsImages } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoCloudUploadOutline } from "react-icons/io5";
import shirt1 from "../../../public/images/T-shirt 1.png";
import shirt2 from "../../../public/images/T-shirt 2.png";
import shirt3 from "../../../public/images/T-shirt 3.png";
import shirt4 from "../../../public/images/T-shirt 4.png";
import shirt5 from "../../../public/images/T-shirt 5.png";

const Product2 = () => {
  return (
    <main className="flex-1 bg-[#C1CFE3]">
      <div className="flex flex-col px-8 my-5 w-[1200px] h-screen gap-3">
        <h1 className="text-blue-800 text-2xl font-bold">Add Products</h1>

        <div className="flex flex-row items-center justify-between w-full h-full">
          <div className="flex flex-col w-[47%] h-full gap-4">
            <div className=" h-full w-full flex flex-col gap-2">
              <p className="text-[#004AAD]">Product Name</p>
              <div className="flex items-center justify-center h-[50px] w-full bg-white">
              <input
  type="text"
  defaultValue="Quality Fashion T-Shirt"
  className="font-semibold border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
  onChange={(e) => console.log(e.target.value)} // Optional: Handle changes
/>
              </div>
            </div>
            <div className=" h-full w-full flex flex-col gap-2">
              <p>Description</p>
              <div className="flex items-center justify-center h-[90px] my-2 w-full bg-white">
              <textarea
  defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vero aliquid unde soluta consequuntur culpa laboriosam possimus est officiis corrupti minima cum quia illo impedit, tempore totam, nam dolore ex."
  className="text-center px-2 font-semibold border border-gray-300 rounded-md w-full p-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
  rows={5} // Adjust number of rows as needed
  onChange={(e) => console.log(e.target.value)} // Optional: Handle changes
/>

              </div>
            </div>
            <div className=" h-full w-full flex flex-col gap-2">
              <p>Category</p>
              <div className="flex items-center justify-center h-[50px] w-full bg-white">
              <DropdownWithAddOption initialOptions={["Women", "Men", "Kids"]} />
              </div>
            </div>
            <div className=" h-full w-full flex flex-col gap-2">
              <p>Sub-Category</p>
              <div className="flex items-center justify-center h-[50px] w-full bg-white">
                <p className="font-semibold">Clothes</p>
              </div>
            </div>
            <div className=" h-full w-full flex flex-col gap-2">
              <p>Price</p>
              <div className="flex items-center justify-center h-[50px] w-full bg-white">
                <p className="font-semibold">N25,000</p>
              </div>
            </div>
            <div className=" h-full w-full flex flex-col gap-2">
              <p>Tags</p>
              <div className="flex items-center justify-center h-[50px] w-full bg-white">
                <p className="font-semibold">N25,000</p>
              </div>
            </div>
          </div>
          <div className="h-full w-[47%] flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-[#004AAD]">Add Image</p>
              <div className="bg-white h-[27vh] w-full flex flex-col gap-2 items-center justify-center">
                <BsImages className="text-8xl text-blue-600" />
                <div className="flex flex-col items-center">
                  <IoCloudUploadOutline className="text-4xl" />
                  <p className="text-lg">
                    Drag & Drop image or{" "}
                    <a href="" className="text-blue-600 underline">
                      Browse
                    </a>{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col h-full w-full gap-6">
              <div className="w-full h-[10vh] bg-white flex items-center justify-between px-4">
                <div className="h-full flex gap-6 ">
                  <img src={shirt1} alt="" className="h-full w-[50px]" />
                  <div className="flex flex-col justify-between">
                    <p className="font-semibold">
                      Quality Fashion T-Shirt Green.png
                    </p>
                    <p>500kb</p>
                  </div>
                </div>
                <div>
                  <RiDeleteBin6Line className="text-2xl" />
                </div>
              </div>
              <div className="w-full h-[10vh] bg-white flex items-center justify-between px-4">
                <div className="h-full flex gap-6 ">
                  <img src={shirt2} alt="" className="h-full w-[50px]" />
                  <div className="flex flex-col justify-between">
                    <p className="font-semibold">
                      Quality Fashion T-Shirt Green.png
                    </p>
                    <p>500kb</p>
                  </div>
                </div>
                <div>
                  <RiDeleteBin6Line className="text-2xl" />
                </div>
              </div>
              <div className="w-full h-[10vh] bg-white flex items-center justify-between px-4">
                <div className="h-full flex gap-6 ">
                  <img src={shirt3} alt="" className="h-full w-[50px]" />
                  <div className="flex flex-col justify-between">
                    <p className="font-semibold">
                      Quality Fashion T-Shirt Green.png
                    </p>
                    <p>500kb</p>
                  </div>
                </div>
                <div>
                  <RiDeleteBin6Line className="text-2xl" />
                </div>
              </div>
              <div className="w-full h-[10vh] bg-white flex items-center justify-between px-4">
                <div className="h-full flex gap-6 ">
                  <img src={shirt4} alt="" className="h-full w-[50px]" />
                  <div className="flex flex-col justify-between">
                    <p className="font-semibold">
                      Quality Fashion T-Shirt Green.png
                    </p>
                    <p>500kb</p>
                  </div>
                </div>
                <div>
                  <RiDeleteBin6Line className="text-2xl" />
                </div>
              </div>
              <div className="w-full h-[10vh] bg-white flex items-center justify-between px-4">
                <div className="h-full flex gap-6 ">
                  <img src={shirt5} alt="" className="h-full w-[50px]" />
                  <div className="flex flex-col justify-between">
                    <p className="font-semibold">
                      Quality Fashion T-Shirt Green.png
                    </p>
                    <p>500kb</p>
                  </div>
                </div>
                <div>
                  <RiDeleteBin6Line className="text-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Product2;
