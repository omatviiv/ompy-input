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
  className?: string,
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
  className,
}: Props) => (
  <BareInput
    value={value}
    onChange={onChange}
    debounceTimeout={300}
    theme = {{ BareInput: theme.BareInput }}
    className={className}
  />
);

export default Input;
