import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import integratedReducer from '../reducers';
import promiseMiddleware from 'redux-promise-middleware';


const initialState = {}, enhancers = [], middleware = [thunk];

const composedEnhancers = compose(
    ...enhancers,
    applyMiddleware(...middleware, promiseMiddleware(), thunk)
)

const store = createStore(integratedReducer, initialState, composedEnhancers)
export default store;