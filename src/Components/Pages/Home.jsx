import React, { useState } from 'react';
import '../../App.scss';
import Cards from '../Common/Cards';
import Hero from '../Common/Hero';
import Filterbar from '../Common/Filterbar';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import jwt from 'jsonwebtoken';

const GET_PRODUCTS = gql`
    query products($criteria: Int!) {
        products(criteria: $criteria) {
            id
            name
            price
            stock
            owner_user_id
        }
    }
`;

if (!localStorage.getItem('CRITERIA')) localStorage.setItem('CRITERIA', 0);
console.log('criteria===>', localStorage.getItem('CRITERIA'));
const CRITERIA = parseInt(localStorage.getItem('CRITERIA'));
const Home = () => {
    //Token expiry verification
    var tokenisExpired = false;
    var tokendata = localStorage.getItem('AUTH_TOKEN');
    if (tokendata) {
        console.log('Tokendata==>>', tokendata);
        var decodedToken = jwt.decode(tokendata, { complete: true });
        console.log('decodedTokendata==>>', decodedToken.payload.exp * 1000);
        var dateNow = new Date();
        console.log('datenow.time===>', dateNow.getTime());

        //multiplying the token exp with 1000 to make the no.of digits of exp to 13 so that it can be compared with the dateNow.getTime()
        if (decodedToken.payload.exp * 1000 < dateNow.getTime())
            tokenisExpired = true;
        console.log('isTokenExpired=>>', tokenisExpired);
    }

    return (
        //if the token is expired then there won't be any data, so the expired token is removed and then the query is executing successfully

        <Query
            query={GET_PRODUCTS}
            variables={{
                criteria: CRITERIA,
            }}
        >
            {({ data }) =>
                console.log(data) || (
                    <div>
                        <Hero />
                        <Filterbar />
                        {/* <div className="grid">
                        {!(tokenisExpired) && data && data.products &&
                            data.products.length === 0 ? (
                                <div class="grid__item grid__item--sm-span-4">
                                    <h1>No Products have been added</h1>
                                </div>
                            ) : data && data.products &&
                                data.products.map((product) => (
                                    <div class="grid__item grid__item--sm-span-4">
                                        <Cards product={product} />
                                    </div>
                                ) )
                        }
                        </div> */}

                        <div className="grid">
                            {!tokenisExpired && data && data.products ? (
                                data.products.length === 0 ? (
                                    <div class="grid__item grid__item--sm-span-4">
                                        <h1>No Products have been added</h1>
                                    </div>
                                ) : (
                                    data &&
                                    data.products &&
                                    data.products.map((product) => (
                                        <div class="grid__item grid__item--sm-span-4">
                                            <Cards product={product} />
                                        </div>
                                    ))
                                )
                            ) : tokenisExpired ? (
                                localStorage.removeItem('AUTH_TOKEN')
                            ) : (
                                console.log('Token is not expired')
                            )}
                        </div>
                    </div>
                )
            }
        </Query>
    );
};

export default Home;
