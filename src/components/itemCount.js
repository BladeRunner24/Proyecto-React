import React, {useState} from 'react';

export default function ItemCount(props, max, min, amount) {    

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
    
    const [number, setNumber] = useState([2]);
    

    function onAdd (){
        if (number < max){
        setNumber(number + amount)
        }           
    };
    function onRemove (){
        if (number > min) {
        setNumber(number - amount) 
        }       
    };

    
    return (      

        <div style = {styleitemc}>
            <h3 style = {styletitle}>{props.title}</h3>
            <div style = {counter}>
              <button style = {botones} onClick ={onAdd}>+</button>
              <button style = {botones}>({number})</button>
              <button style = {botones} onClick ={onRemove} >-</button>
            </div>
            <button style = {boton}>{props.accion}</button>
        </div>              
    );
};
