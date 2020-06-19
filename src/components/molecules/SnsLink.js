import React from 'react';
import styled from '@emotion/styled';

import TwitterIcon from '../atoms/TwitterIcon';
import InstagramIcon from '../atoms/InstagramIcon';

const SnsLink = styled.div`
  margin: 0 2rem;
`;

export default () => {
  return (
    <SnsLink>
      <TwitterIcon />
      <InstagramIcon />
    </SnsLink>
  );
};
