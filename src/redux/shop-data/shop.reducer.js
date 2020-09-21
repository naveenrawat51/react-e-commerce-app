import shopData from "./shopping-data";

const INITIAL_STATE = {
  shopData,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
