import React from 'react';
import {Grid} from 'semantic-ui-react';
import ResultTable from './ui/ResultTable';

const CalculatorResults = (props) => {
    return (<Grid columns={2} >
        <Grid.Row  >
            <Grid.Column>
                <ResultTable 
                    data={props.result.rcf}
                />
            </Grid.Column>
            <Grid.Column>
                <ResultTable 
                    data={props.result.loan}
                />
            </Grid.Column>
            </Grid.Row>
        </Grid>
            )
}
export default CalculatorResults;