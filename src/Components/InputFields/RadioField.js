import React from "react";
import "./InputField.css";

const RadioField = (props) =>{

    const onChose = (e) =>{
        props.onAlteration(e.target.value);
    }

    return(
        <div className="input-field">
            <input required type="radio" value={props.label} name={props.name} id={props.label} onChange={onChose}/>
            <label htmlFor={props.label}>{props.label}</label>
        </div>
    )
}

export default RadioField;