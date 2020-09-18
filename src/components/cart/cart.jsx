import React from "react";
import { connect } from "react-redux";
import "./cart.scss";
import CustomButton from "../custom-button/Custom-button";
import CartItem from "../cart-item/cart-item";
import { selectCartItems } from '../../redux/cart/cart.selectors';

const Cart = ({ cartItems }) => {
  console.log('hello');
  let allItems = null;
  if (cartItems.length > 0) {
    allItems = cartItems.map(item => <CartItem key={item.id} item={item} />);
  }

  return (
    <div className="cart-dropdown">
      <div className="cart-items">{allItems}</div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
});

export default connect(
  mapStateToProps,
  null
)(Cart);
