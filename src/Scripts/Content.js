import Category from "./Category";
export default function Content(props){
    const{dishes, setDishes} = props;
    
    const itens = [[{title:'Primeiro, seu prato',item:[{img: "Assets/pizza-peperoni.jpg",
                                                        name:'Pizza',
                                                        descrition: 'Queijo, pepperoni, massa',
                                                        price: 'R$14.90'},
                                                        {img: "Assets/menarosto.jpg",
                                                        name:'Menarosto',
                                                        descrition: 'Frango, porco, cabra',
                                                        price: 'R$20.90'},
                                                        {img: "Assets/quati.jpg",
                                                        name:'Quati',
                                                        descrition: 'Quati',
                                                        price: 'R$18.90'},
                                                        {img: "Assets/tortei.jpg",
                                                        name:'Tortéi',
                                                        descrition: 'Queijo, moranga, massa',
                                                        price: 'R$25.90'}]}],
                    [{title:'Agora, sua bebida' ,item:[{img: "Assets/coca.jpg",
                                                        name:'Coca-cola',
                                                        descrition: 'Lata: 350ml',
                                                        price: 'R$3.50'},
                                                        {img: "Assets/guarana.jpg",
                                                        name:'Guaraná',
                                                        descrition: 'Lata: 350ml',
                                                        price: 'R$3.00'},
                                                        {img: "Assets/fruki.jpg",
                                                        name:'Fruki',
                                                        descrition: 'Garrafa: 600ml',
                                                        price: 'R$4.20'},
                                                        {img: "Assets/agua.jpg",
                                                        name:'Agua',
                                                        descrition: 'Agua mineral',
                                                        price: 'R$2.50'}]}],
                    [{title: 'Por fim, sua sobremesa',item:[{img: "Assets/grostoli.jpg",
                                                        name:'Grostoli',
                                                        descrition: 'Massa, açucar',
                                                        price: 'R$10.00'},
                                                        {img: "Assets/ambrosia.jpg",
                                                        name:'Ambrosia',
                                                        descrition: 'Leite, açucar',
                                                        price: 'R$7.90'},
                                                        {img: "Assets/sagu.jpg",
                                                        name:'Sagu',
                                                        descrition: 'Sagu, suco de uva',
                                                        price: 'R$8.90'},
                                                        {img: "Assets/pudim.jpg",
                                                        name:'Pudim',
                                                        descrition: 'Leite, chuchu, açucar',
                                                        price: 'R$6.90'}]}]]
    return(
        <div className="content">
             { itens.map((item, index) =>  <Category key={index} itens={item} 
                                                     dishes={dishes} setDishes={setDishes} />)} 
        </div>
    );
}

