import React from 'react';
import InputRange from 'react-input-range';
import PropTypes from 'prop-types'
import {Grid} from 'semantic-ui-react';
import {CURRENCY_SYMBOL} from 'state/constants';

// Slider.propTypes = {
//     min: PropTypes.number,
//     max: PropTypes.number,
//     value: PropTypes.number,
//     onChange: PropTypes.func,
//     type: PropTypes.string, 
// }

const Slider = (props) => {

    const typeSettings = {
        amount : {
            step: 10,
            formatLabel : val => `${CURRENCY_SYMBOL}${val}`
        },
        period : {
            step: 1,
            formatLabel : val => `${val} months`
        }
    }
    const settings = {
        minValue : props.min,
        maxValue: props.max,
        value: props.value,
        onChange: value => props.onChange(value),
        ...typeSettings[props.type]
    }

    return (
        <div className="SliderWrapper">
            <InputRange
            {...settings}
           
                />
        </div>
    )
};

Slider.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    value: PropTypes.number,
    onChange: PropTypes.func,
    type: PropTypes.string,
}

export default Slider;
    