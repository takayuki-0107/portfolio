import React from 'react';
import styled from '@emotion/styled';

import Color from '../../../styles/Color';
import Typograph from '../../../styles/Typograph';

const SkillCardTop = styled.div`
  padding: 2rem;
  width: 100%;
  background-color: ${Color.DarkBlue};
  ${Typograph.Body1};
`;
const SkillName = styled.p`
  text-align: center;
  color: ${Color.White};
  ${Typograph.Body1}
`;

export default ({ name }) => {
  return (
    <>
      <SkillCardTop>
        <SkillName>{name}</SkillName>
      </SkillCardTop>
    </>
  );
};
