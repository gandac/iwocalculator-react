import React from 'react';
import {Grid} from 'semantic-ui-react';
import ResultTable from './ui/ResultTable';
import './CalculatorResults.scss';


const CalculatorResults = (props) => {
    return (<Grid columns={2} className="CalculatorResults" >
        <Grid.Row  >
            <Grid.Column className="resultsColumn">
                {
                    props.result.display.rcf ? <ResultTable 
                    data={props.result.rcf}
                /> : null
                }
            </Grid.Column>
            <Grid.Column className="resultsColumn loan">
                {
                props.result.display.loan ? <ResultTable 
                    data={props.result.loan}
                /> : null
                }
            </Grid.Column>
            </Grid.Row>
        </Grid>
            )
}
export default CalculatorResults;