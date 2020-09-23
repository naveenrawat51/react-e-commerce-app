import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getSelectedShopData } from "./../../redux/shop-data/shop.selectors";
import CollectionOverview from "./../../components/collections-overview/collections-overview";
import { Route } from "react-router-dom";
import ShopCategory from "../shop-category/shop-category";
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop-data/shop.actions";

class ShopPage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collection");

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }

  render() {
    const { match, collection } = this.props;
    let shopData = <h3 style={{ textAlign: "center" }}>Loading...</h3>;

    if (collection) {
      shopData = (
        <div className="shop-page">
          <Route exact path={`${match.path}`} component={CollectionOverview} />
          <Route path={`${match.path}/:category`} component={ShopCategory} />
        </div>
      );
    }
    return <div className="shop-page">{shopData}</div>;
  }
}

const mapStateToProps = createStructuredSelector({
  collection: getSelectedShopData,
});

const mapDispatchToPropps = (dispatch) => ({
  updateCollections: (collectionMap) =>
    dispatch(updateCollections(collectionMap)),
});
export default connect(mapStateToProps, mapDispatchToPropps)(ShopPage);
