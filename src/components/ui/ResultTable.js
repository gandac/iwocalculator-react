import React from 'react';
import {Table} from 'semantic-ui-react';

const ResultTable = (props) => {
    
    const itemsHTML = props.data.map((el,index)=>{
        return (
            <Table.Row key={index}>
                <Table.Cell>{el.date}</Table.Cell>
                <Table.Cell>{el.principal}</Table.Cell>
                <Table.Cell>{el.interest}</Table.Cell>
                <Table.Cell>{el.total}</Table.Cell>
            </Table.Row>
        )
    });

    const footerTotals = props.data.reduce((acc,cur)=>{
        return {
            principal : acc.principal + cur.principal,
            interest: acc.interest + cur.interest,
            total : acc.total + cur.total
        }
    });
    const footerHTML = <Table.Row>
                        <Table.HeaderCell><strong>Total</strong></Table.HeaderCell>
                        <Table.HeaderCell>{footerTotals.principal.toFixed(2)}</Table.HeaderCell>
                        <Table.HeaderCell>{footerTotals.interest.toFixed(2)}</Table.HeaderCell>
                        <Table.HeaderCell>{footerTotals.total.toFixed(2)}</Table.HeaderCell>
                    </Table.Row>
    

    return (<Table unstackable className="ResultsTable">
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>
                        Repayment Date
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                        Principal
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                        Interest
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                        Total repayment
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {itemsHTML}
            </Table.Body>
            <Table.Footer fullWidth>
                {footerHTML}
            </Table.Footer>
        </Table>
            )
}
export default ResultTable;