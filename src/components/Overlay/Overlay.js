/**
 * Packages
 */
import React from 'react';
import { connect } from 'react-redux';

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
    <div onClick={() => onClick()} className="overlay" style={haveToDisplay} />
  );
};

export default connect(null, actions)(Overlay);
