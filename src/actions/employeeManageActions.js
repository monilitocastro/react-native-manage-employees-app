import firebase from 'firebase';

import { Actions } from 'react-native-router-flux';
import { SET_EMPLOYEE_INFO, EMPLOYEE_CREATED, EMPLOYEES_FETCH_SUCCESS } from './types';

export function setEmployeeInfo({ field, value }) {
  return dispatch => {
    dispatch({
      type: SET_EMPLOYEE_INFO,
      field,
      value
    });
  };
}

export function createEmployeeInfo({ name, phone, shift }) {
  return dispatch => {
    const { currentUser } = firebase.auth();
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({
          type: EMPLOYEE_CREATED
        });
        Actions.pop();
      });
  };
}

export function fetchEmployees() {
  const { currentUser } = firebase.auth();
  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({
          type: EMPLOYEES_FETCH_SUCCESS,
          snapshot: snapshot.val()
        });
      });
  };
}
