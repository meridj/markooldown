import React from 'react';
import PropTypes from 'prop-types';

/*
** Styles
*/
import './Input.css';

const Input = ({ onChange, value }) => (
  <input
    className="input"
    placeholder="Markdown name"
    onChange={evt => onChange(evt)}
    value={value}
  />
);

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default Input;
