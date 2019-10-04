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
export const defaultTheme = {
  Input: styled.input`
    padding: 10px;
  `,
};
const Input = ({
  value,
  theme = defaultTheme,
}/*: Props*/) => <theme.Input type='text' value={ value } />;

export default Input;
