import React from 'react';
import InputRange from 'react-input-range';
import PropTypes from 'prop-types'
import {numberWithCommas} from 'utils/utils';
import {CURRENCY_SYMBOL} from 'state/constants';
import SliderLimits from './ui/SliderLimits';

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
            step: 100,
            formatLabel : val => `${CURRENCY_SYMBOL}${numberWithCommas(val)}`
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
            <SliderLimits limits={props.limits}/>
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
    