import React, {useState} from 'react';

export default function ItemCount(props) {    

    const styleitemc = {
        position: 'relative',
        width: '6vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    } 
    const styletitle = {
        height: '2vh',
        fontSise: '12px',
        textAlign: 'center',
    }
    const counter = {
        height: '2vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between', 
        bottom : '10',       
    }
    const botones = {
        width: '20%'
    }
    const boton = {
        height: '2vh',
    }
    
    const [number, setNumber] = useState(2);
        

    function onAdd (){
        if (number < props.max){
        setNumber(number + props.amount)
        }           
    };
    function onRemove (){
        if (number > props.min) {
        setNumber(number - props.amount) 
        }       
    }
           
       
    return (      

        <div style = {styleitemc}>
            <h3 style = {styletitle}>{props.title}</h3>
            <div style = {counter}>
              <button style = {botones} onClick ={onRemove}>-</button>
              <button style = {botones}>({number})</button>
              <button style = {botones} onClick ={onAdd} >+</button>
            </div>
            <button style = {boton} onClick = {() => props.apagado(number)}>{props.accion}</button>
        </div>              
    );
};
