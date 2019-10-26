import * as actionTypes from '../actionTypes';

const initialState = {
    loading: true,
    selectAmount : false,
    selectDuration : false,
    error: false
}
//Store each of the 3 states of the request [ request | success | error ]
// standard reducer
const reducer = (state = initialState ,action) => {
    switch(action.type){
        case actionTypes.GET_CONFIG_REQUEST:
        return {
            ...state,
            loading: true
        }
        case actionTypes.GET_CONFIG_SUCCESS:
            return {
                ...state,
                selectAmount:{
                    min : action.revolving_credit_facility.amount_min,
                    max : action.business_load.amount_max
                },
                selectDuration:{
                    min : action.revolving_credit_facility.duration_min,
                    max : action.business_load.duration_max
                },
                loading: false
            }
        case actionTypes.GET_CONFIG_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        case actionTypes.RESET_CONFIG:
                return initialState
        default:
            return state;
    }
}

export default reducer;