import React, { useEffect, useState } from "react";
import { getCartCount } from "../db";

const CartCounter = () => {
    const [cartNumber, setCartNumber] = useState(0);

    useEffect(() => {
        const handleUpdate = async () => {
            setCartNumber(await getCartCount());
        };

        document.addEventListener("cart_updated", handleUpdate);

        return () => {
            document.removeEventListener("cart_updated", handleUpdate);
        };
    }, []);

    return <>{cartNumber}</>;
};

export default CartCounter;
