import React from "react";
import "./checkout.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "./../../components/checkout-item/checkout-item";
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';

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
      <StripeCheckoutButton price={cartTotal}/>
      <div class="test-creds">
        <h2>*Please use the following credit card for payments*</h2>
        <h2>4242 4242 4242 4242 --- Exp: 01/2025 --- CVV: 123</h2>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps, null)(CheckoutPage);
