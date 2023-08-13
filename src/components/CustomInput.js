import React from "react";
import "./CustomInput.scss";

const customCalculate = () => {
    let bill_Input_Element = document.getElementById('bill-input');
    let people_Input_Element = document.getElementById('people-input');
    let inputPercentage = document.getElementById("custom-input");
    
    let inputValue = bill_Input_Element.value;
    let inputValue2 = people_Input_Element.value;
    let inputValue3 = inputPercentage.value;

    let resultElement = document.getElementById('result');
    let resultElement2 = document.getElementById('total-result');

    // if-statements for validation
    if (inputValue2 == 0 && inputValue == 0) {
        people_Input_Element.style.border = "1px solid red";
        people_Input_Element.style.backgroundColor = "hsl(0, 41%, 84%)";
        bill_Input_Element.style.border = "1px solid red";
        bill_Input_Element.style.backgroundColor = "hsl(0, 41%, 84%)";
    } else if (inputValue2 == 0) {
        people_Input_Element.style.border = "1px solid red";
        people_Input_Element.style.backgroundColor = "hsl(0, 41%, 84%)";
    } else if (inputValue == 0) {
        bill_Input_Element.style.border = "1px solid red";
        bill_Input_Element.style.backgroundColor = "hsl(0, 41%, 84%)";
    } else {
        people_Input_Element.style.border = "none";
        people_Input_Element.style.backgroundColor = "hsl(185, 41%, 84%)";

        let result = (inputValue * (inputValue3 / 100) / inputValue2);
        let roundedValue = result.toFixed(2);
        resultElement.textContent = "$" + roundedValue;

        let result2 = ((inputValue / inputValue2) + result);
        let roundedValue2 = result2.toFixed(2);
        resultElement2.textContent = "$" + roundedValue2;
    }
}

const CustomButton = () => {
    return(
        <input type="text" id="custom-input" placeholder="Custom" onInput={() => customCalculate()}></input>
    )
}   

export default CustomButton;