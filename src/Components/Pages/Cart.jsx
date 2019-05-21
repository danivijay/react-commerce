import React, { Fragment } from 'react';
import './cart.scss';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const GET_INCART_ITEMS = gql`
    query incarttransactions($user_id: String!, $status: String!) {
        incarttransactions(user_id: $user_id, status: $status) {
            id
            user_id
            status
            quantity
            product_id
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

const CHECKOUT_PRODUCTS = gql`
    mutation Checkout_transaction(
        $user_id: String!
        $cur_status: String!
        $new_status: String!
    ) {
        checkout_transaction(
            user_id: $user_id
            cur_status: $cur_status
            new_status: $new_status
        ) {
            id
            quantity
            user_id
            product_id
            date
            currency
            status
        }
    }
`;

const uid = localStorage.getItem('CUR_USER');
console.log('uid==>', uid);
const Cart = () => {
    return (
        <div class="grid">
            <div class="grid__item grid__item--sm-span-6">
                <input
                    class="input1"
                    type="text"
                    name="name"
                    placeholder="Name"
                />
                <textarea
                    class="input1"
                    type="text"
                    rows="10"
                    name="Address"
                    placeholder="Address"
                    fontsize="15px"
                />

                <Mutation mutation={CHECKOUT_PRODUCTS}>
                    {(checkout_transaction, { data, loading, error }) => {
                        return (
                            <button
                                class="btn1"
                                onClick={() => {
                                    checkout_transaction({
                                        variables: {
                                            user_id: uid,
                                            cur_status: 'inCart',
                                            new_status: 'Shipped',
                                        },
                                    }).then((res) => {
                                        if (
                                            window.alert(
                                                ' All proucts has successfully purchased',
                                            )
                                        );
                                    });
                                }}
                            >
                                Checkout
                            </button>
                        );
                    }}
                </Mutation>
            </div>
            <div class="grid__item grid__item--sm-span-6">
                <article class="card">
                    <div class="card__bottom">
                        <Fragment>
                            <Query
                                query={GET_INCART_ITEMS}
                                variables={{
                                    user_id: uid,
                                    status: 'inCart',
                                }}
                            >
                                {({ data: data }) =>
                                    console.log('product', data) || (
                                        <Fragment>
                                            {data &&
                                                data.incarttransactions &&
                                                data.incarttransactions.map(
                                                    (incarttransaction) => (
                                                        <Fragment>
                                                            <Fragment>
                                                                <Query
                                                                    query={
                                                                        GET_PRODUCT_NAME
                                                                    }
                                                                    variables={{
                                                                        id:
                                                                            incarttransaction.product_id,
                                                                    }}
                                                                >
                                                                    {({
                                                                        data: productdata,
                                                                    }) =>
                                                                        console.log(
                                                                            'productdata::',
                                                                            productdata,
                                                                        ) || (
                                                                            <Fragment>
                                                                                {productdata &&
                                                                                    productdata.product && (
                                                                                        <Fragment>
                                                                                            <h1>
                                                                                                Product:{' '}
                                                                                                {
                                                                                                    productdata
                                                                                                        .product
                                                                                                        .name
                                                                                                }
                                                                                            </h1>
                                                                                            <h1>
                                                                                                Price:{' '}
                                                                                                {
                                                                                                    productdata
                                                                                                        .product
                                                                                                        .price
                                                                                                }
                                                                                            </h1>
                                                                                            <h1>
                                                                                                Quantity:{' '}
                                                                                                {
                                                                                                    incarttransaction.quantity
                                                                                                }
                                                                                            </h1>
                                                                                            <h1>
                                                                                                Total
                                                                                                :{' '}
                                                                                                {incarttransaction.quantity *
                                                                                                    productdata
                                                                                                        .product
                                                                                                        .price}
                                                                                            </h1>
                                                                                            <h1>
                                                                                                -----------
                                                                                            </h1>
                                                                                        </Fragment>
                                                                                    )}
                                                                            </Fragment>
                                                                        )
                                                                    }
                                                                </Query>
                                                            </Fragment>
                                                        </Fragment>
                                                    ),
                                                )}
                                        </Fragment>
                                    )
                                }
                            </Query>
                        </Fragment>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default Cart;
