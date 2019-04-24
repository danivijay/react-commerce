import React, { Fragment } from 'react';
import './cart.scss';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const GET_PRODUCT_NAME = gql`
    query product($id: String!) {
        product(id: $id) {
            name
            price
        }
    }
`;

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

                <button class="btn1">Checkout</button>
            </div>
            <div class="grid__item grid__item--sm-span-6">
                <article class="card">
                    <div class="card__bottom">
                        <Fragment>
                            <Query
                                query={GET_PRODUCT_NAME}
                                variables={{
                                    id: '5cb96c65517ace1320f3790d',
                                }}
                            >
                                {({ data: dat }) =>
                                    console.log('product', dat) || (
                                        <Fragment>
                                            {dat && dat.product && (
                                                <Fragment>
                                                    <h1>{dat.product.name}</h1>
                                                    <h1>Qty</h1>
                                                    <h1>Price</h1>
                                                </Fragment>
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
