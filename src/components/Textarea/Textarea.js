import React from 'react';
import PropTypes from 'prop-types';

/*
** Styles
*/
import './Textarea.css';

const Textarea = ({ onChange, value }) => (
  <textarea
    rows="30"
    cols="40"
    className="textarea"
    onChange={evt => onChange(evt)}
    value={value}
  />
);

Textarea.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default Textarea;
