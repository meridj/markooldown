/**
 * Packages
 */
import React from 'react';
import { connect } from 'react-redux';
import LightSpeed from 'react-reveal/LightSpeed';

/**
 * Components
 */
import { Button, Nav } from '../';

/**
 * Actions
 */
import * as actions from '../../actions';

/**
 * Styles
 */
import './Header.css';

const Header = ({ toggleModal, isModalOpen }) => {
  console.log(isModalOpen);
  return (
    <header className="header">
      <LightSpeed when={!isModalOpen} right>
        <h1>Markooldown</h1>
      </LightSpeed>
      <Button onClick={toggleModal}>Export Markdown</Button>
      <Nav />
    </header>
  );
};

function mapStateToProps({ isModalOpen }) {
  return { isModalOpen };
}

export default connect(mapStateToProps, actions)(Header);
