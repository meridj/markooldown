import React from 'react';
import PropTypes from 'prop-types';

/*
** Styles
*/
import './Input.css';

const Input = ({ onChange, value }) => (
  <textarea
    rows="30"
    cols="40"
    className="textarea"
    onChange={evt => onChange(evt)}
    value={value}
  />
);

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default Input;
