import React from "react";
const Footer = () =>{
    return(
        <div className="flex sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row items-start justify-center w-full bg-topdealbg py-20 sm:py-10 md:px-10 xl:px-32 2xl:px-32 sm:px-10 mx-auto">
            <div className="pr-70 mr-2 sm:mb-5 w-1/2">
                <a className="block text-shopcolor mb-10 text-sm" href="#">About Us</a>
                <a className="block text-shopcolor mb-10 text-sm" href="#">FAQs</a>
                <a className="block text-shopcolor mb-10 text-sm" href="#">Contact Us</a>
            </div>
            <div className="pr-70 mr-2 sm:mb-5 w-1/2">
                <a className="block text-shopcolor mb-10 text-sm" href="#">Terms of Use</a>
                <a className="block text-shopcolor mb-10 text-sm" href="#">Privacy Policy</a>
                <a className="block text-shopcolor mb-10 text-sm" href="#">Delivery Policy</a>
            </div>
            <div className="pr-70 mr-2 sm:mb-5 w-1/2">
                <a className="block text-shopcolor mb-10 text-sm" href="#">LinkedIn</a>
                <a className="block text-shopcolor mb-10 text-sm" href="#">Twitter(X)</a>
                <a className="block text-shopcolor mb-10 text-sm" href="#">Instagram</a>
            </div>
            <div className="pr-70 mr-2 sm:mb-5 w-1/2">
                <a className="block text-shopcolor mb-10 text-sm" href="#">Customer Service</a>
                <a className="block text-shopcolor mb-10 text-sm" href="#">Newsletter</a>
            </div>
        </div>
    )
}
export default Footer;