import React from 'react';
import styled from '@emotion/styled';

import Color from '../../../styles/Color';
import Typograph from '../../../styles/Typograph';

const WorksCardTop = styled.div`
  padding: 2rem;
  box-shadow: inset -3px -4px 5px #babecc, inset 4px 5px 10px #f5f5f5;
  background-color: ${Color.Main};
  margin-bottom: 3rem;
`;
const WorksTitle = styled.h3`
  ${Typograph.Headline3};
  color: ${Color.Text};
`;
const WorksLang = styled.p`
  color: ${Color.Text};
  ${Typograph.Body1}
`;

export default ({ title, lang }) => {
  return (
    <>
      <WorksCardTop>
        <WorksTitle>{title}</WorksTitle>
        <WorksLang>{lang}</WorksLang>
      </WorksCardTop>
    </>
  );
};
