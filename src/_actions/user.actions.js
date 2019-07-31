import { userConstants } from '../_constants/user.constants';
import { userAPI } from '../api/user';

export const userActions = {
  login,
  logout,
  reset,
}

function login(email, password) {
  return dispatch => {
    dispatch(request({ email }))

    userAPI.login(email, password)
      .then(user => {
          dispatch(success(user));
        },
        error => {
          dispatch(failure(error.toString()));
        }
      );

  };

  function request(user) { return { type: userConstants.LOGIN_REQUEST, user } };
  function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } };
  function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
  userAPI.logout();
  return { type: userConstants.LOGOUT };
}

function reset() {
  return { type: userConstants.LOGIN_RESET}
}