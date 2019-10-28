import * as actionTypes from '../actionTypes';
import {INITIAL_AMOUNT,INITIAL_PERIOD,INITIAL_INTEREST_RATE} from 'state/constants';
import constants from 'state/constants';

const initialState = {
    rcf : null,
    loan : null,
    display : {
        rcf : false,
        loan : false
    }
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
        case actionTypes.STATE_TABLES:
            return {
                ...state,
                display:{
                    ...state.display,
                    rcf: action.rcf,
                    loan: action.loan
                }
            }
        default:
            return state;
    }
}

export default reducer;