import { SIGNIN, SIGNIN_ERROR } from './constants';

export function doSignin(email, password, history) {
  return {
    type: SIGNIN,
    email,
    password,
    history,
  };
}

export function doSigninError(error) {
  return {
    type: SIGNIN_ERROR,
    error,
  };
}

export function doSigninSuccessfull(user) {
  return {
    type: SIGNIN_ERROR,
    user,
  };
}
