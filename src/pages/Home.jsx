import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Best, ExploreData, Topdealdata } from "../data/Topdealdata";
import Footer from "../components/Footer/Footer";
import bg from "../../public/images/bg.jpg";
const Home = () => {
  const topdeal = Topdealdata.map((item, i) => {
    return (
      <div
        className="mx-auto  mb-8 2xl:w-6/6 xl:w-4/6 lg:w-6/6 md:w-2/2 sm:w-[90%]"
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
            className="bg-seamlessbg py-2 text-white font-bold text-sm 2xl:w-7/12 xl:w-7/12 lg:w-[55%] md:w-2/3 text-start px-2  rounded-xl"
          >
            {item.button}
          </Link>
          <img src={item.cart} className="ml-2" />
        </div>
      </div>
    );
  });

  const explore = ExploreData.map((items, i) => {
    return (
      <div
        key={i}
        className="mb-5 sm:w-full md:w-[90%] lg:w-4/4 xl:w-72 2xl:w-72"
      >
        <div className="h-48 overflow-hidden">
          <img
            src={items.image}
            alt={items.name}
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-2xl text-center py-2">{items.name}</p>
      </div>
    );
  });

  const bestseller = Best.map((item, i) => {
    return (
      <div
        className="mx-auto bestbox mb-8 2xl:w-4/4 xl:w-3/4 lg:w-4/4 md:w-[90%] sm:w-full"
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
      <div className="relative w-[98vw] h-screen overflow-x-hidden">
        <img src={bg} alt="" className="w-full h-full object-cover" />
        {/* Dark overlay */}
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
            className="block mt-10 bg-white  py-6 mx-auto font-bold 2xl:w-2/3 xl:w-2/3 lg:w-2/3 md:w-2/3 sm:w-2/3 text-center rounded-3xl text-3xl text-shopcolor"
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
      {/* End of Perfect Fit */}

      {/* Explore */}
      <div className="2xl:px-10 xl:px-10 lg:px-10 md:px-5 sm:px-5">
        {/* Explore Section */}
        <div className="bg-topdealbg rounded-lg shadow-lg px-8 py-8 2xl:mt-10 xl:mt-10 lg:mt-10 md:mt-5 sm:mt-5">
          <p className="text-topdeal text-4xl font-semibold text-center mb-5">
            Explore
          </p>

          {/* Grid layout for responsive columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
            {explore.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-200 hover:scale-105"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Best Sellers Section */}
        <div className="2xl:px-10 xl:px-10 lg:px-10 md:px-5 sm:px-5 sm:mt-10 md:mt-10 lg:mt-10 xl:mt-10 2xl:mt-10">
          <div className="bg-topdealbg rounded-lg shadow-lg px-8 py-8">
            <p className="text-topdeal text-4xl font-semibold text-center mb-5">
              Today's Top Deal
            </p>

            {/* Grid layout for responsive columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
              {bestseller.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-200 hover:scale-105"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* End of best sellers */}

      {/* Boring outfit */}
      <div className="bg-seamlessbg pt-10 2xl:px-32 xl:px-32 lg:px-20 md:px-10 sm:px-5 flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col items-center justify-between w-full">
        <div className="sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-10">
          <p className="text-4xl text-white text-start leading-snug font-extrabold">
            Never wear a boring outfit
          </p>
          <p className="mt-10 text-white text-2xl">
            Shop with Market Prime for an outfit that fits.
          </p>
          <Link
            to="Search"
            className="block mt-10 bg-white  py-6 mx-0 font-bold 2xl:w-1/3 xl:w-1/3 lg:w-2/3 md:w-2/3 sm:w-full text-center rounded-3xl text-4xl text-shopcolor"
          >
            Shop now
          </Link>
        </div>
        <div className="sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-10">
          <img
            src="/images/Rectangle 354.png"
            className="2xl:ml-96 xl:ml-0 lg:ml-0 md:ml-0 sm:ml-0 2xl:w-auto xl:w-auto lg:w-auto md:w-full sm:w-full"
          />
        </div>
      </div>
      {/* End of Boring outfits */}

      {/* Footer */}
      <Footer />
      {/* End of the footer */}
    </div>
  );
};
export default Home;
