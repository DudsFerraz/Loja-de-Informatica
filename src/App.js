import React, {useState} from "react";
import Form from "./Components/Form/Form";
import Section from "./Components/Section/Section";

function App() {
  
const [products,setProducts] = useState([]);
const secoes = ["Computadores","Acessórios","Impressoras","Games","Gadgets"];

const addProduct = (product) =>{
  const productsList = products.slice();
  productsList.push(product)
  setProducts(productsList);
}

  return (
    <div className="container">

      <Form newProduct={product => addProduct(product)} secoes={secoes} />
      {secoes.map( (section,index) => (
        <Section list={products} nome={section} key={index} />
      ))}

    </div>
  );
}

export default App;
 
