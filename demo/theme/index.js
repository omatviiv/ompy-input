import React from 'react';
import styled from 'styled-components';

import { black, whiteLight, red } from './jssyntax';

export const Article = styled.article`
  display: grid;
  justify-content: space-between;
  color: ${ black };
  background-color: ${ whiteLight };
  padding: 0 0 20px 0;
  grid-template-areas: 'header    code'
                       'component code'
                       'comment   code';
  width: 100%;
`;
export const Header = styled.h2`
  grid-area: header;
  padding: 10px;
  margin: 0;
`;
export const Comment = styled.em`
  grid-area: comment;
  padding: 10px;
  margin: 0;
`;
export const Component = styled.p`
  grid-area: component;
  padding: 10px;
  margin: 0;
`;
export const A = styled.a`
  color: ${ red };
  cursor: pointer;
`;
