// @flow
import React from 'react';
import styled from 'styled-components';

/*::
import type { Node } from 'react';

type Props = {|
  value: string,
  theme?: {|
    Input: * => Node,
  |},
|}
*/
const Input = ({
  value,
  theme = {
    Input: styled.input`
      padding: 10px;
    `,
  },
}/*: Props*/) => <theme.Input type='text' value={ value } />;

export default Input;
