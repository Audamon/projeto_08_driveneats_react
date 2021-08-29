export default function CheckOrder(){
    return(
        <div class="check-order invisible" >

            <div class="confirmation font-roboto font-size-22">
                <strong>Confirme seu pedido</strong> 
            </div>

            <div class="chosen-dish font-roboto font-size-22">
                
            </div>

            <div class="chosen-beverage font-roboto font-size-22">
                
            </div>

            <div class="chosen-dessert font-roboto font-size-22">
                
            </div>

            <div class="total-price font-roboto font-size-22">
                <strong>TOTAL  </strong>
            </div>

            <div class="close-order-button font-roboto font-size-22" onclick="closeOrder();">
                Tudo certo, pode pedir!
            </div>

            <div class="cancel-button font-roboto font-size-22" onclick="cancelOrder();">
                Cancelar
            </div>

        </div>
    );
}