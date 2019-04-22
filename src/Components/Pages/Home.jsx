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
        <Query query={GET_PRODUCTS}>
            {({ data }) =>
                console.log(data) || (
                    <div>
                        <Hero />
                        <Filterbar />
                        <div className="grid">
                            {data &&
                                data.products &&
                                data.products.map((product) => (
                                    <div class="grid__item grid__item--sm-span-4">
                                        <Cards product={product} />
                                    </div>
                                ))}
                        </div>
                    </div>
                )
            }
        </Query>
    );
};

export default Home;
