import React from "react";
import "./checkout-item.scss";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  removeItem,
  addItemToCart,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ item, clearItem, removeItem, addItemToCart }) => {
  const { name, imageUrlWeb, quantity, price } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrlWeb} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemToCart(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button " onClick={() => clearItem(item)}>
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
