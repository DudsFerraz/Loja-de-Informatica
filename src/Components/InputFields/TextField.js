import React from "react";
import "./InputField.css";

const TextField = (props) =>{

    const onTyped = (e) =>{
        props.onAlteration(e.target.value);
    }

    return(
        <div className="input-field">
            <label>{props.label}</label>
            <input required placeholder={props.placeholder} onChange={onTyped} />
        </div>
    )
}

export default TextField;