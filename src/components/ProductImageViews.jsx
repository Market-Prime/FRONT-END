import React, { useState } from "react";
import PropTypes from "prop-types";

const ImageGallery = ({ images }) => {
  // Set initial main image
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="min-w-full h-screen mt-2 flex">
      {/* Sidebar with images */}
      <div className="h-[70%] w-[10%] mx-1 flex flex-col gap-2">
        {images.map((image, index) => (
          <div key={index} className="view h-full cursor-pointer">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover rounded"
              onClick={() => setMainImage(image)} // Update main image on click
            />
          </div>
        ))}
      </div>

      {/* Main Image */}
      <div className="bg-orange-200 w-[70%] h-full flex justify-center items-center">
        <img
          src={mainImage}
          alt="Main view"
          className="w-full h-full object-cover rounded"
        />
      </div>
    </div>
  );
};

// PropTypes validation
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageGallery;
