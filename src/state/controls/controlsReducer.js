import * as actionTypes from '../actionTypes';
import {INITIAL_AMOUNT,INITIAL_PERIOD,INITIAL_INTEREST_RATE} from 'state/constants';
import constants from 'jest-haste-map/build/constants';

const initialState = {
    loading: true,
    amount : INITIAL_AMOUNT,
    period : INITIAL_PERIOD,
    rcfInterestRate: INITIAL_INTEREST_RATE,
    loanInterestRate: INITIAL_INTEREST_RATE,
    error: false
}
//Store each of the 3 states of the request [ request | success | error ]
// standard reducer
const reducer = (state = initialState ,action) => {
    switch(action.type){
        case actionTypes.UPDATE_AMOUNT:
            return {
                ...state,
                amount : action.amount,
            }
        case actionTypes.UPDATE_PERIOD:
            return {
                ...state,
                period : action.period,
            }
        case actionTypes.UPDATE_RCF_INTEREST:
            return {
                ...state,
                rcfInterestRate : action.rate,
            }
        case actionTypes.UPDATE_LOAN_INTEREST:
            return {
                ...state,
                loanInterestRate : action.rate,
            }
        default:
            return state;
    }
}

export default reducer;