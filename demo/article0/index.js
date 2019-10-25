// @flow
import React from 'react';
import { Article, Header, Comment, Component, Code, A } from 'omtv-theme';

import BareInput from 'componnt';

const Artcl = () => (
  <Article>
    <Component>
      <BareInput value='default input' />
    </Component>
    <Comment>
    </Comment>
    <Code>{ `
import React from 'react';
import BareInput from 'omtv-react-input';

const Component = () => (
  <BareInput value='default input' />
);
    ` }</Code>
  </Article>
);

export default Artcl;
