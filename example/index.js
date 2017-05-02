import React from 'react';
import { render } from 'react-dom';
import MarkdownForReact from '../src/markdown-for-react';
import './style.less'

const Example = () => {

  const value = `

# \`markdown-for-react\`
- __[markdown-it](https://nodeca.github.io/pica/demo/)__ - high quality and fast image resize in browser.
- __[react-html-parser](https://github.com/nodeca/babelfish/)__ - developer friendly i18n with plurals support and easy syntax.
- __[highlight.js](https://github.com/nodeca/babelfish/)__ - developer friendly i18n with plurals support and easy syntax.


## For Example:

# h1 text
## h2 text
### h3 text
#### h4 text
##### h5 text
###### h6 text

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~

> china
>> heilongjiang
>>> harbin

+ Create a list by starting a line with \`+\`, \`-\`, or \`*\`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. react
2. vue
3. angular
1. You can use sequential numbers...
1. ...or keep all the numbers as \`1.\`

Start numbering with offset:

57. foo
1. bar

Inline \`code\`

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

Syntax highlighting

\`\`\` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
\`\`\`

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

![Minion](https://octodex.github.com/images/minion.png)

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"

- 19^th^
- H~2~O

`;


  return (
    <div className="markdown-for-react">
      <h1>markdown-for-react demo</h1>
      <div className="markdown">
        {
          value.split("\n").map((data, index) => <p key={index}>{data}</p>)
        }
      </div>
      <div className="html">
        <MarkdownForReact value={value} />
      </div>
      <div className="gh-ribbon"><a href="https://github.com/jindada/markdown-for-react.git" target="_blank">Fork me on GitHub</a></div>
    </div>
  );
};

render(<Example />, document.getElementById('init'));

