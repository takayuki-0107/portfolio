import React from 'react';
import styled from '@emotion/styled';

import Color from '../../../styles/Color';
import Typograph from '../../../styles/Typograph';

const SkillCardBottom = styled.div`
  max-width: 100%;
  padding: 2rem;
  background-color: ${Color.Main};
  ${Typograph.Body1};
`;
const SkillLang = styled.p`
  text-align: center;
  color: ${Color.Text};
  ${Typograph.Body1}
`;

export default ({ lang }) => {
  return (
    <>
      <SkillCardBottom>
        <SkillLang>{lang}</SkillLang>
      </SkillCardBottom>
    </>
  );
};
