import React from 'react';
import styled from '@emotion/styled';
import Typograph from '../../styles/Typograph';

import Color from '../../styles/Color';

const SectionTitle = styled.h2`
  font-family: 'Sofia';
  ${Typograph.Headline2}
  color: ${Color.Text};
  position: relative;
  line-height: 1.1;
  -webkit-box-reflect: below -10px -webkit-linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0) 10%,rgba(0, 0, 0, 0.6));
  text-align: center;
  margin-bottom: 5rem;
`;

export default ({ children }) => {
  return <SectionTitle>{children}</SectionTitle>;
};
