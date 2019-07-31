import { userConstants } from '../_constants/user.constants';

let userLocalStorage = JSON.parse(localStorage.getItem('user'));

const initialState = userLocalStorage ? { loggedIn: true } : { loggedIn: false};

export function user(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggedIn: false,
      };

    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
      };
    
    case userConstants.LOGIN_FAILURE:
      return {
        loggedIn: false,
        error: action.error,
      };

    case userConstants.LOGIN_RESET:
      return {
        loggedIn: false,
        error: ''
      };
      
    case userConstants.LOGOUT:
      return {
        loggedIn: false,
      };

    default:
      return {};

  }
}