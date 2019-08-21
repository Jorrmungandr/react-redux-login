import { LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_ERROR } from './type.js';

export default {
  setLoginPending: (isLoginPending) => {
    return {
      type: LOGIN_PENDING,
      isLoginPending,
    };
  },
  setLoginSuccess: (isLoginSuccess) => {
    return {
      type: LOGIN_SUCCESS,
      isLoginSuccess,
    };
  },
  setLoginError: (loginError) => {
    return {
      type: LOGIN_ERROR,
      loginError
    }
  },
};