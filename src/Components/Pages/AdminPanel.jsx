import React, { Fragment } from 'react';
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
            product_id
            currency
            status
        }
    }
`;

const GET_PRODUCTS = gql`
    {
        products {
            id
            price
            stock
            name
        }
    }
`;

const GET_USER_NAME = gql`
    {
        user(id: "5cb9714e34a03d20b0d6ff1d") {
            userName
        }
    }
`;

const AdminPanel = () => {
    return (
        <Fragment>
            <Query query={GET_TRANSACTIONS}>
                {({ data }) =>
                    console.log(data) || (
                        <Fragment>
                            <h1>Transactions</h1>
                            <table className="admintable">
                                <tbody>
                                    <tr>
                                        <th>Transaction ID</th>
                                        <th>User ID</th>
                                        <th>User Name</th>
                                        <th>Product</th>
                                        <th>Product ID</th>
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
                                                <td>{transaction.id}</td>
                                                <td>{transaction.user_id}</td>
                                                <td>userName</td>
                                                <td>productname</td>
                                                <td>
                                                    {transaction.product_id}
                                                </td>
                                                <td>Address</td>
                                                <td>{transaction.quantity}</td>
                                                <td>{transaction.date}</td>
                                                <td>price</td>
                                                <td>{transaction.currency}</td>
                                                <td>{transaction.status}</td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </Fragment>
                    )
                }
            </Query>

            <Query query={GET_PRODUCTS}>
                {({ data }) =>
                    console.log(data) || (
                        <Fragment>
                            <h1>Products</h1>
                            <table className="admintable">
                                <tbody>
                                    <tr>
                                        <th>Product Name</th>
                                        <th>Product ID</th>
                                        <th>Price</th>
                                        <th>Stock</th>
                                        <th>Actions</th>
                                    </tr>
                                    {data &&
                                        data.products &&
                                        data.products.map((product) => (
                                            <tr>
                                                <td>{product.name}</td>
                                                <td>{product.id}</td>
                                                <td>{product.price}</td>
                                                <td>{product.stock}</td>
                                                <td>
                                                    <a href="/addoredit">
                                                        <button>Add</button>
                                                    </a>
                                                    <button>Delete</button>
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </Fragment>
                    )
                }
            </Query>
        </Fragment>
    );
};

export default AdminPanel;
