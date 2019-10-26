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
        const {config} = this.props;
        return (<div className="CalculatorControllers">
            <Grid columns={2} >
                <Grid.Row  >
                    <Grid.Column>
                    <Slider 
                    {...this.props.config.selectAmount}
                    value={this.props.amount}
                    type="amount"
                    onChange = {this.onAmountChange}
                    />

                    <Slider type="duration" 
                    {...this.props.config.selectPeriod}
                    value={this.props.period}
                    type="period"
                    onChange = {this.onPeriodChange}
                    />  
                    </Grid.Column>
                  
                </Grid.Row>
            <Grid.Row >
                <Grid.Column>
                    <InputPercent 
                    type="rcf"
                    onChange={this.changeRCFRate}
                    value={this.props.rcfRate}
                    />
                </Grid.Column>
                <Grid.Column>
                    <InputPercent type="loan"
                    onChange={this.changeLoanRate}
                    value={this.props.loanRate}/>
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