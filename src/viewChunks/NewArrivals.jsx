import React, { useEffect, useState } from "react";
import ProductListItem1 from "../components/listings/ProductListItem1";

const NewArrivals = () => {
    const [NewArrivalsData, setNewArrivalsData] = useState([]);

    useEffect(() => {
        if (window.__FLASH_SALE_DATA__) {
            setNewArrivalsData(window.__FLASH_SALE_DATA__);
        }
    }, [window.__FLASH_SALE_DATA__]);


    return (
        <>
            {NewArrivalsData.map((item) => (
                <ProductListItem1 data={item} />
            ))}
        </>
    );
};
export default NewArrivals;
