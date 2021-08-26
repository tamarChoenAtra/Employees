import produce  from 'immer';
import createReducer from './reducerUtils';

const initialState = {
    openDrawer: false,
}

const nav = {
    setOpenDrawer(state, action) {
        state.openDrawer = action.payload;
    }
}

export default produce((state, action) =>
    createReducer(state, action, nav), initialState);