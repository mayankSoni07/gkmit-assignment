import * as actionConstants from '../constants';
import * as commonConstants from '../../utilities/commonConstants';

const initialState = {};

export const commonReducer = (state = initialState, action) => {
    switch (action.type) {
        /** For common gateway  */
        case actionConstants.COMMON_GATEWAY + "_PENDING":
            {
                return {
                    ...state,
                    fetching: true
                }
            }
        case actionConstants.COMMON_GATEWAY + "_REJECTED":
            {
                let stateToReturn = {
                    ...state,
                    fetching: false,
                }
                stateToReturn[commonConstants.ERROR_TEXT] = action.payload.response;
                return stateToReturn;
            }
        case actionConstants.COMMON_GATEWAY + "_FULFILLED":
            {
                let stateToReturn = {
                    ...state,
                    fetched: true
                }
                stateToReturn[action.meta.reducerKey] = action.payload.data;
                return stateToReturn;
            }

        /** Used to set value of reducerKey to undefined. */
        case actionConstants.COMMON_GATEWAY_REQUEST_DONE:
            {
                let stateToReturn = { ...state }
                stateToReturn[action.reducerKey] = undefined;
                return stateToReturn;
            }

        default:
            return state
    }
}