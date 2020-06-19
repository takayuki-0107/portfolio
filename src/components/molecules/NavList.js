import React from 'react';
import styled from '@emotion/styled';

import NavLink from '../atoms/Nav';

const NavList = styled.ul`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    li {
      margin-left: 2rem;
    }
  }
`;

export default () => {
  return (
    <NavList>
      <li>
        <NavLink
          navName="Profile"
          // navLink="profile"
          // offset={-70}
          // duration={800}
        />
      </li>
      <li>
        <NavLink
          navName="Skill"
          // navLink="profile"
          // offset={-70}
          // duration={800}
        />
      </li>
      <li>
        <NavLink
          navName="Works"
          // navLink="profile"
          // offset={-70}
          // duration={800}
        />
      </li>
      <li>
        <NavLink
          navName="Contact"
          // navLink="profile"
          // offset={-70}
          // duration={800}
        />
      </li>
    </NavList>
  );
};
