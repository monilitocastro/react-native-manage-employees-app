import { combineReducers } from 'redux';
import authReducer from './authReducer';
import employeeManageReducer from './employeeManageReducer';
import employeeReducer from './employeeReducer';

export default combineReducers({
  bananas: () => [],
  authReducer,
  employeeManageReducer,
  employeeReducer
});
