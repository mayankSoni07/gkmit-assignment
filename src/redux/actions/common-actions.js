import * as constants from '../constants';
import XHR from '../../utilities/xhr';

/** Common Gateway for API hit */
export function commonGateway(param) {
    return (dispatch, getState) => {
        const { url, method, headerData, reducerKey, reqData } = param;
        dispatch({
            type: constants.COMMON_GATEWAY,
            meta: { "reducerKey": reducerKey },
            payload: XHR.api({
                params: reqData, apiName: url, method: method, headerData: headerData
            })
        })
    }
}

/** Common Gateway request Done */
export function commonGatewayRequestDone(param) {
    return (dispatch, getState) => {
        const { reducerKey } = param;
        dispatch({
            type: constants.COMMON_GATEWAY_REQUEST_DONE,
            "reducerKey": reducerKey
        })
    }
}