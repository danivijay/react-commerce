import React, { useState } from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import './Cards.scss';
import '../../App.scss';

const TRANSACTION_MUTATION = gql`
    mutation Createtransaction(
        $quantity: Int!
        $user_id: String!
        $product_id: String!
        $date: String!
        $currency: String!
        $status: String!
    ) {
        transaction(
            quantity: $quantity
            user_id: $user_id
            date: $date
            product_id: $product_id
            currency: $currency
            status: $status
        ) {
            user_id
            quantity
            date
            product_id
            currency
            status
        }
    }
`;

const userid = localStorage.getItem('CUR_USER');

console.log('CUR_USER::::', userid);

const curDate = new Date();
var curDateString = `${curDate.getMonth() +
    1}/${curDate.getDate()}/${curDate.getFullYear()}`;

console.log('CurDate::', curDateString);

const Cards = ({ product }) => {
    const authToken = localStorage.getItem('AUTH_TOKEN');

    const [quantity, setQuantity] = useState(1);

    const handleQuantityIncrement = () => {
        setQuantity(parseInt(quantity) + 1);
    };

    const handleQuantityDecrement = () => {
        if (parseInt(quantity) > 1) {
            setQuantity(parseInt(quantity) - 1);
        }
    };

    return (
        <div class="cards">
            <article class="card">
                <div class="card__top">
                    <img src="https://picsum.photos/250/200?random" alt="" />
                </div>
                <div class="card__bottom">
                    <h1 class="card__heading">{product.name}</h1>
                    <h1 class="card__description">Rs {product.price}</h1>
                </div>
                <div class="card__footer">
                    <div class="grid">
                        <div class="grid__item grid__item--sm-span-1">
                            <input
                                class="input"
                                type="number"
                                name="quantity"
                                value={quantity}
                            />
                        </div>
                        <div class="grid__item grid__item--sm-span-1">
                            <button
                                class="smallbtn smallbtn--inc"
                                onClick={handleQuantityIncrement}
                            />
                            <button
                                class="smallbtn smallbtn--dec"
                                onClick={handleQuantityDecrement}
                            />
                        </div>

                        <div class="grid__item grid__item--sm-span-5">
                            <Mutation mutation={TRANSACTION_MUTATION}>
                                {(
                                    Createtransaction,
                                    { data, loading, error },
                                ) => {
                                    // <button
                                    // onClick={() => {
                                    //     if (
                                    //         window.alert(
                                    //             'Product Successfully Added to the cart',
                                    //         )
                                    //     );
                                    // }}
                                    // </button>;
                                    return (
                                        <button
                                            onClick={() => {
                                                {
                                                    authToken
                                                        ? Createtransaction({
                                                              variables: {
                                                                  quantity: quantity,
                                                                  user_id: userid,
                                                                  date: curDateString,
                                                                  product_id:
                                                                      product.id,
                                                                  currency:
                                                                      'INR',
                                                                  status:
                                                                      'inCart',
                                                              },
                                                          }).then((res) => {
                                                              if (
                                                                  window.alert(
                                                                      product.name +
                                                                          ' has successfully added to the cart',
                                                                  )
                                                              );
                                                          })
                                                        : window.alert(
                                                              'You need to login first',
                                                          );
                                                }
                                            }}
                                            class="btn btn--pad-20 btn--uppercase btn--secondary btn--right-float"
                                        >
                                            Add to Cart
                                        </button>
                                    );
                                }}
                            </Mutation>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default Cards;
