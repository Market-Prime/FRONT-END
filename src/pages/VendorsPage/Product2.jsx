import React, { useState, useRef } from "react";
import { BsImages } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoCloudUploadOutline } from "react-icons/io5";
import DropdownWithAddOption from "./DropdownWithAddOption";
import TagsInput from "./TagsInput";
import VendorLayout from "../../../layout/VendorDashboardLayout";

const Product2 = () => {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [formCompleted, setFormCompleted] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const images = files.map((file) => ({
      url: URL.createObjectURL(file),
      name: file.name,
      size: `${(file.size / 1024).toFixed(2)}kb`,
    }));
    setUploadedImages((prev) => [...prev, ...images]);
  };

  const handleClearImages = () => {
    setUploadedImages([]);
  };

  const handleFormCompletionCheck = () => {
    // Simulate checking if the required fields are filled
    setFormCompleted(true); // Update logic for your specific form validation
  };

  const handleDeleteImage = (index) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <VendorLayout>
      <main className="flex-1 bg-[#C1CFE3]">
        <div className="flex flex-col px-4 md:px-8 my-5 max-w-7xl mx-auto h-full gap-6">
          <h1 className="text-blue-800 text-xl md:text-2xl font-bold">
            Add Products
          </h1>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Left Column */}
            <div className="flex flex-col w-full md:w-1/2 gap-4">
              {/* Product Name */}
              <div className="flex flex-col gap-2">
                <label className="text-[#004AAD] font-medium">
                  Product Name
                </label>
                <input
                  type="text"
                  className="font-semibold border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleFormCompletionCheck}
                />
              </div>

              {/* Description */}
              <div className="flex flex-col gap-2">
                <label className="font-medium">Description</label>
                <textarea
                  className="text-center px-2 font-semibold border border-gray-300 rounded-md w-full p-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={5}
                  onChange={handleFormCompletionCheck}
                />
              </div>

              {/* Category and Sub-Category */}
              <div className="flex flex-col gap-2">
                <label className="font-medium">Category</label>
                <DropdownWithAddOption
                  initialOptions={["Women", "Men", "Kids"]}
                  onChange={handleFormCompletionCheck}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium">Sub-Category</label>
                <DropdownWithAddOption
                  initialOptions={["Cloth", "Skirt", "Trouser"]}
                  onChange={handleFormCompletionCheck}
                />
              </div>

              {/* Price */}
              <div className="flex flex-col gap-2">
                <label className="font-medium">Price</label>
                <input
                  type="text"
                  className="font-semibold border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleFormCompletionCheck}
                />
              </div>

              {/* Tags */}
              <div className="flex flex-col gap-2">
                <TagsInput onChange={handleFormCompletionCheck} />
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
                      <a
                        href="#"
                        className="text-blue-600 underline"
                        onClick={() => fileInputRef.current.click()}
                      >
                        Browse
                      </a>
                    </p>
                    <input
                      type="file"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      multiple
                      onChange={handleImageUpload}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {uploadedImages.map((image, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-white border border-gray-300 rounded-md p-4"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={image.url}
                        alt={image.name}
                        className="h-12 w-12 object-cover"
                      />
                      <div className="flex flex-col">
                        <p className="font-semibold text-sm">{image.name}</p>
                        <p className="text-xs text-gray-500">{image.size}</p>
                      </div>
                    </div>
                    <button onClick={() => handleDeleteImage(index)}>
                      <RiDeleteBin6Line className="text-2xl text-red-500" />
                    </button>
                  </div>
                ))}
              </div>

              {uploadedImages.length > 0 && (
                <button
                  className="self-start text-white bg-red-500 px-4 py-2 rounded-md"
                  onClick={handleClearImages}
                >
                  Clear All
                </button>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            className={`self-end mt-4 px-4 py-2 rounded-md ${
              formCompleted
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
            disabled={!formCompleted}
          >
            Submit
          </button>
        </div>
      </main>
    </VendorLayout>
  );
};

export default Product2;
