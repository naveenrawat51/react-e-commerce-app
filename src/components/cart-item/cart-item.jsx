import React from "react";
import "./cart-item.scss";

const CartItem = ({ item: { imageUrlWeb, price, name, quantity } }) => {
  return (
    <div className="cart-item">
      <img src={imageUrlWeb} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
