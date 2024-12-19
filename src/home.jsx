import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import NavCategoryFlow from "./viewChunks/NavCategoryFlow";
import FlashSaleListing from "./viewChunks/FlashSale";
import TopStores from "./viewChunks/TopStores";
import Season from "./viewChunks/Season";
import NewArrivals from "./viewChunks/NewArrivals";

const renderChunks = () => {
    const NavCategoryFlowContianer = document.getElementById("cat199an6rr2e");
    const FlashSalesContainer = document.getElementById("19233hAzQw4x");
    const TopStoresConTainer = document.getElementById("41XQnmpy47");
    const SeasonContainer = document.getElementById("emttrye14559");
    const NewArrivalsContainer = document.getElementById("46889dretr");

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

renderChunks();
