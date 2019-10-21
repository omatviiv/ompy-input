// @flow
import React, { useState } from 'react';
import { Prism as Code } from 'react-syntax-highlighter';

import BareInput from 'componnt';
import syntax from 'demo/theme/prism';
import { Article, Header, Comment, Component, A, Main } from 'demo/theme';

const Article1 = () => {
  const [val, setVal] = useState/*<string>*/('default input');
  
  return (
    <Article>
      <Main>
        <Header>Force input value update</Header>
        <Component>
          <BareInput value={ val } />
        </Component>
        <Comment>
          Click
          <A
            onClick={ e => setVal('new value') }
          > here </A>
          to update input value to 'new value'
        </Comment>
      </Main>
      <Code language='javascript' style={ syntax }>{ `
import React, { useState } from 'react';
import BareInput from 'omtv-react-input';

const Component = () => {
  const [val, setVal] = useState('default input');
  
  return (
    <>
      <BareInput value={ val } />
      Click <a onClick={ e => setVal('new value') }> here </a>
      to update input value to 'new value'
    </>
  );
};
      ` }</Code>
    </Article>
  );
};

export default Article1;
