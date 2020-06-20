import React from 'react';
import styled from '@emotion/styled';

import MobileNavList from '../molecules/MobileNavList';
import { TISnsLink, FGSnsLink } from '../molecules/SnsLink';

import Color from '../../styles/Color';
import HeaderTitle from '../atoms/HeaderTitle';
import DrawerBackground from '../atoms/DrawerBackground';
import HamburgerMenu from '../atoms/HamburgerMenu';

const MobileDrawer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  color: ${Color.Text};
  background-color: ${Color.White};
  width: 300px;
  height: 100vh;
  margin-left: auto;
  z-index: 99;
`;
const Inner = styled.div`
  padding-top: 70px;
  text-align: center;
`;

export default ({ toggle, handleToggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <DrawerBackground />
          <MobileDrawer>
            <HamburgerMenu handleToggle={handleToggle} />
            <Inner>
              <HeaderTitle />
              <MobileNavList />
              <TISnsLink />
              <FGSnsLink />
            </Inner>
          </MobileDrawer>
        </>
      ) : null}
    </>
  );
};
