import React from "react";
import "./ResetButton.scss"

const refreshPage = () => {
    window.location.reload();
}

const ResetButton = () => {
    return (
        <button className="reset-button" onClick={() => refreshPage()}>
            RESET
        </button>
    );
}

export default ResetButton;