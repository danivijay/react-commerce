import React from 'react';
import './App.scss';
import Cards from './Cards';

const Home = () => {
      return (
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
      );
};

export default Home;
