import React from 'react';
import styled from '@emotion/styled';

import TwitterIcon from '../atoms/TwitterIcon';
import InstagramIcon from '../atoms/InstagramIcon';
import FacebookIcon from '../atoms/FacebookIcon';
import GithubIcon from '../atoms/GithubIcon';

const SnsLink = styled.div`
  @media (min-width: 960px) {
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const TISnsLink = () => {
  return (
    <SnsLink>
      <TwitterIcon />
      <InstagramIcon />
    </SnsLink>
  );
};
export const FGSnsLink = () => {
  return (
    <SnsLink>
      <FacebookIcon />
      <GithubIcon />
    </SnsLink>
  );
};
