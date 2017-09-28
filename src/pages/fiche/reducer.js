import {assign} from 'lodash';
import {MODEL_INFO_REQUEST, MODEL_INFO_SUCCESS, MODEL_INFO_ERROR} from './model/actions';

export const NAMESPACE = 'fiche';

const initialState = {
    manufacturers: null,
    transportTypes: null,
    years: null,
    modelInfo: null,
    error: null,
    current: {
        modelId: null,
        makeId: null,
        transportTypeId: null,
        year: null
    }
};

// export function ficheReducer(state = initialState /* , action */) {
//     // TODO [sf] 05.09.2017 add actions
//     return assign({}, state);
// }

export function reqRed(state = initialState, action) {
    console.warn(action.type);
    switch (action.type) {
        case MODEL_INFO_REQUEST:
            return Object.assign({}, state, action.payload);

        case MODEL_INFO_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                modelData: action.payload.modelData
            });

        case MODEL_INFO_ERROR:
            return assign({}, state, action.payload);

        default:
            return state;
    }
}

