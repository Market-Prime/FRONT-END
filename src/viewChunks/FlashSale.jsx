import React, { useEffect, useState } from "react";
import ProductListItem1 from "../components/listings/ProductListItem1";

const FlashSaleListing = () => {
    const [FlashSaleData, setFlashSaleData] = useState([]);

    useEffect(() => {
        if (window.__FLASH_SALE_DATA__) {
            setFlashSaleData(window.__FLASH_SALE_DATA__);
        }
    }, [window.__FLASH_SALE_DATA__]);


    return (
        <>
            {FlashSaleData.map((item) => (
                <ProductListItem1 data={item} />
            ))}
        </>
    );
};
export default FlashSaleListing;
