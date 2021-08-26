import produce from 'immer';
import createReducer from './reducerUtils';
import employeesData from '../../mockData/MOCK_DATA';
import { orderBy } from 'lodash';

const initialState = {
    employees: employeesData
}

const employees = {
    sort(state, action) {
        state.employees = orderBy(state.employees, [action.payload]);
    },
    addStatus(state) {
        state.employees.forEach(employee => {
            employee.status = false;
        });;
    },
    editStatus(state, action) {
        const { checkboxSelection, addOrRemove } = action.payload;
        checkboxSelection.forEach(editIndex => {
            state.employees[editIndex - 1].status = addOrRemove === 'add' ? true : false;
        });
    }
}

export default produce((state, action) =>
    createReducer(state, action, employees), initialState);