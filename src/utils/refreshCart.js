import ApiClient from "../api/index.js";
import { clearOffCarts, setOffCartItem } from "../db/index.js";

const refreshCart = async () => {
    await ApiClient.getCartItems()
        .then(async (data) => {
            const preparedData = data.map((item) => ({
                product_item: item.product_item,
                qty: item.qty,
            }));
            await clearOffCarts();
            await setOffCartItem(preparedData);
        })
        .catch((err) => {})
        .finally(() => {
            const _evnt = new CustomEvent("cart_updated");
            document.dispatchEvent(_evnt);
        });
};

export default refreshCart;
