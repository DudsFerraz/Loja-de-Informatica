import React from "react";
import "./Section.css";
import Product from "../Product/Product"

const Section = (props) =>{

    const list = props.list.filter(product => product.secao === props.nome) || [];

    return(
        list.length>0 ? 
        <div className="section">
            <h3>{props.nome}</h3>
            {list.map( (product,index) => ( 
                <div key={index} >
                    <Product image={product.logo} nome={product.nome} preco={product.preco} estado={product.estado} />
                </div>
            ))}
        </div>

        : ""
    )
}

export default Section; 