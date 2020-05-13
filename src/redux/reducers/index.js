import { combineReducers } from 'redux';

import { commonReducer } from './common-reducer';

/** Combine all the reducers and export one. */
const integratedReducer = combineReducers({
    commonReducer: commonReducer
});
export default integratedReducer;