import * as actionTypes from '../actionTypes';

export const updateAmount = (val) => {
 
    return {
        type: actionTypes.UPDATE_AMOUNT,
        amount: val
    }
}

export const updatePeriod = (val) => {
    return {
        type: actionTypes.UPDATE_PERIOD,
        period: val
    }
}

export const updateRCFInterest = (val) => {
    return {
        type: actionTypes.UPDATE_RCF_INTEREST,
        rate: val
    }
}
export const updateLoanInterest = (val) => {
    return {
        type: actionTypes.UPDATE_LOAN_INTEREST,
        rate: val
    }
}

