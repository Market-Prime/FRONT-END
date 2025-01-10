import React, { useEffect, useState } from "react";
import { setOffCartItem } from "../db";
import ApiClient from "../api";
import refreshCart from "../utils/refreshCart";
import { FaShippingFast } from "react-icons/fa";

const VarItemSelector = ({ item, setSelectedItems, selectedItems }) => {
    const [numberToAdd, setNumberToAdd] = useState(0);
    const [isSelected, select] = useState(false);

    useEffect(() => {
        if (numberToAdd > 0) {
            select(true);
            const varOpts = item.variation_data.map((_it) => _it.option_value);
            setSelectedItems([
                {
                    product_item: item.id,
                    qty: numberToAdd,
                    varOpts,
                },
                ...selectedItems.filter((_it) => _it.product_item != item.id),
            ]);
        } else {
            select(false);
            setSelectedItems([
                ...selectedItems.filter((_it) => _it.product_item != item.id),
            ]);
        }
    }, [numberToAdd]);

    return (
        <div
            className={`p-item-sel flx-col items-center ${
                isSelected && "selected"
            }`}
        >
            <div className="content flx items-center">
                <span className="chk"></span>
                <div className="v-deet flx-col ">
                    {item.variation_data &&
                        item.variation_data.map((variation, varIndex) => (
                            <div key={varIndex} className="vd flx items-center">
                                <p className="vn fnt-medium">
                                    {variation.variation_name}:
                                </p>
                                <p className="vv fnt-medium">
                                    {variation.option_value}
                                </p>
                            </div>
                        ))}
                </div>
                <p className="amt-add fnt-light">+{item.additional_price}</p>
            </div>
            <div className="counter flx items-center justify-center">
                <button
                    className="brdls flx items-center justify-center"
                    disabled={numberToAdd <= 0}
                    onClick={() => {
                        if (numberToAdd > 0) setNumberToAdd(numberToAdd - 1);
                    }}
                >
                    <i className="fa fa-minus fa-sm"></i>
                </button>
                <span className="num">{numberToAdd}</span>
                <button
                    className="brdls flx items-center justify-center"
                    disabled={numberToAdd >= item.qty}
                    onClick={() => {
                        if (numberToAdd <= item.qty)
                            setNumberToAdd(numberToAdd + 1);
                    }}
                >
                    <i className="fa fa-plus fa-sm"></i>
                </button>
            </div>
        </div>
    );
};

