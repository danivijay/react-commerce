import React from 'react';
import './Cards.scss';

const Cards = () => {
      return (
            <div class="cards">
                  <article class="card">
                        <div class="card__top">
                              <img src="https://picsum.photos/250/200?random" alt="" />
                        </div>
                        <div class="card__bottom">
                              <h1 class="card__heading">Item name</h1>
                              <p>item description</p>
                        </div>
                        <div class="card__footer">
                              <a href="/" class="btn btn--pad-20 btn--primary">
                                    Regular button
                              </a>
                              <a href="/" class="btn btn--pad-20 btn--uppercase btn--secondary">
                                    Buy now
                              </a>
                        </div>
                  </article>
            </div>
      );
};

export default Cards;
