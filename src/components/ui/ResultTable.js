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
    })
    return (<Table >
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
        </Table>
            )
}
export default ResultTable;