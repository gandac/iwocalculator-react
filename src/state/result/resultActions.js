import * as actionTypes from '../actionTypes';
import {BUSINESS_LOAN_UPFRONT_FEE_PERCENT} from 'state/constants';

// Business logic for the calculating the loan costs
export const calculateResult = (params) => {
    return (dispatch,getState) => {
 
        const state = getState().controls;
        const controls = {
            ...state,
            ...params
        }
        let result = {
            rcf : [],
            loan : []
        }
        
        for(let i = 0; i < controls.period ; i++){
 
            let principal = controls.amount / controls.period;
            let rcfInterest = ( controls.amount - principal * i  ) * ( controls.rcfInterestRate / 100 );
            let loanInterest = ( controls.amount - principal * i  ) * ( controls.loanInterestRate / 100 ) ;

            //Add Additional 10% Upfront Fees in the first month To the business loan result 
            if( i == 0){
                loanInterest += controls.amount * ( BUSINESS_LOAN_UPFRONT_FEE_PERCENT / 100 );
            }


            //Real rounding not browser depeinding like toFixed
            principal = Math.round(principal*100)/100;
            rcfInterest = Math.round(rcfInterest*100)/100;
            loanInterest = Math.round(loanInterest*100)/100;
            
            let rcfRow = {
                date : displayIncrementMonth(i),
                principal : principal,
                rcfInterest : rcfInterest,
                interest  :rcfInterest,
                total : Math.round((principal + rcfInterest)*100)/100
            }
 
            let loanRow = {
                ...rcfRow,
                interest  :loanInterest,
                total : Math.round((principal + loanInterest)*100)/100
            }
            
            result.rcf.push(rcfRow);
            result.loan.push(loanRow);
        }
        dispatch(enableResults(controls , getState().config));
        dispatch(storeResult(result));
 
    }
 }
 
const enableResults = ({amount , period} , { selectAmount , selectPeriod}) => {
    
    const isRCFEnabled = ( amount > selectAmount.limits.rcf.min ) &&  ( amount < selectAmount.limits.rcf.max ) 
      && ( period > selectPeriod.limits.rcf.min ) && ( period < selectPeriod.limits.rcf.max );
    const isLoanEnabled = ( amount > selectAmount.limits.loan.min ) &&  ( amount < selectAmount.limits.loan.max ) 
    && ( period > selectPeriod.limits.loan.min ) && ( period < selectPeriod.limits.loan.max );
    return {
        type : actionTypes.STATE_TABLES,
        rcf: isRCFEnabled,
        loan : isLoanEnabled
    }
}

const displayIncrementMonth = (period) => {

     const date = new Date();

     let incrementedDate =  add_months(date, period);

     return `${incrementedDate.toLocaleString().substring(0,10)}`;

 }


function add_months(dt, n) 
{
    // To get the last date of each month We set the date to the 1st, 
    // then we add two months then we drop one day
    dt.setDate(1);
    let resultDate =  new Date(dt.setMonth((dt.getMonth() + 2 )  + n ));
    resultDate.setDate(resultDate.getDate() - 1);
    return resultDate;
}
 
 //Storing the current state for all the controllers
 
 export const storeResult = (result) => {
  
     return {
         type: actionTypes.STORE_RESULT,
         result: result
     }
 }
 