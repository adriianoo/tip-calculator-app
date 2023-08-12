import React from "react";
import "./PercentageButton.scss"

const PercentageButton = (props) => {
    return (
        <button className="button">
            {props.label}
        </button>
    );
}

export default PercentageButton;