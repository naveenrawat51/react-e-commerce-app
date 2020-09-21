import React from "react";
import "./shop-category.scss";
import CollectionItem from "../../components/collection-item/Collection-item";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop-data/shop.selectors";

const ShopCategory = ({ collection }) => {
  const { title, items } = collection;
  const collectionPreviewData = items.map((item) => (
    <CollectionItem item={item} key={item.id} {...item} />
  ));

  return (
    <div className="shop-category">
      <h2 className="title">SHOP {title}</h2>
      <div className="items">{collectionPreviewData}</div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.category)(state),
});
export default connect(mapStateToProps)(ShopCategory);
