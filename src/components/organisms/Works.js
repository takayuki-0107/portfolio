import React from 'react';
import styled from '@emotion/styled';
import SectionTitle from '../atoms/SectionTitle';

import Work1 from '../../asset/profile.jpg';

import Color from '../../styles/Color';
import WorksCard from '../molecules/card/WorksCard';

const Works = styled.div`
  width: 100%;
  background-color: ${Color.Main};
  padding-top: 10rem;
`;
const CardContainer = styled.div`
  margin: 0 auto;
  @media (min-width: 960px) {
    width: 800px;
    max-width: 80%;
    padding: 5rem 0;
    box-shadow: inset 7px 5px 5px #babecc, inset -7px -11px 10px #f5f5f5;
  }
`;

export default () => {
  return (
    <>
      <Works>
        <SectionTitle>Works</SectionTitle>
        <CardContainer>
          <WorksCard
            title="Portfolio"
            lang="React / Firebase / Atomic Design"
            src={Work1}
            alt="profile"
          />
        </CardContainer>
      </Works>
    </>
  );
};
