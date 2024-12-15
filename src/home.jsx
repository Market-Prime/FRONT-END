import React from "react";
import ReactDOM from "react-dom";
import "./shared/css/index.css";
import NavCategoryFlow from "./viewChunks/NavCategoryFlow";

const renderChunks = () => {
    const NavCategoryFlowContianer = document.getElementById("cat199an6rr2e");

    if (NavCategoryFlow) {
        ReactDOM.render(<NavCategoryFlow />, NavCategoryFlowContianer);
    }
};

renderChunks();