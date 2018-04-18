/*
** Packages
*/
import React, { Component } from 'react';
import marked from 'marked';

/*
** Components
*/
import { Input, MarkdownPreview } from '../../components/';

/*
** Styles
*/
import './Markooldown.css';

class Markooldown extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };

    this.handleChangeOnInput = this.handleChangeOnInput.bind(this);
  }

  handleChangeOnInput(evt) {
    const newInputValue = evt.target.value;
    this.setState({ inputValue: newInputValue });
  }

  render() {
    const { inputValue } = this.state;
    return (
      <div className="markooldown">
        <Input onChange={this.handleChangeOnInput} value={inputValue} />
        <MarkdownPreview
          dangerouslySetInnerHTML={{
            __html: marked(inputValue, { sanitize: true })
          }}
        />
      </div>
    );
  }
}

export default Markooldown;
