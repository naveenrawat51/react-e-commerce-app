import { userActionTypes } from "./user.types";

export const setCurrentUser = (user) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const googleSignInStart = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN_START
});

export const googleSignInSuccess = user => ({
  type: userActionTypes.GOOGLE_SIGN_IN_SUCCESS,
  payload: user
});

export const googleSignInFail = error => ({
  type: userActionTypes.GOOGLE_SIGN_IN_FAIL,
  payload: error
});

export const emailSignInStart = () => ({
  type: userActionTypes.EMAIL_SIGN_IN_START
});

export const emailSignInSuccess = emailAndPassword => ({
  type: userActionTypes.EMAIL_SIGN_IN_SUCCESS,
  payload: emailAndPassword
});

export const emailSignInFail = error => ({
  type: userActionTypes.EMAIL_SIGN_IN_FAIL,
  payload: error
});
