import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Best, ExploreData, Topdealdata } from "../data/Topdealdata";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const topdeal = Topdealdata.map((item, i) => {
    return (
      <div className="mx-auto  mb-8" key={i}>
        <img src={item.image} className="w-full mx-auto" />
        <p className="text-sm text-topdeal font-light -mt-10 ml-5">
          {item.name}
        </p>
        <span className="text-base text-topdeal font-bold ml-5">
          {item.price}
        </span>
        <div className="flex items-center justify-start w-full ml-5 mx-auto">
          <Link
            to={item.link}
            className="bg-seamlessbg py-2 text-white font-bold w-7/12 text-start px-2 rounded-xl"
          >
            {item.button}
          </Link>
          <img src={item.cart} className="ml-5" />
        </div>
      </div>
    );
  });

  const explore = ExploreData.map((items, i) => {
    return (
      <div key={i} className="mb-5" style={{ width: items.width }}>
        <div className="h-64 overflow-hidden">
          <img
            src={items.image}
            alt={items.name}
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-3xl text-center">{items.name}</p>
      </div>
    );
  });

  const bestseller = Best.map((item, i) => {
    return (
      <div className="mx-auto bestbox mb-8" key={i}>
        <img src={item.image} className="w-full mx-auto" />
        <p className="text-sm text-topdeal font-light mt-10 ml-5">
          {item.name}
        </p>
        <span className="text-base text-topdeal font-bold ml-5">
          {item.price}
        </span>
        <div className="flex items-center justify-start w-full ml-5 mx-auto">
          <Link
            to={item.link}
            className="bg-seamlessbg py-2 text-white font-bold w-7/12 text-start px-2 rounded-xl"
          >
            {item.button}
          </Link>
          <img src={item.cart} className="ml-5" />
        </div>
      </div>
    );
  });
  return (
    <div>
      <Navbar />
      {/* Hero Image */}
      <div className="w-full px-5 py-5">
        <img src="/images/Frame 6.png" className="w-full h-screen" />
      </div>

      {/* Seamless Fashion */}
      <div className="flex items-center justify-between w-full bg-seamlessbg px-52 py-2">
        <div>
          <p className="text-4xl text-white text-center">
            Discover seamless Fashion <br />
            shopping experience
          </p>
          <Link
            to="Search"
            className="block mt-10 bg-white  py-6 mx-auto font-bold w-2/3 text-center rounded-3xl text-4xl text-shopcolor"
          >
            Shop now
          </Link>
        </div>
        <div>
          <img src="/images/Landing Image 2 1.png" />
        </div>
      </div>
      {/* End of Seamless Fashion */}

      {/* Top deal */}
      <div className="px-5">
        <div className="bg-topdealbg px-5 py-5 mt-5">
          <p className="text-topdeal text-4xl font-semibold">
            Today's Top Deal
          </p>
          <div className="flex items-start justify-between flex-wrap w-full mx-auto mt-5">
            {topdeal}
          </div>
        </div>
      </div>
      {/* End of Top deal */}

      {/* Perfect fit */}
      <div className="bg-seamlessbg px-5 py-5 flex items-center justify-between w-full">
        <div className="w-1/5">
          <p className="text-white text-5xl w-full leading-snug">
            Get your perfect fit by using our Virtual Try-On
          </p>
        </div>
        <div className="w-7/12 mx-auto">
          <img src="/images/Vector 340.png" className="mx-auto" />
          <div className="flex items-start justify-center">
            <img src="/images/Frame 24.png" />
            <img src="/images/Frame 25.png" className="ml-44" />
          </div>
        </div>
        <div className="w-1/5 bg-gradient-to-b from-white to-tryonecolor py-6 rounded-2xl">
          <p className="text-4xl text-center font-extrabold text-shopcolor">
            Check our <br />
            Virtual Try-On
          </p>
        </div>
      </div>
      {/* End of Perfect Fit */}

      {/* Explore */}
      <div className="px-5">
        <div className="bg-topdealbg px-5 py-5 mt-5">
          <p className="text-topdeal text-4xl font-semibold">Explore</p>
          <div className="flex items-start justify-between w-full flex-wrap mt-5">
            {explore}
          </div>
        </div>
      </div>
      {/* End of explore */}

      {/* Best sellers */}
      <div className="px-5">
        <div className="bg-topdealbg px-5 py-5 mt-5">
          <p className="text-topdeal text-4xl font-semibold">
            Today's Top Deal
          </p>
          <div className="flex items-start justify-between flex-wrap w-full mx-auto mt-5">
            {bestseller}
          </div>
        </div>
      </div>
      {/* End of best sellers */}

      {/* Boring outfit */}
      <div className="bg-seamlessbg pt-10 px-32 flex items-center justify-between w-full">
        <div>
          <p className="text-4xl text-white text-start leading-snug font-extrabold">
            Never wear a <br />
            boring outfit
          </p>
          <p className="mt-10 text-white text-2xl">
            Shop with Market Prime for an outfit that fits.
          </p>
          <Link
            to="Search"
            className="block mt-10 bg-white  py-6 mx-0 font-bold w-2/3 text-center rounded-3xl text-4xl text-shopcolor"
          >
            Shop now
          </Link>
        </div>
        <div>
          <img src="/images/Rectangle 354.png" />
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
