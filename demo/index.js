import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';

import App from './app';
import { GlobalStyle } from 'demo/theme';

ReactDOM.render(<>
  <GlobalStyle />
  <App />
</>, document.getElementById('app'));
