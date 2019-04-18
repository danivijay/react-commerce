import React from 'react';
import './AdminPanel.scss';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_TRANSACTIONS = gql`
    {
        transactions {
            id
            quantity
            user_id
            date
            address_id
            currency
            status
        }
    }
`;

const AdminPanel = () => {
    return (
        <Query query={GET_TRANSACTIONS}>
            {({ data }) =>
                console.log(data) || (
                    <table id="admintable">
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Quantity</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>currency</th>
                            <th>Status</th>
                        </tr>
                        {data &&
                            data.transactions &&
                            data.transactions.map((transaction) => (
                                <tr>
                                    <td>{transaction.user_id}</td>
                                    <td>{transaction.address_id}</td>
                                    <td>{transaction.quantity}</td>
                                    <td>{transaction.date}</td>
                                    <td>{transaction.price}</td>
                                    <td>{transaction.currency}</td>
                                    <td>{transaction.status}</td>
                                </tr>
                            ))}
                    </table>
                )
            }
        </Query>
    );
};

export default AdminPanel;
