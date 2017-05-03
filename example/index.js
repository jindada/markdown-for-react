import React from 'react';
import { render } from 'react-dom';
import MarkdownForReact from '../src/markdown-for-react';
import './style.less';

const value = `
# h1 text
## h2 text
### h3 text
#### h4 text
##### h5 text
###### h6 text


"double quotes" and 'single quotes'

**bold text**

__bold text__

*italic text*

_italic text_

~~Strikethrough~~

> china
>> heilongjiang
>>> harbin

+ China
  - heilongjiang
    * harin
    + daqing
    - suihua
+ England

1. react
2. vue
3. angular
1. jquery
1. css

57. heilongjiang
1. beijing

    // hello world
    line 1
    line 2
    line 3

\`\`\` js
import React from 'react';
import { render } from 'react-dom';
import MarkdownForReact from 'markdown-for-react';

class Example extends React.Component {
  render() {
    return (
      <div>
        <MarkdownForReact value={"# qweqwe"} />
      </div>
    )
  }
}
render(<Example />, document.getElementById('init'));
\`\`\`

| lib    |     url     |
| ------ | ----------- |
| react  | https://github.com/facebook/react |
| vuejs  | https://github.com/vuejs/vue |
| angular| https://github.com/angular/angular |


| lib     |     url      |
| ------: | -----------: |
| react  | https://github.com/facebook/react |
| vuejs  | https://github.com/vuejs/vue |
| angular| https://github.com/angular/angular |


[link text](https://github.com/jindada/markdown-for-react)

[link with title](https://github.com/jindada/markdown-for-react "markdown-for-react")

![Minion](https://octodex.github.com/images/minion.png)

![Alt text][id]

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"
`;

class Example extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value}
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    });
  }

  render() {

    return (
      <div className="markdown-for-react">
        <h1>markdown-for-react demo</h1>
        <div className="markdown">
          <textarea value={this.state.value} onChange={ this.handleChange }></textarea>
        </div>
        <div className="html">
          <MarkdownForReact value={this.state.value} />
        </div>
        <div className="gh-ribbon"><a href="https://github.com/jindada/markdown-for-react.git" target="_blank">Fork me on GitHub</a></div>
      </div>
    );
  }
};

render(<Example />, document.getElementById('init'));

