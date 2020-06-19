import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-scroll';

import Color from '../../styles/Color';

const NavLink = styled(Link)`
  color: ${Color.Text};
  font-size: 2.5rem;
`;

export default ({ navName, navLink, offset, duration }) => {
  return (
    <>
      <NavLink
      // activeClass="active"
      // to={navLink}
      // spy={true}
      // smooth={true}
      // offset={offset}
      // duration={duration}
      >
        {navName}
      </NavLink>
    </>
  );
};
