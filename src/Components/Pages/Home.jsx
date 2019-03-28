import React from 'react';
import '../../App.scss';
import Cards from '../Common/Cards';
import Hero from '../Common/Hero';
import Filterbar from '../Common/Filterbar';

const Home = () => {
    return (
        <div>
            <Hero />
            <Filterbar />
            <div class="grid">
                <div class="grid__item grid__item--sm-span-4">
                    <Cards />
                </div>
                <div class="grid__item grid__item--sm-span-4">
                    <Cards />
                </div>
                <div class="grid__item grid__item--sm-span-4">
                    <Cards />
                </div>
            </div>
        </div>
    );
};

export default Home;
