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
** Datas
*/
import defaultValueMd from '../../datas/defaultValueMd';

/*
** Styles
*/
import './Markooldown.css';

class Markooldown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: localStorage.getItem('markdown') || defaultValueMd
    };

    this.handleChangeOnInput = this.handleChangeOnInput.bind(this);
  }

  handleChangeOnInput(evt) {
    const newInputValue = evt.target.value;
    this.setState({ inputValue: newInputValue }, () => {
      localStorage.setItem('markdown', this.state.inputValue);
    });
  }

  download(data, filename, type) {
    const file = new Blob([data], { type: type });
    const a = document.createElement('a'),
      url = URL.createObjectURL(file);
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 0);
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
        <button
          onClick={() =>
            this.download(this.state.inputValue, 'test.md', 'markdown')
          }
        >
          Download
        </button>
      </div>
    );
  }
}

export default Markooldown;
