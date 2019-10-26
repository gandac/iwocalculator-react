import React from 'react';
import {connect} from 'react-redux';
import {Grid} from 'semantic-ui-react';
import InputPercent from 'components/InputPercent';
import * as control from 'state/controls/controlsActions';
import Slider from 'components/Slider';
import './CalculatorControllers.scss';

class CalculatorControllers extends React.Component {

    onAmountChange = (value) => {
        this.props.updateAmount(value);
    }
    onPeriodChange = (value) => {
        this.props.updatePeriod(value);
    }


    render (){
        const {config} = this.props;
        return (<div className="CalculatorControllers">
            <Grid >
                <Grid.Row columns={2} >
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
                <Grid.Column><InputPercent type="rcf"/></Grid.Column>
                <Grid.Column><InputPercent type="loan"/></Grid.Column>
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
        loanRate: state.controls.loanRate,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        updateAmount : (val) => dispatch(control.updateAmount(val)),
        updatePeriod : (val) => dispatch(control.updatePeriod(val)),
        updateRCFInterest: (val) => dispatch(control.updateRCFInterest(val)),
        updateLoanInterest: (val) => dispatch(control.updateLoanInterest(val)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CalculatorControllers);