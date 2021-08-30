import React,{useState} from "react";
import Bottombar from "./Scripts/Bottombar";
import CheckOrder from "./Scripts/CheckOrder";
import Content from "./Scripts/Content";
import Top from "./Scripts/Top";

export default function App(){

    const [dishes, setDishes] = useState({estado: false, item: [{prato: "", qtd: 0 }, {prato: "", qtd: 0}]})
    // itens = [{estado: true, item: [{prato: nome, qtd: 1 }, {prato: nome, qtd: 1}]}, 
    //          {estado: true, item: [{bebida: nome, qtd: 1 }, {bebida: nome, qtd: 1}]},
    //          {estado: true, item: [{sobremesa: nome, qtd: 1 }, {sobremesa: nome, qtd: 1}]}]
    console.log(dishes)
    return(
        <>  
            <Top />
            <Content dishes={dishes} setDishes={setDishes}/>
            <Bottombar />
            <CheckOrder />
        </> 
    );
    
}