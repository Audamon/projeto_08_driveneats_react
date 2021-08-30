import React,{useState} from "react";
import Counter from "./Counter";

export default function Item(props){
    const {img,name,descrition,price, dishes, setDishes}= props
    const [selected, setSelected] = useState(true);
    const [classNameItem, setClassNameItem] = useState("item font-roboto")
    const [classCounter, setClassCounter] = useState('counter invisible')
    const [counter, setCounter] = useState(1);
     function selection(){
        
         if(selected === false){
             const var1= true
             setSelected(var1)
             setClassCounter('counter invisible')
             setCounter(1)
         }else{
             const var2=false
             setSelected(var2);
             setClassCounter('counter')
         }
         console.log(selected);
        const selectedItem = (selected === true)? "item font-roboto selected-item":"item font-roboto" ;
        
       setClassNameItem(selectedItem);
         
     }
    return(
        <div className={classNameItem} onClick={()=>selection()}  >

           <img src={img}  className="dish-img" alt=""/> 

            <div className="dish-title font-size-16">
               <strong>{name}</strong> 
            </div>

            <div className="dish-sub-title font-size-15">
                {descrition}
            </div>

            <div className="dish-price font-size-16">
                {price} 
                <Counter  selected={selected} setClassNameItem={setClassNameItem}
                            classCounter={classCounter} setClassCounter={setClassCounter} 
                            counter={counter} setCounter={setCounter}/>  
            </div>
        </div>

    );
}

