import React from 'react';

export default function Item(props) {

    const styles = {
       display: 'flex',
       flexDirection: 'column',
    }

    return (
          <div>
              <h3>Titulo: {props.title} Product id: {props.id}</h3>
              <p>Precio: {props.price}</p>
              <img href = {props.image} alt = 'Mountain Bike'/> 
          </div>
  );
};

