// @flow
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

/*::
import type { Node } from 'react';

type Props = {|
  value?: string,
  onChange?: (value: string) => any,
  theme?: {|
    Input: * => Node,
  |},
|}
*/
export const thm = {
  Input: styled.input`
    padding: 5px;
  `,
};
const Input = ({
  value = '',
  onChange = (a, b) => a + b,
  theme = thm,
}/*: Props*/) => {
  const [st, setSt] = useState({ value });
  useEffect(() => { setSt({ value }); }, [value]);
  useEffect(() => { onChange(st.value); }, [st.value]);

  const handleInput = e => setSt({ value: e.currentTarget.value });

  return <theme.Input
    type='text'
    value={ st.value }
    onChange={ handleInput }
  />
};

export default Input;
