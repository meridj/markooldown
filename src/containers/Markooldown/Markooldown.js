/*
** Packages
*/
import React, { Component } from 'react';
import marked from 'marked';
import { connect } from 'react-redux';

/*
** Components
*/
import {
  Textarea,
  MarkdownPreview,
  Header,
  Modal,
  Overlay
} from '../../components/';

/**
 * Actions
 */
import * as actions from '../../actions';

/*
** Styles
*/
import './Markooldown.css';

class Markooldown extends Component {
  constructor(props) {
    super(props);

    this.handleChangeOnInput = this.handleChangeOnInput.bind(this);
  }

  /**
   * Handlers
   */
  handleChangeOnInput(evt) {
    const newInputValue = evt.target.value;

    this.props.addMarkdownData(newInputValue);
  }

  /**
   * Renderers
   */
  render() {
    const { markdown, isModalOpen, toggleModal } = this.props;

    return (
      <React.Fragment>
        <Header />
        <Overlay onClick={toggleModal} isOpen={isModalOpen} />
        <Modal isOpen={isModalOpen} />
        <div className="markooldown">
          <Textarea onChange={this.handleChangeOnInput} value={markdown} />
          <MarkdownPreview
            dangerouslySetInnerHTML={{
              __html: marked(markdown, { sanitize: true })
            }}
          />
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps({ markdown, isModalOpen }) {
  return { markdown, isModalOpen };
}

export default connect(mapStateToProps, actions)(Markooldown);
