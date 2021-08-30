import React,{useState} from "react";
import Bottombar from "./Scripts/Bottombar";
import CheckOrder from "./Scripts/CheckOrder";
import Content from "./Scripts/Content";
import Top from "./Scripts/Top";

export default function App(){

    const [dishes, setDishes] = useState({estado: false, item: [{prato: "", qtd: 0, type: "" }]})
    
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