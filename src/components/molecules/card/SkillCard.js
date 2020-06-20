import React from 'react';
import styled from '@emotion/styled';

import SkillCardTop from './SkillCardTop';
import SkillCardBottom from './SkillCardBottom';

const SkillCard = styled.div`
  width: 400px;
  max-width: 80%;
  margin: 0 auto;
  background: red;
  margin-bottom: 3rem;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.6);
  &:last-child {
    margin-bottom: 0;
  }
`;

export default ({ name, lang }) => {
  return (
    <>
      <SkillCard>
        <SkillCardTop name={name} />
        <SkillCardBottom lang={lang} />
      </SkillCard>
    </>
  );
};
