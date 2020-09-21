import { createSelector } from "reselect";

const selectShopData = (state) => state.shop;

export const getSelectedShopData = createSelector(
  [selectShopData],
  (shop) => shop.shopData
);
