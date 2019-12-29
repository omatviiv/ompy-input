// @flow
import React, { useState } from 'react';
import { A, Button } from 'omtv-theme';
import {
  Article, Header, Comment, Component, Code,
} from 'omtv-theme/theme/demoArticle';

import BareInput from 'componnt/bare';

const Artcl = () => {
  const [{ amount }, setAmount] = useState({ amount: 0 });

  return (
    <Article>
      <Header bookmark='debounce'>Debounce</Header>
      <Component>
        <BareInput
          value='default input'
          onChange={ e => setAmount(ps => ({ amount: ps.amount + 1 })) }
          debounceTimeout={ 200 }
        />
      </Component>
      <Comment>
        On change event handler is debounced with default timeout 300 ms.
        Change this with <strong>debounceTimeout</strong> prop.<br/><br/>
        onChange event handler fired <strong>
          { amount }
        </strong> time(s). <Button onClick={ e => setAmount({ amount: 0 }) }>
          reset counter
        </Button>
      </Comment>
      <Code>{ `
import React, { useState } from 'react';
import BareInput from 'omtv-react-input';

const Component = () => {
  const [{ amount }, setAmount] = useState({ amount: 0 });

  return (
    <BareInput
      value='default input'
      onChange={ e => setAmount(ps => ({ amount: ps.amount + 1 })) }
      debounceTimeout={ 200 }
    />
  );
};
      ` }</Code>
    </Article>
  );
};

export default Artcl;
