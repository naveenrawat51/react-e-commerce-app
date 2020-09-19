import React from "react";
import "./checkout.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "./../../components/checkout-item/checkout-item";

const CheckoutPage = ({ cartItems, cartTotal }) => {
  let allItems = <span>No item in shopping Cart!!</span>;

  if (cartItems.length > 0) {
    allItems = cartItems.map((item) => (
      <CheckoutItem key={item.id} item={item} />
    ));
  }
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {allItems}
      {cartTotal ? <div className="total">TOTAL: ${cartTotal}</div> : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps, null)(CheckoutPage);
