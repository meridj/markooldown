/**
 * Packages
 */
import React from 'react';
import Ionicon from 'react-ionicons';

/**
 * Styles
 */
import './Nav.css';

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="https://github.com/meridj/markooldown" target="no_blank">
            <Ionicon icon="logo-github" fontSize="25px" color="#5753c9" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
