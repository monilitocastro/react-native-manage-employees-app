import { SET_EMPLOYEE_INFO, EMPLOYEE_CREATED, SET_MULTIPLE_EMPLOYEE_INFO } from '../actions/types';

const initState = {
  name: '',
  phone: '',
  shift: ''
};

export default function employeeManageReducer(state = initState, action) {
  switch (action.type) {
    case SET_EMPLOYEE_INFO:
      return { ...state, [action.field]: action.value };
    case SET_MULTIPLE_EMPLOYEE_INFO:
      return { ...state, ...action.employee };
    case EMPLOYEE_CREATED:
      return { ...initState };
    default:
      return state;
  }
}
