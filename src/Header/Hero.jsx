import React from "react";
const Hero = () =>{
    return (
        <div className="main-heading h-screen sm:py-60 md:py-60  lg:py-52 xl:py-52 2xl:py-64 text-center">
            <h1 className="text-white capitalize lg:text-5xl xl:text-5xl md:text-4xl sm:text-3xl font-extrabold italic" data-aos="fade-right" data-aos-duration="5000">smart shopping,stylish living</h1>
            <p className="text-white my-5 lg:w-2/3 xl:w-2/3 md:w-full sm:w-full leading-loose lg:text-center xl:text-center md:text-center sm:text-justify mx-auto sm:px-4">Revolutionize the online fashion shopping experience by combining technology and style. Provide our customers with an intuitive, engaging, and personalized shopping journey, ensuring they find the perfect items that suit their tastes and preferences.</p>
            <div className="flex lg:w-1/3  mx-auto rounded-2xl sm:mt-10 md:mt-o lg:mt-0 xl:mt-0 md:px-10">
                <input type="text" placeholder="Search for your stylish product" className="w-full px-5 py-2 outline-none"/>
                <button className="bg-aboutbg text-white py-2 px-5 w-1/2">Search</button>
            </div>
        </div>
    )
}
export default Hero;