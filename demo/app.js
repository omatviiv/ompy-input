// @flow
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Input from 'componnt';

const App = () => {
  const [st, setSt] = useState({ defaultInput: 'vvv' });
  const updateInputValue = e => setSt({ defaultInput: 'new value' });

  return (
    <div>
      <Input value={ st.defaultInput } />
      <br/>
      <em>
        Click
        <button onClick={ updateInputValue }>here</button>
        to update value of the input to 'new value'
      </em>
    </div>
  );
};

export default App;
