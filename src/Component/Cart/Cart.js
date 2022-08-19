import React from 'react';
import './Cart.css'
const Cart = (props) => {
    console.log(props)
    const {name, phone, email, sallary, img} = props.product
    return (
            <div className='user-section'>
                    <img src={img} alt="" />
                    <h1>{name}</h1>
                    <p>Phone: {phone}</p>
                    <p>Email: {email}</p>
                    <p>Sallary: ${sallary}</p>
                    <button 
                        onClick={() => props.handleAddProduct(props.product)}
                    className = 'btn'>Click now</button>
                </div>

    );
};

export default Cart;