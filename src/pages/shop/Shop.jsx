import React, { Component } from "react";
import SHOP_DATA from "./shopping-data";
import CollectionPreview from "../../components/collection-preview/Collection-preview";

class ShopPage extends Component {
  constructor() {
    super();

    this.state = {
      collection: SHOP_DATA,
    };
  }

  render() {
    const collectionPreviewData = this.state.collection.map((collection) => (
      <CollectionPreview key={collection.id} {...collection} />
    ));

    return <div className="shop-page">{collectionPreviewData}</div>;
  }
}

export default ShopPage;
