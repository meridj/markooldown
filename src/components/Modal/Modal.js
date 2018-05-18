/**
 * Packages
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
 * Components
 */
import { Button, Input } from '../';

/**
 * Helpers
 */
import downloadMarkdownFile from '../../helpers';

/**
 * Actions
 */
import * as actions from '../../actions';

/**
 * Styles
 */
import './Modal.css';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.handleClickOnDownload = this.handleClickOnDownload.bind(this);
    this.handleChangeOnInput = this.handleChangeOnInput.bind(this);
  }

  /**
   * Handlers
   */
  handleClickOnDownload() {
    this.props.toggleModal();
    downloadMarkdownFile(this.props.markdown, this.props.markdownFileName);
  }

  handleChangeOnInput(evt) {
    const newInputValue = evt.target.value;
    this.props.addMarkdownFileName(newInputValue);
  }

  render() {
    const { isOpen, toggleModal, markdownFileName } = this.props;
    const haveToDisplay = isOpen ? { display: 'flex' } : { display: 'none' };

    return (
      <div className="modal" style={haveToDisplay}>
        <h2>Export markdown</h2>
        <p>The downloaded markdown file will be in your downloads folder</p>
        <Input value={markdownFileName} onChange={this.handleChangeOnInput} />
        <div className="buttons">
          <Button onClick={toggleModal}>Cancel</Button>
          <Button onClick={this.handleClickOnDownload}>Download</Button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ markdown, markdownFileName }) {
  return { markdown, markdownFileName };
}

export default connect(mapStateToProps, actions)(Modal);
