import React from "react";
import { connect } from "react-redux";
import "./cart.scss";
import CustomButton from "../custom-button/Custom-button";
import CartItem from "../cart-item/cart-item";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const Cart = ({ cartItems, history, dispatch }) => {
  let allItems = <span className="empty-message">Your cart is empty</span>;
  if (cartItems.length > 0) {
    allItems = cartItems.map((item) => <CartItem key={item.id} item={item} />);
  }

  return (
    <div className="cart-dropdown">
      <div className="cart-items">{allItems}</div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps, null)(Cart));
