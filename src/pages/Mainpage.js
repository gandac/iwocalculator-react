import React from 'react';
import {connect} from 'react-redux';
import {Grid} from 'semantic-ui-react';
import Preloader from 'components/ui/Preloader';
import CalculatorControllers from 'components/CalculatorControllers';
import CalculatorResults from 'components/CalculatorResults';
import {getConfig} from 'state/config/configActions';
import './page.scss';

// The Create [ main ] Page view, implementing two react lifecycle methods

class Page extends React.Component{

    
    componentDidMount(){
        this.resetPageState();
    }

    // Will reset each reducer to the initial state. 
    resetPageState = () => {
        this.props.getConfig(); 
    }



    render(){
        return ( 
            this.props.loading ? <Preloader /> : 
                <div>
                    <CalculatorControllers 
                    config = {this.props.config}/>   
                    {this.props.result.rcf ?
                    <CalculatorResults
                     result = {this.props.result}
                    />: null }
                </div> 
        )
    }
}

//Connect Redux State to RETRIEVE/STORE info/actions as properties from above [props]
const mapStateToProps = state => {
    return {
        loading: state.config.loading,
        config: state.config,
        result : state.result
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getConfig: () => dispatch( getConfig() )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Page);