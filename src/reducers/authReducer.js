import { SET_EMAIL, SET_PASSWORD, LOGIN_SUCCESS, LOGIN_FAILED, LOADING } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case SET_EMAIL:
      return { ...state, email: action.email };
    case SET_PASSWORD:
      return { ...state, password: action.password };
    case LOGIN_SUCCESS:
      return { ...state, user: action.user };
    case LOGIN_FAILED:
      return { ...state, error: action.error };
    case LOADING:
      return { ...state, loading: action.loading };
    default:
      return state;
  }
}
