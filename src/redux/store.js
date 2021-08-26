import {
    createStore,
    applyMiddleware
} from 'redux';

import appReducers from './reducecrs/appReducers';

const store = createStore(
    appReducers,
    applyMiddleware(
    )
)

export default store;