import React from 'react';
import styled from '@emotion/styled';

const Background = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
`;

export default () => {
  return <Background></Background>;
};
