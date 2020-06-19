import React from 'react';
import styled from '@emotion/styled';

import Color from '../../styles/Color';

const Hamberger = styled.button`
  position: fixed;
  top: 23px;
  right: 30px;
  background-color: unset;
  border: none;
  outline: none !important;
  cursor: pointer;
  z-index: 999;
  @media (min-width: 768px) {
    display: none;
  }
  span {
    background-color: ${Color.Black};
    width: 35px;
    height: 2px;
    display: block;
    margin-bottom: 9px;
    transition: transform 0.7s;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export default ({ handleToggle }) => {
  return (
    <Hamberger onClick={handleToggle}>
      <span></span>
      <span></span>
      <span></span>
    </Hamberger>
  );
};
