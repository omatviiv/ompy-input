// @flow
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

/*::
import type { Node } from 'react';

type Props = {|
  value?: string,
  onChange?: (value: string) => any,
  theme?: {|
    BareInput: * => Node,
  |},
|}
*/
export const thm = {
  BareInput: styled.input`
    padding: 5px;
  `,
};
const BareInput = ({
  value = '',
  onChange = (a, b) => a + b,
  theme = thm,
}/*: Props*/) => {
  const [{ val }, setVal] = useState({ val: value });
  useEffect(() => { setVal({ val: value }); }, [value]);
  useEffect(() => { onChange(val); }, [val]);

  return <theme.BareInput
    type='text'
    value={ val }
    onChange={ e => setVal({ val: e.currentTarget.value}) }
  />
};

export default BareInput;
