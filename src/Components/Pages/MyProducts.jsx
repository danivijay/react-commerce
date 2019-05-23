import React, { Fragment, Link } from 'react';
import './AdminPanel.scss';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_SHIPPED_TRANSACTIONS = gql`
    query incarttransactions($user_id: String!, $status: String!) {
        incarttransactions(user_id: $user_id, status: $status) {
            id
            user_id
            status
            quantity
            product_id
            date
            currency
        }
    }
`;

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

const GET_USER_NAME = gql`
    query user($id: String!) {
        user(id: $id) {
            userName
            address {
                country
                fullName
                mobileNo
                pinCode
                streetAddress
                state
                default
            }
        }
    }
`;

const GET_PRODUCT_NAME = gql`
    query product($id: String!) {
        product(id: $id) {
            name
            price
        }
    }
`;
const uid = localStorage.getItem('CUR_USER');
const status = 'Shipped';
const MyProducts = () => {
    const authToken = localStorage.getItem('AUTH_TOKEN');

    return (
        <Fragment>
            {authToken ? (
                <Fragment>
                    <Query
                        query={GET_SHIPPED_TRANSACTIONS}
                        variables={{
                            user_id: uid,
                            status: status,
                        }}
                    >
                        {({ data: dat }) =>
                            console.log('data===>', dat.incarttransactions) || (
                                <Fragment>
                                    <h1>My Products</h1>
                                    <table className="admintable">
                                        <tbody>
                                            <tr>
                                                <th>Transaction ID</th>

                                                <th>User Name</th>
                                                <th>Address</th>
                                                <th>Product</th>
                                                <th>Price</th>
                                                {/* <th>Product ID</th> */}
                                                <th>Quantity</th>
                                                <th>Date</th>
                                                <th>currency</th>
                                                <th>Status</th>
                                            </tr>

                                            {dat &&
                                                dat.incarttransactions &&
                                                dat.incarttransactions.map(
                                                    (transaction) => (
                                                        <tr>
                                                            <td>
                                                                {transaction.id}
                                                            </td>

                                                            <Fragment>
                                                                <Query
                                                                    query={
                                                                        GET_USER_NAME
                                                                    }
                                                                    variables={{
                                                                        id:
                                                                            transaction.user_id,
                                                                    }}
                                                                >
                                                                    {({
                                                                        data: userdata,
                                                                    }) => (
                                                                        <Fragment>
                                                                            {userdata &&
                                                                                userdata.user && (
                                                                                    <Fragment>
                                                                                        <td>
                                                                                            {
                                                                                                userdata
                                                                                                    .user
                                                                                                    .userName
                                                                                            }
                                                                                        </td>
                                                                                        <td>
                                                                                            {userdata
                                                                                                .user
                                                                                                .address[0]
                                                                                                .streetAddress +
                                                                                                ' ' +
                                                                                                userdata
                                                                                                    .user
                                                                                                    .address[0]
                                                                                                    .state +
                                                                                                ' ' +
                                                                                                userdata
                                                                                                    .user
                                                                                                    .address[0]
                                                                                                    .country}
                                                                                        </td>
                                                                                    </Fragment>
                                                                                )}
                                                                        </Fragment>
                                                                    )}
                                                                </Query>
                                                            </Fragment>

                                                            <Fragment>
                                                                <Query
                                                                    query={
                                                                        GET_PRODUCT_NAME
                                                                    }
                                                                    variables={{
                                                                        id:
                                                                            transaction.product_id,
                                                                    }}
                                                                >
                                                                    {({
                                                                        data: productdata,
                                                                    }) =>
                                                                        console.log(
                                                                            'userd::',
                                                                            productdata,
                                                                        ) || (
                                                                            <Fragment>
                                                                                {productdata &&
                                                                                productdata.product ? (
                                                                                    <Fragment>
                                                                                        <td>
                                                                                            {
                                                                                                productdata
                                                                                                    .product
                                                                                                    .name
                                                                                            }
                                                                                        </td>
                                                                                        <td>
                                                                                            {productdata
                                                                                                .product
                                                                                                .price +
                                                                                                ' * ' +
                                                                                                transaction.quantity +
                                                                                                ' = ' +
                                                                                                productdata
                                                                                                    .product
                                                                                                    .price *
                                                                                                    transaction.quantity}
                                                                                        </td>
                                                                                    </Fragment>
                                                                                ) : (
                                                                                    <Fragment>
                                                                                        <td>
                                                                                            Deleted
                                                                                            Product
                                                                                        </td>
                                                                                        <td>
                                                                                            Deleted
                                                                                            Product
                                                                                        </td>
                                                                                    </Fragment>
                                                                                )}
                                                                            </Fragment>
                                                                        )
                                                                    }
                                                                </Query>
                                                            </Fragment>

                                                            <td>
                                                                {
                                                                    transaction.quantity
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    transaction.date
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    transaction.currency
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    transaction.status
                                                                }
                                                            </td>
                                                        </tr>
                                                    ),
                                                )}
                                        </tbody>
                                    </table>
                                </Fragment>
                            )
                        }
                    </Query>
                </Fragment>
            ) : (
                <Fragment>
                    <h1>You need to login first!!!</h1>
                </Fragment>
            )}
        </Fragment>
    );
};

export default MyProducts;
