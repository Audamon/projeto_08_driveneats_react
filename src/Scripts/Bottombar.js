export default function Bottombar(){

    function confirmOrder(){
        
    }

    return(
        <div className="bottom-bar">

            <div className="rectangle-button font-roboto font-size-20" onClick={confirmOrder} >

                <div className="button-text ">  
                    Selecione os 3 itens para fechar o pedido 
                </div>

            </div>

        </div>
    );
}