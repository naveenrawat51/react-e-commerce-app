import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const selectShopData = (state) => state.shop;

export const getSelectedShopData = createSelector(
  [selectShopData],
  (shop) => shop.shopData
);

export const selectCollection = memoize((collectionURlParam) =>
  createSelector([getSelectedShopData], (collections) =>
    collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionURlParam]
    )
  )
);
