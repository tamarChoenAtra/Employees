import { combineReducers } from 'redux';
import navReducer from './nav.reducer';
import employeesReducer from './employees.reducer';


// Combine with other reducers we may add in the future
const appReducers = combineReducers({
    nav: navReducer,
    employees:employeesReducer
});



export default appReducers;