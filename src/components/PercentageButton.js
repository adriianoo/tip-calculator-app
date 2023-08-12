import React from "react";
import "./PercentageButton.css"

const PercentageButton = (props) => {
    return (
        <button className="button">
            {props.label}
        </button>
    );
}

export default PercentageButton;