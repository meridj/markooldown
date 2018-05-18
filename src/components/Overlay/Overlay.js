/**
 * Packages
 */
import React from 'react';
import { connect } from 'react-redux';
import Fade from 'react-reveal/Fade';

/**
 * Actions
 */
import * as actions from '../../actions';

/**
 * Styles
 */
import './Overlay.css';

const Overlay = ({ isOpen, onClick }) => {
  const haveToDisplay = isOpen ? { display: 'flex' } : { display: 'none' };

  return (
    <Fade duration={200} when={isOpen}>
      <div
        onClick={() => onClick()}
        className="overlay"
        style={haveToDisplay}
      />
    </Fade>
  );
};

export default connect(null, actions)(Overlay);
