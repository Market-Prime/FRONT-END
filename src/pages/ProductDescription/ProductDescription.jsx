import React, { useState } from "react";
import "./ProductDescription.css";
import Navbar from "../../components/Navbar";
import bg from "../../assets/Filtered-Images/Gown 1.png";
import image2 from "../../assets/Filtered-Images/Gown 2 1.png";
import image3 from "../../assets/Filtered-Images/Gown 2 1.png";
import image4 from "../../assets/Filtered-Images/Gown 3 1.png";
import image5 from "../../assets/Filtered-Images/Gown 4 1.png";
import image6 from "../../assets/Filtered-Images/Gown 5 1.png";
import image7 from "../../assets/Filtered-Images/Frame 50.png";
import image8 from "../../assets/Filtered-Images/Frame 38.png";
import Reviews from "../../components/Reviews/Reviews";
import { Topdealdata } from "../../data/Topdealdata";
import { Link } from "react-router-dom";
import { PiCaretDown } from "react-icons/pi";
import Footer from "../../components/Footer/Footer";
import ProductImageView from "../../components/ProductImageViews";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/Breadcrumb";

const ProductDescription = () => {
  const images = [bg, image2, image3, image4, image5, image6];
  const [mainImage, setMainImage] = useState(images[0]);
  const reviewsData = [
    { label: "Quality", percentage: 99.9 },
    { label: "Real size", percentage: 100 },
    { label: "Quick delivery", percentage: 95 },
  ];

  const topdeal = Topdealdata.map((item, i) => {
    return (
      <div
        className="mx-auto  mb-8 2xl:w-6/6 xl:w-4/6 lg:w-6/6 md:w-2/2 sm:w-[90%]"
        key={i}
      >
        <img src={item.image} className="w-full mx-auto" />
        <p className="text-sm text-topdeal font-light 2xl:-mt-10 xl:-mt-10 lg:mt-0 md:mt-0 sm:mt-0 ml-5">
          {item.name}
        </p>
        <span className="text-base text-topdeal font-bold ml-5">
          {item.price}
        </span>
        <div className="flex items-center justify-start w-full ml-5 mx-auto">
          <Link
            to={item.link}
            className="bg-seamlessbg py-2 text-white font-bold text-sm 2xl:w-7/12 xl:w-7/12 lg:w-[55%] md:w-2/3 text-start px-2  rounded-xl"
          >
            {item.button}
          </Link>
          <img src={item.cart} className="ml-2" />
        </div>
      </div>
    );
  });

  return (
    <div>
      <Navbar />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">Women's Wears</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dinner Dress</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Plain Color Slit Off Shoulder Dr...</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-row md:flex-row p-4 gap-4">
        <div className="sidebar w-[10%] md:w-[10%] flex flex-col gap-2">
          {images.map((img, index) => (
            <div key={index} className="sidebar-item mb-2">
              <img
                src={img}
                alt={`thumbnail ${index}`}
                className="w-full h-auto cursor-pointer"
                onClick={() => setMainImage(img)}
              />
            </div>
          ))}
        </div>
        <div className="main-content flex-1 flex flex-col md:flex-row gap-4 items-center md:items-start">
          <div className="main-image w-full md:w-[70%]">
            <img
              src={mainImage}
              alt="Main"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="product-info w-full md:w-[30%] flex flex-col gap-4">
            <div className="product-info-text">
              <p className="inline-block">
                Plain color Slit Off Shoulder Dress, for dinner & wedding party,
                Women’s clothing.
              </p>
              <h5 className="font-bold text-xl mt-2">N100,000</h5>
              <p className="mt-1">100 + sold</p>
              <div className="flex items-center gap-4 mt-2">
                {[...Array(5)].map((_, index) => (
                  <span key={index} className="text-yellow-500 text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="mt-2">Color: Pink</p>
              <p>Size: (UK)</p>
            </div>
            <div className="flex gap-2 my-3">
              {["6", "8", "10", "12/14"].map((size) => (
                <button
                  key={size}
                  className="px-3 py-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200"
                >
                  {size}
                </button>
              ))}
            </div>
            <div className="flex my-3 items-center gap-2">
              <p>Qty</p>
              <select
                name="quantity"
                id="quantity"
                className="border p-1 rounded"
              >
                <option value="1">1</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="flex gap-3 my-6">
              <button className="btn bg-[#004AAD] rounded-lg text-white w-full">
                Virtual Try-On
              </button>
              <button className="btn bg-[#006DFF] rounded-lg text-white w-full">
                Add To Cart
              </button>
            </div>
            <div className="image-options flex gap-2">
              <img src={image7} alt="" className="w-2/2 h-auto" />
              <img src={image8} alt="" className="w-2/2 h-auto" />
            </div>
          </div>
        </div>
      </div>
      <div className="my-10">
        <div className="block md:flex justify-between px-10">
          <h2 className="text-xl font-bold">Reviews</h2>
          <h3 className="text-lg text-blue-500 font-medium">
            All reviews are from verified purchase
          </h3>
        </div>
        <hr className="w-3/4 mx-auto my-4 border-gray-300" />

        {reviewsData.map((review, index) => (
          <div
            className="flex justify-between items-center px-10 mb-4"
            key={index}
          >
            <span className="font-medium">{review.label}</span>
            <div className="relative w-1/2 h-4 bg-gray-300 rounded-full">
              <div
                className="bg-blue-900 h-full rounded-full transition-all ease-in-out duration-300 shadow-sm"
                style={{ width: `${review.percentage}%` }}
              ></div>
            </div>
            <span className="font-bold text-gray-700">
              {review.percentage}%
            </span>
          </div>
        ))}
      </div>
      <hr />
      <div className="comments-section">
        <Reviews />
      </div>
      <div className="2xl:px-5 xl:px-5 lg:px-0 md:px-0 sm:px-0">
        <div className="bg-topdealbg px-5 py-5 2xl:mt-5 xl:mt-5 lg:mt-5 md:mt-0 sm:mt-0">
          <p className="text-topdeal text-4xl font-semibold">
            Today's Top Deal
          </p>

          {/* Grid layout for responsive columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full mx-auto mt-5">
            {topdeal}
          </div>
        </div>
      </div>

      <div className="h-[120px] relative flex items-center justify-center">
        <button
          className="bg-[#004AAD] w-48 h-14 md:w-72 flex items-center justify-center rounded-full text-white"
          aria-label="View More"
        >
          View More <PiCaretDown className="ml-2 text-white text-4xl" />
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDescription;
