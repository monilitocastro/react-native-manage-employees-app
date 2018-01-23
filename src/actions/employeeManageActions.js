import firebase from 'firebase';
import { text as phoneText } from 'react-native-communications';
import { Actions } from 'react-native-router-flux';
import {
  SET_EMPLOYEE_INFO,
  EMPLOYEE_CREATED,
  EMPLOYEES_FETCH_SUCCESS,
  SET_MULTIPLE_EMPLOYEE_INFO
} from './types';

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

export function editEmployeeInfo({ name, phone, shift, uid }) {
  const { currentUser } = firebase.auth();
  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
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

export function fetchOneEmployee(uid) {
  const { currentUser } = firebase.auth();
  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .on('value', snapshot => {
        // console.log('SNAPSHOT: ', snapshot.val());
        dispatch({
          type: SET_MULTIPLE_EMPLOYEE_INFO,
          employee: snapshot.val()
        });
      });
  };
}

export function textEmployee({ phone, shift }) {
  return dispatch => {
    phoneText(phone, `You are scheduled to work on ${shift}`);
  };
}

export function fireEmployee(uid) {
  console.log('Firing employee...');
  const { currentUser } = firebase.auth();
  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        Actions.pop();
      });
  };
}
