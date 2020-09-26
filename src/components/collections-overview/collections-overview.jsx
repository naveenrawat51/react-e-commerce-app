import React from "react";
import "./collections-overview.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getSelectedShopData } from "./../../redux/shop-data/shop.selectors";

import CollectionPreview from "./../collection-preview/Collection-preview";

const CollectionOverview = ({ collection }) => {
  const collectionPreviewData =
    collection &&
    collection.length > 0 &&
    collection.map((collection) => (
      <CollectionPreview key={collection.id} {...collection} />
    ));

  return <div className="collections-overview">{collectionPreviewData}</div>;
};

const mapStateToProps = createStructuredSelector({
  collection: getSelectedShopData,
});

export default connect(mapStateToProps)(CollectionOverview);
