import { EMPLOYEES_FETCH_SUCCESS } from '../actions/types';

const initState = {
  name: '',
  phone: '',
  shift: ''
};

export default function employeeReducer(state = initState, action) {
  switch (action.type) {
    case EMPLOYEES_FETCH_SUCCESS:
      return { ...state, employees: action.snapshot };
    default:
      return state;
  }
}
