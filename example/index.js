import React from 'react';
import { render } from 'react-dom';
import MarkdownForReact from '../src/markdown-for-react';

const Example = () => {

  const value = `
# 123
`
  return (
    <MarkdownForReact value={value} />
  );
};

render(<Example />, document.getElementById('init'));

