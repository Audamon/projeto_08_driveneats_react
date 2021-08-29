export default function Item(props){
    const {img,name,descrition,price}= props
    
    return(
        <div className="item font-roboto" onclick="selectedDish(this);"  >

           <img src={img}  class="dish-img"/> 

            <div class="dish-title font-size-16">
               <strong>{name}</strong> 
            </div>

            <div class="dish-sub-title font-size-15">
                {descrition}
            </div>

            <div class="dish-price font-size-16">
                {price}
            </div>
        </div>

    );
}