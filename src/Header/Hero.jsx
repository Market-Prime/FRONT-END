import React from "react";

const Hero = () =>{
    return(
        <div className="bg-herocolor px-10 py-10 xl:h-screen lg:h-screen md:h-screen sm:h-screen 2xl:h-screen  hero-section w-full">
            <h1 className="font-bold lg:text-7xl md:text-5xl sm:text-4xl xl:text-8xl uppercase  text-white w-full xl:tracking-[.53em] lg:tracking-[.44em] sm:tracking-[.15em] md:tracking-[.32em] sm:mt-20 md:mt-32 lg:mt-10 xl:mt-10">market prime</h1>
            <div className="mt-10">
                <p className="mt-10 text-white xl:w-1/3 lg:w-1/2 md:w-full sm:w-full text-justify sm:leading-9 md:leading-7 lg:leading-7 xl:leading-7">Revolutionize the online fashion shopping experience by combining technology and style. Provide our customers with an intuitive, engaging, and personalized shopping journey, ensuring they find the perfect items that suit their tastes and preferences.</p>
                {/* <img src="/images/pexels-godisable-jacob-226636-784371 2.png" alt="Header Image" /> */}
            </div>
        </div>
    )
}
export default Hero;