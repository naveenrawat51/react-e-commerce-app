import ShopActionTypes from "./shop.types";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (payload) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload,
});

export const fetchCollectionsFail = (payload) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAIL,
  payload,
});