import React from "react";
import "./SubmitButton.css"

const SubmitButton = (props) =>{
    return(
        <button className="submit-button">{props.text}</button>
    )
}

export default SubmitButton;