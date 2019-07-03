import React, { useState } from 'react';
import './Navbar.scss';
import { Formik } from 'formik';

const Filterbar = () => {
    const [searchitem, setSearchitem] = useState(
        localStorage.getItem('SEARCHITEM'),
    );

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
                    <button
                        onClick={() => {
                            localStorage.setItem('SEARCHITEM', searchitem);
                            if (localStorage.getItem('SEARCHITEM').length !== 0)
                                localStorage.setItem('SEARCHMODE', 1);
                            else localStorage.setItem('SEARCHMODE', 0);
                            window.location.reload();
                        }}
                    >
                        search
                    </button>
                </li>

                {/* <li className="menu__list">
                    <button
                        class="search_button"
                        onClick={() => {
                            window.location.reload();
                        }}
                    />
                </li> */}
                <form>
                    <li className="menu__list">
                        <input
                            className="menu__search"
                            type="text"
                            placeholder="Search.."
                            value={searchitem}
                            onChange={(e) => setSearchitem(e.target.value)}
                        />
                    </li>
                </form>
            </div>
        </div>
    );
};

export default Filterbar;
