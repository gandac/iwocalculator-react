import React from 'react';
import {connect} from 'react-redux';
import {Grid} from 'semantic-ui-react';
import InputPercent from 'components/InputPercent';
import * as control from 'state/controls/controlsActions';
import {calculateResult} from 'state/result/resultActions';
import Slider from 'components/Slider';
import './CalculatorControllers.scss';

class CalculatorControllers extends React.Component {

    //Event listeners if extra fine needed
    onAmountChange = (value) => {
        this.props.updateAmount(value);
        this.props.calculateResult({amount:value});
    }
    onPeriodChange = (value) => {
        this.props.updatePeriod(value);
        this.props.calculateResult({period:value});
    }
    changeRCFRate = (e) => {
        const value = e.target.value;
        this.props.updateRCFInterest(value);
        this.props.calculateResult({rcfInterestRate:value});
    }
    changeLoanRate = (e) => {
        const value = e.target.value;
        this.props.updateLoanInterest(e.target.value);
        this.props.calculateResult({loanInterestRate:value});
    }

    render (){

        const {config,amount,period} = this.props;

        return (<div className="CalculatorControllers">
            <Grid columns={2} centered>
 
                <Grid.Row  >
                    <Grid.Column>
                    <h1>Iwocalculator</h1>
                    <br/>
                    
                    <p>You can see how much money you will pay over which period if you just select these two steps</p>
                    <h3>1. Select Amount you need</h3>
                    <Slider 
                    {...config.selectAmount}
                    value={amount}
                    type="amount"
                    onChange = {this.onAmountChange}
                    />
                    <h3>2. Select Period</h3>
                    <Slider type="duration" 
                    {...config.selectPeriod}
                    value={period}
                    type="period"
                    onChange = {this.onPeriodChange}
                    />  
                    </Grid.Column>
                  
                </Grid.Row>
            <Grid.Row className="noBottomPadding">
                <Grid.Column textAlign="center" className="interestColumn">
                    <h2>Revolving Credit Facility</h2>
                    {this.props.display.rcf ? 
                        <InputPercent 
                        type="rcf"
                        onChange={this.changeRCFRate}
                        value={this.props.rcfRate}
                        /> : <p> Not Available For the Current Amount / Period Selected</p> }
                </Grid.Column>
                <Grid.Column textAlign="center" className="interestColumn loanColumn">
                    <h2>Business Loan</h2>
                    
                    {this.props.display.loan ?
                        <InputPercent type="loan"
                        onChange={this.changeLoanRate}
                        value={this.props.loanRate}/>
                     : <p> Not Available For the Current Amount / Period Selected</p> }
                </Grid.Column>
            </Grid.Row>
           </Grid>
        </div>)
    }
}

const mapStateToProps = state => {
    return {
        amount: state.controls.amount,
        period: state.controls.period,
        rcfRate : state.controls.rcfInterestRate,
        loanRate: state.controls.loanInterestRate,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        updateAmount : (val) => dispatch(control.updateAmount(val)),
        updatePeriod : (val) => dispatch(control.updatePeriod(val)),
        updateRCFInterest: (val) => dispatch(control.updateRCFInterest(val)),
        updateLoanInterest: (val) => dispatch(control.updateLoanInterest(val)),
        calculateResult: (val) => dispatch(calculateResult(val)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CalculatorControllers);