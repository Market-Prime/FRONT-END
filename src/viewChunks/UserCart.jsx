import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";
import { LuTag } from "react-icons/lu";
import { deleteOffCartItem, getOffCarts } from "../db";
import ApiClient from "../api";
import refreshCart from "../utils/refreshCart";

const UserCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState([]);
    const [subTotal, setSubTotal] = useState(0.0);
    const [cashBack, setCashBack] = useState(0.0);

    const getCartItems = async () => {
        console.log("Getting carts");
        await getOffCarts()
            .then((carts) => {
                setCartItems(carts);
            })
            .catch(() => {});
    };

    useEffect(() => {
        getCartItems();
    }, []);

    useEffect(() => {
        console.log("Items updated");
        const getProducts = async () => {
            try {
                const productPromises = cartItems.map((item) =>
                    ApiClient.getProductItem(item.product_item)
                );
                const fetchedProducts = await Promise.all(productPromises);

                let supFetchedProducts = [];
                fetchedProducts.forEach((_p) => {
                    const own = cartItems.find(
                        (item) => item.product_item == _p.id
                    );
                    supFetchedProducts = [
                        ...supFetchedProducts,
                        { ..._p, cart_quantity: own.qty },
                    ];
                });
                setProducts(supFetchedProducts);
            } catch (err) {
                console.error("Error fetching products:", err);
            }
        };
        if (cartItems.length > 0) {
            getProducts();
        }
    }, [cartItems]);

    useEffect(() => {
        const calculateSubTotal = () => {
            let _sub = 0;
            products.forEach((_item) => {
                let _n;
                _n =
                    parseFloat(_item.product.price) +
                    parseFloat(_item.additional_price);
                _sub += _n * _item.cart_quantity;
            });
            setSubTotal(_sub);
        };
        if (products.length > 0) {
            calculateSubTotal();
        }
    }, [products]);

    const deleteCartItem = async (pid) => {
        if (window.__mp_user_xhrse_isTrue) {
            await ApiClient.deleteCartItem(pid)
                .then(async (data) => {})
                .catch(async (err) => {
                    console.log("Error deleting cart item", err);
                })
                .finally(async () => {
                    await refreshCart();
                    getCartItems();
                });
        } else {
            await deleteOffCartItem(pid);
            await refreshCart();
            getCartItems();
        }
    };

    return (
        <div className="ci-cont flx-col">
            <div className="header">
                <p className="title fnt-integral">Your Cart</p>
            </div>
            <div className="cart-main">
                <div className="cart-items flx-col">
                    {products.map((item) => (
                        <div className="cart-item flx-col" key={item.id}>
                            <a
                                href={`/product-detail?p-id=${item.product.id}`}
                                className="to-product flx justify-end"
                            >
                                <i className="fa fa-angle-right"></i>
                            </a>
                            <div className="ci-main">
                                <div
                                    className="img"
                                    style={{
                                        backgroundImage: `url("${item.product.base_image}")`,
                                    }}
                                ></div>
                                <div className="ci-deets flx-col justify-between">
                                    <p className="name">{item.product.name}</p>
                                    <div className="var-deets flx-col">
                                        {item.variation_details.map(
                                            (_it, _i) => (
                                                <p className="ci-vd">
                                                    {_it.option_value}
                                                </p>
                                            )
                                        )}
                                    </div>
                                    <div className="end flx justify-between items-center">
                                        <p className="pric flx items-baseline">
                                            <span className="cur">NGN</span>
                                            <span className="amt">
                                                {parseFloat(
                                                    item.additional_price
                                                ) +
                                                    parseFloat(
                                                        item.product.price
                                                    )}
                                            </span>
                                        </p>
                                        <div className="single-counter flx items-center justify-between">
                                            <button
                                                className="brdls flx items-center justify-center"
                                                disabled={false}
                                                onClick={() => {}}
                                            >
                                                <i className="fa fa-minus fa-sm"></i>
                                            </button>
                                            <span className="num">
                                                {item.cart_quantity}
                                            </span>
                                            <button
                                                className="brdls flx items-center justify-center"
                                                disabled={false}
                                                onClick={() => {}}
                                            >
                                                <i className="fa fa-plus fa-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ci-actions flx justify-end">
                                <button
                                    className="brdls bgls ci-del flx items-center"
                                    onClick={() => {
                                        deleteCartItem(item.id);
                                    }}
                                >
                                    <FaTrashAlt />
                                    <span>Remove Item</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="c-sum">
                    <p className="head">Order Summary</p>
                    <div className="c-sum-deets flx-col">
                        <div className="c-sum-entry flx items-center justify-between">
                            <p className="k">Subtotal</p>
                            <p className="v flx items-baseline">
                                <span className="curr">NGN</span>
                                <span className="amt">{subTotal}</span>
                            </p>
                        </div>
                        <div className="c-sum-entry flx items-center justify-between">
                            <p className="k">Cash Back</p>
                            <p className="v flx items-baseline ">
                                -<span className="curr">NGN</span>
                                <span className="amt">{cashBack}</span>
                            </p>
                        </div>
                        <div className="inf flx items-center justify-center">
                            <BsInfoCircle />
                            <p>Delivery fees not included</p>
                        </div>
                    </div>
                    <span className="line"></span>
                    <div className="total-cont c-sum-entry flx items-center justify-between">
                        <p className="k">Total</p>
                        <p className="v flx items-baseline">
                            <span className="curr">NGN</span>
                            <span className="amt">{subTotal - cashBack}</span>
                        </p>
                    </div>
                    <div className="pc flx items-center justify-between">
                        <div className="pc-inp-context flx items-center">
                            <LuTag />
                            <input
                                type="text"
                                className="bgls brdls"
                                placeholder="Add promo code"
                            />
                        </div>
                        <button className="brdls pc-act">Apply</button>
                    </div>
                    <span className="line"></span>
                    <div className="proceed">
                        <a className="brdls flx cs-cta" href="/confirm-order">
                            Proceed
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCart;
