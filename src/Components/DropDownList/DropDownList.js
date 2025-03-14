import React from "react";
import "./DropDownList.css";

const DropDownList = (props) =>{

    const onChose = (e) =>{
        props.onAlteration(e.target.value); 
    }

    return(
        <div className="dropdown-container">
            <select value={props.value} onChange={onChose} >
                {props.options.map(item => <option key={item}> {item} </option>)}
            </select>
        </div>
    )
}

export default DropDownList;