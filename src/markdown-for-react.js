import React from 'react';
import MarkdownIt from 'markdown-it';
import ReactHtmlParser from 'react-html-parser';
import hljs from 'highlight.js';
import 'github-markdown-css/github-markdown.css';
import 'highlight.js/styles/hybrid.css'; // hybrid, vs, hybrid, monokai

const Middleware = {
  quot: (result) => {
    return result.replace(/&quot;/g, "\"");
  },
  lt: (result) => {
    return result.replace(/&lt;/g, "<");
  },
  gt: (result) => {
    return result.replace(/&gt;/g, ">");
  },
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
    result = Middleware.quot(result);
    result = Middleware.lt(result);
    result = Middleware.gt(result);

    // result = Middleware.doubleEqual(result);
    
    return (
      <div className="markdown-body" >{ReactHtmlParser(result)}</div>
    );
  }
}

export default MarkdownForReact;