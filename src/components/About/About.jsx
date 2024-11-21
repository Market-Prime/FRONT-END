import React from "react";

const About = () => {
  return (
    <div className="bg-aboutbg xl:py-20 lg:py-20 md:py-20 sm:py-10 xl:px-40 lg:px-28 md:px-20 sm:px-10">
      <h1 className="text-white xl:text-6xl lg:text-5xl md:text-5xl sm:text-xl font-bold text-start tracking-widest w-full">About Market Prime</h1>
      <p
        className="xl:mt-10 lg:mt-10 md:mt-10 sm:mt-5 font-normal text-xl text-white text-justify"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >Market Prime is a cutting-edge fashion e-commerce platform dedicated to bringing the latest trends and high-quality fashion items to our customers.</p>
      <p
        className="font-normal text-xl text-white text-justify"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="1000"
      ><span className="block mt-5">We offer a diverse range of products, including bags, shoes, shirts, trousers, and garments from renowned fashion brands.</span>
      </p>
      <p
        className="font-normal text-xl text-white text-justify"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="1000"
      >
        <span className="block mt-5">
          Our innovative platform utilizes advanced AI technology to provide a personalized shopping experience, allowing customers to visualize how items look on them through virtual try-ons before making a purchase.
        </span>
      </p>
    </div>
  );
};

export default About;
