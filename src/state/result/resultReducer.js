import * as actionTypes from '../actionTypes';
import {INITIAL_AMOUNT,INITIAL_PERIOD,INITIAL_INTEREST_RATE} from 'state/constants';
import constants from 'jest-haste-map/build/constants';

const initialState = {
    
}
//Store each of the 3 states of the request [ request | success | error ]
// standard reducer
const reducer = (state = initialState ,action) => {
    switch(action.type){
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                ...action.result
            }
        default:
            return state;
    }
}

export default reducer;