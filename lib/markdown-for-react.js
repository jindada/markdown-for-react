'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _markdownIt = require('markdown-it');

var _markdownIt2 = _interopRequireDefault(_markdownIt);

var _reactHtmlParser = require('react-html-parser');

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

var _highlight = require('highlight.js');

var _highlight2 = _interopRequireDefault(_highlight);

require('github-markdown-css/github-markdown.css');

require('highlight.js/styles/hybrid.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// hybrid, vs, hybrid, monokai

var Middleware = {
  quot: function quot(result) {
    return result.replace(/&quot;/g, "\"");
  },
  lt: function lt(result) {
    return result.replace(/&lt;/g, "<");
  },
  gt: function gt(result) {
    return result.replace(/&gt;/g, ">");
  }
};

var MarkdownForReact = function (_React$Component) {
  _inherits(MarkdownForReact, _React$Component);

  function MarkdownForReact() {
    _classCallCheck(this, MarkdownForReact);

    return _possibleConstructorReturn(this, (MarkdownForReact.__proto__ || Object.getPrototypeOf(MarkdownForReact)).apply(this, arguments));
  }

  _createClass(MarkdownForReact, [{
    key: 'render',
    value: function render() {
      var md = new _markdownIt2.default({
        html: true,
        xhtmlOut: true,
        breaks: true,
        highlight: function highlight(str, lang) {
          if (lang && _highlight2.default.getLanguage(lang)) {
            try {
              return _highlight2.default.highlight(lang, str).value;
            } catch (__) {}
          }
          return '';
        }
      });

      var result = md.render(this.props.value);
      // 过滤双引号 &quot; -> ""
      result = Middleware.quot(result);
      result = Middleware.lt(result);
      result = Middleware.gt(result);

      // result = Middleware.doubleEqual(result);

      return _react2.default.createElement(
        'div',
        { className: 'markdown-body' },
        (0, _reactHtmlParser2.default)(result)
      );
    }
  }]);

  return MarkdownForReact;
}(_react2.default.Component);

exports.default = MarkdownForReact;