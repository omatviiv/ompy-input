// @flow
import React from 'react';
import styled from 'styled-components';

export const InputStyled = styled.input`
  padding: 10px;
`;
/*::
type Props = {|
  value: string,
|}
*/
const Input = (p/*: Props*/) => <InputStyled type='text' value={ p.value } />;

export default Input;
