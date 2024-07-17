import React from "react";

const Hero = () =>{
    return(
        <div className="bg-herocolor px-10 py-20 xl:h-screen lg:h-screen md:h-auto  hero-section w-full">
            <h1 className="font-bold lg:text-7xl md:text-5xl sm:text-3xl xl:text-9xl uppercase text-white w-full">market prime</h1>
            <div className="mt-10">
                <p className="mt-10 text-white xl:w-1/4 lg:w-1/4 md:w-1/2 sm:w-1/2 text-justify">Revolutionize the online fashion shopping experience by combining technology and style. Provide our customers with an intuitive, engaging, and personalized shopping journey, ensuring they find the perfect items that suit their tastes and preferences.</p>
                {/* <img src="/images/pexels-godisable-jacob-226636-784371 2.png" alt="Header Image" /> */}
            </div>
        </div>
    )
}
export default Hero;