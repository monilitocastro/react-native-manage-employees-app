import { SET_EMPLOYEE_INFO } from './types';
// import { Actions } from 'react-native-router-flux';

export function setEmployeeInfo({ field, value }) {
  return dispatch => {
    dispatch({
      type: SET_EMPLOYEE_INFO,
      field,
      value
    });
  };
}
