import React, { Fragment } from 'react';
import './Navbar.scss';

const Filterbar = (links) => {
    return (
        <div class="menu cf">
            <ul class="menu__row">
                <li class="menu__list">
                    <a href="/cart" class="menu__link">
                        Filter
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Filterbar;
