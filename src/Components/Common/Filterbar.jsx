import React from 'react';
import './Navbar.scss';

const Filterbar = () => {
    return (
        <div className="menu cf">
            <div className="menu__row">
                <li className="menu__listleft">
                    <a className="filter__trigger">Sort by</a>
                </li>
                <li className="menu__listleft">
                    <a
                        className="menu__link"
                        onClick={() => {
                            localStorage.setItem('CRITERIA', 1);
                            window.location.reload();
                        }}
                    >
                        Price ascending
                    </a>
                </li>
                <li className="menu__listleft">
                    <a
                        className="menu__link"
                        onClick={() => {
                            localStorage.setItem('CRITERIA', -1);
                            window.location.reload();
                        }}
                    >
                        Price descending
                    </a>
                </li>
                <li className="menu__listleft">
                    <a
                        className="menu__link"
                        onClick={() => {
                            localStorage.setItem('CRITERIA', 0);
                            window.location.reload();
                        }}
                    >
                        Newest first
                    </a>
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
