// @flow
import React, { useState } from 'react';
import styled from 'styled-components';
import Code from 'react-syntax-highlighter';

import BareInput from 'componnt';
import syntax, { black, whiteLight, red } from './jssyntax';

const Article = styled.article`
  display: grid;
  justify-content: space-between;
  color: ${ black };
  background-color: ${ whiteLight };
  padding: 0 0 20px 0;
  grid-template-areas: 'header    code'
                       'component code'
                       'comment   code';
  width: 100%;
`;
const Header = styled.h2`
  grid-area: header;
  padding: 10px;
  margin: 0;
`;
const Comment = styled.em`
  grid-area: comment;
  padding: 10px;
  margin: 0;
`;
const Component = styled.p`
  grid-area: component;
  padding: 10px;
  margin: 0;
`;
const A = styled.a`
  color: ${ red };
  cursor: pointer;
`;

const App = () => {
  const [article1, setArticle1] = useState({
    defaultInput: 'default input',
  });

  return (
    <>
      <Article>
        <Header>Basic usage</Header>
        <Component>
          <BareInput value='default input' />
        </Component>
        <Code language='javascript' style={ syntax }>{ `
import React from 'react';
import BareInput from 'react';

const Component = () => (
  <BareInput value='default input' />
);
        ` }</Code>
        <Comment>
        </Comment>
      </Article>
      <Article>
        <Header>Force input value update</Header>
        <Component>
          <BareInput value={ article1.defaultInput } />
        </Component>
        <Code language='javascript' style={ syntax }>{ `
import React, { useState } from 'react';
import BareInput from 'react';

const Component = () => {
  const [default, setDefault] = useState('default input');
  
  return (
    <>
      <BareInput value={ default } />
      Click <a onClick={ e => setDefault('new value') }> here </a>
      to update input value to 'new value'
    </>
  );
};
        ` }</Code>
        <Comment>
          Click
          <A
            onClick={ e => setArticle1({ defaultInput: 'new value' }) }
          > here </A>
          to update input value to 'new value'
        </Comment>
      </Article>
    </>
  );
};

export default App;
