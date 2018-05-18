/**
 * Packages
 */
import React from 'react';
import { connect } from 'react-redux';

/**
 * Components
 */
import Button from '../Button';

/**
 * Actions
 */
import * as actions from '../../actions';

/**
 * Styles
 */
import './Header.css';

const Header = ({ toggleModal }) => {
  return (
    <header className="header">
      <h1>Markooldown</h1>
      <Button onClick={toggleModal}>Export Markdown</Button>
    </header>
  );
};

export default connect(null, actions)(Header);
