// import React,{useState} from "react";
import CategoryTitle from "./CategoryTitle"
import Item from "./Item"

export default function Category(props){
    const {itens, dishes, setDishes} = props
    
    return(
        <div className="category">
            {itens.map((item, index) => <CategoryTitle key={index} dishTitle={item.title}/>)}
            
            <div className="category-item">
                 {itens.map(item => item.item.map((item, index) => <Item img={item.img}
                                                                         name={item.name}
                                                                         descrition={item.descrition}
                                                                         price={item.price}
                                                                         
                                                                         key={index}
                                                                         />))}  
            </div>
        </div>

    );
}