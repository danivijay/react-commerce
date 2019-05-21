import React, { Fragment } from 'react';
import './Navbar.scss';

const Navbar = () => {
    return (
        <div className="menu cf">
            <a href="/" className="menu__trigger js-trigger">
                <i>Logo</i>
            </a>

            <ul className="menu__row">
                <li className="menu__list">
                    <a href="/login" className="menu__link">
                        Login
                    </a>
                </li>

                <li className="menu__list">
                    <a href="/cart" className="menu__link">
                        Cart
                    </a>
                </li>
                <li className="menu__list">
                    <a href="/myproducts" className="menu__link">
                        My Products
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
