import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { SET_EMAIL, SET_PASSWORD, LOGIN_SUCCESS, LOGIN_FAILED, LOADING } from './types';

export function setEmail(email) {
  return {
    type: SET_EMAIL,
    email
  };
}

export function setPassword(password) {
  return {
    type: SET_PASSWORD,
    password
  };
}

export function attemptLogIn(email, password) {
  return dispatch => {
    dispatch({
      type: LOADING,
      loading: true
    });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        loginSuccess(dispatch, user);
      })
      .catch(err => {
        // console.error(err);
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => {
            loginSuccess(dispatch, user);
          })
          .catch(err => {
            // console.error(err);
            loginFailed(dispatch);
          });
      });
  };
}

function loginSuccess(dispatch, user) {
  dispatch({
    type: LOGIN_SUCCESS,
    user
  });
  dispatch({
    type: LOGIN_FAILED,
    error: ''
  });
  dispatch({
    type: LOADING,
    loading: false
  });
  Actions.main();
}

function loginFailed(dispatch) {
  dispatch({
    type: LOGIN_FAILED,
    error: 'Authentication failed'
  });
  dispatch({
    type: LOADING,
    loading: false
  });
}
