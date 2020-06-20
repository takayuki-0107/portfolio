import React from 'react';
import styled from '@emotion/styled';
import SectionTitle from '../atoms/SectionTitle';
import ProfileText from '../atoms/ProfileText';
import ProfileImg from '../atoms/ProfileImg';
import { TISnsLink, FGSnsLink } from '../molecules/SnsLink';
import ProfileName from '../atoms/ProfileName';

import Color from '../../styles/Color';

const Profile = styled.div`
  padding: 5rem 0;
  background-color: ${Color.Main};
`;
const ProfileContent = styled.div`
  width: 95%;
  padding: 5rem 0;
  margin: 0 auto;
  box-shadow: inset 7px 5px 5px #babecc, inset -7px -11px 10px #f5f5f5;
  @media (min-width: 480px) {
    width: 650px;
    max-width: 80%;
  }
  @media (min-width: 960px) {
    width: 800px;
    max-width: 80%;
  }
`;
const ProfileLink = styled.div`
  width: 300px;
  max-width: 100%;
  margin: 0 auto 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media (min-width: 960px) {
    flex-direction: column;
    margin: 0;
  }
`;
const Inner = styled.div`
  @media (min-width: 960px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
  }
`;

export default () => {
  return (
    <Profile>
      <SectionTitle>Profile</SectionTitle>
      <ProfileContent>
        <Inner>
          <div>
            <ProfileImg />
            <ProfileLink>
              <TISnsLink />
              <ProfileName />
              <FGSnsLink />
            </ProfileLink>
          </div>
          <ProfileText />
        </Inner>
      </ProfileContent>
    </Profile>
  );
};
