import React, { Fragment } from 'react';
import './Navbar.scss';

function parseJWT(token) {
    if (!token) {
        return;
    }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
}

const Navbar = () => {
    const authToken = localStorage.getItem('AUTH_TOKEN');
    var tokendata = parseJWT(authToken);
    if (tokendata && tokendata.userType)
        console.log('userType', tokendata.userType);

    return (
        <div className="menu cf">
            <a href="/" className="menu__trigger js-trigger">
                <i>Logo</i>
            </a>

            <ul className="menu__row">
                {tokendata ? (
                    <li className="menu__list">
                        <a
                            className="menu__link"
                            onClick={() => {
                                localStorage.removeItem('AUTH_TOKEN');
                                window.location = '/login-signup';
                            }}
                        >
                            Logout
                        </a>
                    </li>
                ) : (
                    <li className="menu__list">
                        <a href="/login-signup" className="menu__link">
                            Login
                        </a>
                    </li>
                )}
                {tokendata && tokendata.userType === 'admin' ? (
                    <li className="menu__list">
                        <a href="/admin" className="menu__link">
                            Dashboard
                        </a>
                    </li>
                ) : tokendata && tokendata.userType === 'buyer' ? (
                    <li className="menu__list">
                        <a href="/myproducts" className="menu__link">
                            My Products
                        </a>
                    </li>
                ) : (
                    <li className="menu__list" />
                )}

                {tokendata && tokendata.userType === 'buyer' ? (
                    <li className="menu__list">
                        <a href="/cart" className="menu__link">
                            Cart
                        </a>
                    </li>
                ) : (
                    <li className="menu__list" />
                )}
            </ul>
        </div>
    );
};

export default Navbar;
