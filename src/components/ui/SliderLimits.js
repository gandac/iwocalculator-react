import React from 'react';

export default (props) => {
    

    let percentMaxRcf = ( props.limits.rcf.max / props.limits.loan.max ) * 100;
    let percentMinLoan = 100 - (( props.limits.loan.min / props.limits.loan.max ) * 100);
    if(percentMinLoan > 98){
        percentMinLoan = 100;
    }

    return (
        <div className="sliderRanges">
            <div className="limitBar rcfBar" style={{ width: percentMaxRcf + '%', left:0 }}></div>
            <div className="limitBar loanBar" style={{ width: percentMinLoan + '%' , right:0,left:'auto'}}></div>
        </div>
    )
}