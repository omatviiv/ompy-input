// @flow
import React from 'react';
import ReactDOM from 'react-dom';

import Input from '../component';

const App = () => (
  <div>
    demo <Input value='vvvv' />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
