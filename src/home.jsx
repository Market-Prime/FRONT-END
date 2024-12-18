import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import NavCategoryFlow from "./viewChunks/NavCategoryFlow";
import FlashSaleListing from "./viewChunks/FlashSale";
import TopStores from "./viewChunks/TopStores";

const renderChunks = () => {
    const NavCategoryFlowContianer = document.getElementById("cat199an6rr2e");
    const FlashSalesContainer = document.getElementById("19233hAzQw4x");
    const TopStoresConTainer = document.getElementById("41XQnmpy47");

    if (NavCategoryFlowContianer) {
        ReactDOM.render(<NavCategoryFlow />, NavCategoryFlowContianer);
    }
    if (FlashSalesContainer) {
        ReactDOM.render(<FlashSaleListing />, FlashSalesContainer);
    }
    if (TopStoresConTainer) {
        ReactDOM.render(<TopStores />, TopStoresConTainer);
    }
};

renderChunks();
