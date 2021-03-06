import React from 'react';
import styled from '@emotion/styled';
import { FaTwitterSquare } from 'react-icons/fa';

import Color from '../../styles/Color';

const Twitter = styled(FaTwitterSquare)`
  font-size: 3rem;
  color: ${Color.Text};
  margin: 0 0.5rem;
`;

export default () => {
  return (
    <>
      <Twitter />
    </>
  );
};
