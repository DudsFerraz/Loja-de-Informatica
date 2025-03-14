import React from "react";
import "./InputField.css";

const NumberField = (props) =>{

    const onTyped = (e) =>{
        props.onAlteration(e.target.value);
    }

    return( 
        <div className="input-field">
            <label>{props.label}</label>
            <input required type="number" step="0.01" min="0" placeholder={props.placeholder} onChange={onTyped} />
        </div>
    )
}

export default NumberField;