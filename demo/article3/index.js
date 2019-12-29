// @flow
import React from 'react';
import { A } from 'omtv-theme';
import {
  Article, Header, Comment, Component, Code,
} from 'omtv-theme/theme/demoArticle';

import BareInput from 'componnt/bare';

const Artcl = () => (
  <Article>
    <Component>
      <BareInput />
    </Component>
    <Comment>
    </Comment>
    <Code>{ `
import React from 'react';
import Input from 'omtv-react-input';

const Component = () => (
  <Input />
);
    ` }</Code>
  </Article>
);

export default Artcl;
