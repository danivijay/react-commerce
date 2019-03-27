import React from 'react';
import './Navbar.scss';

const Navbar = () => {
      return (
            <div class="menu cf">
                  <a href="/" class="menu__trigger js-trigger">
                        <i>Logo</i>
                  </a>

                  <ul class="menu__row">
                        <li class="menu__list">
                              <a href="/cart" class="menu__link">
                                    Login
                              </a>
                        </li>

                        <li class="menu__list">
                              <a href="/cart" class="menu__link">
                                    Cart
                              </a>
                        </li>
                  </ul>
            </div>
      );
};

export default Navbar;
