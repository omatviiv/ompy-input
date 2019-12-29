// @flow
import React, { useState } from 'react';
import { A } from 'omtv-theme';
import {
  Article, Header, Comment, Component, Code,
} from 'omtv-theme/theme/demoArticle';

import BareInput from 'componnt/bare';

const Artcl = () => {
  const [val, setVal] = useState/*<string>*/('default input');
  
  return (
    <Article>
      <Header bookmark='force-input-update'>Force input value update</Header>
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
      <Code>{ `
import React, { useState } from 'react';
import BareInput from 'omtv-react-input/component/bare';

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

export default Artcl;
