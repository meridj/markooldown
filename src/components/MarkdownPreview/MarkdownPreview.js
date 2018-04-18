import React from 'react';
import PropTypes from 'prop-types';

/*
** Styles
*/
import './MarkdownPreview.css';

const MarkdownPreview = ({ dangerouslySetInnerHTML }) => (
  <div className="preview" dangerouslySetInnerHTML={dangerouslySetInnerHTML} />
);

MarkdownPreview.propTypes = {};

export default MarkdownPreview;
