import React, {useState} from "react";
import "./Form.css";
import DropDownList from "../DropDownList/DropDownList";
import TextField from "../InputFields/TextField";
import NumberField from "../InputFields/NumberField";
import RadioField from "../InputFields/RadioField";
import SubmitButton from "../SubmitButton/SubmitButton";

import hpImage from "../../Assets/hp.png";
import dellImage from "../../Assets/dell.png";
import positivoImage from "../../Assets/positivo.jpg";
import asusImage from "../../Assets/asus.png";
import samsungImage from "../../Assets/samsung.jpg";


const Form = (props) =>{

    const marcas = ["HP","Dell","Positivo","Asus","Samsung"];
    const logos = [hpImage,dellImage,positivoImage,asusImage,samsungImage];
    const secoes = props.secoes;

    const [secao,setSecao] = useState(secoes[0]);
    const [marca,setMarca] = useState(marcas[0]);
    const [nome,setNome] = useState("");
    const [preco,setPreco] = useState("");
    const [estado,setEstado] = useState("");

    const collectForm = (e) =>{
        let logoIndex;
        for(let i=0;i<marcas.length;i++){
            if(marca === marcas[i]){
                logoIndex = i;
            }
        }
        e.preventDefault();
        props.newProduct(
            {
                "secao" : secao,
                "marca" : marca,
                "nome" : nome,
                "preco" : preco,
                "estado" : estado,
                "logo" : logos[logoIndex]
            }
        )
    }

    return(
        <form onSubmit={collectForm} className="form-container">
            <DropDownList options={secoes} onAlteration={value => setSecao(value)} />
            <DropDownList options={marcas} onAlteration={value => setMarca(value)} />
            <TextField label="Nome:" placeholder="Digite o nome do produto" onAlteration={value => setNome(value)} />
            <NumberField label="Preço:" placeholder="Digite o preço do produto" onAlteration={value => setPreco(value)} />
            <div className="radio-group" >
                <RadioField name="estado" label="Novo" onAlteration={value => setEstado(value)} />
                <RadioField name="estado" label="Usado" onAlteration={value => setEstado(value)} />
            </div>
            <SubmitButton text="Inserir Produto"/>
        </form>
    )
}

export default Form;