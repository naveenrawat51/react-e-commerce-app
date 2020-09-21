import React from "react";
//import CollectionPreview from "../../components/collection-preview/Collection-preview";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getSelectedShopData } from "./../../redux/shop-data/shop.selectors";
import CollectionOverview from "./../../components/collections-overview/collections-overview";

const ShopPage = () => {
  return (
    <div className="shop-page">
      <CollectionOverview />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collection: getSelectedShopData,
});
export default connect(mapStateToProps)(ShopPage);
