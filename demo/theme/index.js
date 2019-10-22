import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { black, whiteLight, red } from 'demo/theme/colors';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Ubuntu+Mono:400,400i,700,700i&display=swap&subset=cyrillic-ext');
  html {
    font-size: 100%;
    font-family: 'Ubuntu Mono', Consolas, monospace;
  }
  body {
    display: flex;
    justify-content: center;
    background-color: ${ whiteLight };
    min-height: 100vh;
    font-size: 1em;
    margin: 0;
  }
  main#app {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background-color: ${ whiteLight };
    min-height: 100vh;
  }
`;

export const Article = styled.article`
  font-family: 'Ubuntu Mono', Consolas, monospace;
  color: ${ black };
  background-color: ${ whiteLight };
  padding: 0 0 1rem 0;
  @media (max-width: 159ch) {
    // only one columns can fit
    display: flex;
    width: 100vw;
    flex-direction: column;
  }
  @media (min-width: 160ch) {
    // two columns fit
    display: grid;
    max-width: 160ch;
    justify-content: space-between;
    grid-template-columns: max-content 80ch;
    grid-template-areas: 'header    code'
                         'component code'
                         'comment   code';
  }
`;
export const Header = styled.h1`
  grid-area: header;
  padding: .5rem;
  margin: 0;
`;
export const Comment = styled.em`
  grid-area: comment;
  padding: .5rem;
  margin: 0;
`;
export const Component = styled.p`
  grid-area: component;
  padding: .5rem;
  margin: 0;
`;
export const A = styled.a`
  color: ${ red };
  cursor: pointer;
`;
