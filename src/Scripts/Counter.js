import React,{useState} from "react";

export default function Counter(props){
    const [counter, setCounter] = useState(1);
    //const [classCounter, setClassCounter] = useState('counter invisible')
    // let classNameCounter= (props.selected === true)? 'counter invisible': 'counter ';
    
    function plusCounter(e){
       e.stopPropagation(); 
       setCounter(counter+1)
    }
    function minusCounter(e){
        e.stopPropagation();
        if(counter === 1 ){
            props.setClassNameItem("item font-roboto")
            props.setClassCounter('counter invisible')    
        }
       setCounter(counter-1)
    }
    console.log('contador: ',counter)
    return(
        <div className={props.classCounter}>
            <button className="minus" onClick={(e)=> minusCounter(e)}>-</button>
            <div className='cell'>{counter}</div> 
            <button className='plus' onClick={(e)=> plusCounter(e)}>+</button>
        </div>
    );
}