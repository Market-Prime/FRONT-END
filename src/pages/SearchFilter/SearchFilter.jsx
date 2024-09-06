import React, { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar";
import AnimatedRating from "../../components/AnimatedRating";
import Bg1 from "../../assets/Filtered-Images/Spl3.png";
import Bg2 from "../../assets/Filtered-Images/Spl10.png";
import Bg3 from "../../assets/Filtered-Images/Spl1.png";
import Bg4 from "../../assets/Filtered-Images/Spl2.png";
import Bg5 from "../../assets/Filtered-Images/Spl4.png";
import Bg6 from "../../assets/Filtered-Images/Spl7.png";
import Bg7 from "../../assets/Filtered-Images/Spl6.png";
import Bg8 from "../../assets/Filtered-Images/Spl5.png";
import Bg9 from "../../assets/Filtered-Images/Spl12.png";
import Bg10 from "../../assets/Filtered-Images/Spl13.png";
import Bg11 from "../../assets/Filtered-Images/Spl14.png";
import Bg12 from "../../assets/Filtered-Images/Spl15.png";
import Bg13 from "../../assets/Filtered-Images/Spl16.png";
import Bg14 from "../../assets/Filtered-Images/Spl16.png";
import Bg15 from "../../assets/Filtered-Images/Spl18.png";
import { IoCartOutline } from "react-icons/io5";
import PropTypes from "prop-types";
import { RxEyeOpen } from "react-icons/rx";

// Example products array, you can replace it with dynamic data or fetch it from an API
const products = [
  {
    image: Bg1,
    title: "Women Bodycon Dress",
    price: "₦30,000",
    originalPrice: "₦40,000",
    discount: "25% off",
    rating: 4.5,
    reviews: "100+",
    colors: ["#A52A2A", "#5F9EA0", "#FF4500"],
    // Example color codes
  },
  {
    image: Bg2,
    title: "Women Bodycon Dress",
    price: "₦30,000",
    originalPrice: "₦40,000",
    discount: "25% off",
    rating: 4.5,
    reviews: "100+",
    colors: ["#A52A2A", "#5F9EA0", "#FF4500"], // Example color codes
  },
  {
    image: Bg3,
    title: "Women Bodycon Dress",
    price: "₦30,000",
    originalPrice: "₦40,000",
    discount: "25% off",
    rating: 4.5,
    reviews: "100+",
    colors: ["#A52A2A", "#5F9EA0", "#FF4500"], // Example color codes
  },
  {
    image: Bg4,
    title: "Women Bodycon Dress",
    price: "₦30,000",
    originalPrice: "₦40,000",
    discount: "25% off",
    rating: 4.5,
    reviews: "100+",
    colors: ["#A52A2A", "#5F9EA0", "#FF4500"], // Example color codes
  },
  {
    image: Bg5,
    title: "Women Bodycon Dress",
    price: "₦30,000",
    originalPrice: "₦40,000",
    discount: "25% off",
    rating: 4.5,
    reviews: "100+",
    colors: ["#A52A2A", "#5F9EA0", "#FF4500"], // Example color codes
  },
  {
    image: Bg6,
    title: "Women Bodycon Dress",
    price: "₦30,000",
    originalPrice: "₦40,000",
    discount: "25% off",
    rating: 4.5,
    reviews: "100+",
    colors: ["#A52A2A", "#5F9EA0", "#FF4500"], // Example color codes
  },
  {
    image: Bg7,
    title: "Women Bodycon Dress",
    price: "₦30,000",
    originalPrice: "₦40,000",
    discount: "25% off",
    rating: 4.5,
    reviews: "100+",
    colors: ["#A52A2A", "#5F9EA0", "#FF4500"], // Example color codes
  },
  {
    image: Bg8,
    title: "Women Bodycon Dress",
    price: "₦30,000",
    originalPrice: "₦40,000",
    discount: "25% off",
    rating: 4.5,
    reviews: "100+",
    colors: ["#A52A2A", "#5F9EA0", "#FF4500"], // Example color codes
  },
  {
    image: Bg9,
    title: "Women Bodycon Dress",
    price: "₦30,000",
    originalPrice: "₦40,000",
    discount: "25% off",
    rating: 4.5,
    reviews: "100+",
    colors: ["#A52A2A", "#5F9EA0", "#FF4500"], // Example color codes
  },
  {
    image: Bg10,
    title: "Women Bodycon Dress",
    price: "₦30,000",
    originalPrice: "₦40,000",
    discount: "25% off",
    rating: 4.5,
    reviews: "100+",
    colors: ["#A52A2A", "#5F9EA0", "#FF4500"], // Example color codes
  },
  {
    image: Bg11,
    title: "Women Bodycon Dress",
    price: "₦30,000",
    originalPrice: "₦40,000",
    discount: "25% off",
    rating: 4.5,
    reviews: "100+",
    colors: ["#A52A2A", "#5F9EA0", "#FF4500"], // Example color codes
  },
  {
    image: Bg12,
    title: "Women Bodycon Dress",
    price: "₦30,000",
    originalPrice: "₦40,000",
    discount: "25% off",
    rating: 4.5,
    reviews: "100+",
    colors: ["#A52A2A", "#5F9EA0", "#FF4500"], // Example color codes
  },
  {
    image: Bg13,
    title: "Women Bodycon Dress",
    price: "₦30,000",
    originalPrice: "₦40,000",
    discount: "25% off",
    rating: 4.5,
    reviews: "100+",
    colors: ["#A52A2A", "#5F9EA0", "#FF4500"], // Example color codes
  },
  {
    image: Bg14,
    title: "Women Bodycon Dress",
    price: "₦30,000",
    originalPrice: "₦40,000",
    discount: "25% off",
    rating: 4.5,
    reviews: "100+",
    colors: ["#A52A2A", "#5F9EA0", "#FF4500"], // Example color codes
  },
  {
    image: Bg15,
    title: "Women Bodycon Dress",
    price: "₦30,000",
    originalPrice: "₦40,000",
    discount: "25% off",
    rating: 4.5,
    reviews: "100+",
    colors: ["#A52A2A", "#5F9EA0", "#FF4500"], // Example color codes
  },
];

const ProductCard = ({ product }) => (
  <div className="bg-white rounded-lg shadow p-4 m-2">
    <img src={product.image} alt={product.title} className="rounded-t-lg" />
    <Link to="/ProductDescription">
      <RxEyeOpen />
    </Link>
    <div className="p-4">
      <h3 className="font-bold text-lg">{product.title}</h3>
      <p className="text-lg font-semibold text-blue-500">{product.price}</p>
      <p className="line-through text-sm text-gray-500">
        {product.originalPrice}
      </p>
      <p className="text-sm text-red-500">{product.discount}</p>
      <div className="flex items-center mt-2">
        <div className="flex items-center">
          {[...Array(Math.round(product.rating))].map((_, index) => (
            <span key={index} className="text-yellow-500">
              ★
            </span>
          ))}
        </div>
        <span className="text-sm text-gray-500 ml-2">{product.reviews}</span>

        <IoCartOutline className="border-2 border-blue-600 " />
      </div>
      <div className="flex mt-2 space-x-2">
        {product.colors.map((color, index) => (
          <div
            key={index}
            className="w-5 h-5 rounded-full"
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
    </div>
  </div>
);

ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    originalPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    discount: PropTypes.string,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.string.isRequired,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

const SearchFilter = () => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-between py-2 pr-20">
        <p
          className="my-2 mx-20 text-2xl font-bold flex items-center cursor-pointer gap-2"
          onClick={() => setShowFilter(!showFilter)} // Toggle filter visibility on click
        >
          Filters
        </p>
        <p className="bg-[#E6F7FF]">10,000+ results for Ladies Gown</p>
        <select className="border-2 border-gray-300 text-sm px-2 py-3 bg-[#E6F7FF]">
          <option value="relevant">Sort By: Relevant</option>
          <option value="low-high">Sort by: Low to High</option>
          <option value="high-low">Sort by: High to Low</option>
        </select>
      </div>

      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10">
        <div className="min-w-[20rem] border border-gray-300 rounded-lg p-4">
          {/* Categories */}
          <div className={`mb-4 ${showFilter ? "" : "hidden"} sm:block`}>
            <p className="mb-3 text-[18px] font-medium">Categories</p>
            <hr className="my-3 border-gray-300" />
            <div className="flex flex-col gap-4 text-lg text-[#002366]">
              {[
                "Women's Dresses",
                "Women's Party Wear",
                "Curve Dresses",
                "Lounge Wear and Sleep Wear",
                "Women's Traditional Outfit",
                "Women's Scarfs and Headwraps",
                "Tops & Skirts",
                "Intimate Wears",
              ].map((item) => (
                <label
                  key={item}
                  className="flex gap-2 items-center text-lg cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded-full"
                    value={item}
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Size</h3>
            <hr className="my-2 border-gray-300" />
            <div className="grid grid-cols-4 gap-2">
              {[
                "XS",
                "S",
                "M",
                "L",
                "6",
                "8",
                "10",
                "12",
                "14",
                "16",
                "18",
                "20",
                "22",
                "24",
                "26",
                "32",
                "One Size",
              ].map((size) => (
                <button
                  key={size}
                  className="px-3 py-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Color</h3>
            <hr className="my-2 border-gray-300" />
            <div className="grid grid-cols-6 gap-2">
              {[
                "#000000",
                "#FFFFF",
                "#FF0000",
                "#0000FF",
                "#FFA500",
                "#FFFF00",
                "#00008B",
                "#8A2BE2",
                "#00FF00",
                "#FF69B4",
                "#008000",
                "#A52A2A",
              ].map((color) => (
                <button
                  key={color}
                  className="w-8 h-8 rounded-full"
                  style={{ backgroundColor: color }}
                ></button>
              ))}
            </div>
          </div>

          {/* Price */}
          <div className={`mb-4 ${showFilter ? "" : "hidden"} sm:block`}>
            <p className="mb-3 text-xl font-medium">Price</p>
            <hr className="my-3 border-gray-300" />
            <div className="flex flex-col gap-4 text-sm text-[#002366]">
              {[
                "Under 2000",
                "2000-5000",
                "5000-10,000",
                "10,000-20,000",
                "20,000-30,000",
                "35,000-50,000",
                "Above 50,000",
              ].map((price) => (
                <label
                  key={price}
                  className="flex gap-2 items-center text-lg cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded-full"
                    value={price}
                  />
                  {price}
                </label>
              ))}
              <div className="mt-4 flex gap-2">
                <button className="px-4 py-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200">
                  Min
                </button>
                <button className="px-4 py-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200">
                  Max
                </button>
                <button className="px-4 py-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200">
                  Go
                </button>
              </div>
            </div>
          </div>

          {/* Type */}
          <div className={`mb-4 ${showFilter ? "" : "hidden"} sm:block`}>
            <p className="mb-3 text-lg font-medium">Type</p>
            <hr className="my-3 border-gray-300" />
            <div className="flex flex-col gap-4 text-sm text-[#002366]">
              {[
                "Bodycon",
                "Fitted",
                "A Pendulum",
                "Fit & Flare",
                "Peplum",
                "Slip",
                "Tunic",
              ].map((type) => (
                <label
                  key={type}
                  className="flex gap-2 text-lg items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded-full"
                    value={type}
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          {/* Ratings */}
          <div className={`mb-4 ${showFilter ? "" : "hidden"} sm:block`}>
            <p className="mb-3 text-lg font-medium">Ratings</p>
            <hr className="my-3 border-gray-300" />
            <AnimatedRating initialRating={4} />
          </div>

          {/* Occasion */}
          <div className={`mb-4 ${showFilter ? "" : "hidden"} sm:block`}>
            <p className="mb-3 text-lg font-medium">Occasion</p>
            <hr className="my-3 border-gray-300" />
            <div className="flex flex-col gap-4 text-lg text-[#002366]">
              {["Casual", "Party", "Evening", "Traditional", "Work"].map(
                (occasion) => (
                  <label
                    key={occasion}
                    className="flex gap-2 items-center text-lg cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded-full"
                      value={occasion}
                    />
                    {occasion}
                  </label>
                )
              )}
            </div>
          </div>

          {/* Shipping */}
          <div className={`mb-4 ${showFilter ? "" : "hidden"} sm:block`}>
            <p className="mb-3 text-lg font-medium">Shipping</p>
            <hr className="my-3 border-gray-300" />
            <div className="flex flex-col gap-4 text-sm text-[#002366]">
              {["Free", "Paid"].map((shipping) => (
                <label
                  key={shipping}
                  className="flex gap-2 items-center text-lg cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded-full"
                    value={shipping}
                  />
                  {shipping}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
