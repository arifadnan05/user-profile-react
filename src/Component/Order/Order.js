import React from 'react';
import './Order.css'

const Order = (props) => {
    const cart = props.cart
    const total = cart.reduce((total, prd) => prd.sallary, 0)
    const name = cart.reduce((total, prd) => prd.name, 0)
    const img = cart.reduce((total, prd) => prd.img, 0)
    
    return (
        <div className = 'order-section'>
            <h5>User Name: {name}</h5>
            <p>Monthly Sallary: ${total}</p>
            <p>Annual Sallary: ${total * 12}</p>
            <img src= {img} alt="" />
        </div>
    );
};

export default Order;