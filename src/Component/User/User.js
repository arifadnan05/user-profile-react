import React from 'react';
import './User.css'
import Data from '../../Data/Data.json'
import Cart from '../Cart/Cart'
import { useState } from 'react';
import Order from '../Order/Order';

const User = () => {
    const [cart, setCart] = useState ([])
    const handleAddProduct = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }
    
    return (
        <div className='mainSection'>
                <div className='userSection'>
                        {
                            Data.map((item) => <Cart product = {item} handleAddProduct = {handleAddProduct}
                            />)
                        }
                </div>
            <div className="cartSection">
                {
                    <Order cart ={cart} />
                    
                }

            </div>
        </div>

    
    );
};

export default User;