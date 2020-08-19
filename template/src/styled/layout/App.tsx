import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const FullPageGlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    display: flex;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  #root * {
    display: flex;
  }
`;

const FullPageContainer = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
`;

export const AppLayout: React.FC = function FullPage({ children }) {
  return (
    <>
      <FullPageGlobalStyle />
      <FullPageContainer>{children}</FullPageContainer>
    </>
  );
};
