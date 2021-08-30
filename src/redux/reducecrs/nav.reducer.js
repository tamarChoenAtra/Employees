import produce from 'immer';
import createReducer from './reducerUtils';

const initialState = {
    openDrawer: false,
    openDrawerLoadingImage: false,
    uploadedUrl: '',
    base64: ''
}

const nav = {
    setOpenDrawer(state, action) {
        state.openDrawer = action.payload;
    },
    setOpenDrawerUploadImage(state, action) {
        state.openDrawerLoadingImage = action.payload;
    },
    setUploadedUrl(state, action) {
        state.uploadedUrl = action.payload;
    },
    setBase64(state, action) {
        state.base64 = action.payload;
    }
}

export default produce((state, action) =>
    createReducer(state, action, nav), initialState);