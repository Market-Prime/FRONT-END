import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import NavCategoryFlow from "./viewChunks/NavCategoryFlow";
import FlashSaleListing from "./viewChunks/FlashSale";
import TopStores from "./viewChunks/TopStores";
import Season from "./viewChunks/Season";
import NewArrivals from "./viewChunks/NewArrivals";
import axios from "axios";
import { serverUrl } from "./api/config";
import HeaderUserIconDropDown from "./viewChunks/HeaderUserDropDown";

const renderChunks = () => {
    const NavCategoryFlowContianer = document.getElementById("cat199an6rr2e");
    const FlashSalesContainer = document.getElementById("19233hAzQw4x");
    const TopStoresConTainer = document.getElementById("41XQnmpy47");
    const SeasonContainer = document.getElementById("emttrye14559");
    const NewArrivalsContainer = document.getElementById("46889dretr");
    const UserHeaderDropDownContainer = document.getElementById("nsri2xe");

    if (UserHeaderDropDownContainer) {
        ReactDOM.render(
            <HeaderUserIconDropDown />,
            UserHeaderDropDownContainer
        );
    }
    if (NavCategoryFlowContianer) {
        ReactDOM.render(<NavCategoryFlow />, NavCategoryFlowContianer);
    }
    if (FlashSalesContainer) {
        ReactDOM.render(<FlashSaleListing />, FlashSalesContainer);
    }
    if (TopStoresConTainer) {
        ReactDOM.render(<TopStores />, TopStoresConTainer);
    }
    if (SeasonContainer) {
        ReactDOM.render(<Season />, SeasonContainer);
    }
    if (NewArrivalsContainer) {
        ReactDOM.render(<NewArrivals />, NewArrivalsContainer);
    }
};

const getAuthState = async () => {
    const token = window.localStorage.getItem("refreshToken") || "token";
    axios
        .post(
            `${serverUrl}/account/login/refresh/`,
            {
                refresh: token,
            },
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        )
        .then((response) => {
            const accessToken = response.data.access;
            window.localStorage.setItem("accessToken", accessToken);
            window.__mp_user_xhrse_isTrue = true;
        })
        .catch((err) => {
            console.log(err);
            window.__mp_user_xhrse_isTrue = false;
        })
        .finally(() => {
            const _evnt = new CustomEvent("u_ath_st");
            document.dispatchEvent(_evnt);
        });
};

getAuthState();
renderChunks();
