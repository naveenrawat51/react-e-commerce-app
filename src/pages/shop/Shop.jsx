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
import SpinnerHoc from "../../components/spinner-hoc/spinner";

const CollectionsPverviewWithSpinner = SpinnerHoc(CollectionOverview);
const ShopCategoryWithSpinner = SpinnerHoc(ShopCategory);

class ShopPage extends Component {
  state = {
    isLoading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collection");

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ isLoading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
    let shopData = (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsPverviewWithSpinner isLoading={isLoading} {...props} />
          )}
        />
        <Route
          exact
          path={`${match.path}/:category`}
          render={(props) => (
            <ShopCategoryWithSpinner isLoading={isLoading} {...props} />
          )}
        />
      </div>
    );
    // }
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
