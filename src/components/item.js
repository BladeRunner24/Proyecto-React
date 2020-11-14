import React from 'react';
import { Link } from 'react-router-dom';

export default function Item(props) {

    const styles = {
       display: 'flex',
       flexDirection: 'column',
       zIndex: '3',
    }

    return (
          <div>
              <h3>Titulo: {props.title} - Product id: {props.id}</h3>
              <p>Precio: {props.price}</p>
              <Link to = {`/item/${props.id}`}><img href = {props.image} alt = 'Mountain Bike'/></Link> 
          </div>
  );
};

