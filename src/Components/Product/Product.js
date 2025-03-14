import React from "react";
import "./Product.css";

const Product = (props) =>{
    return(
        <div className="product">
            <div>
                <img alt="logo da marca" src={props.image}></img>
            </div>
            <div className="product-info">
                <h4>{props.nome}</h4>
                <h4>R$: {props.preco}</h4>
                <h5>{props.estado}</h5>
            </div>
        </div>
    )
}

export default Product;