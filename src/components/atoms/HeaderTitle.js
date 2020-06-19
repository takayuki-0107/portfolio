import React from 'react';
import styled from '@emotion/styled';

import Color from '../../styles/Color';

const HeaderTitle = styled.h1({
  fontSize: '3rem',
  color: `${Color.HeaderTitle}`,
});

export default () => {
  return <HeaderTitle>Portfolio</HeaderTitle>;
};
