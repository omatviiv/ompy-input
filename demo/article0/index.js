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
      <BareInput value='default input' />
    </Component>
    <Comment>
      Just input, no label
    </Comment>
    <Code>{ `
import React from 'react';
import BareInput from 'omtv-react-input/component/bare';

const Component = () => (
  <BareInput value='default input' />
);
    ` }</Code>
  </Article>
);

export default Artcl;
