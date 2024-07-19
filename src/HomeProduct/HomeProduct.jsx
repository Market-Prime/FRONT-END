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
            <div key={i}>
                <p className="text-center font-bold text-2xl">{item.name}</p>
                <img className="text-center mx-auto" src={item.Image} />
            </div>
        )
    })
    return(
        <div className="py-16 xl:px-40 lg:px-28">
            <div className="flex items-center justify-between sm:flex-col xl:flex-row lg:flex-row md:flex-col">{productList}</div>
        </div>
    )
}
export default HoomeProduct;