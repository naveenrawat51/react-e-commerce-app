import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getSelectedShopData } from "./../../redux/shop-data/shop.selectors";
import CollectionOverview from "./../../components/collections-overview/collections-overview";
import { Route } from "react-router-dom";
import ShopCategory from "../shop-category/shop-category";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:category`} component={ShopCategory} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collection: getSelectedShopData,
});
export default connect(mapStateToProps)(ShopPage);
