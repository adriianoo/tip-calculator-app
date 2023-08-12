import React from "react";
import "./PercentageButton.scss";

const calculate = (percentage) => {
    let bill_Input_Element = document.getElementById('bill-input');
    let people_Input_Element = document.getElementById('people-input');
    let inputValue = bill_Input_Element.value;
    let inputValue2 = people_Input_Element.value;
    let resultElement = document.getElementById('result');
    let resultElement2 = document.getElementById('total-result');

    if(inputValue2 == 0) {
        people_Input_Element.style.border = "1px solid red";
        people_Input_Element.style.backgroundColor = "hsl(0, 41%, 84%)";
    } else {
        people_Input_Element.style.border = "none";

        let result = (inputValue * (percentage / 100) / inputValue2);
        resultElement.textContent = "$" + result;

        let result2 = ((inputValue / inputValue2) + result);
        resultElement2.textContent = "$" + result2;
    }
}

const PercentageButton = ({ label, percentage}) => {
    return (
        <button className="percentage-button" onClick={() => calculate(percentage)}>
            {label}
        </button>
    );
}

export default PercentageButton;