import Navbar from "../components/Navbar";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Best, ExploreData, Topdealdata } from "../data/Topdealdata";
import Footer from "../components/Footer/Footer";
import bg from "../../public/images/bg.jpg";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInterval } from "react-use";
import PropTypes from "prop-types";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

// Slider settings
const sliderSettings = {
  dots: false, // Hides the dots under the slider
  infinite: true, // Loops the slider
  speed: 1000, // Transition speed in ms
  slidesToShow: 4, // Number of items visible at a time
  slidesToScroll: 1, // Scroll one item at a time
  autoplay: true, // Enables auto sliding
  autoplaySpeed: 2000, // Delay between slides in ms
  pauseOnHover: true, // Pauses on hover
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
export default function DynamicSlider() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    setDirection(directions[Math.floor(Math.random() * directions.length)]);
  };

  useInterval(nextSlide, 5000);

  const slides = [
    { src: "/public/images/VID-20241119-WA0175.mp4" },
    { src: "/public/images/VID-20241119-WA0180.mp4" },
    { src: "/public/images/VID-20241119-WA0189.mp4" },
  ];

  const directions = ["top", "bottom", "left", "right"];

  const slideVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  function Slide({ src, direction, text }) {
    return (
      <div className="absolute inset-0 w-full h-full">
        {/* Black transparent overlay */}
        {/* <div className="absolute inset-0 bg-black opacity-70 z-10"></div> */}

        {/* Video */}
        <motion.video
          src={src}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            objectFit: "cover",
            minHeight: "100vh", // Ensures video covers full height
            minWidth: "100vw", // Ensures video covers full width
          }}
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 1, ease: "easeInOut" }}
          autoPlay
          loop
          muted
        />

        <motion.div
          className="absolute inset-0 flex items-center justify-center z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* <p className="text-white text-4xl font-bold text-start px-4 sm:text-2xl md:text-3xl lg:text-4xl xl:text-7xl">
            {text}
          </p> */}
        </motion.div>
      </div>
    );
  }

  Slide.propTypes = {
    src: PropTypes.string.isRequired,
    direction: PropTypes.oneOf(directions).isRequired,
  };

  const productpage = () => {
    navigate("/ProductDescription");
  };

  const topdeal = Topdealdata.map((item, i) => {
    return (
      <div
        className="mx-auto mb-8 2xl:w-6/6 xl:w-4/6 lg:w-6/6 md:w-2/2 sm:w-[90%]"
        onClick={productpage}
        key={i}
      >
        <img src={item.image} className="w-full mx-auto" />
        <p className="text-sm text-topdeal font-light 2xl:-mt-10 xl:-mt-10 lg:mt-0 md:mt-0 sm:mt-0 ml-3">
          {item.name}
        </p>
        <span className="text-base text-topdeal font-bold ml-3">
          {item.price}
        </span>
        <div className="flex items-center justify-start w-full ml-3 mx-auto">
          <Link
            to={item.link}
            className="bg-seamlessbg py-3 text-start text-white font-bold text-sm 2xl:w-1/2 xl:w-full lg:w-[55%] md:w-2/3  px-5 rounded-xl"
          >
            {item.button}
          </Link>
          <img src={item.cart} className="ml-2" />
        </div>
      </div>
    );
  });

  // const explore = ExploreData.map((items, i) => {
  //   return (
  //     <div
  //       key={i}
  //       className="mb-5 sm:w-full md:w-[90%] lg:w-4/4 xl:w-72 2xl:w-11/12"
  //     >
  //       <div className="h-full overflow-hidden">
  //         <img
  //           src={items.image}
  //           alt={items.name}
  //           className="w-full h-full object-cover"
  //         />
  //       </div>
  //       <p className="text-2xl text-center py-0">{items.name}</p>
  //     </div>
  //   );
  // });

  const explore = ExploreData.map((items, i) => {
    return (
      <div
        key={i}
        className="relative group mb-5 sm:w-full md:w-[90%] lg:w-4/4 xl:w-72 2xl:w-11/12"
      >
        <div className="h-full overflow-hidden">
          <img
            src={items.image}
            alt={items.name}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <p className="text-white text-2xl">{items.name}</p>
        </div>
      </div>
    );
  });

  const bestseller = Best.map((item, i) => {
    return (
      <div
        className="mx-auto bestbox mb-8 2xl:w-4/4 xl:w-3/4 lg:w-4/4 md:w-[90%] sm:w-full"
        onClick={productpage}
        key={i}
      >
        <img src={item.image} className="w-full mx-auto" />
        <p className="text-sm text-topdeal font-light mt-10 ml-5">
          {item.name}
        </p>
        <span className="text-base text-topdeal font-bold ml-5">
          {item.price}
        </span>
        <div className="flex items-center justify-start py-2 w-full ml-5 mx-auto">
          <Link
            to={item.link}
            className="bg-seamlessbg py-2 text-white font-bold w-7/12 text-start px-2 rounded-xl"
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
      {/* Hero Image */}
      <div className="relative w-[98vw] h-screen overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          <Slide
            key={currentIndex}
            src={slides[currentIndex].src}
            // text={slides[currentIndex].text}
            direction={direction}
          />
        </AnimatePresence>
      </div>

      {/* Seamless Fashion */}
      <div className="flex 2xl:items-center xl:items-center lg:items-center md:items-center sm:items-start justify-between 2xl:w-full xl:w-full lg:w-full md:w-full sm:w-full bg-seamlessbg 2xl:px-52 xl:px-48 lg:px-40 md:px-5 sm:px-0 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col py-2">
        <div className="sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-10">
          <p className="2xl:text-4xl xl:text-4xl lg:text-2xl md:text-2xl sm:text-2xl text-white text-center">
            Discover seamless Fashion <br />
            shopping experience
          </p>
          <Link
            to="Search"
            className="block mt-10 bg-white py-6 mx-auto font-bold 2xl:w-2/3 xl:w-2/3 lg:w-2/3 md:w-2/3 sm:w-2/3 text-center rounded-3xl text-3xl text-shopcolor"
          >
            Shop now
          </Link>
        </div>
        <div className="sm:w-full md:w-2/3 lg:w-1/3 xl:w-1/2 2xl:w-1/2 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-10">
          <img
            src="/images/Landing Image 2 1.png"
            className="2xl:ml-96 xl:ml-96 lg:ml-0 md:ml-0 sm:ml-0 2xl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-full"
          />
        </div>
      </div>
      {/* End of Seamless Fashion */}

      {/* Top deal */}
      <div className="2xl:px-0 xl:px-0 lg:px-0 md:px-0 sm:px-0">
        <div className="bg-topdealbg px-5 py-10 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0 w-full">
          <p className="text-topdeal text-4xl font-semibold">
            Today's Top Deal
          </p>

          {/* Grid layout for responsive columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full mx-auto mt-10">
            {topdeal}
          </div>
        </div>
      </div>
      {/* End of Top deal */}

      {/* Perfect fit */}
      <div className="bg-seamlessbg px-5 py-5 flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col items-center justify-between w-full">
        <div className="2xl:w-1/5 xl:w-1/5 lg:w-1/5 md:w-full sm:w-full">
          <p className="text-white 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-3xl md:text-center sm:text-3xl w-full leading-snug">
            Get your perfect fit by using our Virtual Try-On
          </p>
        </div>
        <div className="2xl:w-7/12 xl:w-7/12 lg:w-7/12 md:w-full sm:w-full mx-auto">
          <img
            src="/images/Vector 340.png"
            className="mx-auto sm:hidden md:block lg:block xl:block 2xl:block 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-10 sm:mt-0"
          />
          <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col items-start justify-center">
            <img
              src="/images/Frame 24.png"
              className="2xl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-full 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-10"
            />
            <img
              src="/images/Frame 25.png"
              className="2xl:ml-44 xl:ml-44 lg:ml-44 md:ml-44 sm:ml-0 2xl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-full 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-10"
            />
          </div>
        </div>
        <div className="2xl:w-1/5 xl:w-1/5 lg:w-1/5 md:w-full sm:w-full bg-gradient-to-b from-white to-tryonecolor py-6 rounded-2xl">
          <p className="text-3xl text-center font-extrabold text-shopcolor">
            Check our Virtual Try-On
          </p>
        </div>
      </div>
      {/* End of Perfect fit */}

      {/* Explore */}
      <div className="bg-topdealbg py-10 mt-5">
        <p
          className="text-start text-4xl font-bold text-topdeal mb-5 px-5"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          Explore more
        </p>

        {/* <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 2xl:px-20 xl:px-20 lg:px-10 md:px-10 sm:px-5 w-full mx-auto mt-5">
        {explore}
        </div> */}

        <Slider
          {...sliderSettings}
          className="2xl:px-5 xl:px-5 lg:px-10 md:px-10 sm:px-5 w-full mx-auto mt-10 overflow-hidden"
        >
          {ExploreData.map((items, i) => (
            <div key={i} className="relative group mb-5 px-3">
              <div className="h-full overflow-hidden rounded-md shadow-md">
                <img
                  src={items.image}
                  alt={items.name}
                  className="w-full h-60 object-cover"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white text-2xl">{items.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* End of Explore */}

      {/* Bestseller */}
      <div className="2xl:px-0 xl:px-0 lg:px-0 md:px-0 sm:px-0 mt-5">
        <div className="bg-topdealbg px-5 py-5 2xl:mt-0 xl:mt-0 lg:mt-5 md:mt-0 sm:mt-0">
          <p className="text-topdeal text-4xl font-semibold mt-5">Bestseller</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full mx-auto mt-10">
            {bestseller}
          </div>
        </div>
      </div>
      {/* End of Bestseller */}

      <Footer />
    </div>
  );
}