const ProductDetail = () => {
    const [product, setProduct] = useState();
    const [items, setItems] = useState([]);
    const [images, setImages] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);

    const [selectedImage, setSelectedImage] = useState(0);
    const [noVariationNumberToAdd, setNoVariationNumberToAdd] = useState(0);

    const productHasNoVariation =
        items.length == 1 && items[0].variation_data.length == 0;

    const addItemsToCart = async () => {
        const preparedData = selectedItems.map((item) => ({
            product_item: item.product_item,
            qty: item.qty,
        }));
        if (window.__mp_user_xhrse_isTrue) {
            await ApiClient.addItemsToCart({ items: preparedData })
                .then(async (data) => {
                    await refreshCart();
                })
                .catch((err) => {
                    
                });
        } else {
            await setOffCartItem(preparedData);
            await refreshCart();
        }
    };

    useEffect(() => {
        if (window.__CURRENT_PRODUCT__) {
            setProduct(window.__CURRENT_PRODUCT__?.product);
            setItems(window.__CURRENT_PRODUCT__?.items);
            setImages([
                window.__CURRENT_PRODUCT__?.product.base_image,
                ...window.__CURRENT_PRODUCT__?.images,
            ]);
        }
    }, [window.__CURRENT_PRODUCT__]);

    useEffect(() => {
        if (productHasNoVariation) {
            setSelectedItems([
                {
                    product_item: items[0].id,
                    qty: noVariationNumberToAdd,
                },
            ]);
        }
    }, [productHasNoVariation]);

    if (!window.__CURRENT_PRODUCT__) {
        return <div>Inavlid product id</div>;
    }
    return (
        <section className="pd-core flx justify-between">
            <div className="pd-gallery">
                <div className="img-sel-cont flx-col items-center justify-center">
                    <div className="img-sel flx-col">
                        {images.map((item, i) => (
                            <button
                                className={`img-sel-item brdls ${
                                    selectedImage == i && "active"
                                }`}
                                style={{
                                    backgroundImage: `url('${item}')`,
                                }}
                                key={i}
                                onClick={() => {
                                    setSelectedImage(i);
                                }}
                            ></button>
                        ))}
                    </div>
                </div>
                <div className="m-img-cont flx items-center justify-center">
                    <div
                        className="m-img"
                        style={{
                            backgroundImage: `url('${images[selectedImage]}')`,
                        }}
                    ></div>
                </div>
            </div>
            <div className="pd-deets">
                <div className="first flx-col">
                    <div className="prm-tags flx items-center">
                        <span className="tag">Top pick</span>
                        <span className="tag">Limited slots</span>
                    </div>
                    <p className="name fnt-integral">{product?.name}</p>
                    <div className="amt-cont flx items-center">
                        <p className="m-price">
                            <span className="cur">NGN</span>
                            {product?.price}
                        </p>
                    </div>
                    <p className="desc">{product?.description}</p>
                </div>
                <span className="line"></span>
                {productHasNoVariation ? (
                    <div className="pd-end flx-col">
                        <div className="cta s flx items-center justify-center">
                            <div className="single-counter flx items-center justify-between">
                                <button
                                    className="brdls flx items-center justify-center"
                                    disabled={noVariationNumberToAdd <= 0}
                                    onClick={() => {
                                        if (noVariationNumberToAdd > 0)
                                            setNoVariationNumberToAdd(noVariationNumberToAdd - 1);
                                    }}
                                >
                                    <i className="fa fa-minus fa-sm"></i>
                                </button>
                                <span className="num">{noVariationNumberToAdd}</span>
                                <button
                                    className="brdls flx items-center justify-center"
                                    disabled={noVariationNumberToAdd >= items[0].qty}
                                    onClick={() => {
                                        if (noVariationNumberToAdd <= items[0].qty)
                                            setNoVariationNumberToAdd(noVariationNumberToAdd + 1);
                                    }}
                                >
                                    <i className="fa fa-plus fa-sm"></i>
                                </button>
                            </div>
                            <button
                                className="atc brdls"
                                onClick={addItemsToCart}
                            >
                                Add To Cart
                            </button>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="p-items flx-col">
                            <p className="head fnt-integral">
                                Select Variation
                            </p>
                            <div className="body">
                                {items &&
                                    items.map((item, index) => (
                                        <VarItemSelector
                                            item={item}
                                            key={index}
                                            setSelectedItems={setSelectedItems}
                                            selectedItems={selectedItems}
                                        />
                                    ))}
                            </div>
                        </div>
                        <span className="line"></span>
                        <div className="pd-end flx-col">
                            <div className="selected-items flx items-center">
                                {selectedItems.map((item) => (
                                    <div
                                        className="se-item items-center justify-between"
                                        key={item.product_item}
                                    >
                                        <div className="vv">
                                            {item.varOpts.map((n, i) => (
                                                <p key={i}>{n}</p>
                                            ))}
                                        </div>
                                        <div className="qt-c flx items-center justify-center">
                                            <p className="qty">{item.qty}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="cta flx items-center justify-center">
                                <button
                                    className="atc brdls"
                                    onClick={addItemsToCart}
                                >
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    </>
                )}
                <div className="legal">
                    <div className="delivery">
                        <p className="head flx">
                            <FaShippingFast />
                            <p>Flexible Delivery Nationwide</p>
                            <i className="fa fa-angle-right-fa-lg"></i>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetail;
