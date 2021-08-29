import CategoryTitle from "./CategoryTitle"
import Item from "./Item"

export default function Category(props){
    const {itens} = props
    return(
        <div className="category">
            {itens.map(item => <CategoryTitle dishTitle={item.title}/>)}
            
            <div className="category-item">
                 {itens.map(item => item.item.map(item => <Item img={item.img}
                                          name={item.name}
                                          descrition={item.descrition}
                                          price={item.price}/>))}  
            </div>
        </div>

    );
}