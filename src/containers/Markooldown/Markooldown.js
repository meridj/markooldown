/*
** Packages
*/
import React, { Component } from 'react';
import marked from 'marked';

/*
** Components
*/
import { Input, MarkdownPreview, Button } from '../../components/';

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

  downloadMarkdownFile(data, filename, type) {
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
    return [
      <Button
        onClick={this.downloadMarkdownFile}
        inputValueToFileValue={this.state.inputValue}
      >
        Export Markdown
      </Button>,

      <div className="markooldown">
        <Input onChange={this.handleChangeOnInput} value={inputValue} />
        <MarkdownPreview
          dangerouslySetInnerHTML={{
            __html: marked(inputValue, { sanitize: true })
          }}
        />
      </div>
    ];
  }
}

export default Markooldown;
