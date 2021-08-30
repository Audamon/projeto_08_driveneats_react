export default function CheckOrder(){

    function closeOrder(){

    }
    function cancelOrder(){

    }
    return(
        <div className="check-order invisible" >

            <div className="confirmation font-roboto font-size-22">
                <strong>Confirme seu pedido</strong> 
            </div>

            <div className="chosen-dish font-roboto font-size-22">
                
            </div>

            <div className="chosen-beverage font-roboto font-size-22">
                
            </div>

            <div className="chosen-dessert font-roboto font-size-22">
                
            </div>

            <div className="total-price font-roboto font-size-22">
                <strong>TOTAL  </strong>
            </div>

            <div className="close-order-button font-roboto font-size-22" onClick={closeOrder}>
                Tudo certo, pode pedir!
            </div>

            <div className="cancel-button font-roboto font-size-22" onClick={cancelOrder}>
                Cancelar
            </div>

        </div>
    );
}