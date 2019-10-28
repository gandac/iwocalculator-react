import React from 'react';
import {Input,Label} from 'semantic-ui-react';

const InputPercent = (props) => {
    return (
        <div >
        <span>Interest Rate </span>
        <Input labelPosition='right' type='text' placeholder='%' value={props.value} onChange={props.onChange}>
            <input className={"interestInput"}  />
            <Label basic>%</Label>
        </Input>
        </div>

    )
}
export default  InputPercent;


