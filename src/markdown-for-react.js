import React from 'react';
import MarkdownIt from 'markdown-it';
import ReactHtmlParser from 'react-html-parser';
import hljs from 'highlight.js';
import 'github-markdown-css/github-markdown.css';
import 'highlight.js/styles/monokai.css'; // hybrid, vs, hybrid, monokai

const Middleware = {
  doubleQuotation: (result) => {
    return result.replace(/&quot;/g, "\"");
  },
  doubleEqual: (result) => {
    return result.replace(/==[^\s]*==/g, "<mark>").replace(/==<\/p>/g, "</mark>");
  }
}

class MarkdownForReact extends React.Component {
  
  render() {
    const md = new MarkdownIt({
      html: true,
      xhtmlOut: true,
      breaks: true,
      highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(lang, str).value;
          } catch (__) {}
        }
        return '';
      }
    });

    let result = md.render(this.props.value);
    // 过滤双引号 &quot; -> ""
    result = Middleware.doubleQuotation(result);

    // result = Middleware.doubleEqual(result);
    
    return (
      <div className="markdown-body" >{ReactHtmlParser(result)}</div>
    );
  }
}

export default MarkdownForReact;