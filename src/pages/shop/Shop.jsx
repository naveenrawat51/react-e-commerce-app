import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectIsCollectionsLoaded,
  selectCollectionFetching,
} from "./../../redux/shop-data/shop.selectors";
import CollectionOverview from "./../../components/collections-overview/collections-overview";
import { Route } from "react-router-dom";
import ShopCategory from "../shop-category/shop-category";
import SpinnerHoc from "../../components/spinner-hoc/spinner";
import { fetchCollectionsStart } from "../../redux/shop-data/shop.actions";
const CollectionsPverviewWithSpinner = SpinnerHoc(CollectionOverview);
const ShopCategoryWithSpinner = SpinnerHoc(ShopCategory);

class ShopPage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    const { match, isCollectionFetching, isCollectionsLoaded } = this.props;
    let shopData = (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsPverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          exact
          path={`${match.path}/:category`}
          render={(props) => (
            <ShopCategoryWithSpinner
              isLoading={!isCollectionsLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
    return <div className="shop-page">{shopData}</div>;
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToPprops = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(mapStateToProps, mapDispatchToPprops)(ShopPage);
