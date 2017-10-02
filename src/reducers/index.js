import {combineReducers} from 'redux';
import queueReducers from './../utils/queue-reducers';
import {
    ficheModelReducer,
    NAMESPACE as FICHE_NAMESPACE
} from '../pages/fiche/model/reducer';
import {
    cartReducer,
    NAMESPACE as CART_NAMESPACE
} from '../pages/cart/reducer';

// import {ficheReducers} from '../pages/fiche/reducer';

export const rootReducer = combineReducers({
    [FICHE_NAMESPACE]: queueReducers(
        ficheModelReducer,
        cartReducer
    ),
    [CART_NAMESPACE]: cartReducer
});
