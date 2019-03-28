import React from 'react';
import './Cards.scss';
import '../../App.scss';

const Cards = () => {
    return (
        <div class="cards">
            <article class="card">
                <div class="card__top">
                    <img src="https://picsum.photos/250/200?random" alt="" />
                </div>
                <div class="card__bottom">
                    <h1 class="card__heading">Item name</h1>
                    <h1 class="card__description">Price</h1>
                </div>
                <div class="card__footer">
                    <input type="number" name="quantity" min="1" value="1" />

                    <a
                        href="/"
                        class="btn btn--pad-20 btn--uppercase btn--secondary"
                    >
                        Buy now
                    </a>
                </div>
            </article>
        </div>
    );
};

export default Cards;
