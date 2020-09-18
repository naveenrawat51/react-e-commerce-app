import React from 'react';

import './cart.scss';
import CustomButton from '../custom-button/Custom-button';

const Cart = () => (
    <div className="cart-dropdown">
        <div className="cart-items"></div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

export default Cart;