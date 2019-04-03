import React, { useState } from 'react';
import './Cards.scss';
import '../../App.scss';

const Cards = () => {
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
                    <h1 class="card__heading">Item name</h1>
                    <h1 class="card__description">Price</h1>
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
                            <a
                                href="/"
                                class="btn btn--pad-20 btn--uppercase btn--secondary btn--right-float"
                            >
                                Add to Cart
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default Cards;
