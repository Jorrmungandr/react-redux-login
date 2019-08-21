import { LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_ERROR } from './type.js';
import actions from './actions.js';
import callFakeApi from './fake_api.js';

export const login = (email, password) => {
  return dispatch => {
    dispatch(actions.setLoginPending(true));
    dispatch(actions.setLoginSuccess(false));
    dispatch(actions.setLoginError(null));

    callFakeApi(email, password, error => {
      dispatch(actions.setLoginPending(false));
      if (!error) {
        dispatch(actions.setLoginSuccess(true));
      } else {
        dispatch(actions.setLoginError(error));
      }
    });
  }
}

export default (state = {
  isLoginSuccess: false,
  isLoginPending: false,
  loginError: null
}, action) => {
  switch (action.type) {
    case LOGIN_PENDING:
      return Object.assign({}, state, {
        isLoginPending: action.isLoginPending
      });

    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoginSuccess: action.isLoginSuccess
      });

    case LOGIN_ERROR:
      return Object.assign({}, state, {
        loginError: action.loginError
      });

    default:
      return state;
  }
}