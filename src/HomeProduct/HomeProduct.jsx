import React from "react";

const HoomeProduct = () =>{
    const product = [
        {name:"Cloths", Image:"/images/Rectangle 356.png"},
        {name:"Shoes", Image:"/images/Rectangle 357.png"},
        {name:"Bags", Image:"/images/Rectangle 358.png"},
        {name:"Accessories", Image:"/images/Rectangle 359.png"}
    ]

    const productList = product.map((item, i) =>{
        return(
            <div key={i} className="md:mb-10 lg:mb-0 xl:mb-0 md:w-1/2 lg:w-1/3 xl:w-1/4">
                <p className="text-center font-bold text-2xl">{item.name}</p>
                <img className="text-center mx-auto" src={item.Image} />
            </div>
        )
    })
    return(
        <div className="py-16 xl:px-40 lg:px-28 md:px-20">
            <div className="flex items-center justify-between sm:flex-col xl:flex-row lg:flex-row md:flex-row flex-wrap">{productList}</div>
        </div>
    )
}
export default HoomeProduct;