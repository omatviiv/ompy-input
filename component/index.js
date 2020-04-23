// @flow
import React from 'react';
import styled from 'styled-components';

import BareInput from './bare';

/*::
import type { Node } from 'react';

type Props = {|
  label?: string,
  value?: string,
  onChange?: (value: string) => any,
  debounceTimeout?: number,
  theme?: {|
    Container: * => Node,
    Label: * => Node,
    BareInput: * => Node,
  |},
  rest?: any,
|}
*/
export const thm = { // default theme
  Container: styled.div``,
  Label: styled.label``,
  BareInput: styled.input`
    padding: 5px;
  `,
};
const Input = ({
  label = '',
  value = '',
  onChange = () => {},
  debounceTimeout = 300,
  theme = thm,
  ...rest
}/*: Props*/) => (
  <BareInput
    value={value}
    onChange={onChange}
    debounceTimeout={300}
    theme = {{ BareInput: theme.BareInput }}
    {...rest}
  />
);

export default Input;
