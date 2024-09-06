import React from "react";
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
const ProductDescription = () => {
  return (
    <div>
      <Navbar />
      <div className="productDesc">
        <div className="image-views">
          <div className="view1">
            <img src={bg} alt="" />
          </div>
          <div className="view2">
            <img src={image2} alt="" />
          </div>
          <div className="view3">
            <img src={image3} alt="" />
          </div>
          <div className="view4">
            <img src={image4} alt="" />
          </div>
          <div className="view5">
            <img src={image5} alt="" />
          </div>
          <div className="view6">
            <img src={image6} alt="" />
          </div>
        </div>

        <div className="product-image flex-col">
          <img src={bg} alt="" className="" />
          <div className="product-reviews flex justify-center">
            <p>15 Reviews | </p>
            <div className="flex items-center gap-4">
              <span className="text-yellow-500 text-2xl">★</span>
              <span className="text-yellow-500 text-2xl">★</span>
              <span className="text-yellow-500 text-2xl">★</span>
              <span className="text-yellow-500 text-2xl">★</span>
              <span className="text-yellow-500 text-2xl">★</span>
            </div>{" "}
          </div>
        </div>
        <div className="product-info">
          <div className="product-info-text">
            <p>
              {" "}
              Plain color Slit Off Shoulder Dress, for dinner & wedding party,
              Women’s clothings.
            </p>
            <h5 className="font-bold">N100,000</h5>
            <p>100 + sold</p>
            <div className="flex items-center gap-4">
              <span className="text-yellow-500 text-4xl">★</span>
              <span className="text-yellow-500 text-4xl">★</span>
              <span className="text-yellow-500 text-4xl">★</span>
              <span className="text-yellow-500 text-4xl">★</span>
              <span className="text-yellow-500 text-4xl">★</span>
            </div>
            <p>Color: Pink</p>
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
          <div className="flex my-3">
            {" "}
            <p>Qty</p>
            <select name="" id="">
              <option value="1">1</option>
            </select>
          </div>

          <div className="flex flex-col gap-4">
            <button className="btn bg-[#004AAD] rounded-full">
              Virtual Try-On
            </button>
            <button className="btn bg-[#006DFF] rounded-full">
              Add To Cart
            </button>
          </div>
          <div className="image-options">
            <img src={image7} alt="" className="max-w-full max-h-full" />
            <img src={image8} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
