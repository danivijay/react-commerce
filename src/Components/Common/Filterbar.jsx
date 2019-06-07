import React from 'react';
import './Navbar.scss';

const Filterbar = (links) => {
    return (
        <div className="menu cf">
            <div className="menu__row">
                <li className="menu__listleft">
                    <a className="filter__trigger">Sort by</a>
                </li>
                <li className="menu__listleft">
                    <a className="menu__link">Price ascending</a>
                </li>
                <li className="menu__listleft">
                    <a className="menu__link">Price descending</a>
                </li>
                <li className="menu__listleft">
                    <a className="menu__link">Newest first</a>
                </li>
                <li className="menu__list">
                    <input
                        className="menu__search"
                        type="text"
                        placeholder="Search.."
                    />
                </li>
            </div>
        </div>
    );
};

export default Filterbar;
