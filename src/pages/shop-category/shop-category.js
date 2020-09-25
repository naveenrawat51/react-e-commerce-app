import React from "react";
import "./shop-category.scss";
import CollectionItem from "../../components/collection-item/Collection-item";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop-data/shop.selectors";

const ShopCategory = (props) => {
  let CategoryData = <h2>ABC</h2>;
  if (props.collection) {
    const { collection } = props;
    const { title, items } = collection;
    const collectionPreviewData = items.map((item) => (
      <CollectionItem item={item} key={item.id} {...item} />
    ));

    CategoryData = (
      <div className="shop-category">
        <h2 className="title">SHOP {title}</h2>
        <div className="items">{collectionPreviewData}</div>
      </div>
    );
  }

  return CategoryData;
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.category)(state),
});

export default connect(mapStateToProps)(ShopCategory);
