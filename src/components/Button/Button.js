/*
** Packages
*/
import React from 'react';

/*
** Styles
*/
import './Button.css';

const Button = ({ children, onClick }) => {
  return <button onClick={() => onClick()}>{children}</button>;
};

export default Button;
