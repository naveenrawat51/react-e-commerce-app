import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
  shopData: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return { ...state, shopData: Object.values(action.payload) };
    default:
      return state;
  }
};

export default shopReducer;
