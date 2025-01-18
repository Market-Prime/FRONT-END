import React, { useEffect, useState } from "react";
import { IoAddSharp } from "react-icons/io5";

const SetDelivery = () => {
    const [deliveryServices, setDeliveryServices] = useState([]);
    const [selectedDelivery, setSelectedDelivery] = useState(null);

    const [shippingAddresses, setShippingAddresses] = useState([]);
    const [selectedShippingAddress, setSelectedShippingAddress] =
        useState(null);

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const getDeliveryServices = async () => {
        setDeliveryServices([
            { id: 1, name: "DHL", tag: ["Best rate", "Medium"] },
            { id: 2, name: "FEZ", tag: ["fast"] },
            { id: 3, name: "Kwik" },
        ]);
    };

    const getShippingAdresses = async () => {
        setShippingAddresses([
            {
                id: 1,
                street: "Ajalorun Shopping Mall, Ijebu Ife, Ijebu East",
                city: "Ijebu-ode",
                state: "Ogun",
            },
            {
                id: 2,
                street: "106, Olori Street, Akute",
                city: "Ifo",
                state: "Ogun",
            },
        ]);
    };

    useEffect(() => {
        const handleAuthUpdate = () => {
            setIsLoggedIn(window.__mp_user_xhrse_isTrue);
        };
        document.addEventListener("u_ath_st", handleAuthUpdate);

        getDeliveryServices();
        getShippingAdresses();

        return () => {
            document.removeEventListener("u_ath_st", handleAuthUpdate);
        };
    }, []);

    return (
        <div className="ci-cont flx-col">
            <div className="header">
                <p className="title fnt-integral">Configure your Delivery</p>
            </div>
            <div className="cart-main">
                <div className="config-cont flx-col">
                    <div className="config-item ds">
                        <p className="title">Select Delivery service</p>
                        <span className="line"></span>
                        <div className="body flx-col">
                            {deliveryServices.map((item) => (
                                <button
                                    key={item.id}
                                    className={`flx items-center ds-item justify-between ${
                                        selectedDelivery == item.id && "s"
                                    }`}
                                    onClick={() => {
                                        setSelectedDelivery(item.id);
                                    }}
                                >
                                    <div className="ds-item-main flx items-center">
                                        <div className="ds-img"></div>
                                        <div className="ds-deets flx-col justify-between items-start">
                                            <p className="ds-name">
                                                {item.name}
                                            </p>
                                            <p className="ds-tags flx">
                                                {item?.tag?.map((it, _i) => (
                                                    <span
                                                        className="ds-tag"
                                                        key={_i}
                                                    >
                                                        {it}
                                                    </span>
                                                ))}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="end flx items-center justify-center">
                                        <span className="ind"></span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="config-item ss">
                        <p className="title">Confirm your shipping address</p>
                        <span className="line"></span>
                        <div className="body">
                            {isLoggedIn ? (
                                <>
                                    <div className="sha flx-col">
                                        {shippingAddresses.map((item) => (
                                            <button
                                                className={`flx items-center justify-between sha-item ${
                                                    selectedShippingAddress ==
                                                        item.id && "s"
                                                }`}
                                                onClick={() => {
                                                    setSelectedShippingAddress(
                                                        item.id
                                                    );
                                                }}
                                            >
                                                <div className="sha-deet">
                                                    <p className="txt">
                                                        {item?.street}{" "}
                                                        {item?.city}{" "}
                                                        {item?.state}
                                                    </p>
                                                </div>
                                                <div className="end flx items-center justify-center">
                                                    <span className="ind"></span>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                    <div className="add-sha-end flx items-center justify-end">
                                        <button className="add-sha flx items-center">
                                            <IoAddSharp />
                                            <span>Add Shipping Address</span>
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <div className="cta-login-cont flx items-center justify-center">
                                    <button className="cta-login">
                                        Login to continue
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="c-sum">
                    <p className="head">Order Summary</p>
                    <div className="c-sum-deets flx-col">
                        <div className="c-sum-entry flx items-center justify-between">
                            <p className="k">Items total</p>
                            <p className="v flx items-baseline">
                                <span className="curr">NGN</span>
                                <span className="amt">29600</span>
                            </p>
                        </div>
                        <div className="c-sum-entry flx items-center justify-between">
                            <p className="k">Delivery Fee</p>
                            <p className="v flx items-baseline">
                                <span className="curr">NGN</span>
                                <span className="amt">29600</span>
                            </p>
                        </div>
                    </div>
                    <span className="line"></span>
                    <div className="total-cont c-sum-entry flx items-center justify-between">
                        <p className="k">Total</p>
                        <p className="v flx items-baseline">
                            <span className="curr">NGN</span>
                            <span className="amt">60349</span>
                        </p>
                    </div>
                    <span className="line"></span>
                    <div className="proceed">
                        <a className="brdls flx cs-cta" href="/confirm-order">
                            Proceed to Checkout
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SetDelivery;
