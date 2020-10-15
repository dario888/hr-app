import {combineReducers} from 'redux';
import employeesReducer from './employeesReducer';
import departmentsReducer from './departmentsReducer';
import positionsReducer from './positionsReducer';



export default combineReducers({
    employees: employeesReducer,
    departments: departmentsReducer,
    positions: positionsReducer

})