/*
** Packages
*/
import React from 'react';

/*
** Styles
*/
import './Button.css';

const Button = ({ onClick, inputValueToFileValue, children }) => {
  return (
    <button
      onClick={() => onClick(inputValueToFileValue, 'test.md', 'markdown')}
    >
      {children}
    </button>
  );
};

export default Button;
