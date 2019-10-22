// @flow
import React from 'react';
import { Prism as Code } from 'react-syntax-highlighter';

import BareInput from 'componnt';
import syntax from 'demo/theme/prism';
import { Article, Header, Comment, Component, A, Main } from 'demo/theme';

const Article0 = () => (
  <Article>
    <Header>Basic usage</Header>
    <Component>
      <BareInput value='default input' />
    </Component>
    <Comment>
    </Comment>
    <Code language='javascript' style={ syntax }>{ `
import React from 'react';
import BareInput from 'omtv-react-input';

const Component = () => (
  <BareInput value='default input' />
);
    ` }</Code>
  </Article>
);

export default Article0;
