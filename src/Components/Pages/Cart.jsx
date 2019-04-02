import React from 'react';
import './cart.scss';
const Cart = () => {
    return (
        <div class="grid">
            <div class="grid__item grid__item--sm-span-6">
                <input
                    class="input"
                    type="text"
                    name="name"
                    placeholder="Name"
                />
                <textarea
                    class="input"
                    type="text"
                    rows="10"
                    name="Address"
                    placeholder="Address"
                    fontsize="15px"
                />

                <button class="btn">Checkout</button>
            </div>
            <div class="grid__item grid__item--sm-span-6">
                <article class="card">
                    <div class="card__bottom">
                        <h1>Product1</h1>
                        <h1>Qty</h1>
                        <h1>Price</h1>
                        <h1>...</h1>
                        <h1>Product2</h1>
                        <h1>Qty</h1>
                        <h1>Price</h1>
                        <h1>...</h1>
                        <h1>Product1</h1>
                        <h1>Qty</h1>
                        <h1>Price</h1>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default Cart;
