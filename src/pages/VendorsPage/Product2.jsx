import { useState, React } from "react";
import { BsImages } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoCloudUploadOutline } from "react-icons/io5";
import shirt1 from "../../../public/images/T-shirt 1.png";
import shirt2 from "../../../public/images/T-shirt 2.png";
import shirt3 from "../../../public/images/T-shirt 3.png";
import shirt4 from "../../../public/images/T-shirt 4.png";
import shirt5 from "../../../public/images/T-shirt 5.png";

const Product2 = () => {
  const [uploadedImages, setUploadedImages] = useState([]);

  // Handle image upload
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const images = files.map((file) => ({
      src: URL.createObjectURL(file),
      name: file.name,
      size: (file.size / 1024).toFixed(2) + " KB",
    }));
    setUploadedImages((prevImages) => [...prevImages, ...images]);
  };

  // Handle image delete
  const handleDeleteImage = (index) => {
    setUploadedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };
  return (
    <main className="flex-1 bg-[#C1CFE3] w-full">
      <div className="flex flex-col px-4 sm:px-3  w-full max-w-[1200px] mx-auto h-full gap-3">
        <h1 className="text-blue-800 text-2xl font-bold">Add Products</h1>

        <div className="flex flex-col lg:flex-row-reverse items-center justify-between w-full h-full gap-4">
          {/* Add Image Section */}
          <div className="w-full lg:w-[47%] flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-[#004AAD]">Add Image</p>
              <div className="bg-white h-[27vh] w-full flex flex-col gap-2 items-center justify-center p-4">
                <BsImages className="text-6xl sm:text-8xl text-blue-600" />
                <div className="flex flex-col items-center text-center">
                  <IoCloudUploadOutline className="text-3xl sm:text-4xl" />
                  <p className="text-sm sm:text-lg">
                    Drag & Drop image or{" "}
                    <label className="text-blue-600 underline cursor-pointer">
                      Browse
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        multiple
                        className="hidden"
                      />
                    </label>
                  </p>
                </div>
              </div>
            </div>

            {/* Uploaded Images Display */}
            <div className="flex lg:flex-col flex-wrap gap-4">
              {uploadedImages.map((image, index) => (
                <div
                  key={index}
                  className="relative w-[24%] lg:w-full bg-white p-2 rounded-md shadow-md flex items-center"
                >
                  <img
                    src={image.src}
                    alt={image.name}
                    className="w-full lg:w-[50px] h-auto object-cover"
                  />
                  <div className="text-center lg:text-left">
                    <p className="text-sm sm:text-base font-semibold truncate">
                      {image.name}
                    </p>
                    {window.innerWidth > 1024 && (
                      <p className="text-gray-500 text-xs">{image.size}</p>
                    )}
                  </div>
                  <RiDeleteBin6Line
                    className="text-xl sm:text-2xl text-red-600 cursor-pointer"
                    onClick={() => handleDeleteImage(index)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full lg:w-[47%] flex flex-col gap-4">
            {[
              { label: "Product Name", value: "Quality Fashion T-Shirt" },
              {
                label: "Description",
                value:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vero aliquid unde soluta consequuntur culpa laboriosam possimus est officiis corrupti minima cum quia illo impedit, tempore totam, nam dolore ex.",
                isDescription: true,
              },
              { label: "Category", value: "Women" },
              { label: "Sub-Category", value: "Clothes" },
              { label: "Price", value: "N25,000" },
              { label: "Tags", value: "Casual, Fashion, T-Shirt" },
            ].map((item, index) => (
              <div key={index} className="w-full flex flex-col gap-2">
                <p className="text-[#004AAD]">{item.label}</p>
                <div
                  className={`${
                    item.isDescription
                      ? "h-[60px] sm:h-max"
                      : "h-[40px] sm:h-[50px]"
                  } w-full bg-white flex items-center justify-center px-2 sm:px-4 py-1 sm:py-2`}
                >
                  <p
                    className={`${
                      item.isDescription
                        ? "text-center px-1 sm:px-2 text-xs sm:text-base"
                        : "text-xs sm:text-base"
                    } font-semibold`}
                  >
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Product2;
