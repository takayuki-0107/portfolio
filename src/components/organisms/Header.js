import React from 'react';
import styled from '@emotion/styled';

import HeaderTitle from '../atoms/HeaderTitle';

import Color from '../../styles/Color';
import HamburgerMenu from '../atoms/HamburgerMenu';
import NavList from '../molecules/NavList';

const Header = styled.h1`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  background-color: ${Color.White};
  box-shadow: 0 3px 3px ${Color.Text};
  padding: 0 2rem;
  /* z-index: 10; */
`;
const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 70px;
`;

export default ({ handleToggle }) => {
  return (
    <Header>
      <Inner>
        <HeaderTitle />
        <NavList />
        <HamburgerMenu handleToggle={handleToggle} />
      </Inner>
    </Header>
  );
};
