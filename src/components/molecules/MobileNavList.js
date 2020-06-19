import React from 'react';
import styled from '@emotion/styled';

import NavLink from '../atoms/Nav';

const MobileNavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
  li {
    margin-bottom: 3rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export default () => {
  return (
    <MobileNavList>
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
    </MobileNavList>
  );
};
