import React from 'react';
import styled from '@emotion/styled';

import Color from '../../styles/Color';
import Typograph from '../../styles/Typograph';

const ProfileName = styled.p`
  ${Typograph.Headline3}
  color: ${Color.Text};
  @media (min-width: 960px) {
  order: -1;
    margin-bottom: 2rem;
    br {
      display: none;
    }
  }
  span {
    margin-left: 2rem;
    @media (min-width: 960px) {
    margin-left: 1rem;
  }
  }
`;

export default () => {
  return (
    <ProfileName>
      Takayuki
      <br />
      <span>Tooyama</span>
    </ProfileName>
  );
};
