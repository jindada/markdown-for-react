import React from 'react';
import MarkdownIt from 'markdown-it';
import ReactHtmlParser from 'react-html-parser';

class MarkdownForReact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const md = new MarkdownIt();
    const result = md.render(this.props.value);
    console.log(result);

    return (
      <div>{ReactHtmlParser(result)}</div>
    );
  }
}

export default MarkdownForReact;