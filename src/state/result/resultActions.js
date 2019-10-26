import * as actionTypes from '../actionTypes';
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
 
            const principal = controls.amount / controls.period;
            const rcfInterest = ( controls.amount - principal * i  ) * ( controls.rcfInterestRate / 100 );
            const loanInterest = ( controls.amount - principal * i  ) * ( controls.loanInterestRate / 100 ) ;
 
            let rcfRow = {
                date : displayIncrementMonth(i),
                principal : principal,
                rcfInterest : rcfInterest,
                interest  :rcfInterest,
                total : principal + rcfInterest,
            }
 
            let loanRow = {
                ...rcfRow,
                interest  :loanInterest,
                total : principal + loanInterest,
            }
            
            result.rcf.push(rcfRow);
            result.loan.push(loanRow);
         }
         
       
        dispatch(storeResult(result));
 
    }
 }
 
 const displayIncrementMonth = (period) => {
     const date = new Date();
     
     let incrementedDate =  add_months(date, period);
     return `${incrementedDate.getDay()+ 1}/${incrementedDate.getMonth()}/${incrementedDate.getFullYear()}`
 }
 function add_months(dt, n) 
  {
    return new Date(dt.setMonth(dt.getMonth() + n));      
  }
 
 
 
 //Storing the current state for all the controllers
 
 export const storeResult = (result) => {
  
     return {
         type: actionTypes.STORE_RESULT,
         result: result
     }
 }
 