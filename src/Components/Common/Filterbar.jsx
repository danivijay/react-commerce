import React, { Fragment } from 'react';
import './Navbar.scss';

const Filterbar = (links) => {
    return (
        <div className="menu cf">
            <ul className="menu__row">
                <li className="menu__list">
                    <a href="/cart" className="menu__link">
                        Filter
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Filterbar;
