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
export const theme = {
  Input: styled.input`
    padding: 10px;
  `,
};
const Input = ({
  value,
  thm = theme,
}/*: Props*/) => <thm.Input type='text' value={ value } />;

export default Input;
