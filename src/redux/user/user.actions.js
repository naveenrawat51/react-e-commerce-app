import { userActionTypes } from "./user.types";

export const googleSignInStart = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (payload) => ({
  type: userActionTypes.EMAIL_SIGN_IN_START,
  payload,
});

export const signInSuccess = (user) => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFail = (error) => ({
  type: userActionTypes.SIGN_IN_FAIL,
  payload: error,
});
