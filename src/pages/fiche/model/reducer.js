import {assign} from 'lodash';
import {STATE_FICHE as initialState} from './../../../data-srtuctures/fiche';
import {
    MODEL_INFO_REQUEST,
    MODEL_INFO_SUCCESS,
    MODEL_INFO_ERROR
} from './actions';

export const NAMESPACE = 'fiche';

export function ficheModelReducer(state = initialState, action) {
    switch (action.type) {
        case MODEL_INFO_REQUEST:
            return assign({}, state, action.payload);

        case MODEL_INFO_SUCCESS:
            return assign({}, state, action.payload);

        case MODEL_INFO_ERROR:
            return assign({}, state, action.payload);

        default:
            return state;
    }
}
