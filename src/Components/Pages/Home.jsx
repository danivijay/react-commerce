import React from 'react';
import '../../App.scss';
import Cards from '../Common/Cards';
import Hero from '../Common/Hero';
import Filterbar from '../Common/Filterbar';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_PRODUCTS = gql`
    {
        products {
            id
            name
            price
            stock
        }
    }
`;

const Home = () => {
    return (
        //if the token is expired then there won't be any data, so the expired token is removed and then the query is executing successfully
        <Query query={GET_PRODUCTS}>
            {({ data }) =>
                console.log(data) || (
                    <div>
                        <Hero />
                        <Filterbar />
                        <div className="grid">
                            {data &&
                            data.products &&
                            data.products.length === 0 ? (
                                <div class="grid__item grid__item--sm-span-4">
                                    <h1>No Products have been added</h1>
                                </div>
                            ) : data && data.products ? (
                                data.products.map((product) => (
                                    <div class="grid__item grid__item--sm-span-4">
                                        <Cards product={product} />
                                    </div>
                                ))
                            ) : (
                                //localStorage.removeItem('AUTH_TOKEN')
                                console.log('removing token')
                            )}
                        </div>
                    </div>
                )
            }
        </Query>
    );
};

export default Home;
