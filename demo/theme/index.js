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
    background-color: ${ whiteLight };
    min-height: 100vh;
    font-size: 1em;
  }
  main#app {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${ whiteLight };
    min-height: 100vh;
  }
`;

export const Article = styled.article`
  display: grid;
  color: ${ black };
  background-color: ${ whiteLight };
  padding: 0 0 1rem 0;
  grid-template-columns: repeat(auto-fit, minmax(80ch, 1fr));
  width: 100vmin;
  font-family: 'Ubuntu Mono', Consolas, monospace;
`;
export const Main = styled.main`
  display: flex;
  flex-direction: column;
`;
export const Header = styled.h1`
  padding: .5rem;
  margin: 0;
`;
export const Comment = styled.em`
  padding: .5rem;
  margin: 0;
`;
export const Component = styled.p`
  padding: .5rem;
  margin: 0;
`;
export const A = styled.a`
  color: ${ red };
  cursor: pointer;
`;
