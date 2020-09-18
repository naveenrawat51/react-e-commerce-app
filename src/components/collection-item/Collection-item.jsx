import React from "react";
import "./Collection-item.scss";
import { connect } from "react-redux";
import { addItemToCart } from "../../redux/cart/cart.actions";
import CustomButton from "../custom-button/Custom-button";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrlWeb } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrlWeb})` }}
      />
      <div className="collection-footer">
        <span className="namd">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItemToCart(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
