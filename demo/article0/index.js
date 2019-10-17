// @flow
import React from 'react';
import Code from 'react-syntax-highlighter';

import BareInput from 'componnt';
import syntax from 'demo/theme/jssyntax';
import { Article, Header, Comment, Component, A } from 'demo/theme';

const Article0 = () => (
  <Article>
    <Header>Basic usage</Header>
    <Component>
      <BareInput value='default input' />
    </Component>
    <Code language='javascript' style={ syntax }>{ `
import React from 'react';
import BareInput from 'omtv-react-input';

const Component = () => (
  <BareInput value='default input' />
);
    ` }</Code>
    <Comment>
    </Comment>
  </Article>
);

export default Article0;
