import React, {Components, useState, useEffect} from 'react';

export default function ItemCount(props) {

    const styleitemc = {
        width: '6vw',
        height: '8vh',
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
    }
    const botones = {
        width: '20%'
    }
    const boton = {
        height: '2vh',
    }
    const totalInv = 10;

    const [number, setNumber] = useState([0]);

    useEffect(() => {
        if (number > totalInv) {

        }else if ( number < 2) {

        }else {}

    }, [number]
    );
    
    return (      

        <div style = {styleitemc}>
            <h3 style = {styletitle}>{props.title}</h3>
            <div style = {counter}>
              <button style = {botones} onClick ={() => setNumber + 1}>+</button>
              <button style = {botones}>({number})</button>
              <button style = {botones} onClick ={() => setNumber - 1} >-</button>
            </div>
            <button style = {boton}>{props.accion}</button>
        </div>              
    );
};