import React from 'react';
import styled from '@emotion/styled';
import SectionTitle from '../atoms/SectionTitle';

import Color from '../../styles/Color';
import SkillCard from '../molecules/card/SkillCard';

const Skill = styled.div`
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
      <Skill>
        <SectionTitle>Skill</SectionTitle>
        <CardContainer>
          <SkillCard name="MarkUp" lang="HTML, CSS, Bootstrap, Sass(Scss)" />
          <SkillCard
            name="FrontDev"
            lang="JavaScript, React, Redux, TypeScript, Next.js, Gatsby, Webpack, Babel"
          />
          <SkillCard name="BackDev" lang="Node.js, Firebace" />
          <SkillCard name="Other Tool" lang="git, npm, yarn XD" />
        </CardContainer>
      </Skill>
    </>
  );
};
