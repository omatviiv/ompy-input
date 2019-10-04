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
export const thm = {
  Input: styled.input`
    padding: 10px;
  `,
};
const Input = ({
  value,
  theme = thm,
}/*: Props*/) => <theme.Input type='text' value={ value } />;

export default Input;
