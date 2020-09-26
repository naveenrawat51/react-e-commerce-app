import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const COLLECTION_ID_MAP = {
  hats: "14MiMv4vcZO4wnUuGcEE",
  sneakers: "XgTUg23ubdxsd9fg3IPk",
  jackets: "S9dhvzHcqtgJicsip7qN",
  womens: "veHFxngUjRelFbX2pOlG",
  mens: "yE4toJmUtHZWZrs2DRlX",
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

export const selectCollectionFetching = createSelector(
  [selectShopData],
  (shop) => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShopData],
  (shop) => !!shop.shopData
);
