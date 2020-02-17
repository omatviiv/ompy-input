// @flow
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { debounce } from 'throttle-debounce';

/*::
import type { Node } from 'react';

type Props = {|
  value?: string,
  onChange?: (value: string) => any,
  debounceTimeout?: number,
  theme?: {|
    BareInput: * => Node,
  |},
|}
*/
export const thm = { // default theme
  BareInput: styled.input`
    padding: 5px;
  `,
};
const BareInput = ({
  value = '',
  onChange = () => {},
  debounceTimeout = 300,
  theme = thm,
}/*: Props*/) => {
  const [{ val }, setVal] = useState({ val: value });
  const [{ onChangeDebounced }, setOnChangeDebounced ] = useState({
    onChangeDebounced: debounce(debounceTimeout, onChange),
  });
  useEffect(() => { setVal({ val: value }); }, [value]);
  useEffect(() => { onChangeDebounced(val); }, [val]);

  return <theme.BareInput
    type='text'
    value={ val }
    onChange={ e => setVal({ val: e.currentTarget.value}) }
  />;
};

export default BareInput;
